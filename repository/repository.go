package repository

import (
	"encoding/json"
	model "go-pokemon/model"
	"os"
)

func GetPokemons(names []string) []model.Pokemon {
	pokemons := []model.Pokemon{}
	for _, name := range names {
		pokemon := model.Pokemon{}
		data, err := os.ReadFile("repository/database_json/pokemons/" + name + ".json")
		if err != nil {
			pokemon.Name = name
			pokemon.ResponseStatus = "not found"
			pokemons = append(pokemons, pokemon)
			continue
		}
		err = json.Unmarshal(data, &pokemon)
		if err != nil {
			pokemon.Name = name
			pokemon.ResponseStatus = "error unmarshaling JSON"
			pokemons = append(pokemons, pokemon)
			continue
		}
		pokemon.ResponseStatus = "success"
		pokemons = append(pokemons, pokemon)
	}

	return pokemons
}

func GetAbilities(names []string) []model.Ability {
	abilities := []model.Ability{}
	for _, name := range names {
		ability := model.Ability{}
		data, err := os.ReadFile("repository/database_json/abilities/" + name + ".json")
		if err != nil {
			continue
		}
		err = json.Unmarshal(data, &ability)
		if err != nil {
			continue
		}
		abilities = append(abilities, ability)
	}

	return abilities
}

func GetItems(names []string) []model.Item {
	items := []model.Item{}
	for _, name := range names {
		item := model.Item{}
		data, err := os.ReadFile("repository/database_json/items/" + name + ".json")
		if err != nil {
			continue
		}
		err = json.Unmarshal(data, &item)
		if err != nil {
			continue
		}
		items = append(items, item)
	}

	return items
}

func GetMoves(names []string) []model.Move {
	moves := []model.Move{}
	for _, name := range names {
		move := model.Move{}
		data, err := os.ReadFile("repository/database_json/moves/" + name + ".json")
		if err != nil {
			continue
		}
		err = json.Unmarshal(data, &move)
		if err != nil {
			continue
		}
		moves = append(moves, move)
	}

	return moves
}

func GetStatAlignments() map[string]string {
	alignments := map[string]string{}
	data, err := os.ReadFile("repository/database_json/stat_alignment.json")
	if err != nil {
		panic(err)
	}
	err = json.Unmarshal(data, &alignments)
	if err != nil {
		panic(err)
	}
	return alignments
}

func GetTypeChart() map[string]map[string]float64 {
	typeChart := map[string]map[string]float64{}
	data, err := os.ReadFile("repository/database_json/type_chart.json")
	if err != nil {
		panic(err)
	}
	err = json.Unmarshal(data, &typeChart)
	if err != nil {
		panic(err)
	}
	return typeChart
}
