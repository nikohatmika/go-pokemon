package model

type BaseHTTPResponse struct {
	Status  string `json:"status"`
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    any    `json:"data"`
}

type Pokemon struct {
	Name             string            `json:"name"`
	Icon             string            `json:"icon"`
	Types            []string          `json:"types"`
	Effectiveness    Effectiveness     `json:"effectiveness"`
	BaseStat         Status            `json:"base_stat"`
	CommonAlignments []CommonAlignment `json:"common_alignments"`
	CommonMoves      []CommonMove      `json:"common_moves"`
	CommonAbilities  []CommonAbility   `json:"common_abilities"`
	CommonItems      []CommonItem      `json:"common_items"`
	MegaAttributes   []MegaAttribute   `json:"mega_attributes"`
	ResponseStatus   string            `json:"response_status"`
}

type Effectiveness struct {
	FourX    []string `json:"4x"`
	TwoX     []string `json:"2x"`
	OneX     []string `json:"1x"`
	HalfX    []string `json:"0.5x"`
	QuarterX []string `json:"0.25x"`
	ZeroX    []string `json:"0x"`
}

type CommonAlignment struct {
	Name        string  `json:"name"`
	Popularity  float64 `json:"popularity"`
	Description string  `json:"description"`
}

type CommonMove struct {
	Name        string   `json:"name"`
	Popularity  float64  `json:"popularity"`
	Description string   `json:"description"`
	Type        string   `json:"type"`
	Category    string   `json:"category"`
	Power       int      `json:"power"`
	Accuracy    float64  `json:"accuracy"`
	Pp          int      `json:"pp"`
	Priority    int      `json:"priority"`
	Attributes  []string `json:"attributes"`
}

type CommonAbility struct {
	Name        string  `json:"name"`
	Popularity  float64 `json:"popularity"`
	Description string  `json:"description"`
}

type CommonItem struct {
	Name        string  `json:"name"`
	Icon        string  `json:"icon"`
	Popularity  float64 `json:"popularity"`
	Description string  `json:"description"`
}

type MegaAttribute struct {
	MegaCategory     string          `json:"mega_category"`
	NewIcon          string          `json:"new_icon"`
	NewTypes         []string        `json:"new_types"`
	NewEffectiveness Effectiveness   `json:"new_effectiveness"`
	StatIncreases    Status          `json:"stat_increases"`
	NewAbility       CommonAbility   `json:"new_ability"`
}
