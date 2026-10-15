package usecase

import (
	model "go-pokemon/model"
	repository "go-pokemon/repository"
)

func CalculateEffectiveness(pokemonTypes []string) model.Effectiveness {
	rawTypeChart := repository.GetTypeChart()
	var effectiveness model.Effectiveness
	for _, atkType := range model.AllTypes {
		typeEffectiveness := 1.0
		for _, defType := range pokemonTypes {
			typeEffectiveness = typeEffectiveness * rawTypeChart[atkType][defType]
		}
		switch {
		case typeEffectiveness == 4:
			effectiveness.FourX = append(effectiveness.FourX, atkType)
		case typeEffectiveness == 2:
			effectiveness.TwoX = append(effectiveness.TwoX, atkType)
		case typeEffectiveness == 1:
			effectiveness.OneX = append(effectiveness.OneX, atkType)
		case typeEffectiveness == 0.5:
			effectiveness.HalfX = append(effectiveness.HalfX, atkType)
		case typeEffectiveness == 0.25:
			effectiveness.QuarterX = append(effectiveness.QuarterX, atkType)
		case typeEffectiveness == 0:
			effectiveness.ZeroX = append(effectiveness.ZeroX, atkType)
		}
	}
	return effectiveness
}
