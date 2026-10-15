export const mockPokemonData = {
  "data": [
    {
      "name": "charizard",
      "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0006_00_0.webp",
      "types": ["fire", "flying"],
      "effectiveness": [
        { "4x": ["rock"] },
        { "2x": ["water", "electric"] },
        { "1x": ["normal", "ice", "poison", "flying", "psychic", "ghost", "dragon", "dark"] },
        { "0.5x": ["fire", "fighting", "steel", "fairy"] },
        { "0.25x": ["grass", "bug"] },
        { "0x": ["ground"] }
      ],
      "base_stat": {
        "hp": 78,
        "atk": 84,
        "def": 78,
        "spatk": 109,
        "spdef": 85,
        "speed": 100
      },
      "common_alignments": [
        {
          "name": "modest",
          "popularity": 0.81,
          "description": "+SpAtk, -Atk"
        },
        {
          "name": "timid",
          "popularity": 0.17,
          "description": "+Speed, -Atk"
        }
      ],
      "common_moves": [
        {
          "name": "protect",
          "popularity": 0.981,
          "description": "Protects itself from incoming moves for the turn. With each consecutive use, this move’s chance of success becomes 1/3 of what it was before.",
          "type": "normal",
          "category": "status",
          "power": 0,
          "accuracy": 1,
          "pp": 8,
          "priority": 4,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "heat_wave",
          "popularity": 0.94,
          "description": "Has a 10% chance of burning targets.",
          "type": "fire",
          "category": "special",
          "power": 95,
          "accuracy": 0.9,
          "pp": 12,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        }
      ],
      "common_abilities": [
        {
          "name": "blaze",
          "popularity": 0.752,
          "description": "Boosts the power of the Pokémon’s Fire-type moves by 50% when its HP drops to 1/3 or less of its max."
        },
        {
          "name": "solar_power",
          "popularity": 0.183,
          "description": "In harsh sunlight, the Pokémon’s Sp. Atk stat is boosted by 50%, but it loses 1/8 of its max HP at the end of every turn."
        }
      ],
      "common_items": [
        {
          "name": "charizardite_y",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0678.webp",
          "popularity": 0.952,
          "description": "Mega Y"
        },
        {
          "name": "charizardite_x",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0660.webp",
          "popularity": 0.039,
          "description": "Mega X"
        }
      ],
      "mega_attributes": [
        {
          "mega_category": "y",
          "new_icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0006_02_0.webp",
          "new_types": ["fire", "flying"],
          "new_effectiveness": [
            { "4x": ["rock"] },
            { "2x": ["water", "electric"] },
            { "1x": ["normal", "ice", "poison", "flying", "psychic", "ghost", "dragon", "dark"] },
            { "0.5x": ["fire", "fighting", "steel", "fairy"] },
            { "0.25x": ["grass", "bug"] },
            { "0x": ["ground"] }
          ],
          "stat_increases": {
            "hp": 0,
            "atk": 20,
            "def": 0,
            "spatk": 50,
            "spdef": 30,
            "speed": 0
          },
          "new_ability": {
            "name": "drought",
            "popularity": 0,
            "description": "Summons harsh sunlight for 5 turns when the Pokémon enters a battle."
          }
        },
        {
          "mega_category": "x",
          "new_icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0006_01_0.webp",
          "new_types": ["fire", "dragon"],
          "new_effectiveness": [
            { "4x": [] },
            { "2x": ["ground", "rock", "dragon"] },
            { "1x": ["normal", "water", "ice", "poison", "flying", "psychic", "ghost", "fighting", "dark", "fairy"] },
            { "0.5x": ["electric", "bug", "steel"] },
            { "0.25x": ["fire", "grass"] },
            { "0x": [] }
          ],
          "stat_increases": {
            "hp": 0,
            "atk": 46,
            "def": 33,
            "spatk": 21,
            "spdef": 0,
            "speed": 0
          },
          "new_ability": {
            "name": "tough_claws",
            "popularity": 0,
            "description": "Boosts the power of the Pokémon’s contact moves by 30%."
          }
        }
      ]
    },
    {
      "name": "garchomp",
      "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0445_00_0.webp",
      "types": ["ground", "dragon"],
      "effectiveness": [
        { "4x": ["ice"] },
        { "2x": ["dragon", "fairy"] },
        { "1x": ["normal", "water", "grass", "fighting", "flying", "psychic", "bug", "ghost", "steel", "dark"] },
        { "0.5x": ["poison", "rock", "bug", "fire"] },
        { "0.25x": [] },
        { "0x": ["electric"] }
      ],
      "base_stat": {
        "hp": 108,
        "atk": 130,
        "def": 95,
        "spatk": 80,
        "spdef": 85,
        "speed": 102
      },
      "common_alignments": [
        {
          "name": "jolly",
          "popularity": 0.72,
          "description": "+Speed, -SpAtk"
        },
        {
          "name": "adamant",
          "popularity": 0.25,
          "description": "+Atk, -SpAtk"
        }
      ],
      "common_moves": [
        {
          "name": "earthquake",
          "popularity": 0.95,
          "description": "Inflicts double damage on targets using Dig. Hits all adjacent Pokémon.",
          "type": "ground",
          "category": "physical",
          "power": 100,
          "accuracy": 1.0,
          "pp": 10,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "dragon_claw",
          "popularity": 0.88,
          "description": "Slashes the target with huge, sharp claws.",
          "type": "dragon",
          "category": "physical",
          "power": 80,
          "accuracy": 1.0,
          "pp": 15,
          "priority": 0,
          "is_contact": true,
          "is_sound_based": false
        },
        {
          "name": "swords_dance",
          "popularity": 0.65,
          "description": "A frenetic dance to uplift the fighting spirit. Sharply raises the user’s Attack stat (+2 stages).",
          "type": "normal",
          "category": "status",
          "power": 0,
          "accuracy": 1.0,
          "pp": 20,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        }
      ],
      "common_abilities": [
        {
          "name": "rough_skin",
          "popularity": 0.892,
          "description": "Inflicts damage equal to 1/8 of the attacker’s max HP when hit by a contact move."
        },
        {
          "name": "sand_veil",
          "popularity": 0.108,
          "description": "Boosts evasion by 20% in a sandstorm. Also grants immunity to sandstorm damage."
        }
      ],
      "common_items": [
        {
          "name": "life_orb",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0270.webp",
          "popularity": 0.42,
          "description": "Boosts the power of moves by 30%, but at the cost of 10% max HP per attack."
        },
        {
          "name": "clear_amulet",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_1711.webp",
          "popularity": 0.35,
          "description": "Prevents other Pokémon from lowering the holder’s stats."
        }
      ],
      "mega_attributes": [
        {
          "mega_category": "mega",
          "new_icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0445_01_0.webp",
          "new_types": ["ground", "dragon"],
          "new_effectiveness": [
            { "4x": ["ice"] },
            { "2x": ["dragon", "fairy"] },
            { "1x": ["normal", "water", "grass", "fighting", "flying", "psychic", "bug", "ghost", "steel", "dark"] },
            { "0.5x": ["poison", "rock", "bug", "fire"] },
            { "0.25x": [] },
            { "0x": ["electric"] }
          ],
          "stat_increases": {
            "hp": 0,
            "atk": 40,
            "def": 20,
            "spatk": 40,
            "spdef": 10,
            "speed": -10
          },
          "new_ability": {
            "name": "sand_force",
            "popularity": 0,
            "description": "Strengthens Ground, Rock, and Steel-type moves by 30% in a sandstorm."
          }
        }
      ]
    },
    {
      "name": "venusaur",
      "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0003_00_0.webp",
      "types": ["grass", "poison"],
      "effectiveness": [
        { "4x": [] },
        { "2x": ["flying", "fire", "psychic", "ice"] },
        { "1x": ["normal", "poison", "ground", "rock", "bug", "ghost", "dragon", "steel", "dark"] },
        { "0.5x": ["fighting", "water", "electric", "fairy"] },
        { "0.25x": ["grass"] },
        { "0x": [] }
      ],
      "base_stat": {
        "hp": 80,
        "atk": 82,
        "def": 83,
        "spatk": 100,
        "spdef": 100,
        "speed": 80
      },
      "common_alignments": [
        {
          "name": "modest",
          "popularity": 0.65,
          "description": "+SpAtk, -Atk"
        },
        {
          "name": "bold",
          "popularity": 0.28,
          "description": "+Def, -Atk"
        }
      ],
      "common_moves": [
        {
          "name": "giga_drain",
          "popularity": 0.92,
          "description": "A nutrient-draining attack. Recover 50% of the damage dealt as HP.",
          "type": "grass",
          "category": "special",
          "power": 75,
          "accuracy": 1.0,
          "pp": 10,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "sludge_bomb",
          "popularity": 0.85,
          "description": "Unleashes unsanitary sludge to inflict damage. Has a 30% chance to poison the target.",
          "type": "poison",
          "category": "special",
          "power": 90,
          "accuracy": 1.0,
          "pp": 10,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "sleep_powder",
          "popularity": 0.74,
          "description": "Scatters a cloud of sleep-inducing dust. Puts the target to sleep.",
          "type": "grass",
          "category": "status",
          "power": 0,
          "accuracy": 0.75,
          "pp": 15,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        }
      ],
      "common_abilities": [
        {
          "name": "chlorophyll",
          "popularity": 0.88,
          "description": "Doubles the Pokémon’s Speed stat in harsh sunlight."
        },
        {
          "name": "overgrow",
          "popularity": 0.12,
          "description": "Boosts the power of Grass-type moves by 50% when HP is at 1/3 or less."
        }
      ],
      "common_items": [
        {
          "name": "life_orb",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0270.webp",
          "popularity": 0.45,
          "description": "Boosts move power by 30%, loses 10% HP per hit."
        },
        {
          "name": "focus_sash",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0288.webp",
          "popularity": 0.32,
          "description": "If holder has full HP, prevents fainting in one hit, leaving it with 1 HP."
        }
      ],
      "mega_attributes": [
        {
          "mega_category": "mega",
          "new_icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0003_01_0.webp",
          "new_types": ["grass", "poison"],
          "new_effectiveness": [
            { "4x": [] },
            { "2x": ["flying", "psychic"] },
            { "1x": ["normal", "poison", "ground", "rock", "bug", "ghost", "dragon", "steel", "dark", "fire", "ice"] },
            { "0.5x": ["fighting", "water", "electric", "fairy"] },
            { "0.25x": ["grass"] },
            { "0x": [] }
          ],
          "stat_increases": {
            "hp": 0,
            "atk": 18,
            "def": 40,
            "spatk": 22,
            "spdef": 20,
            "speed": 0
          },
          "new_ability": {
            "name": "thick_fat",
            "popularity": 0,
            "description": "Halves the damage taken from Fire and Ice-type moves."
          }
        }
      ]
    },
    {
      "name": "incineroar",
      "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0727_00_0.webp",
      "types": ["fire", "dark"],
      "effectiveness": [
        { "4x": [] },
        { "2x": ["fighting", "ground", "rock", "water"] },
        { "1x": ["normal", "flying", "poison", "bug", "electric", "dragon", "fairy"] },
        { "0.5x": ["ghost", "steel", "fire", "grass", "ice", "dark"] },
        { "0.25x": [] },
        { "0x": ["psychic"] }
      ],
      "base_stat": {
        "hp": 95,
        "atk": 115,
        "def": 90,
        "spatk": 80,
        "spdef": 90,
        "speed": 60
      },
      "common_alignments": [
        {
          "name": "careful",
          "popularity": 0.58,
          "description": "+SpDef, -SpAtk"
        },
        {
          "name": "adamant",
          "popularity": 0.32,
          "description": "+Atk, -SpAtk"
        }
      ],
      "common_moves": [
        {
          "name": "fake_out",
          "popularity": 0.99,
          "description": "An attack that hits first and makes the target flinch. Can only be used on the first turn the user is in battle.",
          "type": "normal",
          "category": "physical",
          "power": 40,
          "accuracy": 1.0,
          "pp": 10,
          "priority": 3,
          "is_contact": true,
          "is_sound_based": false
        },
        {
          "name": "parting_shot",
          "popularity": 0.94,
          "description": "Lowers the target’s Attack and Sp. Atk stats, then switches the user out.",
          "type": "dark",
          "category": "status",
          "power": 0,
          "accuracy": 1.0,
          "pp": 20,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": true
        },
        {
          "name": "flare_blitz",
          "popularity": 0.91,
          "description": "An extremely powerful charging attack. User takes 33% recoil damage. 10% chance to burn target.",
          "type": "fire",
          "category": "physical",
          "power": 120,
          "accuracy": 1.0,
          "pp": 15,
          "priority": 0,
          "is_contact": true,
          "is_sound_based": false
        }
      ],
      "common_abilities": [
        {
          "name": "intimidate",
          "popularity": 0.985,
          "description": "Lowers the Attack stat of all adjacent opposing Pokémon by 1 stage upon entering battle."
        },
        {
          "name": "blaze",
          "popularity": 0.015,
          "description": "Boosts the power of Fire-type moves by 50% when HP is low (1/3 or less)."
        }
      ],
      "common_items": [
        {
          "name": "safety_goggles",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0652.webp",
          "popularity": 0.41,
          "description": "Protects the holder from weather damage (like sandstorm) and powder moves (like Spore)."
        },
        {
          "name": "sitrus_berry",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0120.webp",
          "popularity": 0.35,
          "description": "Restores 25% of the holder’s max HP when its HP drops below 50%."
        }
      ],
      "mega_attributes": []
    },
    {
      "name": "gardevoir",
      "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0282_00_0.webp",
      "types": ["psychic", "fairy"],
      "effectiveness": [
        { "4x": [] },
        { "2x": ["poison", "ghost", "steel"] },
        { "1x": ["normal", "fire", "water", "grass", "electric", "ice", "flying", "ground", "rock", "bug", "dark"] },
        { "0.5x": ["psychic"] },
        { "0.25x": ["fighting"] },
        { "0x": ["dragon"] }
      ],
      "base_stat": {
        "hp": 68,
        "atk": 65,
        "def": 65,
        "spatk": 125,
        "spdef": 115,
        "speed": 80
      },
      "common_alignments": [
        {
          "name": "modest",
          "popularity": 0.52,
          "description": "+SpAtk, -Atk"
        },
        {
          "name": "timid",
          "popularity": 0.41,
          "description": "+Speed, -Atk"
        }
      ],
      "common_moves": [
        {
          "name": "moonblast",
          "popularity": 0.96,
          "description": "Borrowing the power of the moon to attack. Has a 30% chance to lower the target’s Sp. Atk by 1 stage.",
          "type": "fairy",
          "category": "special",
          "power": 95,
          "accuracy": 1.0,
          "pp": 15,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "dazzling_gleam",
          "popularity": 0.81,
          "description": "Floods the field with dazzling light. Hits all adjacent opposing Pokémon.",
          "type": "fairy",
          "category": "special",
          "power": 80,
          "accuracy": 1.0,
          "pp": 10,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "trick_room",
          "popularity": 0.45,
          "description": "Creates a bizarre space where slower Pokémon move first for five turns.",
          "type": "psychic",
          "category": "status",
          "power": 0,
          "accuracy": 1.0,
          "pp": 5,
          "priority": -7,
          "is_contact": false,
          "is_sound_based": false
        }
      ],
      "common_abilities": [
        {
          "name": "trace",
          "popularity": 0.74,
          "description": "Copies the opponent’s ability upon entering battle."
        },
        {
          "name": "telepathy",
          "popularity": 0.21,
          "description": "Anticipates ally attacks and avoids taking damage from them (e.g. Earthquake, Surf)."
        }
      ],
      "common_items": [
        {
          "name": "choice_specs",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0297.webp",
          "popularity": 0.48,
          "description": "Boosts Sp. Atk by 50%, but locks the holder into using only the first selected move."
        },
        {
          "name": "gardevoirite",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0690.webp",
          "popularity": 0.39,
          "description": "Required for Gardevoir to Mega Evolve in battle."
        }
      ],
      "mega_attributes": [
        {
          "mega_category": "mega",
          "new_icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0282_01_0.webp",
          "new_types": ["psychic", "fairy"],
          "new_effectiveness": [
            { "4x": [] },
            { "2x": ["poison", "ghost", "steel"] },
            { "1x": ["normal", "fire", "water", "grass", "electric", "ice", "flying", "ground", "rock", "bug", "dark"] },
            { "0.5x": ["psychic"] },
            { "0.25x": ["fighting"] },
            { "0x": ["dragon"] }
          ],
          "stat_increases": {
            "hp": 0,
            "atk": 20,
            "def": 0,
            "spatk": 40,
            "spdef": 20,
            "speed": 20
          },
          "new_ability": {
            "name": "pixilate",
            "popularity": 0,
            "description": "Converts Normal-type moves into Fairy-type moves and boosts their power by 20%."
          }
        }
      ]
    },
    {
      "name": "corviknight",
      "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/mdiconpersonal02/standard02/ui_PokeIcon_02_0823_00_0.webp",
      "types": ["flying", "steel"],
      "effectiveness": [
        { "4x": [] },
        { "2x": ["fire", "electric"] },
        { "1x": ["water", "ice", "ghost", "dark"] },
        { "0.5x": ["normal", "flying", "steel", "grass", "psychic", "dragon", "fairy"] },
        { "0.25x": ["bug"] },
        { "0x": ["ground", "poison"] }
      ],
      "base_stat": {
        "hp": 98,
        "atk": 87,
        "def": 105,
        "spatk": 53,
        "spdef": 85,
        "speed": 67
      },
      "common_alignments": [
        {
          "name": "impish",
          "popularity": 0.61,
          "description": "+Def, -SpAtk"
        },
        {
          "name": "careful",
          "popularity": 0.34,
          "description": "+SpDef, -SpAtk"
        }
      ],
      "common_moves": [
        {
          "name": "brave_bird",
          "popularity": 0.94,
          "description": "A high-speed dive attack. User takes 33% recoil damage.",
          "type": "flying",
          "category": "physical",
          "power": 120,
          "accuracy": 1.0,
          "pp": 15,
          "priority": 0,
          "is_contact": true,
          "is_sound_based": false
        },
        {
          "name": "roost",
          "popularity": 0.91,
          "description": "Lands to rest. Restores 50% max HP, but loses Flying-type attributes for the turn.",
          "type": "flying",
          "category": "status",
          "power": 0,
          "accuracy": 1.0,
          "pp": 5,
          "priority": 0,
          "is_contact": false,
          "is_sound_based": false
        },
        {
          "name": "u-turn",
          "popularity": 0.72,
          "description": "Attacks and immediately switches places with a party Pokémon.",
          "type": "bug",
          "category": "physical",
          "power": 70,
          "accuracy": 1.0,
          "pp": 20,
          "priority": 0,
          "is_contact": true,
          "is_sound_based": false
        }
      ],
      "common_abilities": [
        {
          "name": "mirror_armor",
          "popularity": 0.95,
          "description": "Bounces back any stat-lowering effects inflicted on this Pokémon."
        },
        {
          "name": "pressure",
          "popularity": 0.05,
          "description": "Doubles the PP usage of opposing moves targetting the user."
        }
      ],
      "common_items": [
        {
          "name": "leftovers",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0234.webp",
          "popularity": 0.53,
          "description": "Slowly restores 1/16 of the holder’s max HP at the end of each turn."
        },
        {
          "name": "rocky_helmet",
          "icon": "https://assets.pokemon-zone.com/champions-assets/uicontents/scriptableobject/mdicon02/ui_ItemIcon_02_0567.webp",
          "popularity": 0.31,
          "description": "Deals damage equal to 1/6 of the attacker’s max HP when hit by contact moves."
        }
      ],
      "mega_attributes": []
    }
  ]
};
