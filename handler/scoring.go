package handler

import (
	"encoding/json"
	"net/http"
	"sort"
	"strings"

	model "go-pokemon/model"
	repository "go-pokemon/repository"
	usecase "go-pokemon/usecase"
)

type ScoringRequest struct {
	Groups []PokemonGroup `json:"groups"`
}

type PokemonGroup struct {
	Pokemons   []string `json:"pokemons"`
	Multiplier int      `json:"multiplier"`
}

type ScoringResponse struct {
	Scores []TypeScore `json:"scores"`
}

type TypeScore struct {
	Type  string `json:"type"`
	Score int    `json:"score"`
}

// TypeEffectivenessScoring calculates effectiveness scores based on pokemon groups and multipliers
func TypeEffectivenessScoring(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req ScoringRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Invalid request body: "+err.Error(), http.StatusBadRequest)
		return
	}

	// 1. Gather all unique pokemon names
	uniqueNamesMap := make(map[string]bool)
	for _, group := range req.Groups {
		for _, name := range group.Pokemons {
			if name != "" {
				uniqueNamesMap[strings.ToLower(name)] = true
			}
		}
	}

	uniqueNames := make([]string, 0, len(uniqueNamesMap))
	for name := range uniqueNamesMap {
		uniqueNames = append(uniqueNames, name)
	}

	// 2. Fetch all pokemon details using repository
	pokemonsList := repository.GetPokemons(uniqueNames)
	pokemonsMap := make(map[string]model.Pokemon)

	for _, p := range pokemonsList {
		if p.ResponseStatus != "success" {
			continue
		}
		// Populate effectiveness and mega effectiveness
		p.Effectiveness = usecase.CalculateEffectiveness(p.Types)
		for mgaIdx, mega := range p.MegaAttributes {
			megaEffectiveness := usecase.CalculateEffectiveness(mega.NewTypes)
			p.MegaAttributes[mgaIdx].NewEffectiveness = megaEffectiveness
		}
		pokemonsMap[strings.ToLower(p.Name)] = p
	}

	// 3. Calculate scores for each type
	typeScores := make(map[string]int)

	for _, group := range req.Groups {
		for _, name := range group.Pokemons {
			p, exists := pokemonsMap[strings.ToLower(name)]
			if !exists {
				continue
			}

			// We need to gather all effectiveness profiles (base and megas)
			// A type's score factor for this pokemon is:
			//   2 if it is x4 in any form (base or mega)
			//   1 if it is x2 in any form (base or mega), and not x4 in any form
			maxFactors := make(map[string]int)

			// Process base effectiveness
			for _, t := range p.Effectiveness.FourX {
				maxFactors[t] = 2
			}
			for _, t := range p.Effectiveness.TwoX {
				if maxFactors[t] < 1 {
					maxFactors[t] = 1
				}
			}

			// Process mega effectiveness
			for _, mega := range p.MegaAttributes {
				for _, t := range mega.NewEffectiveness.FourX {
					maxFactors[t] = 2
				}
				for _, t := range mega.NewEffectiveness.TwoX {
					if maxFactors[t] < 1 {
						maxFactors[t] = 1
					}
				}
			}

			// Accumulate factors scaled by group multiplier
			for t, factor := range maxFactors {
				typeScores[t] += group.Multiplier * factor
			}
		}
	}

	// Convert map to slice
	scores := make([]TypeScore, 0, len(typeScores))
	for t, score := range typeScores {
		scores = append(scores, TypeScore{
			Type:  t,
			Score: score,
		})
	}

	// Sort:
	// - Descending by Score
	// - Alphabetical by Type (for stable ordering)
	sort.Slice(scores, func(i, j int) bool {
		if scores[i].Score == scores[j].Score {
			return scores[i].Type < scores[j].Type
		}
		return scores[i].Score > scores[j].Score
	})

	response := ScoringResponse{
		Scores: scores,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}
