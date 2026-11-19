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
            "requiredItem": {
                "identifier": "venusaurite",
                "namePt": "Venusaurita",
                "nameEn": "Venusaurite",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/venusaurite.png"
            },
            "descriptionPt": "A flor em suas costas cresce deslumbrantemente e suas pernas tornam-se mais robustas para suportar o peso gigantesco.",
            "descriptionEn": "The flower on its back blooms grandly, supported by legs that have grown thicker to bear the immense weight."
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
            "requiredItem": {
                "identifier": "charizardite-x",
                "namePt": "Charizardita X",
                "nameEn": "Charizardite X",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charizardite-x.png"
            },
            "descriptionPt": "Ao passar pela Mega Evolução, suas chamas tornam-se azuis e sua tipagem muda para Fogo e Dragão, ampliando seu poder físico.",
            "descriptionEn": "Upon Mega Evolving, its flames turn blue and its typing changes to Fire and Dragon, greatly boosting its physical power."
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
            "requiredItem": {
                "identifier": "charizardite-y",
                "namePt": "Charizardita Y",
                "nameEn": "Charizardite Y",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charizardite-y.png"
            },
            "descriptionPt": "Seus laços com o Treinador ampliam sua agilidade e capacidade de voo, invocando a luz do sol intensa ao entrar no combate.",
            "descriptionEn": "Its bonds with its Trainer enhance its flight capabilities and agility, summoning intense sunlight upon entering battle."
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
            "requiredItem": {
                "identifier": "blastoisinite",
                "namePt": "Blastoisita",
                "nameEn": "Blastoisinite",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blastoisinite.png"
            },
            "descriptionPt": "Os dois canhões em suas costas combinam-se em uma única arma d’água colossal de longo alcance e poder avassalador.",
            "descriptionEn": "The twin cannons on its shell consolidate into a single colossal water cannon with devastating range and power."
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
            "requiredItem": null,
            "descriptionPt": "Usa seu poder psíquico para levitar e surfar pelo ar sobre a própria cauda, movendo-se com extrema leveza.",
            "descriptionEn": "It uses psychokinesis to control electricity and floats on its broad tail as if surfing across the waves."
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
            "requiredItem": null,
            "descriptionPt": "Migrou para montanhas nevadas e adaptou-se ao frio extremo. Expele ar congelante a 50 graus negativos pela boca.",
            "descriptionEn": "It moved to snowy mountain peaks to avoid other Pokémon and adapted to freezing cold, exhaling breath of minus 58 degrees Fahrenheit."
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
            "requiredItem": null,
            "descriptionPt": "Venerado em Alola como um mensageiro divino da montanha sagrada. Cria cristais de gelo com sua pelagem alva.",
            "descriptionEn": "Revered in Alola as an emissary of the deities on sacred snowy peaks. It creates ice crystals with its shimmering fur."
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
            "requiredItem": {
                "identifier": "gengarite",
                "namePt": "Gengarita",
                "nameEn": "Gengarite",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gengarite.png"
            },
            "descriptionPt": "Sua parte inferior submerge em outra dimensão. Prende qualquer um ao seu redor prendendo suas sombras no solo.",
            "descriptionEn": "The lower part of its body sinks into another dimension. Its third eye opens to perceive all realities while trapping shadows."
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
            "requiredItem": null,
            "descriptionPt": "Acende chamas espectrais nas pontas do seu osso em honra aos seus companheiros caídos, girando-o como tocha ritual.",
            "descriptionEn": "It sets the ends of its bone alight with cursed flames in mourning for its comrades, dancing with spectral fury."
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
            "requiredItem": null,
            "descriptionPt": "Consome poluição atmosférica tóxica e a purifica, liberando ar fresco e puro pelo topo de suas chaminés em formato de cartola.",
            "descriptionEn": "It inhales polluted air and toxic particles, cleansing them before expelling pure, clean air from its top-hat funnels."
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
            "requiredItem": {
                "identifier": "mewtwonite-x",
                "namePt": "Mewtwonita X",
                "nameEn": "Mewtwonite X",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewtwonite-x.png"
            },
            "descriptionPt": "Músculos psíquicos intensos desenvolvem-se em seus braços e pernas, permitindo desferir golpes corporais com força devastadora.",
            "descriptionEn": "Psychic power bulks up its muscles, granting it unparalleled physical power combined with formidable telekinesis."
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
            "requiredItem": {
                "identifier": "mewtwonite-y",
                "namePt": "Mewtwonita Y",
                "nameEn": "Mewtwonite Y",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewtwonite-y.png"
            },
            "descriptionPt": "Seu corpo torna-se compacto e sua mente atinge poder sobrenatural imenso, canalizando ondas mentais com poder de pulverização.",
            "descriptionEn": "Its body shrinks while its brain power multiplies exponentially, unleashing mental waves capable of shattering skyscrapers."
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
            "requiredItem": null,
            "descriptionPt": "Após perder disputas por território aquático em Paldea, passou a viver em pântanos lamacentos e cobriu o corpo com veneno espesso.",
            "descriptionEn": "After losing territorial battles in ancient Paldea, it took up residence on muddy land, coating itself in a poisonous film."
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
            "requiredItem": {
                "identifier": "salamencite",
                "namePt": "Salamencita",
                "nameEn": "Salamencite",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/salamencite.png"
            },
            "descriptionPt": "Suas duas asas fundem-se em uma única e gigantesca asa em formato de lâmina crescente, atingindo velocidades supersônicas.",
            "descriptionEn": "Its two wings fuse into a single massive crescent blade, letting it soar at supersonic speeds while slicing obstacles."
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
            "requiredItem": {
                "identifier": "blue-orb",
                "namePt": "Orbe Azul",
                "nameEn": "Blue Orb",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blue-orb.png"
            },
            "descriptionPt": "Através da Reversão Primitiva e da energia natural dos oceanos, reassume sua forma ancestral com domínio absoluto sobre os mares.",
            "descriptionEn": "Through Primal Reversion and natural oceanic energy, it regains its primordial form with absolute dominion over the sea."
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
            "requiredItem": {
                "identifier": "red-orb",
                "namePt": "Orbe Vermelho",
                "nameEn": "Red Orb",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/red-orb.png"
            },
            "descriptionPt": "A energia da terra preenche seu corpo com calor magmático intenso, expandindo a massa continental por onde pisa.",
            "descriptionEn": "The raw energy of the earth fills its body with searing magmatic heat, expanding landmasses wherever it strides."
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
            "requiredItem": null,
            "descriptionPt": "Mega-evolui ao dominar o golpe Ascensão do Dragão e consumir meteoritos na camada de ozônio, controlando vendavais lendários.",
            "descriptionEn": "Mega Evolving by knowing the move Dragon Ascent, it consumes meteorites in the ozone layer to summon ancient gale winds."
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
            "requiredItem": {
                "identifier": "garchompite",
                "namePt": "Garchompita",
                "nameEn": "Garchompite",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/garchompite.png"
            },
            "descriptionPt": "O excesso de energia derrete e transforma seus braços em foices colossais de lâmina afiada, movidas por fúria incontrolável.",
            "descriptionEn": "Excess Mega Energy melts its arms and wings, reforming them into giant scythes driven by berserk draconic rage."
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
            "requiredItem": {
                "identifier": "lucarionite",
                "namePt": "Lucarionita",
                "nameEn": "Lucarionite",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucarionite.png"
            },
            "descriptionPt": "Sua aura concentra-se intensamente nos punhos e pés, desferindo golpes de combate com adaptação e precisão fulminantes.",
            "descriptionEn": "Its aura focuses with intense purity around its limbs, allowing it to unleash devastating close-quarters strikes."
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
            "requiredItem": {
                "identifier": "adamant-crystal",
                "namePt": "Cristal Adamantino",
                "nameEn": "Adamant Crystal",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/adamant-crystal.png"
            },
            "descriptionPt": "Assume sua forma ancestral verdadeira empunhando o Cristal Adamantino, com controle total sobre o fluxo e direção do tempo.",
            "descriptionEn": "It assumes its true primordial form through the Adamant Crystal, commanding the very flow and currents of time."
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
            "requiredItem": {
                "identifier": "lustrous-globe",
                "namePt": "Globo Lustroso",
                "nameEn": "Lustrous Globe",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lustrous-globe.png"
            },
            "descriptionPt": "Reveste-se de sua forma cósmica primordial empunhando o Globo Lustroso, capaz de dobrar e distorcer as dimensões espaciais.",
            "descriptionEn": "It manifests its celestial form via the Lustrous Globe, manipulating and reshaping spatial dimensions at will."
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
            "requiredItem": {
                "identifier": "griseous-core",
                "namePt": "Núcleo Brilhante",
                "nameEn": "Griseous Core",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/griseous-core.png"
            },
            "descriptionPt": "Forma adotada no Mundo da Distorção ou segurando o Núcleo Brilhante, flutuando livre da gravidade deste universo.",
            "descriptionEn": "Its true form within the Distortion World or when holding the Griseous Core, gliding weightlessly beyond earthly physics."
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
            "requiredItem": null,
            "descriptionPt": "Ressuscitado por puro rancor contra humanos e Pokémon, projeta ilusões assombrosas cheias de malevolência gélida.",
            "descriptionEn": "Reborn from sheer spite in the harsh wilderness of Hisui, it projects terrifying spectral illusions laced with malice."
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
            "requiredItem": null,
            "descriptionPt": "Desenvolveu pernas poderosas para suportar nevascas severas de Hisui, especializando-se em combate corpo a corpo feroz.",
            "descriptionEn": "It developed sturdy legs to withstand severe Hisuian snows, excelling in fierce close-quarters combat."
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
            "requiredItem": {
                "identifier": "rusted-sword",
                "namePt": "Espada Enferrujada",
                "nameEn": "Rusted Sword",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rusted-sword.png"
            },
            "descriptionPt": "Ao segurar a lendária espada ancestral, ganha a tipagem Aço e atinge velocidade e precisão supremas em combate.",
            "descriptionEn": "Holding the legendary rusted blade, it gains the Steel type and achieves supreme speed and precision in battle."
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
            "requiredItem": {
                "identifier": "rusted-shield",
                "namePt": "Escudo Enferrujado",
                "nameEn": "Rusted Shield",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rusted-shield.png"
            },
            "descriptionPt": "Ao equipar o escudo heróico ancestral, adquire o tipo Aço e uma couraça inquebrável que anula qualquer ataque frontal.",
            "descriptionEn": "Equipping the ancestral rusted shield, it gains the Steel type and an unbreakable armor that repels any onslaught."
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

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { POKEMON_FORMS_DATABASE };
}
