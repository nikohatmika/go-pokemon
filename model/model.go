package model

var AllTypes = []string{"normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"}

type Status struct {
	HP    int `json:"hp"`
	Atk   int `json:"atk"`
	Def   int `json:"def"`
	SpAtk int `json:"spatk"`
	SpDef int `json:"spdef"`
	Speed int `json:"speed"`
}

type Alignment struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type Ability struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type Item struct {
	Name        string `json:"name"`
	Icon        string `json:"icon"`
	Description string `json:"description"`
}

type Move struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Type        string   `json:"type"`
	Category    string   `json:"category"`
	Power       int      `json:"power"`
	Accuracy    float64  `json:"accuracy"`
	Pp          int      `json:"pp"`
	Priority    int      `json:"priority"`
	Attributes  []string `json:"attributes"`
}
