// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data = [
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": "0.69",
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    },
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "quick-move": [
      {
        "name": "vine whip",
        "type": "grass",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      },
      {
        "name": "tackle",
        "type": "normal",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "seed bomb",
        "type": "grass",
        "base-damage": "55",
        "energy": "-33",
        "move-duration-seg": "2.1"
      },
      {
        "name": "power whip",
        "type": "grass",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      }
    ],
    "egg": "2 km",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "bulbasaur candy",
      "next-evolution": [{
        "num": "002",
        "name": "ivysaur",
        "candy-cost": "25",
        "next-evolution": [{
          "num": "003",
          "name": "venusaur",
          "candy-cost": "100"
        }]
      }]
    }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.1"
    },
    "spawn-chance": "0.042",
    "stats": {
      "base-attack": "151",
      "base-defense": "143",
      "base-stamina": "155",
      "max-cp": "1699",
      "max-hp": "134"
    },
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "quick-move": [
      {
        "name": "razor leaf",
        "type": "grass",
        "base-damage": "13",
        "energy": "7",
        "move-duration-seg": "1"
      },
      {
        "name": "vine whip",
        "type": "grass",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      }
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "solar beam",
        "type": "grass",
        "base-damage": "180",
        "energy": "-100",
        "move-duration-seg": "4.9"
      },
      {
        "name": "power whip",
        "type": "grass",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "bulbasaur candy",
      "next-evolution": [{
        "num": "003",
        "name": "venusaur",
        "candy-cost": "100"
      }],
      "prev-evolution": [{
        "num": "001",
        "name": "bulbasaur",
        "candy-cost": "25"
      }]
    }
  },
  {
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
    "size": {
      "height": "2.01 m",
      "weight": "100.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.05"
    },
    "spawn-chance": "0.017",
    "stats": {
      "base-attack": "198",
      "base-defense": "189",
      "base-stamina": "190",
      "max-cp": "2720",
      "max-hp": "162"
    },
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "quick-move": [
      {
        "name": "razor leaf",
        "type": "grass",
        "base-damage": "13",
        "energy": "7",
        "move-duration-seg": "1"
      },
      {
        "name": "vine whip",
        "type": "grass",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      }
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "petal blizzard",
        "type": "grass",
        "base-damage": "110",
        "energy": "-100",
        "move-duration-seg": "2.6"
      },
      {
        "name": "solar beam",
        "type": "grass",
        "base-damage": "180",
        "energy": "-100",
        "move-duration-seg": "4.9"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "bulbasaur candy",
      "prev-evolution": [{
        "num": "002",
        "name": "ivysaur",
        "candy-cost": "100",
        "prev-evolution": [{
          "num": "001",
          "name": "bulbasaur",
          "candy-cost": "25"
        }]
      }]
    }
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
    "size": {
      "height": "0.61 m",
      "weight": "8.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": "0.253",
    "stats": {
      "base-attack": "116",
      "base-defense": "93",
      "base-stamina": "118",
      "max-cp": "980",
      "max-hp": "105"
    },
    "resistant": [
      "fire",
      "grass",
      "ice",
      "bug",
      "steel"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "quick-move": [
      {
        "name": "ember",
        "type": "fire",
        "base-damage": "10",
        "energy": "10",
        "move-duration-seg": "1"
      },
      {
        "name": "scratch",
        "type": "normal",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "flame charge",
        "type": "fire",
        "base-damage": "70",
        "energy": "-33",
        "move-duration-seg": "3.8"
      },
      {
        "name": "flame burst",
        "type": "fire",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2.6"
      },
      {
        "name": "flamethrower",
        "type": "fire",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2.2"
      }
    ],
    "egg": "2 km",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "charmander candy",
      "next-evolution": [{
        "num": "005",
        "name": "charmeleon",
        "candy-cost": "25",
        "next-evolution": [{
          "num": "006",
          "name": "charizard",
          "candy-cost": "100"
        }]
      }]
    }
  },
  // pokemones tipo 'dragon'
  {
    "num": "147",
    "name": "dratini",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
    "img": "https://www.serebii.net/pokemongo/pokemon/147.png",
    "size": {
      "height": "1.80 m",
      "weight": "3.3 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dragon"
    ],
    "encounter": {
      "base-flee-rate": "0.09",
      "base-capture-rate": "0.4"
    },
    "spawn-chance": "0.3",
    "stats": {
      "base-attack": "119",
      "base-defense": "91",
      "base-stamina": "121",
      "max-cp": "1004",
      "max-hp": "107"
    },
    "resistant": [
      "fire",
      "water",
      "electric",
      "grass"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "quick-move": [
      {
        "name": "dragon breath",
        "type": "dragon",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      },
      {
        "name": "iron tail",
        "type": "steel",
        "base-damage": "15",
        "energy": "7",
        "move-duration-seg": "1.1"
      }
    ],
    "special-attack": [
      {
        "name": "wrap",
        "type": "normal",
        "base-damage": "60",
        "energy": "-33",
        "move-duration-seg": "2.9"
      },
      {
        "name": "twister",
        "type": "dragon",
        "base-damage": "45",
        "energy": "-33",
        "move-duration-seg": "2.8"
      },
      {
        "name": "aqua tail",
        "type": "water",
        "base-damage": "50",
        "energy": "-33",
        "move-duration-seg": "1.9"
      }
    ],
    "egg": "10 km",
    "buddy-distance-km": "5",
    "evolution": {
      "candy": "dratini candy",
      "next-evolution": [{
        "num": "148",
        "name": "dragonair",
        "candy-cost": "25",
        "next-evolution": [{
          "num": "149",
          "name": "dragonite",
          "candy-cost": "100"
        }]
      }]
    }
  },
  {
    "num": "148",
    "name": "dragonair",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from its crystals on its neck and tail.",
    "img": "https://www.serebii.net/pokemongo/pokemon/148.png",
    "size": {
      "height": "3.99 m",
      "weight": "16.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dragon"
    ],
    "encounter": {
      "base-flee-rate": "0.06",
      "base-capture-rate": "0.1"
    },
    "spawn-chance": "0.02",
    "stats": {
      "base-attack": "163",
      "base-defense": "135",
      "base-stamina": "156",
      "max-cp": "1780",
      "max-hp": "135"
    },
    "resistant": [
      "fire",
      "water",
      "electric",
      "grass"
    ],
    "weaknesses": [
      "ice",
      "dragon",
      "fairy"
    ],
    "quick-move": [
      {
        "name": "dragon breath",
        "type": "dragon",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      },
      {
        "name": "iron tail",
        "type": "steel",
        "base-damage": "15",
        "energy": "7",
        "move-duration-seg": "1.1"
      }
    ],
    "special-attack": [
      {
        "name": "wrap",
        "type": "normal",
        "base-damage": "60",
        "energy": "-33",
        "move-duration-seg": "2.9"
      },
      {
        "name": "aqua tail",
        "type": "water",
        "base-damage": "50",
        "energy": "-33",
        "move-duration-seg": "1.9"
      },
      {
        "name": "dragon pulse",
        "type": "dragon",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "3.6"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "5",
    "evolution": {
      "candy": "dratini candy",
      "next-evolution": [{
        "num": "149",
        "name": "dragonite",
        "candy-cost": "100"
      }],
      "prev-evolution": [{
        "num": "147",
        "name": "dratini",
        "candy-cost": "25"
      }]
    }
  },
  {
    "num": "149",
    "name": "dragonite",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
    "img": "https://www.serebii.net/pokemongo/pokemon/149.png",
    "size": {
      "height": "2.21 m",
      "weight": "210.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dragon",
      "flying"
    ],
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.05"
    },
    "spawn-chance": "0.0011",
    "stats": {
      "base-attack": "263",
      "base-defense": "198",
      "base-stamina": "209",
      "max-cp": "3792",
      "max-hp": "177"
    },
    "resistant": [
      "fire",
      "water",
      "grass",
      "fighting",
      "ground"
    ],
    "weaknesses": [
      "ice",
      "rock",
      "dragon",
      "fairy"
    ],
    "quick-move": [
      {
        "name": "steel wing",
        "type": "steel",
        "base-damage": "11",
        "energy": "6",
        "move-duration-seg": "0.8"
      },
      {
        "name": "dragon tail",
        "type": "dragon",
        "base-damage": "15",
        "energy": "9",
        "move-duration-seg": "1.1"
      },
      {
        "name": "dragon breath",
        "type": "dragon",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "hyper beam",
        "type": "normal",
        "base-damage": "150",
        "energy": "-100",
        "move-duration-seg": "3.8"
      },
      {
        "name": "hurricane",
        "type": "flying",
        "base-damage": "110",
        "energy": "-100",
        "move-duration-seg": "2.7"
      },
      {
        "name": "outrage",
        "type": "dragon",
        "base-damage": "110",
        "energy": "-50",
        "move-duration-seg": "3.9"
      },
      {
        "name": "dragon claw",
        "type": "dragon",
        "base-damage": "50",
        "energy": "-33",
        "move-duration-seg": "1.7"
      },
      {
        "name": "dragon pulse",
        "type": "dragon",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "3.6"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "5",
    "evolution": {
      "candy": "dratini candy",
      "prev-evolution": [{
        "num": "148",
        "name": "dragonair",
        "candy-cost": "100",
        "prev-evolution": [{
          "num": "147",
          "name": "dratini",
          "candy-cost": "25"
        }]
      }]
    }
  },
];


