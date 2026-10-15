package handler

import (
	"encoding/json"
	"net/http"
	"strings"

	model "go-pokemon/model"
	repository "go-pokemon/repository"
	usecase "go-pokemon/usecase"
)

func TeamInfo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	pokemonNamesParam := r.URL.Query().Get("pokemons")
	if pokemonNamesParam == "" {
		http.Error(w, "pokemons parameter is required", http.StatusBadRequest)
		return
	}

	pokemonNames := strings.Split(pokemonNamesParam, ",")
	pokemons := repository.GetPokemons(pokemonNames)
	if len(pokemons) == 0 {
		http.Error(w, "pokemons not found", http.StatusNotFound)
		return
	}

	rawStatAlignments := repository.GetStatAlignments()
	for pkmIdx, pokemon := range pokemons {
		if pokemon.ResponseStatus != "success" {
			continue
		}

		// Get Type Effectiveness
		pokemons[pkmIdx].Effectiveness = usecase.CalculateEffectiveness(pokemon.Types)

		// Get Common Alignments
		for algIdx, alignment := range pokemon.CommonAlignments {
			pokemons[pkmIdx].CommonAlignments[algIdx].Description = rawStatAlignments[alignment.Name]
		}

		// Get Common Moves
		for mvIdx, move := range pokemon.CommonMoves {
			moveDatas := repository.GetMoves([]string{move.Name})
			var moveData model.Move
			if len(moveDatas) > 0 { moveData = moveDatas[0] }	
			
			commomMove := model.CommonMove{
				Name:        move.Name,
				Popularity:  move.Popularity,
				Description: moveData.Description,
				Type:        moveData.Type,
				Category:    moveData.Category,
				Power:       moveData.Power,
				Accuracy:    moveData.Accuracy,
				Pp:          moveData.Pp,
				Priority:    moveData.Priority,
				Attributes:  moveData.Attributes,
			}
			pokemons[pkmIdx].CommonMoves[mvIdx] = commomMove
		}

		// Get Common Abilities
		for abIdx, ability := range pokemon.CommonAbilities {
			abilityDatas := repository.GetAbilities([]string{ability.Name})
			var abilityData model.Ability
			if len(abilityDatas) > 0 { abilityData = abilityDatas[0] }

			commonAbility := model.CommonAbility{
				Name:        ability.Name,
				Popularity:  ability.Popularity,
				Description: abilityData.Description,
			}
			pokemons[pkmIdx].CommonAbilities[abIdx] = commonAbility
		}

		// Get Common Items
		for itIdx, item := range pokemon.CommonItems {
			itemDatas := repository.GetItems([]string{item.Name})
			var itemData model.Item
			if len(itemDatas) > 0 { itemData = itemDatas[0] }

			commonItem := model.CommonItem{
				Name:        item.Name,
				Icon:        itemData.Icon,
				Popularity:  item.Popularity,
				Description: itemData.Description,
			}
			pokemons[pkmIdx].CommonItems[itIdx] = commonItem
		}

		// Get Mega Attributes
		for mgaIdx, mega := range pokemon.MegaAttributes {
			megaEffectiveness := usecase.CalculateEffectiveness(mega.NewTypes)
			megaAbilityDatas := repository.GetAbilities([]string{mega.NewAbility.Name})
			var megaAbilityData model.Ability
			if len(megaAbilityDatas) > 0 { megaAbilityData = megaAbilityDatas[0] }
			
			megaAbility := model.CommonAbility{
				Name:        mega.NewAbility.Name,
				Popularity:  mega.NewAbility.Popularity,
				Description: megaAbilityData.Description,
			}
			pokemons[pkmIdx].MegaAttributes[mgaIdx].NewEffectiveness = megaEffectiveness
			pokemons[pkmIdx].MegaAttributes[mgaIdx].NewAbility = megaAbility
		}
	}

	response := model.BaseHTTPResponse{
		Status:  "success",
		Code:    http.StatusOK,
		Message: "Team information retrieved successfully",
		Data:    pokemons,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}