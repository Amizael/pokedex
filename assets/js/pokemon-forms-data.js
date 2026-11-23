// Catálogo Relacional de Formas Alternativas, Variantes Regionais e Itens de Ativação
const POKEMON_FORMS_DATABASE = {
  "3": [
    {
      "formId": "venusaur-mega",
      "speciesId": 3,
      "namePt": "Mega Venusaur",
      "nameEn": "Mega Venusaur",
      "formType": "mega",
      "types": [
        "grass",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png",
      "height": "2.4",
      "weight": "155.5",
      "abilities": [
        {
          "raw": "thick-fat",
          "name": "thick-fat",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 100,
        "defense": 123,
        "spAttack": 122,
        "spDefense": 120,
        "speed": 80,
        "total": 625
      },
      "descriptionPt": "A flor em suas costas cresce deslumbrantemente e suas pernas tornam-se mais robustas para suportar o peso gigantesco.",
      "descriptionEn": "The flower on its back blooms grandly, supported by legs that have grown thicker to bear the immense weight.",
      "requiredItem": {
        "identifier": "venusaurite",
        "namePt": "Venusaurita",
        "nameEn": "Venusaurite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/venusaurite.png"
      }
    },
    {
      "formId": "venusaur-gmax",
      "speciesId": 3,
      "namePt": "Venusaur Gigantamax",
      "nameEn": "Gigantamax Venusaur",
      "formType": "gmax",
      "types": [
        "grass",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png",
      "height": "24.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "overgrow",
          "name": "overgrow",
          "is_hidden": false
        },
        {
          "raw": "chlorophyll",
          "name": "chlorophyll",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 82,
        "defense": 83,
        "spAttack": 100,
        "spDefense": 100,
        "speed": 80,
        "total": 525
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Vinhas G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Vine Lash.",
      "gmaxMove": {
        "namePt": "Vinhas G-Max",
        "nameEn": "G-Max Vine Lash",
        "desc": "Vinhas colossais que causam dano por 4 turnos a alvos não-Planta."
      }
    }
  ],
  "6": [
    {
      "formId": "charizard-mega-x",
      "speciesId": 6,
      "namePt": "Mega Charizard X",
      "nameEn": "Mega Charizard X",
      "formType": "mega",
      "types": [
        "fire",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png",
      "height": "1.7",
      "weight": "110.5",
      "abilities": [
        {
          "raw": "tough-claws",
          "name": "tough-claws",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 78,
        "attack": 130,
        "defense": 111,
        "spAttack": 130,
        "spDefense": 85,
        "speed": 100,
        "total": 634
      },
      "descriptionPt": "Ao passar pela Mega Evolução, suas chamas tornam-se azuis e sua tipagem muda para Fogo e Dragão, ampliando seu poder físico.",
      "descriptionEn": "Upon Mega Evolving, its flames turn blue and its typing changes to Fire and Dragon, greatly boosting its physical power.",
      "requiredItem": {
        "identifier": "charizardite-x",
        "namePt": "Charizardita X",
        "nameEn": "Charizardite X",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charizardite-x.png"
      }
    },
    {
      "formId": "charizard-mega-y",
      "speciesId": 6,
      "namePt": "Mega Charizard Y",
      "nameEn": "Mega Charizard Y",
      "formType": "mega",
      "types": [
        "fire",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png",
      "height": "1.7",
      "weight": "100.5",
      "abilities": [
        {
          "raw": "drought",
          "name": "drought",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 78,
        "attack": 104,
        "defense": 78,
        "spAttack": 159,
        "spDefense": 115,
        "speed": 100,
        "total": 634
      },
      "descriptionPt": "Seus laços com o Treinador ampliam sua agilidade e capacidade de voo, invocando a luz do sol intensa ao entrar no combate.",
      "descriptionEn": "Its bonds with its Trainer enhance its flight capabilities and agility, summoning intense sunlight upon entering battle.",
      "requiredItem": {
        "identifier": "charizardite-y",
        "namePt": "Charizardita Y",
        "nameEn": "Charizardite Y",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charizardite-y.png"
      }
    },
    {
      "formId": "charizard-gmax",
      "speciesId": 6,
      "namePt": "Charizard Gigantamax",
      "nameEn": "Gigantamax Charizard",
      "formType": "gmax",
      "types": [
        "fire",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png",
      "height": "28.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "blaze",
          "name": "blaze",
          "is_hidden": false
        },
        {
          "raw": "solar-power",
          "name": "solar-power",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 78,
        "attack": 84,
        "defense": 78,
        "spAttack": 109,
        "spDefense": 85,
        "speed": 100,
        "total": 534
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Incêndio G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Wildfire.",
      "gmaxMove": {
        "namePt": "Incêndio G-Max",
        "nameEn": "G-Max Wildfire",
        "desc": "Um redemoinho de fogo que causa dano residual de 1/6 a qualquer alvo não-Fogo por 4 turnos."
      }
    }
  ],
  "9": [
    {
      "formId": "blastoise-mega",
      "speciesId": 9,
      "namePt": "Mega Blastoise",
      "nameEn": "Mega Blastoise",
      "formType": "mega",
      "types": [
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png",
      "height": "1.6",
      "weight": "101.1",
      "abilities": [
        {
          "raw": "mega-launcher",
          "name": "mega-launcher",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 79,
        "attack": 103,
        "defense": 120,
        "spAttack": 135,
        "spDefense": 115,
        "speed": 78,
        "total": 630
      },
      "descriptionPt": "Os dois canhões em suas costas combinam-se em uma única arma d’água colossal de longo alcance e poder avassalador.",
      "descriptionEn": "The twin cannons on its shell consolidate into a single colossal water cannon with devastating range and power.",
      "requiredItem": {
        "identifier": "blastoisinite",
        "namePt": "Blastoisita",
        "nameEn": "Blastoisinite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blastoisinite.png"
      }
    },
    {
      "formId": "blastoise-gmax",
      "speciesId": 9,
      "namePt": "Blastoise Gigantamax",
      "nameEn": "Gigantamax Blastoise",
      "formType": "gmax",
      "types": [
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10197.png",
      "height": "25.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "torrent",
          "name": "torrent",
          "is_hidden": false
        },
        {
          "raw": "rain-dish",
          "name": "rain-dish",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 79,
        "attack": 83,
        "defense": 100,
        "spAttack": 85,
        "spDefense": 105,
        "speed": 78,
        "total": 530
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Canhões G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Cannonade.",
      "gmaxMove": {
        "namePt": "Canhões G-Max",
        "nameEn": "G-Max Cannonade",
        "desc": "Dispara jatos de canhões colossais causando dano por 4 turnos a alvos não-Água."
      }
    }
  ],
  "12": [
    {
      "formId": "butterfree-gmax",
      "speciesId": 12,
      "namePt": "Butterfree Gigantamax",
      "nameEn": "Gigantamax Butterfree",
      "formType": "gmax",
      "types": [
        "bug",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10198.png",
      "height": "17.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "compound-eyes",
          "name": "compound-eyes",
          "is_hidden": false
        },
        {
          "raw": "tinted-lens",
          "name": "tinted-lens",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 45,
        "defense": 50,
        "spAttack": 90,
        "spDefense": 80,
        "speed": 70,
        "total": 395
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Névoa G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Befuddle.",
      "gmaxMove": {
        "namePt": "Névoa G-Max",
        "nameEn": "G-Max Befuddle",
        "desc": "Espalha escamas brilhantes que causam veneno, paralisia ou sono aos oponentes."
      }
    }
  ],
  "15": [
    {
      "formId": "beedrill-mega",
      "speciesId": 15,
      "namePt": "Mega Beedrill",
      "nameEn": "Mega Beedrill",
      "formType": "mega",
      "types": [
        "bug",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10090.png",
      "height": "1.4",
      "weight": "40.5",
      "abilities": [
        {
          "raw": "adaptability",
          "name": "adaptability",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 150,
        "defense": 40,
        "spAttack": 15,
        "spDefense": 80,
        "speed": 145,
        "total": 495
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "beedrillite",
        "namePt": "Beedrillita",
        "nameEn": "Beedrillite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/beedrillite.png"
      }
    }
  ],
  "18": [
    {
      "formId": "pidgeot-mega",
      "speciesId": 18,
      "namePt": "Mega Pidgeot",
      "nameEn": "Mega Pidgeot",
      "formType": "mega",
      "types": [
        "normal",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png",
      "height": "2.2",
      "weight": "50.5",
      "abilities": [
        {
          "raw": "no-guard",
          "name": "no-guard",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 83,
        "attack": 80,
        "defense": 80,
        "spAttack": 135,
        "spDefense": 80,
        "speed": 121,
        "total": 579
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "pidgeotite",
        "namePt": "Pidgeotita",
        "nameEn": "Pidgeotite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pidgeotite.png"
      }
    }
  ],
  "19": [
    {
      "formId": "rattata-alola",
      "speciesId": 19,
      "namePt": "Rattata de Alola",
      "nameEn": "Alolan Rattata",
      "formType": "alola",
      "types": [
        "dark",
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png",
      "height": "0.3",
      "weight": "3.8",
      "abilities": [
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "hustle",
          "name": "hustle",
          "is_hidden": false
        },
        {
          "raw": "thick-fat",
          "name": "thick-fat",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 30,
        "attack": 56,
        "defense": 35,
        "spAttack": 25,
        "spDefense": 35,
        "speed": 72,
        "total": 253
      },
      "descriptionPt": "Forma especial Rattata de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Rattata form featuring unique elemental powers and battle abilities."
    }
  ],
  "20": [
    {
      "formId": "raticate-alola",
      "speciesId": 20,
      "namePt": "Raticate de Alola",
      "nameEn": "Alolan Raticate",
      "formType": "alola",
      "types": [
        "dark",
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png",
      "height": "0.7",
      "weight": "25.5",
      "abilities": [
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "hustle",
          "name": "hustle",
          "is_hidden": false
        },
        {
          "raw": "thick-fat",
          "name": "thick-fat",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 71,
        "defense": 70,
        "spAttack": 40,
        "spDefense": 80,
        "speed": 77,
        "total": 413
      },
      "descriptionPt": "Forma especial Raticate de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Raticate form featuring unique elemental powers and battle abilities."
    }
  ],
  "25": [
    {
      "formId": "pikachu-gmax",
      "speciesId": 25,
      "namePt": "Pikachu Gigantamax",
      "nameEn": "Gigantamax Pikachu",
      "formType": "gmax",
      "types": [
        "electric"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10199.png",
      "height": "21.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "static",
          "name": "static",
          "is_hidden": false
        },
        {
          "raw": "lightning-rod",
          "name": "lightning-rod",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 35,
        "attack": 55,
        "defense": 40,
        "spAttack": 50,
        "spDefense": 50,
        "speed": 90,
        "total": 320
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Eletrochoque G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Volt Crash.",
      "gmaxMove": {
        "namePt": "Eletrochoque G-Max",
        "nameEn": "G-Max Volt Crash",
        "desc": "Uma descarga elétrica gigantesca que paralisa todos os adversários em campo."
      }
    }
  ],
  "26": [
    {
      "formId": "raichu-alola",
      "speciesId": 26,
      "namePt": "Raichu de Alola",
      "nameEn": "Alolan Raichu",
      "formType": "alola",
      "types": [
        "electric",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png",
      "height": "0.7",
      "weight": "21.0",
      "abilities": [
        {
          "raw": "surge-surfer",
          "name": "surge-surfer",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 85,
        "defense": 50,
        "spAttack": 95,
        "spDefense": 85,
        "speed": 110,
        "total": 485
      },
      "descriptionPt": "Usa seu poder psíquico para levitar e surfar pelo ar sobre a própria cauda, movendo-se com extrema leveza.",
      "descriptionEn": "It uses psychokinesis to control electricity and floats on its broad tail as if surfing across the waves.",
      "requiredItem": null
    }
  ],
  "27": [
    {
      "formId": "sandshrew-alola",
      "speciesId": 27,
      "namePt": "Sandshrew de Alola",
      "nameEn": "Alolan Sandshrew",
      "formType": "alola",
      "types": [
        "ice",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png",
      "height": "0.7",
      "weight": "40.0",
      "abilities": [
        {
          "raw": "snow-cloak",
          "name": "snow-cloak",
          "is_hidden": false
        },
        {
          "raw": "slush-rush",
          "name": "slush-rush",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 75,
        "defense": 90,
        "spAttack": 10,
        "spDefense": 35,
        "speed": 40,
        "total": 300
      },
      "descriptionPt": "Forma especial Sandshrew de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Sandshrew form featuring unique elemental powers and battle abilities."
    }
  ],
  "28": [
    {
      "formId": "sandslash-alola",
      "speciesId": 28,
      "namePt": "Sandslash de Alola",
      "nameEn": "Alolan Sandslash",
      "formType": "alola",
      "types": [
        "ice",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png",
      "height": "1.2",
      "weight": "55.0",
      "abilities": [
        {
          "raw": "snow-cloak",
          "name": "snow-cloak",
          "is_hidden": false
        },
        {
          "raw": "slush-rush",
          "name": "slush-rush",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 100,
        "defense": 120,
        "spAttack": 25,
        "spDefense": 65,
        "speed": 65,
        "total": 450
      },
      "descriptionPt": "Forma especial Sandslash de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Sandslash form featuring unique elemental powers and battle abilities."
    }
  ],
  "37": [
    {
      "formId": "vulpix-alola",
      "speciesId": 37,
      "namePt": "Vulpix de Alola",
      "nameEn": "Alolan Vulpix",
      "formType": "alola",
      "types": [
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png",
      "height": "0.6",
      "weight": "9.9",
      "abilities": [
        {
          "raw": "snow-cloak",
          "name": "snow-cloak",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 38,
        "attack": 41,
        "defense": 40,
        "spAttack": 50,
        "spDefense": 65,
        "speed": 65,
        "total": 299
      },
      "descriptionPt": "Migrou para montanhas nevadas e adaptou-se ao frio extremo. Expele ar congelante a 50 graus negativos pela boca.",
      "descriptionEn": "It moved to snowy mountain peaks to avoid other Pokémon and adapted to freezing cold, exhaling breath of minus 58 degrees Fahrenheit.",
      "requiredItem": null
    }
  ],
  "38": [
    {
      "formId": "ninetales-alola",
      "speciesId": 38,
      "namePt": "Ninetales de Alola",
      "nameEn": "Alolan Ninetales",
      "formType": "alola",
      "types": [
        "ice",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png",
      "height": "1.1",
      "weight": "19.9",
      "abilities": [
        {
          "raw": "snow-cloak",
          "name": "snow-cloak",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 73,
        "attack": 67,
        "defense": 75,
        "spAttack": 81,
        "spDefense": 100,
        "speed": 109,
        "total": 505
      },
      "descriptionPt": "Venerado em Alola como um mensageiro divino da montanha sagrada. Cria cristais de gelo com sua pelagem alva.",
      "descriptionEn": "Revered in Alola as an emissary of the deities on sacred snowy peaks. It creates ice crystals with its shimmering fur.",
      "requiredItem": null
    }
  ],
  "50": [
    {
      "formId": "diglett-alola",
      "speciesId": 50,
      "namePt": "Diglett de Alola",
      "nameEn": "Alolan Diglett",
      "formType": "alola",
      "types": [
        "ground",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png",
      "height": "0.2",
      "weight": "1.0",
      "abilities": [
        {
          "raw": "sand-veil",
          "name": "sand-veil",
          "is_hidden": false
        },
        {
          "raw": "tangling-hair",
          "name": "tangling-hair",
          "is_hidden": false
        },
        {
          "raw": "sand-force",
          "name": "sand-force",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 10,
        "attack": 55,
        "defense": 30,
        "spAttack": 35,
        "spDefense": 45,
        "speed": 90,
        "total": 265
      },
      "descriptionPt": "Forma especial Diglett de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Diglett form featuring unique elemental powers and battle abilities."
    }
  ],
  "51": [
    {
      "formId": "dugtrio-alola",
      "speciesId": 51,
      "namePt": "Dugtrio de Alola",
      "nameEn": "Alolan Dugtrio",
      "formType": "alola",
      "types": [
        "ground",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png",
      "height": "0.7",
      "weight": "66.6",
      "abilities": [
        {
          "raw": "sand-veil",
          "name": "sand-veil",
          "is_hidden": false
        },
        {
          "raw": "tangling-hair",
          "name": "tangling-hair",
          "is_hidden": false
        },
        {
          "raw": "sand-force",
          "name": "sand-force",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 35,
        "attack": 100,
        "defense": 60,
        "spAttack": 50,
        "spDefense": 70,
        "speed": 110,
        "total": 425
      },
      "descriptionPt": "Forma especial Dugtrio de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Dugtrio form featuring unique elemental powers and battle abilities."
    }
  ],
  "52": [
    {
      "formId": "meowth-gmax",
      "speciesId": 52,
      "namePt": "Meowth Gigantamax",
      "nameEn": "Gigantamax Meowth",
      "formType": "gmax",
      "types": [
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10200.png",
      "height": "33.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "pickup",
          "name": "pickup",
          "is_hidden": false
        },
        {
          "raw": "technician",
          "name": "technician",
          "is_hidden": false
        },
        {
          "raw": "unnerve",
          "name": "unnerve",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 40,
        "attack": 45,
        "defense": 35,
        "spAttack": 40,
        "spDefense": 40,
        "speed": 90,
        "total": 290
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Moedas G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Gold Rush.",
      "gmaxMove": {
        "namePt": "Moedas G-Max",
        "nameEn": "G-Max Gold Rush",
        "desc": "Espalha moedas por todo o campo e confunde todos os alvos atingidos."
      }
    },
    {
      "formId": "meowth-alola",
      "speciesId": 52,
      "namePt": "Meowth de Alola",
      "nameEn": "Alolan Meowth",
      "formType": "alola",
      "types": [
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10107.png",
      "height": "0.4",
      "weight": "4.2",
      "abilities": [
        {
          "raw": "pickup",
          "name": "pickup",
          "is_hidden": false
        },
        {
          "raw": "technician",
          "name": "technician",
          "is_hidden": false
        },
        {
          "raw": "rattled",
          "name": "rattled",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 40,
        "attack": 35,
        "defense": 35,
        "spAttack": 50,
        "spDefense": 40,
        "speed": 90,
        "total": 290
      },
      "descriptionPt": "Forma especial Meowth de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Meowth form featuring unique elemental powers and battle abilities."
    },
    {
      "formId": "meowth-galar",
      "speciesId": 52,
      "namePt": "Meowth de Galar",
      "nameEn": "Galarian Meowth",
      "formType": "galar",
      "types": [
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png",
      "height": "0.4",
      "weight": "7.5",
      "abilities": [
        {
          "raw": "pickup",
          "name": "pickup",
          "is_hidden": false
        },
        {
          "raw": "tough-claws",
          "name": "tough-claws",
          "is_hidden": false
        },
        {
          "raw": "unnerve",
          "name": "unnerve",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 65,
        "defense": 55,
        "spAttack": 40,
        "spDefense": 40,
        "speed": 40,
        "total": 290
      },
      "descriptionPt": "Forma especial Meowth de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Meowth form featuring unique elemental powers and battle abilities."
    }
  ],
  "53": [
    {
      "formId": "persian-alola",
      "speciesId": 53,
      "namePt": "Persian de Alola",
      "nameEn": "Alolan Persian",
      "formType": "alola",
      "types": [
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png",
      "height": "1.1",
      "weight": "33.0",
      "abilities": [
        {
          "raw": "fur-coat",
          "name": "fur-coat",
          "is_hidden": false
        },
        {
          "raw": "technician",
          "name": "technician",
          "is_hidden": false
        },
        {
          "raw": "rattled",
          "name": "rattled",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 60,
        "defense": 60,
        "spAttack": 75,
        "spDefense": 65,
        "speed": 115,
        "total": 440
      },
      "descriptionPt": "Forma especial Persian de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Persian form featuring unique elemental powers and battle abilities."
    }
  ],
  "58": [
    {
      "formId": "growlithe-hisui",
      "speciesId": 58,
      "namePt": "Growlithe de Hisui",
      "nameEn": "Hisuian Growlithe",
      "formType": "hisui",
      "types": [
        "fire",
        "rock"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10229.png",
      "height": "0.8",
      "weight": "22.7",
      "abilities": [
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": false
        },
        {
          "raw": "flash-fire",
          "name": "flash-fire",
          "is_hidden": false
        },
        {
          "raw": "rock-head",
          "name": "rock-head",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 75,
        "defense": 45,
        "spAttack": 65,
        "spDefense": 50,
        "speed": 55,
        "total": 350
      },
      "descriptionPt": "Forma especial Growlithe de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Growlithe form featuring unique elemental powers and battle abilities."
    }
  ],
  "59": [
    {
      "formId": "arcanine-hisui",
      "speciesId": 59,
      "namePt": "Arcanine de Hisui",
      "nameEn": "Hisuian Arcanine",
      "formType": "hisui",
      "types": [
        "fire",
        "rock"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png",
      "height": "2.0",
      "weight": "168.0",
      "abilities": [
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": false
        },
        {
          "raw": "flash-fire",
          "name": "flash-fire",
          "is_hidden": false
        },
        {
          "raw": "rock-head",
          "name": "rock-head",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 115,
        "defense": 80,
        "spAttack": 95,
        "spDefense": 80,
        "speed": 90,
        "total": 555
      },
      "descriptionPt": "Forma especial Arcanine de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Arcanine form featuring unique elemental powers and battle abilities."
    }
  ],
  "65": [
    {
      "formId": "alakazam-mega",
      "speciesId": 65,
      "namePt": "Mega Alakazam",
      "nameEn": "Mega Alakazam",
      "formType": "mega",
      "types": [
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10037.png",
      "height": "1.2",
      "weight": "48.0",
      "abilities": [
        {
          "raw": "trace",
          "name": "trace",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 50,
        "defense": 65,
        "spAttack": 175,
        "spDefense": 105,
        "speed": 150,
        "total": 600
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "alakazite",
        "namePt": "Alakazamita",
        "nameEn": "Alakazite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/alakazite.png"
      }
    }
  ],
  "68": [
    {
      "formId": "machamp-gmax",
      "speciesId": 68,
      "namePt": "Machamp Gigantamax",
      "nameEn": "Gigantamax Machamp",
      "formType": "gmax",
      "types": [
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10201.png",
      "height": "25.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "guts",
          "name": "guts",
          "is_hidden": false
        },
        {
          "raw": "no-guard",
          "name": "no-guard",
          "is_hidden": false
        },
        {
          "raw": "steadfast",
          "name": "steadfast",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 130,
        "defense": 80,
        "spAttack": 65,
        "spDefense": 85,
        "speed": 55,
        "total": 505
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Acerto G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Chi Strike.",
      "gmaxMove": {
        "namePt": "Acerto G-Max",
        "nameEn": "G-Max Chi Strike",
        "desc": "Canaliza energia marcial para aumentar a chance de acertos críticos de toda a equipe."
      }
    }
  ],
  "74": [
    {
      "formId": "geodude-alola",
      "speciesId": 74,
      "namePt": "Geodude de Alola",
      "nameEn": "Alolan Geodude",
      "formType": "alola",
      "types": [
        "rock",
        "electric"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png",
      "height": "0.4",
      "weight": "20.3",
      "abilities": [
        {
          "raw": "magnet-pull",
          "name": "magnet-pull",
          "is_hidden": false
        },
        {
          "raw": "sturdy",
          "name": "sturdy",
          "is_hidden": false
        },
        {
          "raw": "galvanize",
          "name": "galvanize",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 40,
        "attack": 80,
        "defense": 100,
        "spAttack": 30,
        "spDefense": 30,
        "speed": 20,
        "total": 300
      },
      "descriptionPt": "Forma especial Geodude de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Geodude form featuring unique elemental powers and battle abilities."
    }
  ],
  "75": [
    {
      "formId": "graveler-alola",
      "speciesId": 75,
      "namePt": "Graveler de Alola",
      "nameEn": "Alolan Graveler",
      "formType": "alola",
      "types": [
        "rock",
        "electric"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png",
      "height": "1.0",
      "weight": "110.0",
      "abilities": [
        {
          "raw": "magnet-pull",
          "name": "magnet-pull",
          "is_hidden": false
        },
        {
          "raw": "sturdy",
          "name": "sturdy",
          "is_hidden": false
        },
        {
          "raw": "galvanize",
          "name": "galvanize",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 95,
        "defense": 115,
        "spAttack": 45,
        "spDefense": 45,
        "speed": 35,
        "total": 390
      },
      "descriptionPt": "Forma especial Graveler de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Graveler form featuring unique elemental powers and battle abilities."
    }
  ],
  "76": [
    {
      "formId": "golem-alola",
      "speciesId": 76,
      "namePt": "Golem de Alola",
      "nameEn": "Alolan Golem",
      "formType": "alola",
      "types": [
        "rock",
        "electric"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png",
      "height": "1.7",
      "weight": "316.0",
      "abilities": [
        {
          "raw": "magnet-pull",
          "name": "magnet-pull",
          "is_hidden": false
        },
        {
          "raw": "sturdy",
          "name": "sturdy",
          "is_hidden": false
        },
        {
          "raw": "galvanize",
          "name": "galvanize",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 120,
        "defense": 130,
        "spAttack": 55,
        "spDefense": 65,
        "speed": 45,
        "total": 495
      },
      "descriptionPt": "Forma especial Golem de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Golem form featuring unique elemental powers and battle abilities."
    }
  ],
  "77": [
    {
      "formId": "ponyta-galar",
      "speciesId": 77,
      "namePt": "Ponyta de Galar",
      "nameEn": "Galarian Ponyta",
      "formType": "galar",
      "types": [
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png",
      "height": "0.8",
      "weight": "24.0",
      "abilities": [
        {
          "raw": "run-away",
          "name": "run-away",
          "is_hidden": false
        },
        {
          "raw": "pastel-veil",
          "name": "pastel-veil",
          "is_hidden": false
        },
        {
          "raw": "anticipation",
          "name": "anticipation",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 85,
        "defense": 55,
        "spAttack": 65,
        "spDefense": 65,
        "speed": 90,
        "total": 410
      },
      "descriptionPt": "Forma especial Ponyta de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Ponyta form featuring unique elemental powers and battle abilities."
    }
  ],
  "78": [
    {
      "formId": "rapidash-galar",
      "speciesId": 78,
      "namePt": "Rapidash de Galar",
      "nameEn": "Galarian Rapidash",
      "formType": "galar",
      "types": [
        "psychic",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png",
      "height": "1.7",
      "weight": "80.0",
      "abilities": [
        {
          "raw": "run-away",
          "name": "run-away",
          "is_hidden": false
        },
        {
          "raw": "pastel-veil",
          "name": "pastel-veil",
          "is_hidden": false
        },
        {
          "raw": "anticipation",
          "name": "anticipation",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 100,
        "defense": 70,
        "spAttack": 80,
        "spDefense": 80,
        "speed": 105,
        "total": 500
      },
      "descriptionPt": "Forma especial Rapidash de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Rapidash form featuring unique elemental powers and battle abilities."
    }
  ],
  "79": [
    {
      "formId": "slowpoke-galar",
      "speciesId": 79,
      "namePt": "Slowpoke de Galar",
      "nameEn": "Galarian Slowpoke",
      "formType": "galar",
      "types": [
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png",
      "height": "1.2",
      "weight": "36.0",
      "abilities": [
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "own-tempo",
          "name": "own-tempo",
          "is_hidden": false
        },
        {
          "raw": "regenerator",
          "name": "regenerator",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 65,
        "defense": 65,
        "spAttack": 40,
        "spDefense": 40,
        "speed": 15,
        "total": 315
      },
      "descriptionPt": "Forma especial Slowpoke de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Slowpoke form featuring unique elemental powers and battle abilities."
    }
  ],
  "80": [
    {
      "formId": "slowbro-mega",
      "speciesId": 80,
      "namePt": "Mega Slowbro",
      "nameEn": "Mega Slowbro",
      "formType": "mega",
      "types": [
        "water",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10071.png",
      "height": "2.0",
      "weight": "120.0",
      "abilities": [
        {
          "raw": "shell-armor",
          "name": "shell-armor",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 75,
        "defense": 180,
        "spAttack": 130,
        "spDefense": 80,
        "speed": 30,
        "total": 590
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "slowbronite",
        "namePt": "Slowbronita",
        "nameEn": "Slowbronite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/slowbronite.png"
      }
    },
    {
      "formId": "slowbro-galar",
      "speciesId": 80,
      "namePt": "Slowbro de Galar",
      "nameEn": "Galarian Slowbro",
      "formType": "galar",
      "types": [
        "poison",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png",
      "height": "1.6",
      "weight": "70.5",
      "abilities": [
        {
          "raw": "quick-draw",
          "name": "quick-draw",
          "is_hidden": false
        },
        {
          "raw": "own-tempo",
          "name": "own-tempo",
          "is_hidden": false
        },
        {
          "raw": "regenerator",
          "name": "regenerator",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 100,
        "defense": 95,
        "spAttack": 100,
        "spDefense": 70,
        "speed": 30,
        "total": 490
      },
      "descriptionPt": "Forma especial Slowbro de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Slowbro form featuring unique elemental powers and battle abilities."
    }
  ],
  "83": [
    {
      "formId": "farfetchd-galar",
      "speciesId": 83,
      "namePt": "Farfetch'd de Galar",
      "nameEn": "Galarian Farfetch'd",
      "formType": "galar",
      "types": [
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png",
      "height": "0.8",
      "weight": "42.0",
      "abilities": [
        {
          "raw": "steadfast",
          "name": "steadfast",
          "is_hidden": false
        },
        {
          "raw": "scrappy",
          "name": "scrappy",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 52,
        "attack": 95,
        "defense": 55,
        "spAttack": 58,
        "spDefense": 62,
        "speed": 55,
        "total": 377
      },
      "descriptionPt": "Forma especial Farfetch'd de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Farfetch'd form featuring unique elemental powers and battle abilities."
    }
  ],
  "88": [
    {
      "formId": "grimer-alola",
      "speciesId": 88,
      "namePt": "Grimer de Alola",
      "nameEn": "Alolan Grimer",
      "formType": "alola",
      "types": [
        "poison",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10112.png",
      "height": "0.7",
      "weight": "42.0",
      "abilities": [
        {
          "raw": "poison-touch",
          "name": "poison-touch",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "power-of-alchemy",
          "name": "power-of-alchemy",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 80,
        "defense": 50,
        "spAttack": 40,
        "spDefense": 50,
        "speed": 25,
        "total": 325
      },
      "descriptionPt": "Forma especial Grimer de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Grimer form featuring unique elemental powers and battle abilities."
    }
  ],
  "89": [
    {
      "formId": "muk-alola",
      "speciesId": 89,
      "namePt": "Muk de Alola",
      "nameEn": "Alolan Muk",
      "formType": "alola",
      "types": [
        "poison",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png",
      "height": "1.0",
      "weight": "52.0",
      "abilities": [
        {
          "raw": "poison-touch",
          "name": "poison-touch",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "power-of-alchemy",
          "name": "power-of-alchemy",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 105,
        "attack": 105,
        "defense": 75,
        "spAttack": 65,
        "spDefense": 100,
        "speed": 50,
        "total": 500
      },
      "descriptionPt": "Forma especial Muk de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Muk form featuring unique elemental powers and battle abilities."
    }
  ],
  "94": [
    {
      "formId": "gengar-mega",
      "speciesId": 94,
      "namePt": "Mega Gengar",
      "nameEn": "Mega Gengar",
      "formType": "mega",
      "types": [
        "ghost",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png",
      "height": "1.4",
      "weight": "40.5",
      "abilities": [
        {
          "raw": "shadow-tag",
          "name": "shadow-tag",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 65,
        "defense": 80,
        "spAttack": 170,
        "spDefense": 95,
        "speed": 130,
        "total": 600
      },
      "descriptionPt": "Sua parte inferior submerge em outra dimensão. Prende qualquer um ao seu redor prendendo suas sombras no solo.",
      "descriptionEn": "The lower part of its body sinks into another dimension. Its third eye opens to perceive all realities while trapping shadows.",
      "requiredItem": {
        "identifier": "gengarite",
        "namePt": "Gengarita",
        "nameEn": "Gengarite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gengarite.png"
      }
    },
    {
      "formId": "gengar-gmax",
      "speciesId": 94,
      "namePt": "Gengar Gigantamax",
      "nameEn": "Gigantamax Gengar",
      "formType": "gmax",
      "types": [
        "ghost",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10202.png",
      "height": "20.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "cursed-body",
          "name": "cursed-body",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 65,
        "defense": 60,
        "spAttack": 130,
        "spDefense": 75,
        "speed": 110,
        "total": 500
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Terror G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Terror.",
      "gmaxMove": {
        "namePt": "Terror G-Max",
        "nameEn": "G-Max Terror",
        "desc": "Uma boca colossal que engole o chão e impede que todos os alvos fujam ou sejam trocados."
      }
    }
  ],
  "99": [
    {
      "formId": "kingler-gmax",
      "speciesId": 99,
      "namePt": "Kingler Gigantamax",
      "nameEn": "Gigantamax Kingler",
      "formType": "gmax",
      "types": [
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10203.png",
      "height": "19.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "hyper-cutter",
          "name": "hyper-cutter",
          "is_hidden": false
        },
        {
          "raw": "shell-armor",
          "name": "shell-armor",
          "is_hidden": false
        },
        {
          "raw": "sheer-force",
          "name": "sheer-force",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 130,
        "defense": 115,
        "spAttack": 50,
        "spDefense": 50,
        "speed": 75,
        "total": 475
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Espuma G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Foam Burst.",
      "gmaxMove": {
        "namePt": "Espuma G-Max",
        "nameEn": "G-Max Foam Burst",
        "desc": "Bolhas espumosas gigantescas que reduzem bruscamente a Velocidade dos oponentes em 2 estágios."
      }
    }
  ],
  "100": [
    {
      "formId": "voltorb-hisui",
      "speciesId": 100,
      "namePt": "Voltorb de Hisui",
      "nameEn": "Hisuian Voltorb",
      "formType": "hisui",
      "types": [
        "electric",
        "grass"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10231.png",
      "height": "0.5",
      "weight": "13.0",
      "abilities": [
        {
          "raw": "soundproof",
          "name": "soundproof",
          "is_hidden": false
        },
        {
          "raw": "static",
          "name": "static",
          "is_hidden": false
        },
        {
          "raw": "aftermath",
          "name": "aftermath",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 40,
        "attack": 30,
        "defense": 50,
        "spAttack": 55,
        "spDefense": 55,
        "speed": 100,
        "total": 330
      },
      "descriptionPt": "Forma especial Voltorb de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Voltorb form featuring unique elemental powers and battle abilities."
    }
  ],
  "101": [
    {
      "formId": "electrode-hisui",
      "speciesId": 101,
      "namePt": "Electrode de Hisui",
      "nameEn": "Hisuian Electrode",
      "formType": "hisui",
      "types": [
        "electric",
        "grass"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10232.png",
      "height": "1.2",
      "weight": "71.0",
      "abilities": [
        {
          "raw": "soundproof",
          "name": "soundproof",
          "is_hidden": false
        },
        {
          "raw": "static",
          "name": "static",
          "is_hidden": false
        },
        {
          "raw": "aftermath",
          "name": "aftermath",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 50,
        "defense": 70,
        "spAttack": 80,
        "spDefense": 80,
        "speed": 150,
        "total": 490
      },
      "descriptionPt": "Forma especial Electrode de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Electrode form featuring unique elemental powers and battle abilities."
    }
  ],
  "103": [
    {
      "formId": "exeggutor-alola",
      "speciesId": 103,
      "namePt": "Exeggutor de Alola",
      "nameEn": "Alolan Exeggutor",
      "formType": "alola",
      "types": [
        "grass",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png",
      "height": "10.9",
      "weight": "415.6",
      "abilities": [
        {
          "raw": "frisk",
          "name": "frisk",
          "is_hidden": false
        },
        {
          "raw": "harvest",
          "name": "harvest",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 105,
        "defense": 85,
        "spAttack": 125,
        "spDefense": 75,
        "speed": 45,
        "total": 530
      },
      "descriptionPt": "Forma especial Exeggutor de Alola com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Alolan Exeggutor form featuring unique elemental powers and battle abilities."
    }
  ],
  "105": [
    {
      "formId": "marowak-alola",
      "speciesId": 105,
      "namePt": "Marowak de Alola",
      "nameEn": "Alolan Marowak",
      "formType": "alola",
      "types": [
        "fire",
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png",
      "height": "1.0",
      "weight": "34.0",
      "abilities": [
        {
          "raw": "cursed-body",
          "name": "cursed-body",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 80,
        "defense": 110,
        "spAttack": 50,
        "spDefense": 80,
        "speed": 45,
        "total": 425
      },
      "descriptionPt": "Acende chamas espectrais nas pontas do seu osso em honra aos seus companheiros caídos, girando-o como tocha ritual.",
      "descriptionEn": "It sets the ends of its bone alight with cursed flames in mourning for its comrades, dancing with spectral fury.",
      "requiredItem": null
    }
  ],
  "110": [
    {
      "formId": "weezing-galar",
      "speciesId": 110,
      "namePt": "Weezing de Galar",
      "nameEn": "Galarian Weezing",
      "formType": "galar",
      "types": [
        "poison",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png",
      "height": "3.0",
      "weight": "16.0",
      "abilities": [
        {
          "raw": "neutralizing-gas",
          "name": "neutralizing-gas",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 90,
        "defense": 120,
        "spAttack": 85,
        "spDefense": 70,
        "speed": 60,
        "total": 490
      },
      "descriptionPt": "Consome poluição atmosférica tóxica e a purifica, liberando ar fresco e puro pelo topo de suas chaminés em formato de cartola.",
      "descriptionEn": "It inhales polluted air and toxic particles, cleansing them before expelling pure, clean air from its top-hat funnels.",
      "requiredItem": null
    }
  ],
  "115": [
    {
      "formId": "kangaskhan-mega",
      "speciesId": 115,
      "namePt": "Mega Kangaskhan",
      "nameEn": "Mega Kangaskhan",
      "formType": "mega",
      "types": [
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10039.png",
      "height": "2.2",
      "weight": "100.0",
      "abilities": [
        {
          "raw": "parental-bond",
          "name": "parental-bond",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 105,
        "attack": 125,
        "defense": 100,
        "spAttack": 60,
        "spDefense": 100,
        "speed": 100,
        "total": 590
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "kangaskhanite",
        "namePt": "Kangaskhanita",
        "nameEn": "Kangaskhanite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kangaskhanite.png"
      }
    }
  ],
  "122": [
    {
      "formId": "mr-mime-galar",
      "speciesId": 122,
      "namePt": "Mr. Mime de Galar",
      "nameEn": "Galarian Mr. Mime",
      "formType": "galar",
      "types": [
        "ice",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png",
      "height": "1.4",
      "weight": "56.8",
      "abilities": [
        {
          "raw": "vital-spirit",
          "name": "vital-spirit",
          "is_hidden": false
        },
        {
          "raw": "screen-cleaner",
          "name": "screen-cleaner",
          "is_hidden": false
        },
        {
          "raw": "ice-body",
          "name": "ice-body",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 65,
        "defense": 65,
        "spAttack": 90,
        "spDefense": 90,
        "speed": 100,
        "total": 460
      },
      "descriptionPt": "Forma especial Mr. Mime de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Mr. Mime form featuring unique elemental powers and battle abilities."
    }
  ],
  "127": [
    {
      "formId": "pinsir-mega",
      "speciesId": 127,
      "namePt": "Mega Pinsir",
      "nameEn": "Mega Pinsir",
      "formType": "mega",
      "types": [
        "bug",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png",
      "height": "1.7",
      "weight": "59.0",
      "abilities": [
        {
          "raw": "aerilate",
          "name": "aerilate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 155,
        "defense": 120,
        "spAttack": 65,
        "spDefense": 90,
        "speed": 105,
        "total": 600
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "pinsirite",
        "namePt": "Pinsirita",
        "nameEn": "Pinsirite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pinsirite.png"
      }
    }
  ],
  "128": [
    {
      "formId": "tauros-paldea-combat-breed",
      "speciesId": 128,
      "namePt": "Tauros de Paldea (Combatente)",
      "nameEn": "Paldean Tauros (Combat)",
      "formType": "paldea",
      "types": [
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png",
      "height": "1.4",
      "weight": "115.0",
      "abilities": [
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": false
        },
        {
          "raw": "anger-point",
          "name": "anger-point",
          "is_hidden": false
        },
        {
          "raw": "cud-chew",
          "name": "cud-chew",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 110,
        "defense": 105,
        "spAttack": 30,
        "spDefense": 70,
        "speed": 100,
        "total": 490
      },
      "descriptionPt": "Forma especial Tauros de Paldea (Combatente) com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Paldean Tauros (Combat) form featuring unique elemental powers and battle abilities."
    },
    {
      "formId": "tauros-paldea-aqua-breed",
      "speciesId": 128,
      "namePt": "Tauros de Paldea (Água)",
      "nameEn": "Paldean Tauros (Aqua)",
      "formType": "paldea",
      "types": [
        "fighting",
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png",
      "height": "1.4",
      "weight": "110.0",
      "abilities": [
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": false
        },
        {
          "raw": "anger-point",
          "name": "anger-point",
          "is_hidden": false
        },
        {
          "raw": "cud-chew",
          "name": "cud-chew",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 110,
        "defense": 105,
        "spAttack": 30,
        "spDefense": 70,
        "speed": 100,
        "total": 490
      },
      "descriptionPt": "Forma especial Tauros de Paldea (Água) com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Paldean Tauros (Aqua) form featuring unique elemental powers and battle abilities."
    },
    {
      "formId": "tauros-paldea-blaze-breed",
      "speciesId": 128,
      "namePt": "Tauros de Paldea (Fogo)",
      "nameEn": "Paldean Tauros (Blaze)",
      "formType": "paldea",
      "types": [
        "fighting",
        "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png",
      "height": "1.4",
      "weight": "85.0",
      "abilities": [
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": false
        },
        {
          "raw": "anger-point",
          "name": "anger-point",
          "is_hidden": false
        },
        {
          "raw": "cud-chew",
          "name": "cud-chew",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 110,
        "defense": 105,
        "spAttack": 30,
        "spDefense": 70,
        "speed": 100,
        "total": 490
      },
      "descriptionPt": "Forma especial Tauros de Paldea (Fogo) com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Paldean Tauros (Blaze) form featuring unique elemental powers and battle abilities."
    }
  ],
  "130": [
    {
      "formId": "gyarados-mega",
      "speciesId": 130,
      "namePt": "Mega Gyarados",
      "nameEn": "Mega Gyarados",
      "formType": "mega",
      "types": [
        "water",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png",
      "height": "6.5",
      "weight": "305.0",
      "abilities": [
        {
          "raw": "mold-breaker",
          "name": "mold-breaker",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 155,
        "defense": 109,
        "spAttack": 70,
        "spDefense": 130,
        "speed": 81,
        "total": 640
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "gyaradosite",
        "namePt": "Gyaradosita",
        "nameEn": "Gyaradosite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gyaradosite.png"
      }
    }
  ],
  "131": [
    {
      "formId": "lapras-gmax",
      "speciesId": 131,
      "namePt": "Lapras Gigantamax",
      "nameEn": "Gigantamax Lapras",
      "formType": "gmax",
      "types": [
        "water",
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10204.png",
      "height": "24.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "water-absorb",
          "name": "water-absorb",
          "is_hidden": false
        },
        {
          "raw": "shell-armor",
          "name": "shell-armor",
          "is_hidden": false
        },
        {
          "raw": "hydration",
          "name": "hydration",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 130,
        "attack": 85,
        "defense": 80,
        "spAttack": 85,
        "spDefense": 95,
        "speed": 60,
        "total": 535
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Ressonância G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Resonance.",
      "gmaxMove": {
        "namePt": "Ressonância G-Max",
        "nameEn": "G-Max Resonance",
        "desc": "Um canto melódico que ativa o efeito de Véu de Aurora, reduzindo pela metade o dano por 5 turnos."
      }
    }
  ],
  "133": [
    {
      "formId": "eevee-gmax",
      "speciesId": 133,
      "namePt": "Eevee Gigantamax",
      "nameEn": "Gigantamax Eevee",
      "formType": "gmax",
      "types": [
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10205.png",
      "height": "18.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "run-away",
          "name": "run-away",
          "is_hidden": false
        },
        {
          "raw": "adaptability",
          "name": "adaptability",
          "is_hidden": false
        },
        {
          "raw": "anticipation",
          "name": "anticipation",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 55,
        "defense": 50,
        "spAttack": 45,
        "spDefense": 65,
        "speed": 55,
        "total": 325
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Ternura G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Cuddle.",
      "gmaxMove": {
        "namePt": "Ternura G-Max",
        "nameEn": "G-Max Cuddle",
        "desc": "Uma onda irresistível de fofura que atrai e apaixona qualquer adversário de gênero oposto."
      }
    }
  ],
  "142": [
    {
      "formId": "aerodactyl-mega",
      "speciesId": 142,
      "namePt": "Mega Aerodactyl",
      "nameEn": "Mega Aerodactyl",
      "formType": "mega",
      "types": [
        "rock",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png",
      "height": "2.1",
      "weight": "79.0",
      "abilities": [
        {
          "raw": "tough-claws",
          "name": "tough-claws",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 135,
        "defense": 85,
        "spAttack": 70,
        "spDefense": 95,
        "speed": 150,
        "total": 615
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "aerodactylite",
        "namePt": "Aerodactylita",
        "nameEn": "Aerodactylite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aerodactylite.png"
      }
    }
  ],
  "143": [
    {
      "formId": "snorlax-gmax",
      "speciesId": 143,
      "namePt": "Snorlax Gigantamax",
      "nameEn": "Gigantamax Snorlax",
      "formType": "gmax",
      "types": [
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10206.png",
      "height": "35.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "immunity",
          "name": "immunity",
          "is_hidden": false
        },
        {
          "raw": "thick-fat",
          "name": "thick-fat",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 160,
        "attack": 110,
        "defense": 65,
        "spAttack": 65,
        "spDefense": 110,
        "speed": 30,
        "total": 540
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Renovação G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Replenish.",
      "gmaxMove": {
        "namePt": "Renovação G-Max",
        "nameEn": "G-Max Replenish",
        "desc": "Um ataque com seu abdômen em flor que restaura frutas consumidas durante a partida."
      }
    }
  ],
  "144": [
    {
      "formId": "articuno-galar",
      "speciesId": 144,
      "namePt": "Articuno de Galar",
      "nameEn": "Galarian Articuno",
      "formType": "galar",
      "types": [
        "psychic",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10169.png",
      "height": "1.7",
      "weight": "50.9",
      "abilities": [
        {
          "raw": "competitive",
          "name": "competitive",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 85,
        "defense": 85,
        "spAttack": 125,
        "spDefense": 100,
        "speed": 95,
        "total": 580
      },
      "descriptionPt": "Forma especial Articuno de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Articuno form featuring unique elemental powers and battle abilities."
    }
  ],
  "145": [
    {
      "formId": "zapdos-galar",
      "speciesId": 145,
      "namePt": "Zapdos de Galar",
      "nameEn": "Galarian Zapdos",
      "formType": "galar",
      "types": [
        "fighting",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10170.png",
      "height": "1.6",
      "weight": "58.2",
      "abilities": [
        {
          "raw": "defiant",
          "name": "defiant",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 125,
        "defense": 90,
        "spAttack": 85,
        "spDefense": 90,
        "speed": 100,
        "total": 580
      },
      "descriptionPt": "Forma especial Zapdos de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Zapdos form featuring unique elemental powers and battle abilities."
    }
  ],
  "146": [
    {
      "formId": "moltres-galar",
      "speciesId": 146,
      "namePt": "Moltres de Galar",
      "nameEn": "Galarian Moltres",
      "formType": "galar",
      "types": [
        "dark",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png",
      "height": "2.0",
      "weight": "66.0",
      "abilities": [
        {
          "raw": "berserk",
          "name": "berserk",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 85,
        "defense": 90,
        "spAttack": 100,
        "spDefense": 125,
        "speed": 90,
        "total": 580
      },
      "descriptionPt": "Forma especial Moltres de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Moltres form featuring unique elemental powers and battle abilities."
    }
  ],
  "150": [
    {
      "formId": "mewtwo-mega-x",
      "speciesId": 150,
      "namePt": "Mega Mewtwo X",
      "nameEn": "Mega Mewtwo X",
      "formType": "mega",
      "types": [
        "psychic",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png",
      "height": "2.3",
      "weight": "127.0",
      "abilities": [
        {
          "raw": "steadfast",
          "name": "steadfast",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 106,
        "attack": 190,
        "defense": 100,
        "spAttack": 154,
        "spDefense": 100,
        "speed": 130,
        "total": 780
      },
      "descriptionPt": "Músculos psíquicos intensos desenvolvem-se em seus braços e pernas, permitindo desferir golpes corporais com força devastadora.",
      "descriptionEn": "Psychic power bulks up its muscles, granting it unparalleled physical power combined with formidable telekinesis.",
      "requiredItem": {
        "identifier": "mewtwonite-x",
        "namePt": "Mewtwonita X",
        "nameEn": "Mewtwonite X",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewtwonite-x.png"
      }
    },
    {
      "formId": "mewtwo-mega-y",
      "speciesId": 150,
      "namePt": "Mega Mewtwo Y",
      "nameEn": "Mega Mewtwo Y",
      "formType": "mega",
      "types": [
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png",
      "height": "1.5",
      "weight": "33.0",
      "abilities": [
        {
          "raw": "insomnia",
          "name": "insomnia",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 106,
        "attack": 150,
        "defense": 70,
        "spAttack": 194,
        "spDefense": 120,
        "speed": 140,
        "total": 780
      },
      "descriptionPt": "Seu corpo torna-se compacto e sua mente atinge poder sobrenatural imenso, canalizando ondas mentais com poder de pulverização.",
      "descriptionEn": "Its body shrinks while its brain power multiplies exponentially, unleashing mental waves capable of shattering skyscrapers.",
      "requiredItem": {
        "identifier": "mewtwonite-y",
        "namePt": "Mewtwonita Y",
        "nameEn": "Mewtwonite Y",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewtwonite-y.png"
      }
    }
  ],
  "157": [
    {
      "formId": "typhlosion-hisui",
      "speciesId": 157,
      "namePt": "Typhlosion de Hisui",
      "nameEn": "Hisuian Typhlosion",
      "formType": "hisui",
      "types": [
        "fire",
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png",
      "height": "1.6",
      "weight": "69.8",
      "abilities": [
        {
          "raw": "blaze",
          "name": "blaze",
          "is_hidden": false
        },
        {
          "raw": "frisk",
          "name": "frisk",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 73,
        "attack": 84,
        "defense": 78,
        "spAttack": 119,
        "spDefense": 85,
        "speed": 95,
        "total": 534
      },
      "descriptionPt": "Forma especial Typhlosion de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Typhlosion form featuring unique elemental powers and battle abilities."
    }
  ],
  "181": [
    {
      "formId": "ampharos-mega",
      "speciesId": 181,
      "namePt": "Mega Ampharos",
      "nameEn": "Mega Ampharos",
      "formType": "mega",
      "types": [
        "electric",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10045.png",
      "height": "1.4",
      "weight": "61.5",
      "abilities": [
        {
          "raw": "mold-breaker",
          "name": "mold-breaker",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 95,
        "defense": 105,
        "spAttack": 165,
        "spDefense": 110,
        "speed": 45,
        "total": 610
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "ampharosite",
        "namePt": "Ampharosito",
        "nameEn": "Ampharosite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ampharosite.png"
      }
    }
  ],
  "194": [
    {
      "formId": "wooper-paldea",
      "speciesId": 194,
      "namePt": "Wooper de Paldea",
      "nameEn": "Paldean Wooper",
      "formType": "paldea",
      "types": [
        "poison",
        "ground"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10253.png",
      "height": "0.4",
      "weight": "11.0",
      "abilities": [
        {
          "raw": "poison-point",
          "name": "poison-point",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 45,
        "defense": 45,
        "spAttack": 25,
        "spDefense": 25,
        "speed": 15,
        "total": 210
      },
      "descriptionPt": "Após perder disputas por território aquático em Paldea, passou a viver em pântanos lamacentos e cobriu o corpo com veneno espesso.",
      "descriptionEn": "After losing territorial battles in ancient Paldea, it took up residence on muddy land, coating itself in a poisonous film.",
      "requiredItem": null
    }
  ],
  "199": [
    {
      "formId": "slowking-galar",
      "speciesId": 199,
      "namePt": "Slowking de Galar",
      "nameEn": "Galarian Slowking",
      "formType": "galar",
      "types": [
        "poison",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png",
      "height": "1.8",
      "weight": "79.5",
      "abilities": [
        {
          "raw": "curious-medicine",
          "name": "curious-medicine",
          "is_hidden": false
        },
        {
          "raw": "own-tempo",
          "name": "own-tempo",
          "is_hidden": false
        },
        {
          "raw": "regenerator",
          "name": "regenerator",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 65,
        "defense": 80,
        "spAttack": 110,
        "spDefense": 110,
        "speed": 30,
        "total": 490
      },
      "descriptionPt": "Forma especial Slowking de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Slowking form featuring unique elemental powers and battle abilities."
    }
  ],
  "208": [
    {
      "formId": "steelix-mega",
      "speciesId": 208,
      "namePt": "Mega Steelix",
      "nameEn": "Mega Steelix",
      "formType": "mega",
      "types": [
        "steel",
        "ground"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10072.png",
      "height": "10.5",
      "weight": "740.0",
      "abilities": [
        {
          "raw": "sand-force",
          "name": "sand-force",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 125,
        "defense": 230,
        "spAttack": 55,
        "spDefense": 95,
        "speed": 30,
        "total": 610
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "steelixite",
        "namePt": "Steelixita",
        "nameEn": "Steelixite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/steelixite.png"
      }
    }
  ],
  "211": [
    {
      "formId": "qwilfish-hisui",
      "speciesId": 211,
      "namePt": "Qwilfish de Hisui",
      "nameEn": "Hisuian Qwilfish",
      "formType": "hisui",
      "types": [
        "dark",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10234.png",
      "height": "0.5",
      "weight": "3.9",
      "abilities": [
        {
          "raw": "poison-point",
          "name": "poison-point",
          "is_hidden": false
        },
        {
          "raw": "swift-swim",
          "name": "swift-swim",
          "is_hidden": false
        },
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 95,
        "defense": 85,
        "spAttack": 55,
        "spDefense": 55,
        "speed": 85,
        "total": 440
      },
      "descriptionPt": "Forma especial Qwilfish de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Qwilfish form featuring unique elemental powers and battle abilities."
    }
  ],
  "212": [
    {
      "formId": "scizor-mega",
      "speciesId": 212,
      "namePt": "Mega Scizor",
      "nameEn": "Mega Scizor",
      "formType": "mega",
      "types": [
        "bug",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10046.png",
      "height": "2.0",
      "weight": "125.0",
      "abilities": [
        {
          "raw": "technician",
          "name": "technician",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 150,
        "defense": 140,
        "spAttack": 65,
        "spDefense": 100,
        "speed": 75,
        "total": 600
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "scizorite",
        "namePt": "Scizorita",
        "nameEn": "Scizorite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/scizorite.png"
      }
    }
  ],
  "214": [
    {
      "formId": "heracross-mega",
      "speciesId": 214,
      "namePt": "Mega Heracross",
      "nameEn": "Mega Heracross",
      "formType": "mega",
      "types": [
        "bug",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10047.png",
      "height": "1.7",
      "weight": "62.5",
      "abilities": [
        {
          "raw": "skill-link",
          "name": "skill-link",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 185,
        "defense": 115,
        "spAttack": 40,
        "spDefense": 105,
        "speed": 75,
        "total": 600
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "heracronite",
        "namePt": "Heracrossita",
        "nameEn": "Heracronite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heracronite.png"
      }
    }
  ],
  "215": [
    {
      "formId": "sneasel-hisui",
      "speciesId": 215,
      "namePt": "Sneasel de Hisui",
      "nameEn": "Hisuian Sneasel",
      "formType": "hisui",
      "types": [
        "fighting",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10235.png",
      "height": "0.9",
      "weight": "27.0",
      "abilities": [
        {
          "raw": "inner-focus",
          "name": "inner-focus",
          "is_hidden": false
        },
        {
          "raw": "keen-eye",
          "name": "keen-eye",
          "is_hidden": false
        },
        {
          "raw": "pickpocket",
          "name": "pickpocket",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 95,
        "defense": 55,
        "spAttack": 35,
        "spDefense": 75,
        "speed": 115,
        "total": 430
      },
      "descriptionPt": "Forma especial Sneasel de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Sneasel form featuring unique elemental powers and battle abilities."
    }
  ],
  "222": [
    {
      "formId": "corsola-galar",
      "speciesId": 222,
      "namePt": "Corsola de Galar",
      "nameEn": "Galarian Corsola",
      "formType": "galar",
      "types": [
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png",
      "height": "0.6",
      "weight": "0.5",
      "abilities": [
        {
          "raw": "weak-armor",
          "name": "weak-armor",
          "is_hidden": false
        },
        {
          "raw": "cursed-body",
          "name": "cursed-body",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 55,
        "defense": 100,
        "spAttack": 65,
        "spDefense": 100,
        "speed": 30,
        "total": 410
      },
      "descriptionPt": "Forma especial Corsola de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Corsola form featuring unique elemental powers and battle abilities."
    }
  ],
  "229": [
    {
      "formId": "houndoom-mega",
      "speciesId": 229,
      "namePt": "Mega Houndoom",
      "nameEn": "Mega Houndoom",
      "formType": "mega",
      "types": [
        "dark",
        "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10048.png",
      "height": "1.9",
      "weight": "49.5",
      "abilities": [
        {
          "raw": "solar-power",
          "name": "solar-power",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 90,
        "defense": 90,
        "spAttack": 140,
        "spDefense": 90,
        "speed": 115,
        "total": 600
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "houndoominite",
        "namePt": "Houndoomita",
        "nameEn": "Houndoominite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/houndoominite.png"
      }
    }
  ],
  "248": [
    {
      "formId": "tyranitar-mega",
      "speciesId": 248,
      "namePt": "Mega Tyranitar",
      "nameEn": "Mega Tyranitar",
      "formType": "mega",
      "types": [
        "rock",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png",
      "height": "2.5",
      "weight": "255.0",
      "abilities": [
        {
          "raw": "sand-stream",
          "name": "sand-stream",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 164,
        "defense": 150,
        "spAttack": 95,
        "spDefense": 120,
        "speed": 71,
        "total": 700
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "tyranitarite",
        "namePt": "Tyranitarita",
        "nameEn": "Tyranitarite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tyranitarite.png"
      }
    }
  ],
  "254": [
    {
      "formId": "sceptile-mega",
      "speciesId": 254,
      "namePt": "Mega Sceptile",
      "nameEn": "Mega Sceptile",
      "formType": "mega",
      "types": [
        "grass",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10065.png",
      "height": "1.9",
      "weight": "55.2",
      "abilities": [
        {
          "raw": "lightning-rod",
          "name": "lightning-rod",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 110,
        "defense": 75,
        "spAttack": 145,
        "spDefense": 85,
        "speed": 145,
        "total": 630
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "sceptilite",
        "namePt": "Sceptilita",
        "nameEn": "Sceptilite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sceptilite.png"
      }
    }
  ],
  "257": [
    {
      "formId": "blaziken-mega",
      "speciesId": 257,
      "namePt": "Mega Blaziken",
      "nameEn": "Mega Blaziken",
      "formType": "mega",
      "types": [
        "fire",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png",
      "height": "1.9",
      "weight": "52.0",
      "abilities": [
        {
          "raw": "speed-boost",
          "name": "speed-boost",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 160,
        "defense": 80,
        "spAttack": 130,
        "spDefense": 80,
        "speed": 100,
        "total": 630
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "blazikenite",
        "namePt": "Blazikenita",
        "nameEn": "Blazikenite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blazikenite.png"
      }
    }
  ],
  "260": [
    {
      "formId": "swampert-mega",
      "speciesId": 260,
      "namePt": "Mega Swampert",
      "nameEn": "Mega Swampert",
      "formType": "mega",
      "types": [
        "water",
        "ground"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10064.png",
      "height": "1.9",
      "weight": "102.0",
      "abilities": [
        {
          "raw": "swift-swim",
          "name": "swift-swim",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 150,
        "defense": 110,
        "spAttack": 95,
        "spDefense": 110,
        "speed": 70,
        "total": 635
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "swampertite",
        "namePt": "Swampertita",
        "nameEn": "Swampertite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/swampertite.png"
      }
    }
  ],
  "263": [
    {
      "formId": "zigzagoon-galar",
      "speciesId": 263,
      "namePt": "Zigzagoon de Galar",
      "nameEn": "Galarian Zigzagoon",
      "formType": "galar",
      "types": [
        "dark",
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10174.png",
      "height": "0.4",
      "weight": "17.5",
      "abilities": [
        {
          "raw": "pickup",
          "name": "pickup",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "quick-feet",
          "name": "quick-feet",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 38,
        "attack": 30,
        "defense": 41,
        "spAttack": 30,
        "spDefense": 41,
        "speed": 60,
        "total": 240
      },
      "descriptionPt": "Forma especial Zigzagoon de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Zigzagoon form featuring unique elemental powers and battle abilities."
    }
  ],
  "264": [
    {
      "formId": "linoone-galar",
      "speciesId": 264,
      "namePt": "Linoone de Galar",
      "nameEn": "Galarian Linoone",
      "formType": "galar",
      "types": [
        "dark",
        "normal"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10175.png",
      "height": "0.5",
      "weight": "32.5",
      "abilities": [
        {
          "raw": "pickup",
          "name": "pickup",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "quick-feet",
          "name": "quick-feet",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 78,
        "attack": 70,
        "defense": 61,
        "spAttack": 50,
        "spDefense": 61,
        "speed": 100,
        "total": 420
      },
      "descriptionPt": "Forma especial Linoone de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Linoone form featuring unique elemental powers and battle abilities."
    }
  ],
  "282": [
    {
      "formId": "gardevoir-mega",
      "speciesId": 282,
      "namePt": "Mega Gardevoir",
      "nameEn": "Mega Gardevoir",
      "formType": "mega",
      "types": [
        "psychic",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png",
      "height": "1.6",
      "weight": "48.4",
      "abilities": [
        {
          "raw": "pixilate",
          "name": "pixilate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 68,
        "attack": 85,
        "defense": 65,
        "spAttack": 165,
        "spDefense": 135,
        "speed": 100,
        "total": 618
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "gardevoirite",
        "namePt": "Gardevoirita",
        "nameEn": "Gardevoirite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gardevoirite.png"
      }
    }
  ],
  "302": [
    {
      "formId": "sableye-mega",
      "speciesId": 302,
      "namePt": "Mega Sableye",
      "nameEn": "Mega Sableye",
      "formType": "mega",
      "types": [
        "dark",
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10066.png",
      "height": "0.5",
      "weight": "161.0",
      "abilities": [
        {
          "raw": "magic-bounce",
          "name": "magic-bounce",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 85,
        "defense": 125,
        "spAttack": 85,
        "spDefense": 115,
        "speed": 20,
        "total": 480
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "sablenite",
        "namePt": "Sablenita",
        "nameEn": "Sablenite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sablenite.png"
      }
    }
  ],
  "303": [
    {
      "formId": "mawile-mega",
      "speciesId": 303,
      "namePt": "Mega Mawile",
      "nameEn": "Mega Mawile",
      "formType": "mega",
      "types": [
        "steel",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10052.png",
      "height": "1.0",
      "weight": "23.5",
      "abilities": [
        {
          "raw": "huge-power",
          "name": "huge-power",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 105,
        "defense": 125,
        "spAttack": 55,
        "spDefense": 95,
        "speed": 50,
        "total": 480
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "mawilite",
        "namePt": "Mawilita",
        "nameEn": "Mawilite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mawilite.png"
      }
    }
  ],
  "306": [
    {
      "formId": "aggron-mega",
      "speciesId": 306,
      "namePt": "Mega Aggron",
      "nameEn": "Mega Aggron",
      "formType": "mega",
      "types": [
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10053.png",
      "height": "2.2",
      "weight": "395.0",
      "abilities": [
        {
          "raw": "filter",
          "name": "filter",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 140,
        "defense": 230,
        "spAttack": 60,
        "spDefense": 80,
        "speed": 50,
        "total": 630
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "aggronite",
        "namePt": "Aggronita",
        "nameEn": "Aggronite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aggronite.png"
      }
    }
  ],
  "308": [
    {
      "formId": "medicham-mega",
      "speciesId": 308,
      "namePt": "Mega Medicham",
      "nameEn": "Mega Medicham",
      "formType": "mega",
      "types": [
        "fighting",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10054.png",
      "height": "1.3",
      "weight": "31.5",
      "abilities": [
        {
          "raw": "pure-power",
          "name": "pure-power",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 100,
        "defense": 85,
        "spAttack": 80,
        "spDefense": 85,
        "speed": 100,
        "total": 510
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "medichamite",
        "namePt": "Medichamita",
        "nameEn": "Medichamite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/medichamite.png"
      }
    }
  ],
  "310": [
    {
      "formId": "manectric-mega",
      "speciesId": 310,
      "namePt": "Mega Manectric",
      "nameEn": "Mega Manectric",
      "formType": "mega",
      "types": [
        "electric"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10055.png",
      "height": "1.8",
      "weight": "44.0",
      "abilities": [
        {
          "raw": "intimidate",
          "name": "intimidate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 75,
        "defense": 80,
        "spAttack": 135,
        "spDefense": 80,
        "speed": 135,
        "total": 575
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "manectite",
        "namePt": "Manectrita",
        "nameEn": "Manectite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/manectite.png"
      }
    }
  ],
  "319": [
    {
      "formId": "sharpedo-mega",
      "speciesId": 319,
      "namePt": "Mega Sharpedo",
      "nameEn": "Mega Sharpedo",
      "formType": "mega",
      "types": [
        "water",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10070.png",
      "height": "2.5",
      "weight": "130.3",
      "abilities": [
        {
          "raw": "strong-jaw",
          "name": "strong-jaw",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 140,
        "defense": 70,
        "spAttack": 110,
        "spDefense": 65,
        "speed": 105,
        "total": 560
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "sharpedonite",
        "namePt": "Sharpedonita",
        "nameEn": "Sharpedonite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sharpedonite.png"
      }
    }
  ],
  "323": [
    {
      "formId": "camerupt-mega",
      "speciesId": 323,
      "namePt": "Mega Camerupt",
      "nameEn": "Mega Camerupt",
      "formType": "mega",
      "types": [
        "fire",
        "ground"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10087.png",
      "height": "2.5",
      "weight": "320.5",
      "abilities": [
        {
          "raw": "sheer-force",
          "name": "sheer-force",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 120,
        "defense": 100,
        "spAttack": 145,
        "spDefense": 105,
        "speed": 20,
        "total": 560
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "cameruptite",
        "namePt": "Cameruptita",
        "nameEn": "Cameruptite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cameruptite.png"
      }
    }
  ],
  "334": [
    {
      "formId": "altaria-mega",
      "speciesId": 334,
      "namePt": "Mega Altaria",
      "nameEn": "Mega Altaria",
      "formType": "mega",
      "types": [
        "dragon",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10067.png",
      "height": "1.5",
      "weight": "20.6",
      "abilities": [
        {
          "raw": "pixilate",
          "name": "pixilate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 110,
        "defense": 110,
        "spAttack": 110,
        "spDefense": 105,
        "speed": 80,
        "total": 590
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "altarianite",
        "namePt": "Altarianita",
        "nameEn": "Altarianite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/altarianite.png"
      }
    }
  ],
  "354": [
    {
      "formId": "banette-mega",
      "speciesId": 354,
      "namePt": "Mega Banette",
      "nameEn": "Mega Banette",
      "formType": "mega",
      "types": [
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10056.png",
      "height": "1.2",
      "weight": "13.0",
      "abilities": [
        {
          "raw": "prankster",
          "name": "prankster",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 64,
        "attack": 165,
        "defense": 75,
        "spAttack": 93,
        "spDefense": 83,
        "speed": 75,
        "total": 555
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "banettite",
        "namePt": "Banettita",
        "nameEn": "Banettite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/banettite.png"
      }
    }
  ],
  "359": [
    {
      "formId": "absol-mega",
      "speciesId": 359,
      "namePt": "Mega Absol",
      "nameEn": "Mega Absol",
      "formType": "mega",
      "types": [
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png",
      "height": "1.2",
      "weight": "49.0",
      "abilities": [
        {
          "raw": "magic-bounce",
          "name": "magic-bounce",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 150,
        "defense": 60,
        "spAttack": 115,
        "spDefense": 60,
        "speed": 115,
        "total": 565
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "absolite",
        "namePt": "Absolita",
        "nameEn": "Absolite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/absolite.png"
      }
    }
  ],
  "362": [
    {
      "formId": "glalie-mega",
      "speciesId": 362,
      "namePt": "Mega Glalie",
      "nameEn": "Mega Glalie",
      "formType": "mega",
      "types": [
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10074.png",
      "height": "2.1",
      "weight": "350.2",
      "abilities": [
        {
          "raw": "refrigerate",
          "name": "refrigerate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 120,
        "defense": 80,
        "spAttack": 120,
        "spDefense": 80,
        "speed": 100,
        "total": 580
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "glalitite",
        "namePt": "Glalitita",
        "nameEn": "Glalitite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/glalitite.png"
      }
    }
  ],
  "373": [
    {
      "formId": "salamence-mega",
      "speciesId": 373,
      "namePt": "Mega Salamence",
      "nameEn": "Mega Salamence",
      "formType": "mega",
      "types": [
        "dragon",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png",
      "height": "1.8",
      "weight": "112.6",
      "abilities": [
        {
          "raw": "aerilate",
          "name": "aerilate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 145,
        "defense": 130,
        "spAttack": 120,
        "spDefense": 90,
        "speed": 120,
        "total": 700
      },
      "descriptionPt": "Suas duas asas fundem-se em uma única e gigantesca asa em formato de lâmina crescente, atingindo velocidades supersônicas.",
      "descriptionEn": "Its two wings fuse into a single massive crescent blade, letting it soar at supersonic speeds while slicing obstacles.",
      "requiredItem": {
        "identifier": "salamencite",
        "namePt": "Salamencita",
        "nameEn": "Salamencite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/salamencite.png"
      }
    }
  ],
  "376": [
    {
      "formId": "metagross-mega",
      "speciesId": 376,
      "namePt": "Mega Metagross",
      "nameEn": "Mega Metagross",
      "formType": "mega",
      "types": [
        "steel",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10076.png",
      "height": "2.5",
      "weight": "942.9",
      "abilities": [
        {
          "raw": "tough-claws",
          "name": "tough-claws",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 145,
        "defense": 150,
        "spAttack": 105,
        "spDefense": 110,
        "speed": 110,
        "total": 700
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "metagrossite",
        "namePt": "Metagrossita",
        "nameEn": "Metagrossite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metagrossite.png"
      }
    }
  ],
  "380": [
    {
      "formId": "latias-mega",
      "speciesId": 380,
      "namePt": "Mega Latias",
      "nameEn": "Mega Latias",
      "formType": "mega",
      "types": [
        "dragon",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10062.png",
      "height": "1.8",
      "weight": "52.0",
      "abilities": [
        {
          "raw": "levitate",
          "name": "levitate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 100,
        "defense": 120,
        "spAttack": 140,
        "spDefense": 150,
        "speed": 110,
        "total": 700
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "latiasite",
        "namePt": "Latiasita",
        "nameEn": "Latiasite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/latiasite.png"
      }
    }
  ],
  "381": [
    {
      "formId": "latios-mega",
      "speciesId": 381,
      "namePt": "Mega Latios",
      "nameEn": "Mega Latios",
      "formType": "mega",
      "types": [
        "dragon",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10063.png",
      "height": "2.3",
      "weight": "70.0",
      "abilities": [
        {
          "raw": "levitate",
          "name": "levitate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 130,
        "defense": 100,
        "spAttack": 160,
        "spDefense": 120,
        "speed": 110,
        "total": 700
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "latiosite",
        "namePt": "Latiosita",
        "nameEn": "Latiosite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/latiosite.png"
      }
    }
  ],
  "382": [
    {
      "formId": "kyogre-primal",
      "speciesId": 382,
      "namePt": "Kyogre Primitivo",
      "nameEn": "Primal Kyogre",
      "formType": "primal",
      "types": [
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10077.png",
      "height": "9.8",
      "weight": "430.0",
      "abilities": [
        {
          "raw": "primordial-sea",
          "name": "primordial-sea",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 150,
        "defense": 90,
        "spAttack": 180,
        "spDefense": 160,
        "speed": 90,
        "total": 770
      },
      "descriptionPt": "Através da Reversão Primitiva e da energia natural dos oceanos, reassume sua forma ancestral com domínio absoluto sobre os mares.",
      "descriptionEn": "Through Primal Reversion and natural oceanic energy, it regains its primordial form with absolute dominion over the sea.",
      "requiredItem": {
        "identifier": "blue-orb",
        "namePt": "Orbe Azul",
        "nameEn": "Blue Orb",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blue-orb.png"
      }
    }
  ],
  "383": [
    {
      "formId": "groudon-primal",
      "speciesId": 383,
      "namePt": "Groudon Primitivo",
      "nameEn": "Primal Groudon",
      "formType": "primal",
      "types": [
        "ground",
        "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10078.png",
      "height": "5.0",
      "weight": "999.7",
      "abilities": [
        {
          "raw": "desolate-land",
          "name": "desolate-land",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 180,
        "defense": 160,
        "spAttack": 150,
        "spDefense": 90,
        "speed": 90,
        "total": 770
      },
      "descriptionPt": "A energia da terra preenche seu corpo com calor magmático intenso, expandindo a massa continental por onde pisa.",
      "descriptionEn": "The raw energy of the earth fills its body with searing magmatic heat, expanding landmasses wherever it strides.",
      "requiredItem": {
        "identifier": "red-orb",
        "namePt": "Orbe Vermelho",
        "nameEn": "Red Orb",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/red-orb.png"
      }
    }
  ],
  "384": [
    {
      "formId": "rayquaza-mega",
      "speciesId": 384,
      "namePt": "Mega Rayquaza",
      "nameEn": "Mega Rayquaza",
      "formType": "mega",
      "types": [
        "dragon",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png",
      "height": "10.8",
      "weight": "392.0",
      "abilities": [
        {
          "raw": "delta-stream",
          "name": "delta-stream",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 105,
        "attack": 180,
        "defense": 100,
        "spAttack": 180,
        "spDefense": 100,
        "speed": 115,
        "total": 780
      },
      "descriptionPt": "Mega-evolui ao dominar o golpe Ascensão do Dragão e consumir meteoritos na camada de ozônio, controlando vendavais lendários.",
      "descriptionEn": "Mega Evolving by knowing the move Dragon Ascent, it consumes meteorites in the ozone layer to summon ancient gale winds.",
      "requiredItem": null
    }
  ],
  "428": [
    {
      "formId": "lopunny-mega",
      "speciesId": 428,
      "namePt": "Mega Lopunny",
      "nameEn": "Mega Lopunny",
      "formType": "mega",
      "types": [
        "normal",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10088.png",
      "height": "1.3",
      "weight": "28.3",
      "abilities": [
        {
          "raw": "scrappy",
          "name": "scrappy",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 136,
        "defense": 94,
        "spAttack": 54,
        "spDefense": 96,
        "speed": 135,
        "total": 580
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "lopunnite",
        "namePt": "Lopunnita",
        "nameEn": "Lopunnite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lopunnite.png"
      }
    }
  ],
  "445": [
    {
      "formId": "garchomp-mega",
      "speciesId": 445,
      "namePt": "Mega Garchomp",
      "nameEn": "Mega Garchomp",
      "formType": "mega",
      "types": [
        "dragon",
        "ground"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png",
      "height": "1.9",
      "weight": "95.0",
      "abilities": [
        {
          "raw": "sand-force",
          "name": "sand-force",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 108,
        "attack": 170,
        "defense": 115,
        "spAttack": 120,
        "spDefense": 95,
        "speed": 92,
        "total": 700
      },
      "descriptionPt": "O excesso de energia derrete e transforma seus braços em foices colossais de lâmina afiada, movidas por fúria incontrolável.",
      "descriptionEn": "Excess Mega Energy melts its arms and wings, reforming them into giant scythes driven by berserk draconic rage.",
      "requiredItem": {
        "identifier": "garchompite",
        "namePt": "Garchompita",
        "nameEn": "Garchompite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/garchompite.png"
      }
    }
  ],
  "448": [
    {
      "formId": "lucario-mega",
      "speciesId": 448,
      "namePt": "Mega Lucario",
      "nameEn": "Mega Lucario",
      "formType": "mega",
      "types": [
        "fighting",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png",
      "height": "1.3",
      "weight": "57.5",
      "abilities": [
        {
          "raw": "adaptability",
          "name": "adaptability",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 145,
        "defense": 88,
        "spAttack": 140,
        "spDefense": 70,
        "speed": 112,
        "total": 625
      },
      "descriptionPt": "Sua aura concentra-se intensamente nos punhos e pés, desferindo golpes de combate com adaptação e precisão fulminantes.",
      "descriptionEn": "Its aura focuses with intense purity around its limbs, allowing it to unleash devastating close-quarters strikes.",
      "requiredItem": {
        "identifier": "lucarionite",
        "namePt": "Lucarionita",
        "nameEn": "Lucarionite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucarionite.png"
      }
    }
  ],
  "460": [
    {
      "formId": "abomasnow-mega",
      "speciesId": 460,
      "namePt": "Mega Abomasnow",
      "nameEn": "Mega Abomasnow",
      "formType": "mega",
      "types": [
        "grass",
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10060.png",
      "height": "2.7",
      "weight": "185.0",
      "abilities": [
        {
          "raw": "snow-warning",
          "name": "snow-warning",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 132,
        "defense": 105,
        "spAttack": 132,
        "spDefense": 105,
        "speed": 30,
        "total": 594
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "abomasite",
        "namePt": "Abomasnowita",
        "nameEn": "Abomasite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/abomasite.png"
      }
    }
  ],
  "475": [
    {
      "formId": "gallade-mega",
      "speciesId": 475,
      "namePt": "Mega Gallade",
      "nameEn": "Mega Gallade",
      "formType": "mega",
      "types": [
        "psychic",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10068.png",
      "height": "1.6",
      "weight": "56.4",
      "abilities": [
        {
          "raw": "inner-focus",
          "name": "inner-focus",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 68,
        "attack": 165,
        "defense": 95,
        "spAttack": 65,
        "spDefense": 115,
        "speed": 110,
        "total": 618
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "galladite",
        "namePt": "Galladita",
        "nameEn": "Galladite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/galladite.png"
      }
    }
  ],
  "483": [
    {
      "formId": "dialga-origin",
      "speciesId": 483,
      "namePt": "Dialga (Forma Origem)",
      "nameEn": "Origin Dialga",
      "formType": "origin",
      "types": [
        "steel",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10245.png",
      "height": "7.0",
      "weight": "850.0",
      "abilities": [
        {
          "raw": "telepathy",
          "name": "telepathy",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 100,
        "defense": 120,
        "spAttack": 150,
        "spDefense": 120,
        "speed": 90,
        "total": 680
      },
      "descriptionPt": "Assume sua forma ancestral verdadeira empunhando o Cristal Adamantino, com controle total sobre o fluxo e direção do tempo.",
      "descriptionEn": "It assumes its true primordial form through the Adamant Crystal, commanding the very flow and currents of time.",
      "requiredItem": {
        "identifier": "adamant-crystal",
        "namePt": "Cristal Adamantino",
        "nameEn": "Adamant Crystal",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/adamant-crystal.png"
      }
    }
  ],
  "484": [
    {
      "formId": "palkia-origin",
      "speciesId": 484,
      "namePt": "Palkia (Forma Origem)",
      "nameEn": "Origin Palkia",
      "formType": "origin",
      "types": [
        "water",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10246.png",
      "height": "6.3",
      "weight": "660.0",
      "abilities": [
        {
          "raw": "telepathy",
          "name": "telepathy",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 100,
        "defense": 100,
        "spAttack": 150,
        "spDefense": 120,
        "speed": 120,
        "total": 680
      },
      "descriptionPt": "Reveste-se de sua forma cósmica primordial empunhando o Globo Lustroso, capaz de dobrar e distorcer as dimensões espaciais.",
      "descriptionEn": "It manifests its celestial form via the Lustrous Globe, manipulating and reshaping spatial dimensions at will.",
      "requiredItem": {
        "identifier": "lustrous-globe",
        "namePt": "Globo Lustroso",
        "nameEn": "Lustrous Globe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lustrous-globe.png"
      }
    }
  ],
  "487": [
    {
      "formId": "giratina-origin",
      "speciesId": 487,
      "namePt": "Giratina (Forma Origem)",
      "nameEn": "Origin Giratina",
      "formType": "origin",
      "types": [
        "ghost",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10007.png",
      "height": "6.9",
      "weight": "650.0",
      "abilities": [
        {
          "raw": "levitate",
          "name": "levitate",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 150,
        "attack": 120,
        "defense": 100,
        "spAttack": 120,
        "spDefense": 100,
        "speed": 90,
        "total": 680
      },
      "descriptionPt": "Forma adotada no Mundo da Distorção ou segurando o Núcleo Brilhante, flutuando livre da gravidade deste universo.",
      "descriptionEn": "Its true form within the Distortion World or when holding the Griseous Core, gliding weightlessly beyond earthly physics.",
      "requiredItem": {
        "identifier": "griseous-core",
        "namePt": "Núcleo Brilhante",
        "nameEn": "Griseous Core",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/griseous-core.png"
      }
    }
  ],
  "503": [
    {
      "formId": "samurott-hisui",
      "speciesId": 503,
      "namePt": "Samurott de Hisui",
      "nameEn": "Hisuian Samurott",
      "formType": "hisui",
      "types": [
        "water",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png",
      "height": "1.5",
      "weight": "58.2",
      "abilities": [
        {
          "raw": "torrent",
          "name": "torrent",
          "is_hidden": false
        },
        {
          "raw": "sharpness",
          "name": "sharpness",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 108,
        "defense": 80,
        "spAttack": 100,
        "spDefense": 65,
        "speed": 85,
        "total": 528
      },
      "descriptionPt": "Forma especial Samurott de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Samurott form featuring unique elemental powers and battle abilities."
    }
  ],
  "531": [
    {
      "formId": "audino-mega",
      "speciesId": 531,
      "namePt": "Mega Audino",
      "nameEn": "Mega Audino",
      "formType": "mega",
      "types": [
        "normal",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10069.png",
      "height": "1.5",
      "weight": "32.0",
      "abilities": [
        {
          "raw": "healer",
          "name": "healer",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 103,
        "attack": 60,
        "defense": 126,
        "spAttack": 80,
        "spDefense": 126,
        "speed": 50,
        "total": 545
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "audinite",
        "namePt": "Audinita",
        "nameEn": "Audinite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/audinite.png"
      }
    }
  ],
  "549": [
    {
      "formId": "lilligant-hisui",
      "speciesId": 549,
      "namePt": "Lilligant de Hisui",
      "nameEn": "Hisuian Lilligant",
      "formType": "hisui",
      "types": [
        "grass",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10237.png",
      "height": "1.2",
      "weight": "19.2",
      "abilities": [
        {
          "raw": "chlorophyll",
          "name": "chlorophyll",
          "is_hidden": false
        },
        {
          "raw": "hustle",
          "name": "hustle",
          "is_hidden": false
        },
        {
          "raw": "leaf-guard",
          "name": "leaf-guard",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 105,
        "defense": 75,
        "spAttack": 50,
        "spDefense": 75,
        "speed": 105,
        "total": 480
      },
      "descriptionPt": "Forma especial Lilligant de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Lilligant form featuring unique elemental powers and battle abilities."
    }
  ],
  "554": [
    {
      "formId": "darumaka-galar",
      "speciesId": 554,
      "namePt": "Darumaka de Galar",
      "nameEn": "Galarian Darumaka",
      "formType": "galar",
      "types": [
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png",
      "height": "0.7",
      "weight": "40.0",
      "abilities": [
        {
          "raw": "hustle",
          "name": "hustle",
          "is_hidden": false
        },
        {
          "raw": "inner-focus",
          "name": "inner-focus",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 90,
        "defense": 45,
        "spAttack": 15,
        "spDefense": 45,
        "speed": 50,
        "total": 315
      },
      "descriptionPt": "Forma especial Darumaka de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Darumaka form featuring unique elemental powers and battle abilities."
    }
  ],
  "555": [
    {
      "formId": "darmanitan-galar",
      "speciesId": 555,
      "namePt": "Darmanitan de Galar",
      "nameEn": "Galarian Darmanitan",
      "formType": "galar",
      "types": [
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png",
      "height": "1.7",
      "weight": "120.0",
      "abilities": [
        {
          "raw": "gorilla-tactics",
          "name": "gorilla-tactics",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 105,
        "attack": 140,
        "defense": 55,
        "spAttack": 30,
        "spDefense": 55,
        "speed": 95,
        "total": 480
      },
      "requiredItem": null,
      "descriptionPt": "Adaptou-se a climas frios de Galar, guardando uma enorme bola de neve sobre a cabeça para usar como arma de arremesso.",
      "descriptionEn": "Adapted to the frigid climate of Galar, it cools down its fiery temper and preserves giant snowballs on its head."
    },
    {
      "formId": "darmanitan-galar-standard",
      "speciesId": 555,
      "namePt": "Darmanitan de Galar",
      "nameEn": "Galarian Darmanitan",
      "formType": "galar",
      "types": [
        "ice"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png",
      "height": "1.7",
      "weight": "120.0",
      "abilities": [
        {
          "raw": "gorilla-tactics",
          "name": "gorilla-tactics",
          "is_hidden": false
        },
        {
          "raw": "zen-mode",
          "name": "zen-mode",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 105,
        "attack": 140,
        "defense": 55,
        "spAttack": 30,
        "spDefense": 55,
        "speed": 95,
        "total": 480
      },
      "descriptionPt": "Forma especial Darmanitan de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Darmanitan form featuring unique elemental powers and battle abilities."
    }
  ],
  "562": [
    {
      "formId": "yamask-galar",
      "speciesId": 562,
      "namePt": "Yamask de Galar",
      "nameEn": "Galarian Yamask",
      "formType": "galar",
      "types": [
        "ground",
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png",
      "height": "0.5",
      "weight": "1.5",
      "abilities": [
        {
          "raw": "wandering-spirit",
          "name": "wandering-spirit",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 38,
        "attack": 55,
        "defense": 85,
        "spAttack": 30,
        "spDefense": 65,
        "speed": 30,
        "total": 303
      },
      "descriptionPt": "Forma especial Yamask de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Yamask form featuring unique elemental powers and battle abilities."
    }
  ],
  "569": [
    {
      "formId": "garbodor-gmax",
      "speciesId": 569,
      "namePt": "Garbodor Gigantamax",
      "nameEn": "Gigantamax Garbodor",
      "formType": "gmax",
      "types": [
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10207.png",
      "height": "21.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "stench",
          "name": "stench",
          "is_hidden": false
        },
        {
          "raw": "weak-armor",
          "name": "weak-armor",
          "is_hidden": false
        },
        {
          "raw": "aftermath",
          "name": "aftermath",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 95,
        "defense": 82,
        "spAttack": 60,
        "spDefense": 82,
        "speed": 75,
        "total": 474
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Dejetos G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Malodor.",
      "gmaxMove": {
        "namePt": "Dejetos G-Max",
        "nameEn": "G-Max Malodor",
        "desc": "Lança montanhas de lixo tóxico que envenenam infalivelmente todos os adversários."
      }
    }
  ],
  "570": [
    {
      "formId": "zorua-hisui",
      "speciesId": 570,
      "namePt": "Zorua de Hisui",
      "nameEn": "Hisuian Zorua",
      "formType": "hisui",
      "types": [
        "normal",
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png",
      "height": "0.7",
      "weight": "12.5",
      "abilities": [
        {
          "raw": "illusion",
          "name": "illusion",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 35,
        "attack": 60,
        "defense": 40,
        "spAttack": 85,
        "spDefense": 40,
        "speed": 70,
        "total": 330
      },
      "descriptionPt": "Forma especial Zorua de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Zorua form featuring unique elemental powers and battle abilities."
    }
  ],
  "571": [
    {
      "formId": "zoroark-hisui",
      "speciesId": 571,
      "namePt": "Zoroark de Hisui",
      "nameEn": "Hisuian Zoroark",
      "formType": "hisui",
      "types": [
        "normal",
        "ghost"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png",
      "height": "1.6",
      "weight": "73.0",
      "abilities": [
        {
          "raw": "illusion",
          "name": "illusion",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 55,
        "attack": 100,
        "defense": 60,
        "spAttack": 125,
        "spDefense": 60,
        "speed": 110,
        "total": 510
      },
      "descriptionPt": "Ressuscitado por puro rancor contra humanos e Pokémon, projeta ilusões assombrosas cheias de malevolência gélida.",
      "descriptionEn": "Reborn from sheer spite in the harsh wilderness of Hisui, it projects terrifying spectral illusions laced with malice.",
      "requiredItem": null
    }
  ],
  "618": [
    {
      "formId": "stunfisk-galar",
      "speciesId": 618,
      "namePt": "Stunfisk de Galar",
      "nameEn": "Galarian Stunfisk",
      "formType": "galar",
      "types": [
        "ground",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png",
      "height": "0.7",
      "weight": "20.5",
      "abilities": [
        {
          "raw": "mimicry",
          "name": "mimicry",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 109,
        "attack": 81,
        "defense": 99,
        "spAttack": 66,
        "spDefense": 84,
        "speed": 32,
        "total": 471
      },
      "descriptionPt": "Forma especial Stunfisk de Galar com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Galarian Stunfisk form featuring unique elemental powers and battle abilities."
    }
  ],
  "628": [
    {
      "formId": "braviary-hisui",
      "speciesId": 628,
      "namePt": "Braviary de Hisui",
      "nameEn": "Hisuian Braviary",
      "formType": "hisui",
      "types": [
        "psychic",
        "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10240.png",
      "height": "1.7",
      "weight": "43.4",
      "abilities": [
        {
          "raw": "keen-eye",
          "name": "keen-eye",
          "is_hidden": false
        },
        {
          "raw": "sheer-force",
          "name": "sheer-force",
          "is_hidden": false
        },
        {
          "raw": "tinted-lens",
          "name": "tinted-lens",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 110,
        "attack": 83,
        "defense": 70,
        "spAttack": 112,
        "spDefense": 70,
        "speed": 65,
        "total": 510
      },
      "descriptionPt": "Forma especial Braviary de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Braviary form featuring unique elemental powers and battle abilities."
    }
  ],
  "705": [
    {
      "formId": "sliggoo-hisui",
      "speciesId": 705,
      "namePt": "Sliggoo de Hisui",
      "nameEn": "Hisuian Sliggoo",
      "formType": "hisui",
      "types": [
        "steel",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10241.png",
      "height": "0.7",
      "weight": "68.5",
      "abilities": [
        {
          "raw": "sap-sipper",
          "name": "sap-sipper",
          "is_hidden": false
        },
        {
          "raw": "shell-armor",
          "name": "shell-armor",
          "is_hidden": false
        },
        {
          "raw": "gooey",
          "name": "gooey",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 58,
        "attack": 75,
        "defense": 83,
        "spAttack": 83,
        "spDefense": 113,
        "speed": 40,
        "total": 452
      },
      "descriptionPt": "Forma especial Sliggoo de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Sliggoo form featuring unique elemental powers and battle abilities."
    }
  ],
  "706": [
    {
      "formId": "goodra-hisui",
      "speciesId": 706,
      "namePt": "Goodra de Hisui",
      "nameEn": "Hisuian Goodra",
      "formType": "hisui",
      "types": [
        "steel",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png",
      "height": "1.7",
      "weight": "334.1",
      "abilities": [
        {
          "raw": "sap-sipper",
          "name": "sap-sipper",
          "is_hidden": false
        },
        {
          "raw": "shell-armor",
          "name": "shell-armor",
          "is_hidden": false
        },
        {
          "raw": "gooey",
          "name": "gooey",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 100,
        "defense": 100,
        "spAttack": 110,
        "spDefense": 150,
        "speed": 60,
        "total": 600
      },
      "descriptionPt": "Forma especial Goodra de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Goodra form featuring unique elemental powers and battle abilities."
    }
  ],
  "713": [
    {
      "formId": "avalugg-hisui",
      "speciesId": 713,
      "namePt": "Avalugg de Hisui",
      "nameEn": "Hisuian Avalugg",
      "formType": "hisui",
      "types": [
        "ice",
        "rock"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png",
      "height": "1.4",
      "weight": "262.4",
      "abilities": [
        {
          "raw": "strong-jaw",
          "name": "strong-jaw",
          "is_hidden": false
        },
        {
          "raw": "ice-body",
          "name": "ice-body",
          "is_hidden": false
        },
        {
          "raw": "sturdy",
          "name": "sturdy",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 127,
        "defense": 184,
        "spAttack": 34,
        "spDefense": 36,
        "speed": 38,
        "total": 514
      },
      "descriptionPt": "Forma especial Avalugg de Hisui com poderes elementais e habilidades únicas de combate.",
      "descriptionEn": "Special Hisuian Avalugg form featuring unique elemental powers and battle abilities."
    }
  ],
  "719": [
    {
      "formId": "diancie-mega",
      "speciesId": 719,
      "namePt": "Mega Diancie",
      "nameEn": "Mega Diancie",
      "formType": "mega",
      "types": [
        "rock",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10075.png",
      "height": "1.1",
      "weight": "27.8",
      "abilities": [
        {
          "raw": "magic-bounce",
          "name": "magic-bounce",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 50,
        "attack": 160,
        "defense": 110,
        "spAttack": 160,
        "spDefense": 110,
        "speed": 110,
        "total": 700
      },
      "descriptionPt": "Megaevolução despertada pelo poder da Mega Pedra, elevando seu potencial de combate e somando +100 pontos ao BST.",
      "descriptionEn": "Mega Evolution unlocked by Mega Stone energy, enhancing combat potential and adding +100 to BST.",
      "requiredItem": {
        "identifier": "diancite",
        "namePt": "Diancita",
        "nameEn": "Diancite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/diancite.png"
      }
    }
  ],
  "724": [
    {
      "formId": "decidueye-hisui",
      "speciesId": 724,
      "namePt": "Decidueye de Hisui",
      "nameEn": "Hisuian Decidueye",
      "formType": "hisui",
      "types": [
        "grass",
        "fighting"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png",
      "height": "1.6",
      "weight": "37.0",
      "abilities": [
        {
          "raw": "scrappy",
          "name": "scrappy",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 88,
        "attack": 112,
        "defense": 80,
        "spAttack": 95,
        "spDefense": 95,
        "speed": 60,
        "total": 530
      },
      "descriptionPt": "Desenvolveu pernas poderosas para suportar nevascas severas de Hisui, especializando-se em combate corpo a corpo feroz.",
      "descriptionEn": "It developed sturdy legs to withstand severe Hisuian snows, excelling in fierce close-quarters combat.",
      "requiredItem": null
    }
  ],
  "809": [
    {
      "formId": "melmetal-gmax",
      "speciesId": 809,
      "namePt": "Melmetal Gigantamax",
      "nameEn": "Gigantamax Melmetal",
      "formType": "gmax",
      "types": [
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10208.png",
      "height": "25.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "iron-fist",
          "name": "iron-fist",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 135,
        "attack": 143,
        "defense": 143,
        "spAttack": 80,
        "spDefense": 65,
        "speed": 34,
        "total": 600
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Fusão G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Meltdown.",
      "gmaxMove": {
        "namePt": "Fusão G-Max",
        "nameEn": "G-Max Meltdown",
        "desc": "Dispara feixes de metal líquido que impedem os adversários de usarem o mesmo movimento consecutivamente."
      }
    }
  ],
  "812": [
    {
      "formId": "rillaboom-gmax",
      "speciesId": 812,
      "namePt": "Rillaboom Gigantamax",
      "nameEn": "Gigantamax Rillaboom",
      "formType": "gmax",
      "types": [
        "grass"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10209.png",
      "height": "28.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "overgrow",
          "name": "overgrow",
          "is_hidden": false
        },
        {
          "raw": "grassy-surge",
          "name": "grassy-surge",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 125,
        "defense": 90,
        "spAttack": 60,
        "spDefense": 70,
        "speed": 85,
        "total": 530
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Percussão G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Drum Solo.",
      "gmaxMove": {
        "namePt": "Percussão G-Max",
        "nameEn": "G-Max Drum Solo",
        "desc": "Toca seus tambores gigantes de raízes, ignorando todas as habilidades defensivas do alvo."
      }
    }
  ],
  "815": [
    {
      "formId": "cinderace-gmax",
      "speciesId": 815,
      "namePt": "Cinderace Gigantamax",
      "nameEn": "Gigantamax Cinderace",
      "formType": "gmax",
      "types": [
        "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10210.png",
      "height": "27.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "blaze",
          "name": "blaze",
          "is_hidden": false
        },
        {
          "raw": "libero",
          "name": "libero",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 116,
        "defense": 75,
        "spAttack": 65,
        "spDefense": 75,
        "speed": 119,
        "total": 530
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Bola de Fogo G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Fireball.",
      "gmaxMove": {
        "namePt": "Bola de Fogo G-Max",
        "nameEn": "G-Max Fireball",
        "desc": "Chuta uma gigantesca bola de fogo solar que ignora todas as habilidades do oponente."
      }
    }
  ],
  "818": [
    {
      "formId": "inteleon-gmax",
      "speciesId": 818,
      "namePt": "Inteleon Gigantamax",
      "nameEn": "Gigantamax Inteleon",
      "formType": "gmax",
      "types": [
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10211.png",
      "height": "40.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "torrent",
          "name": "torrent",
          "is_hidden": false
        },
        {
          "raw": "sniper",
          "name": "sniper",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 85,
        "defense": 65,
        "spAttack": 125,
        "spDefense": 65,
        "speed": 120,
        "total": 530
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Tiro Certeiro G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Hydrosnipe.",
      "gmaxMove": {
        "namePt": "Tiro Certeiro G-Max",
        "nameEn": "G-Max Hydrosnipe",
        "desc": "Dispara da sua torre d'água com precisão absoluta, ignorando habilidades adversárias."
      }
    }
  ],
  "823": [
    {
      "formId": "corviknight-gmax",
      "speciesId": 823,
      "namePt": "Corviknight Gigantamax",
      "nameEn": "Gigantamax Corviknight",
      "formType": "gmax",
      "types": [
        "flying",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10212.png",
      "height": "14.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "pressure",
          "name": "pressure",
          "is_hidden": false
        },
        {
          "raw": "unnerve",
          "name": "unnerve",
          "is_hidden": false
        },
        {
          "raw": "mirror-armor",
          "name": "mirror-armor",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 98,
        "attack": 87,
        "defense": 105,
        "spAttack": 53,
        "spDefense": 85,
        "speed": 67,
        "total": 495
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Fúria dos Ventos G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Wind Rage.",
      "gmaxMove": {
        "namePt": "Fúria dos Ventos G-Max",
        "nameEn": "G-Max Wind Rage",
        "desc": "Bate suas asas de lâminas negras, varrendo barreiras e armadilhas do campo."
      }
    }
  ],
  "826": [
    {
      "formId": "orbeetle-gmax",
      "speciesId": 826,
      "namePt": "Orbeetle Gigantamax",
      "nameEn": "Gigantamax Orbeetle",
      "formType": "gmax",
      "types": [
        "bug",
        "psychic"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10213.png",
      "height": "14.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "swarm",
          "name": "swarm",
          "is_hidden": false
        },
        {
          "raw": "frisk",
          "name": "frisk",
          "is_hidden": false
        },
        {
          "raw": "telepathy",
          "name": "telepathy",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 60,
        "attack": 45,
        "defense": 110,
        "spAttack": 80,
        "spDefense": 120,
        "speed": 90,
        "total": 505
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Gravidade G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Gravitas.",
      "gmaxMove": {
        "namePt": "Gravidade G-Max",
        "nameEn": "G-Max Gravitas",
        "desc": "Canaliza poder cósmico para intensificar a gravidade no campo por 5 turnos."
      }
    }
  ],
  "834": [
    {
      "formId": "drednaw-gmax",
      "speciesId": 834,
      "namePt": "Drednaw Gigantamax",
      "nameEn": "Gigantamax Drednaw",
      "formType": "gmax",
      "types": [
        "water",
        "rock"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10214.png",
      "height": "24.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "strong-jaw",
          "name": "strong-jaw",
          "is_hidden": false
        },
        {
          "raw": "shell-armor",
          "name": "shell-armor",
          "is_hidden": false
        },
        {
          "raw": "swift-swim",
          "name": "swift-swim",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 90,
        "attack": 115,
        "defense": 90,
        "spAttack": 48,
        "spDefense": 68,
        "speed": 74,
        "total": 485
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Pedras G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Stonesurge.",
      "gmaxMove": {
        "namePt": "Pedras G-Max",
        "nameEn": "G-Max Stonesurge",
        "desc": "Invoca pedras afiadas que espalham o efeito de Pedras Flutuantes no campo adversário."
      }
    }
  ],
  "839": [
    {
      "formId": "coalossal-gmax",
      "speciesId": 839,
      "namePt": "Coalossal Gigantamax",
      "nameEn": "Gigantamax Coalossal",
      "formType": "gmax",
      "types": [
        "rock",
        "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10215.png",
      "height": "42.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "steam-engine",
          "name": "steam-engine",
          "is_hidden": false
        },
        {
          "raw": "flame-body",
          "name": "flame-body",
          "is_hidden": false
        },
        {
          "raw": "flash-fire",
          "name": "flash-fire",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 110,
        "attack": 80,
        "defense": 120,
        "spAttack": 80,
        "spDefense": 90,
        "speed": 30,
        "total": 510
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Rocha Vulcânica G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Volcalith.",
      "gmaxMove": {
        "namePt": "Rocha Vulcânica G-Max",
        "nameEn": "G-Max Volcalith",
        "desc": "Montanhas de rochas incandescentes que causam dano por 4 turnos a alvos não-Pedra."
      }
    }
  ],
  "841": [
    {
      "formId": "flapple-gmax",
      "speciesId": 841,
      "namePt": "Flapple Gigantamax",
      "nameEn": "Gigantamax Flapple",
      "formType": "gmax",
      "types": [
        "grass",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10216.png",
      "height": "24.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "ripen",
          "name": "ripen",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "hustle",
          "name": "hustle",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 110,
        "defense": 80,
        "spAttack": 95,
        "spDefense": 60,
        "speed": 70,
        "total": 485
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Azedume G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Tartness.",
      "gmaxMove": {
        "namePt": "Azedume G-Max",
        "nameEn": "G-Max Tartness",
        "desc": "Bomba ácida de maçã que reduz drasticamente a evasão dos oponentes."
      }
    }
  ],
  "842": [
    {
      "formId": "appletun-gmax",
      "speciesId": 842,
      "namePt": "Appletun Gigantamax",
      "nameEn": "Gigantamax Appletun",
      "formType": "gmax",
      "types": [
        "grass",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10217.png",
      "height": "24.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "ripen",
          "name": "ripen",
          "is_hidden": false
        },
        {
          "raw": "gluttony",
          "name": "gluttony",
          "is_hidden": false
        },
        {
          "raw": "thick-fat",
          "name": "thick-fat",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 110,
        "attack": 85,
        "defense": 80,
        "spAttack": 100,
        "spDefense": 80,
        "speed": 30,
        "total": 485
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Doçura G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Sweetness.",
      "gmaxMove": {
        "namePt": "Doçura G-Max",
        "nameEn": "G-Max Sweetness",
        "desc": "Calda açucarada curativa que elimina condições de estado negativo da equipe."
      }
    }
  ],
  "844": [
    {
      "formId": "sandaconda-gmax",
      "speciesId": 844,
      "namePt": "Sandaconda Gigantamax",
      "nameEn": "Gigantamax Sandaconda",
      "formType": "gmax",
      "types": [
        "ground"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10218.png",
      "height": "22.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "sand-spit",
          "name": "sand-spit",
          "is_hidden": false
        },
        {
          "raw": "shed-skin",
          "name": "shed-skin",
          "is_hidden": false
        },
        {
          "raw": "sand-veil",
          "name": "sand-veil",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 72,
        "attack": 107,
        "defense": 125,
        "spAttack": 65,
        "spDefense": 70,
        "speed": 71,
        "total": 510
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Areia Movediça G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Sandblast.",
      "gmaxMove": {
        "namePt": "Areia Movediça G-Max",
        "nameEn": "G-Max Sandblast",
        "desc": "Gera um furacão de areia colossal que aprisiona os oponentes por 4 a 5 turnos."
      }
    }
  ],
  "849": [
    {
      "formId": "toxtricity-amped-gmax",
      "speciesId": 849,
      "namePt": "Toxtricity Gigantamax",
      "nameEn": "Gigantamax Toxtricity",
      "formType": "gmax",
      "types": [
        "electric",
        "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10219.png",
      "height": "24.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "punk-rock",
          "name": "punk-rock",
          "is_hidden": false
        },
        {
          "raw": "plus",
          "name": "plus",
          "is_hidden": false
        },
        {
          "raw": "technician",
          "name": "technician",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 75,
        "attack": 98,
        "defense": 70,
        "spAttack": 114,
        "spDefense": 70,
        "speed": 75,
        "total": 502
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Choque Tóxico G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Stun Shock.",
      "gmaxMove": {
        "namePt": "Choque Tóxico G-Max",
        "nameEn": "G-Max Stun Shock",
        "desc": "Eletricidade tóxica intensa que causa veneno ou paralisia em todos os adversários."
      }
    }
  ],
  "851": [
    {
      "formId": "centiskorch-gmax",
      "speciesId": 851,
      "namePt": "Centiskorch Gigantamax",
      "nameEn": "Gigantamax Centiskorch",
      "formType": "gmax",
      "types": [
        "fire",
        "bug"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10220.png",
      "height": "75.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "flash-fire",
          "name": "flash-fire",
          "is_hidden": false
        },
        {
          "raw": "white-smoke",
          "name": "white-smoke",
          "is_hidden": false
        },
        {
          "raw": "flame-body",
          "name": "flame-body",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 115,
        "defense": 65,
        "spAttack": 90,
        "spDefense": 90,
        "speed": 65,
        "total": 525
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Centelha G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Centiferno.",
      "gmaxMove": {
        "namePt": "Centelha G-Max",
        "nameEn": "G-Max Centiferno",
        "desc": "Cria uma tempestade de centelhas escaldantes que aprisiona os oponentes em um redemoinho de chamas."
      }
    }
  ],
  "858": [
    {
      "formId": "hatterene-gmax",
      "speciesId": 858,
      "namePt": "Hatterene Gigantamax",
      "nameEn": "Gigantamax Hatterene",
      "formType": "gmax",
      "types": [
        "psychic",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10221.png",
      "height": "26.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "healer",
          "name": "healer",
          "is_hidden": false
        },
        {
          "raw": "anticipation",
          "name": "anticipation",
          "is_hidden": false
        },
        {
          "raw": "magic-bounce",
          "name": "magic-bounce",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 57,
        "attack": 90,
        "defense": 95,
        "spAttack": 136,
        "spDefense": 103,
        "speed": 29,
        "total": 510
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Punição G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Smite.",
      "gmaxMove": {
        "namePt": "Punição G-Max",
        "nameEn": "G-Max Smite",
        "desc": "Relâmpagos psíquicos devastadores que deixam todos os adversários confusos."
      }
    }
  ],
  "861": [
    {
      "formId": "grimmsnarl-gmax",
      "speciesId": 861,
      "namePt": "Grimmsnarl Gigantamax",
      "nameEn": "Gigantamax Grimmsnarl",
      "formType": "gmax",
      "types": [
        "dark",
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10222.png",
      "height": "32.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "prankster",
          "name": "prankster",
          "is_hidden": false
        },
        {
          "raw": "frisk",
          "name": "frisk",
          "is_hidden": false
        },
        {
          "raw": "pickpocket",
          "name": "pickpocket",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 95,
        "attack": 120,
        "defense": 65,
        "spAttack": 95,
        "spDefense": 75,
        "speed": 60,
        "total": 510
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Tormento G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Snooze.",
      "gmaxMove": {
        "namePt": "Tormento G-Max",
        "nameEn": "G-Max Snooze",
        "desc": "Brocas de cabelos sombrios que induzem o efeito de bocejo / sono no turno seguinte."
      }
    }
  ],
  "869": [
    {
      "formId": "alcremie-gmax",
      "speciesId": 869,
      "namePt": "Alcremie Gigantamax",
      "nameEn": "Gigantamax Alcremie",
      "formType": "gmax",
      "types": [
        "fairy"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10223.png",
      "height": "30.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "sweet-veil",
          "name": "sweet-veil",
          "is_hidden": false
        },
        {
          "raw": "aroma-veil",
          "name": "aroma-veil",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 65,
        "attack": 60,
        "defense": 75,
        "spAttack": 110,
        "spDefense": 121,
        "speed": 64,
        "total": 495
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Doçura Final G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Finale.",
      "gmaxMove": {
        "namePt": "Doçura Final G-Max",
        "nameEn": "G-Max Finale",
        "desc": "Um bolo gigante de creme mágico que cura 1/6 dos Pontos de Saúde máximos de todos os aliados."
      }
    }
  ],
  "879": [
    {
      "formId": "copperajah-gmax",
      "speciesId": 879,
      "namePt": "Copperajah Gigantamax",
      "nameEn": "Gigantamax Copperajah",
      "formType": "gmax",
      "types": [
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10224.png",
      "height": "23.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "sheer-force",
          "name": "sheer-force",
          "is_hidden": false
        },
        {
          "raw": "heavy-metal",
          "name": "heavy-metal",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 122,
        "attack": 130,
        "defense": 69,
        "spAttack": 80,
        "spDefense": 69,
        "speed": 30,
        "total": 500
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Estilhaços G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Steelsurge.",
      "gmaxMove": {
        "namePt": "Estilhaços G-Max",
        "nameEn": "G-Max Steelsurge",
        "desc": "Espalha estilhaços metálicos pontiagudos no campo oponente."
      }
    }
  ],
  "884": [
    {
      "formId": "duraludon-gmax",
      "speciesId": 884,
      "namePt": "Duraludon Gigantamax",
      "nameEn": "Gigantamax Duraludon",
      "formType": "gmax",
      "types": [
        "steel",
        "dragon"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10225.png",
      "height": "43.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "light-metal",
          "name": "light-metal",
          "is_hidden": false
        },
        {
          "raw": "heavy-metal",
          "name": "heavy-metal",
          "is_hidden": false
        },
        {
          "raw": "stalwart",
          "name": "stalwart",
          "is_hidden": true
        }
      ],
      "stats": {
        "hp": 70,
        "attack": 95,
        "defense": 115,
        "spAttack": 120,
        "spDefense": 50,
        "speed": 85,
        "total": 535
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Depleção G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Depletion.",
      "gmaxMove": {
        "namePt": "Depleção G-Max",
        "nameEn": "G-Max Depletion",
        "desc": "Emite pulsos sônicos a partir de seu arranha-céu metálico, drenando 2 Pontos de Poder (PP) do último ataque do oponente."
      }
    }
  ],
  "888": [
    {
      "formId": "zacian-crowned",
      "speciesId": 888,
      "namePt": "Zacian (Espada Coroada)",
      "nameEn": "Zacian (Crowned Sword)",
      "formType": "crowned",
      "types": [
        "fairy",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10188.png",
      "height": "2.8",
      "weight": "355.0",
      "abilities": [
        {
          "raw": "intrepid-sword",
          "name": "intrepid-sword",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 92,
        "attack": 150,
        "defense": 115,
        "spAttack": 80,
        "spDefense": 115,
        "speed": 148,
        "total": 700
      },
      "descriptionPt": "Ao segurar a lendária espada ancestral, ganha a tipagem Aço e atinge velocidade e precisão supremas em combate.",
      "descriptionEn": "Holding the legendary rusted blade, it gains the Steel type and achieves supreme speed and precision in battle.",
      "requiredItem": {
        "identifier": "rusted-sword",
        "namePt": "Espada Enferrujada",
        "nameEn": "Rusted Sword",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rusted-sword.png"
      }
    }
  ],
  "889": [
    {
      "formId": "zamazenta-crowned",
      "speciesId": 889,
      "namePt": "Zamazenta (Escudo Coroado)",
      "nameEn": "Zamazenta (Crowned Shield)",
      "formType": "crowned",
      "types": [
        "fighting",
        "steel"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10189.png",
      "height": "2.9",
      "weight": "785.0",
      "abilities": [
        {
          "raw": "dauntless-shield",
          "name": "dauntless-shield",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 92,
        "attack": 120,
        "defense": 140,
        "spAttack": 80,
        "spDefense": 140,
        "speed": 128,
        "total": 700
      },
      "descriptionPt": "Ao equipar o escudo heróico ancestral, adquire o tipo Aço e uma couraça inquebrável que anula qualquer ataque frontal.",
      "descriptionEn": "Equipping the ancestral rusted shield, it gains the Steel type and an unbreakable armor that repels any onslaught.",
      "requiredItem": {
        "identifier": "rusted-shield",
        "namePt": "Escudo Enferrujado",
        "nameEn": "Rusted Shield",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rusted-shield.png"
      }
    }
  ],
  "892": [
    {
      "formId": "urshifu-rapid-strike-gmax",
      "speciesId": 892,
      "namePt": "Urshifu (Golpes Fluentes) Gigantamax",
      "nameEn": "Gigantamax Urshifu (Rapid Strike)",
      "formType": "gmax",
      "types": [
        "fighting",
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10227.png",
      "height": "26.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "unseen-fist",
          "name": "unseen-fist",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 130,
        "defense": 100,
        "spAttack": 63,
        "spDefense": 60,
        "speed": 97,
        "total": 550
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Golpes Fluentes G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max Rapid Flow.",
      "gmaxMove": {
        "namePt": "Golpes Fluentes G-Max",
        "nameEn": "G-Max Rapid Flow",
        "desc": "Rajadas colossais de golpes aquáticos que atravessam Proteção e Guarda Max com dano total."
      }
    },
    {
      "formId": "urshifu-single-strike-gmax",
      "speciesId": 892,
      "namePt": "Urshifu (Golpe Único) Gigantamax",
      "nameEn": "Gigantamax Urshifu (Single Strike)",
      "formType": "gmax",
      "types": [
        "fighting",
        "dark"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10226.png",
      "height": "29.0",
      "weight": "1000.0",
      "abilities": [
        {
          "raw": "unseen-fist",
          "name": "unseen-fist",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 100,
        "attack": 130,
        "defense": 100,
        "spAttack": 63,
        "spDefense": 60,
        "speed": 97,
        "total": 550
      },
      "descriptionPt": "Atinge proporções monumentais pela energia de Galar, desbloqueando o Golpe Gigantamax exclusivo Golpe Único G-Max.",
      "descriptionEn": "Grows to colossal proportions through Galar power, unlocking the signature G-Max Move G-Max One Blow.",
      "gmaxMove": {
        "namePt": "Golpe Único G-Max",
        "nameEn": "G-Max One Blow",
        "desc": "Um punho colossal de escuridão que ultrapassa qualquer movimento defensivo como Proteção ou Guarda Max."
      }
    }
  ],
  "1017": [
    {
      "formId": "ogerpon-wellspring",
      "speciesId": 1017,
      "namePt": "Ogerpon (Máscara da Nascente)",
      "nameEn": "Ogerpon (Wellspring Mask)",
      "formType": "mask",
      "types": [
        "grass",
        "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10273.png",
      "height": "1.2",
      "weight": "39.8",
      "abilities": [
        {
          "raw": "water-absorb",
          "name": "water-absorb",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 120,
        "defense": 84,
        "spAttack": 60,
        "spDefense": 96,
        "speed": 110,
        "total": 550
      },
      "requiredItem": {
        "identifier": "wellspring-mask",
        "namePt": "Máscara da Nascente",
        "nameEn": "Wellspring Mask",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wellspring-mask.png"
      },
      "descriptionPt": "Equipando a Máscara da Nascente, Ogerpon adquire o tipo Água e canaliza energia fluida com seu bastão vegetal.",
      "descriptionEn": "Equipped with the Wellspring Mask, Ogerpon gains the Water type and channels fluid energy with its ivy club."
    },
    {
      "formId": "ogerpon-hearthflame",
      "speciesId": 1017,
      "namePt": "Ogerpon (Máscara da Fornalha)",
      "nameEn": "Ogerpon (Hearthflame Mask)",
      "formType": "mask",
      "types": [
        "grass",
        "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10274.png",
      "height": "1.2",
      "weight": "39.8",
      "abilities": [
        {
          "raw": "mold-breaker",
          "name": "mold-breaker",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 120,
        "defense": 84,
        "spAttack": 60,
        "spDefense": 96,
        "speed": 110,
        "total": 550
      },
      "requiredItem": {
        "identifier": "hearthflame-mask",
        "namePt": "Máscara da Fornalha",
        "nameEn": "Hearthflame Mask",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hearthflame-mask.png"
      },
      "descriptionPt": "Com a Máscara da Fornalha, as vinhas do seu corpo ardem com energia de fogo radiante que sobrepuja habilidades defensivas.",
      "descriptionEn": "With the Hearthflame Mask, its vines burn with radiant fire energy that ignores defensive abilities."
    },
    {
      "formId": "ogerpon-cornerstone",
      "speciesId": 1017,
      "namePt": "Ogerpon (Máscara do Alicerce)",
      "nameEn": "Ogerpon (Cornerstone Mask)",
      "formType": "mask",
      "types": [
        "grass",
        "rock"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10275.png",
      "height": "1.2",
      "weight": "39.8",
      "abilities": [
        {
          "raw": "sturdy",
          "name": "sturdy",
          "is_hidden": false
        }
      ],
      "stats": {
        "hp": 80,
        "attack": 120,
        "defense": 84,
        "spAttack": 60,
        "spDefense": 96,
        "speed": 110,
        "total": 550
      },
      "requiredItem": {
        "identifier": "cornerstone-mask",
        "namePt": "Máscara do Alicerce",
        "nameEn": "Cornerstone Mask",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cornerstone-mask.png"
      },
      "descriptionPt": "A Máscara do Alicerce concede solidez rochosa ao seu corpo, fornecendo alta resistência e o tipo Pedra.",
      "descriptionEn": "The Cornerstone Mask grants stone-like solidity to its body, offering high resilience and the Rock type."
    }
  ]
};

/**
 * Retorna a lista de formas alternativas de uma espécie
 */
function getSpeciesForms(speciesId) {
    if (!speciesId || typeof POKEMON_FORMS_DATABASE === 'undefined') return [];
    return POKEMON_FORMS_DATABASE[String(speciesId)] || [];
}

/**
 * Retorna uma lista unificada de todas as formas alternativas cadastradas
 */
function getAllAlternativeForms() {
    if (typeof POKEMON_FORMS_DATABASE === 'undefined') return [];
    const all = [];
    Object.values(POKEMON_FORMS_DATABASE).forEach(list => {
        if (Array.isArray(list)) all.push(...list);
    });
    return all;
}

/**
 * Busca uma forma específica pelo seu formId
 */
function findFormById(formId) {
    if (!formId) return null;
    const all = getAllAlternativeForms();
    return all.find(f => f.formId === formId) || null;
}

/**
 * Rótulo e cor da tag de gimmick no card
 */
function getFormGimmickBadgeInfo(formType, isEn = false) {
    switch (formType) {
        case 'mega':
            return { label: 'MEGA', bg: '#e02424', color: '#fff', title: isEn ? 'Mega Evolution' : 'Mega Evolução' };
        case 'gmax':
            return { label: 'G-MAX', bg: '#ec4899', color: '#fff', title: isEn ? 'Gigantamax' : 'Gigantamax' };
        case 'primal':
            return { label: isEn ? 'PRIMAL' : 'PRIMITIVO', bg: '#f97316', color: '#fff', title: isEn ? 'Primal Reversion' : 'Reversão Primitiva' };
        case 'alola':
            return { label: 'ALOLA', bg: '#06b6d4', color: '#fff', title: isEn ? 'Alolan Variant' : 'Forma de Alola' };
        case 'galar':
            return { label: 'GALAR', bg: '#8b5cf6', color: '#fff', title: isEn ? 'Galarian Variant' : 'Forma de Galar' };
        case 'hisui':
            return { label: 'HISUI', bg: '#d97706', color: '#fff', title: isEn ? 'Hisuian Variant' : 'Forma de Hisui' };
        case 'paldea':
            return { label: 'PALDEA', bg: '#10b981', color: '#fff', title: isEn ? 'Paldean Variant' : 'Forma de Paldea' };
        case 'origin':
            return { label: isEn ? 'ORIGIN' : 'ORIGEM', bg: '#6366f1', color: '#fff', title: isEn ? 'Origin Forme' : 'Forma Origem' };
        case 'crowned':
            return { label: isEn ? 'CROWNED' : 'COROADO', bg: '#eab308', color: '#000', title: isEn ? 'Crowned Form' : 'Forma Coroada' };
        case 'mask':
            return { label: isEn ? 'MASK' : 'MÁSCARA', bg: '#14b8a6', color: '#fff', title: isEn ? 'Teal Mask' : 'Máscara' };
        default:
            return { label: isEn ? 'VARIANT' : 'VARIANTE', bg: '#64748b', color: '#fff', title: isEn ? 'Alternative Variant' : 'Variante Alternativa' };
    }
}

/**
 * Banco de Dados de Movimentos Z Exclusivos por Espécie
 */
const EXCLUSIVE_Z_MOVES_DATABASE = {
  "25": [
    {
      crystalId: "pikanium-z",
      crystalNamePt: "Pikanium Z",
      crystalNameEn: "Pikanium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pikanium-z--bag.png",
      movePt: "Eletrochoque Catastrófico",
      moveEn: "Catastropika",
      baseMove: "Volt Tackle (Investida do Trovão)",
      power: "210",
      type: "electric",
      descPt: "Pikachu acumula uma quantidade titânica de eletricidade e arremete em velocidade máxima contra o alvo.",
      descEn: "Pikachu surrounds itself with tremendous electric energy and charges into the target at full speed."
    },
    {
      crystalId: "pikashunium-z",
      crystalNamePt: "Pikashunium Z",
      crystalNameEn: "Pikashunium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pikashunium-z--bag.png",
      movePt: "Relâmpago de 10.000.000 de Volts",
      moveEn: "10,000,000 Volt Thunderbolt",
      baseMove: "Thunderbolt (Choque do Trovão)",
      power: "195",
      type: "electric",
      descPt: "Dispara sete raios de cores diferentes do arco-íris com chance crítica extremamente elevada.",
      descEn: "Fires seven multicolored lightning bolts with an extraordinarily high critical-hit ratio."
    }
  ],
  "26": [
    {
      crystalId: "aloraichium-z",
      crystalNamePt: "Aloraichium Z",
      crystalNameEn: "Aloraichium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aloraichium-z--bag.png",
      movePt: "Surfe de Faíscas",
      moveEn: "Stoked Sparksurfer",
      baseMove: "Thunderbolt (Choque do Trovão)",
      power: "175",
      type: "electric",
      descPt: "Raichu de Alola surfa em sua cauda energizada e eletrifica o solo, paralisando o oponente com 100% de precisão.",
      descEn: "Alolan Raichu surfs on its tail and unleashes electric bursts that always paralyze the target."
    }
  ],
  "133": [
    {
      crystalId: "eevium-z",
      crystalNamePt: "Eevium Z",
      crystalNameEn: "Eevium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/eevium-z--bag.png",
      movePt: "Superimpulso do Eevee",
      moveEn: "Extreme Evoboost",
      baseMove: "Last Resort (Último Recurso)",
      power: "Status",
      type: "normal",
      descPt: "Convoca todas as 8 evoluções do Eevee para transferir seus poderes, aumentando todos os atributos em 2 estágios (+2).",
      descEn: "Summons all 8 Eeveelutions to channel energy, boosting all stats by 2 stages (+2)."
    }
  ],
  "143": [
    {
      crystalId: "snorlium-z",
      crystalNamePt: "Snorlium Z",
      crystalNameEn: "Snorlium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/snorlium-z--bag.png",
      movePt: "Panqueca Pulverizadora",
      moveEn: "Pulverizing Pancake",
      baseMove: "Giga Impact (Giga Impacto)",
      power: "210",
      type: "normal",
      descPt: "Após despertar repentinamente, Snorlax salta com toda sua força e esmaga o alvo com um impacto colossal.",
      descEn: "Snorlax awakens in an explosion of energy and drops with immense force onto the target."
    }
  ],
  "151": [
    {
      crystalId: "mewnium-z",
      crystalNamePt: "Mewnium Z",
      crystalNameEn: "Mewnium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewnium-z--bag.png",
      movePt: "Supernova Genesis",
      moveEn: "Genesis Supernova",
      baseMove: "Psychic (Psíquico)",
      power: "185",
      type: "psychic",
      descPt: "Mew invoca uma esfera de energia ancestral pura que, após o impacto, cria o Terreno Psíquico no campo.",
      descEn: "Mew summons primeval psychic energy that crashes down and creates Psychic Terrain."
    }
  ],
  "724": [
    {
      crystalId: "decidium-z",
      crystalNamePt: "Decidium Z",
      crystalNameEn: "Decidium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/decidium-z--bag.png",
      movePt: "Chuva de Flechas Sinistras",
      moveEn: "Sinister Arrow Raid",
      baseMove: "Spirit Shackle (Grilhões Espirituais)",
      power: "180",
      type: "ghost",
      descPt: "Decidueye mergulha cortando os céus e lança dezenas de flechas de penas espectrais perfurantes.",
      descEn: "Decidueye dives through the sky alongside countless phantom feather arrows impaling the target."
    }
  ],
  "727": [
    {
      crystalId: "incinium-z",
      crystalNamePt: "Incinium Z",
      crystalNameEn: "Incinium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/incinium-z--bag.png",
      movePt: "Salto Lunar Malicioso",
      moveEn: "Malicious Moonsault",
      baseMove: "Darkest Lariat (Lariat Mais Sombrio)",
      power: "180",
      type: "dark",
      descPt: "Incineroar salta da corda superior de um ringue de fogo flamejante e despenca impiedosamente sobre o alvo.",
      descEn: "Incineroar leaps from a ring of fire and body-slams the target without mercy."
    }
  ],
  "730": [
    {
      crystalId: "primarium-z",
      crystalNamePt: "Primarium Z",
      crystalNameEn: "Primarium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/primarium-z--bag.png",
      movePt: "Ária Oceânica",
      moveEn: "Oceanic Operetta",
      baseMove: "Sparkling Aria (Ária Borbulhante)",
      power: "195",
      type: "water",
      descPt: "Primarina canta uma melodia doce guiando uma imensa bolha d'água pressurizada que explode sobre o alvo.",
      descEn: "Primarina sings an operatic melody that directs a colossal sphere of water to detonate."
    }
  ],
  "745": [
    {
      crystalId: "lycanium-z",
      crystalNamePt: "Lycanium Z",
      crystalNameEn: "Lycanium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lycanium-z--bag.png",
      movePt: "Tempestade de Estilhaços",
      moveEn: "Splintered Stormshards",
      baseMove: "Stone Edge (Gume de Pedra)",
      power: "190",
      type: "rock",
      descPt: "Destrói qualquer efeito de terreno (Elétrico, Psíquico, etc.) enquanto causa dano massivo de rochas.",
      descEn: "Shatters any existing terrain effects on the battlefield while inflicting massive Rock damage."
    }
  ],
  "778": [
    {
      crystalId: "mimikium-z",
      crystalNamePt: "Mimikium Z",
      crystalNameEn: "Mimikium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mimikium-z--bag.png",
      movePt: "Abraço Eterno",
      moveEn: "Let's Snuggle Forever",
      baseMove: "Play Rough (Brincadeira Pesada)",
      power: "190",
      type: "fairy",
      descPt: "Mimikyu estica seu pano e envolve o oponente completamente, atacando com todo o seu amor por dentro.",
      descEn: "Mimikyu expands its cloth disguise to envelop the foe and pummels them with all its might."
    }
  ],
  "784": [
    {
      crystalId: "kommonium-z",
      crystalNamePt: "Kommonium Z",
      crystalNameEn: "Kommonium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kommonium-z--bag.png",
      movePt: "Chamas Clamorosas da Alma",
      moveEn: "Clangorous Soulblaze",
      baseMove: "Clanging Scales (Escamas Clamorosas)",
      power: "185",
      type: "dragon",
      descPt: "Atinge todos os oponentes adjacentes e aumenta o Ataque, Defesa, Atq. Esp., Def. Esp. e Velocidade em 1 estágio.",
      descEn: "Strikes all opposing Pokémon and raises all of Kommo-o's stats by 1 stage."
    }
  ],
  "785": [
    {
      crystalId: "tapunium-z",
      crystalNamePt: "Tapunium Z",
      crystalNameEn: "Tapunium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tapunium-z--bag.png",
      movePt: "Guardião de Alola",
      moveEn: "Guardian of Alola",
      baseMove: "Nature's Madness (Fúria da Natureza)",
      power: "75% PS",
      type: "fairy",
      descPt: "O espírito guardião se ancora ao corpo do avatar colossal e reduz o PS restante do alvo em 75%.",
      descEn: "The guardian spirit merges with the colossal island avatar and cuts the target's remaining HP by 75%."
    }
  ],
  "786": [
    {
      crystalId: "tapunium-z",
      crystalNamePt: "Tapunium Z",
      crystalNameEn: "Tapunium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tapunium-z--bag.png",
      movePt: "Guardião de Alola",
      moveEn: "Guardian of Alola",
      baseMove: "Nature's Madness (Fúria da Natureza)",
      power: "75% PS",
      type: "fairy",
      descPt: "O espírito guardião se ancora ao corpo do avatar colossal e reduz o PS restante do alvo em 75%.",
      descEn: "The guardian spirit merges with the colossal island avatar and cuts the target's remaining HP by 75%."
    }
  ],
  "787": [
    {
      crystalId: "tapunium-z",
      crystalNamePt: "Tapunium Z",
      crystalNameEn: "Tapunium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tapunium-z--bag.png",
      movePt: "Guardião de Alola",
      moveEn: "Guardian of Alola",
      baseMove: "Nature's Madness (Fúria da Natureza)",
      power: "75% PS",
      type: "fairy",
      descPt: "O espírito guardião se ancora ao corpo do avatar colossal e reduz o PS restante do alvo em 75%.",
      descEn: "The guardian spirit merges with the colossal island avatar and cuts the target's remaining HP by 75%."
    }
  ],
  "788": [
    {
      crystalId: "tapunium-z",
      crystalNamePt: "Tapunium Z",
      crystalNameEn: "Tapunium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tapunium-z--bag.png",
      movePt: "Guardião de Alola",
      moveEn: "Guardian of Alola",
      baseMove: "Nature's Madness (Fúria da Natureza)",
      power: "75% PS",
      type: "fairy",
      descPt: "O espírito guardião se ancora ao corpo do avatar colossal e reduz o PS restante do alvo em 75%.",
      descEn: "The guardian spirit merges with the colossal island avatar and cuts the target's remaining HP by 75%."
    }
  ],
  "791": [
    {
      crystalId: "solganium-z",
      crystalNamePt: "Solganium Z",
      crystalNameEn: "Solganium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/solganium-z--bag.png",
      movePt: "Investida Solar Ardente",
      moveEn: "Searing Sunraze Smash",
      baseMove: "Sunsteel Strike (Aço Solar)",
      power: "200",
      type: "steel",
      descPt: "Canaliza o poder do Sol e investe contra o alvo ignorando quaisquer habilidades defensivas.",
      descEn: "Channels blazing solar light to strike the target, ignoring the target's ability."
    }
  ],
  "792": [
    {
      crystalId: "lunalium-z",
      crystalNamePt: "Lunalium Z",
      crystalNameEn: "Lunalium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lunalium-z--bag.png",
      movePt: "Vórtice Lunar Ameaçador",
      moveEn: "Menacing Moonraze Maelstrom",
      baseMove: "Moongeist Beam (Raio Espectral Lunar)",
      power: "200",
      type: "ghost",
      descPt: "Canaliza a energia da Lua cheia e dispara um feixe dimensional ignorando quaisquer habilidades defensivas.",
      descEn: "Channels nocturnal lunar energy into a dimensional beam that ignores the target's ability."
    }
  ],
  "800": [
    {
      crystalId: "ultranecrozium-z",
      crystalNamePt: "Ultranecrozium Z",
      crystalNameEn: "Ultranecrozium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultranecrozium-z--bag.png",
      movePt: "Luz que Queima os Céus",
      moveEn: "Light That Burns the Sky",
      baseMove: "Photon Geyser / Prismatic Laser",
      power: "200",
      type: "psychic",
      descPt: "Reúne toda a luz de Ultra Megalópolis e dispara uma estrela devastadora calculada com seu atributo mais alto.",
      descEn: "Necrozma consumes infinite light to unleash a cataclysmic attack calculated with its highest attack stat."
    }
  ],
  "802": [
    {
      crystalId: "marshadium-z",
      crystalNamePt: "Marshadium Z",
      crystalNameEn: "Marshadium Z",
      crystalImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/marshadium-z--bag.png",
      movePt: "Golpe de 7 Estrelas Ladrão de Almas",
      moveEn: "Soul-Stealing 7-Star Strike",
      baseMove: "Spectral Thief (Ladrão Espectral)",
      power: "195",
      type: "ghost",
      descPt: "Marshadow emerge das sombras, desferindo uma rajada furiosa de sete socos e chutes espectrais.",
      descEn: "Marshadow leaps from the shadows to deliver a flurry of seven spectral punches and kicks."
    }
  ]
};

/**
 * Retorna os golpes Z exclusivos de uma espécie
 */
function getSpeciesExclusiveZMoves(speciesId) {
    if (!speciesId || typeof EXCLUSIVE_Z_MOVES_DATABASE === 'undefined') return [];
    return EXCLUSIVE_Z_MOVES_DATABASE[String(speciesId)] || [];
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { 
        POKEMON_FORMS_DATABASE,
        EXCLUSIVE_Z_MOVES_DATABASE,
        getSpeciesForms,
        getAllAlternativeForms,
        findFormById,
        getFormGimmickBadgeInfo,
        getSpeciesExclusiveZMoves
    };
}
