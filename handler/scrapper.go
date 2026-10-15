package handler

import (
	"encoding/json"
	"fmt"
	model "go-pokemon/model"
	"log"
	"net/http"

	"github.com/PuerkitoBio/goquery"
)


func ScrapePokezoneChampionsPokemon(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	pokemonName := r.URL.Query().Get("pokemon")
	resp, err := http.Get("https://www.pokemon-zone.com/champions/pokemon/" + pokemonName)
	if err != nil {
		http.Error(w, "failed to fetch pokemon page", http.StatusBadGateway)
		return
	}
	defer resp.Body.Close()

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		http.Error(w, "failed to parse pokemon page", http.StatusInternalServerError)
		return
	}

	html, err := doc.Html()
	if err != nil {
    	log.Fatal(err)
	}
	fmt.Println(html)
	
	name := doc.Find("pz-section-header__title").Text()

	response := model.BaseHTTPResponse{
		Status:  "success",
		Code:    http.StatusOK,
		Message: "Scrapped successfully",
		Data:    name,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}