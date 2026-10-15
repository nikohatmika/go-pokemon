package main

import (
	"fmt"
	handler "go-pokemon/handler"
	"net/http"
)



func main() {
	// Register HTTP handlers
	http.HandleFunc("/health", handler.HealthCheck)
	http.HandleFunc("/api/v1/team-info", handler.TeamInfo)
	http.HandleFunc("/api/v1/type-effectiveness-scoring", handler.TypeEffectivenessScoring)

	// WIP 
	http.HandleFunc("/api/v1/scrape-pokezone", handler.ScrapePokezoneChampionsPokemon)

	fmt.Println("Server running on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}


