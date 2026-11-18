// Catálogo Oficial de Habilidades Pokémon (Gerações I a IX)
const ABILITIES_DATABASE = {
  "stench": {
    "id": 1,
    "name": "stench",
    "nameEn": "Stench",
    "namePt": "Mau Cheiro",
    "desc": "By releasing a stench when attacking, the Pokémon may cause the target to flinch."
  },
  "drizzle": {
    "id": 2,
    "name": "drizzle",
    "nameEn": "Drizzle",
    "namePt": "Chuvisco",
    "desc": "Summons rain that lasts indefinitely upon entering battle."
  },
  "speed-boost": {
    "id": 3,
    "name": "speed-boost",
    "nameEn": "Speed Boost",
    "namePt": "Impulso de Velocidade",
    "desc": "Raises Speed one stage after each turn."
  },
  "battle-armor": {
    "id": 4,
    "name": "battle-armor",
    "nameEn": "Battle Armor",
    "namePt": "Armadura de Batalha",
    "desc": "Protects against critical hits."
  },
  "sturdy": {
    "id": 5,
    "name": "sturdy",
    "nameEn": "Sturdy",
    "namePt": "Firmeza",
    "desc": "It cannot be knocked out with one hit. One-hit KO moves cannot knock it out, either."
  },
  "damp": {
    "id": 6,
    "name": "damp",
    "nameEn": "Damp",
    "namePt": "Umidade",
    "desc": "The Pokémon dampens its surroundings, preventing all Pokémon from using explosive moves such as Self-Destruct."
  },
  "limber": {
    "id": 7,
    "name": "limber",
    "nameEn": "Limber",
    "namePt": "Flexibilidade",
    "desc": "Prevents paralysis."
  },
  "sand-veil": {
    "id": 8,
    "name": "sand-veil",
    "nameEn": "Sand Veil",
    "namePt": "Véu de Areia",
    "desc": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
  },
  "static": {
    "id": 9,
    "name": "static",
    "nameEn": "Static",
    "namePt": "Estática",
    "desc": "The Pokémon is charged with static electricity, so contact with it may cause paralysis."
  },
  "volt-absorb": {
    "id": 10,
    "name": "volt-absorb",
    "nameEn": "Volt Absorb",
    "namePt": "Absorção de Voltagem",
    "desc": "If hit by an Electric-type move, the Pokémon has its HP restored instead of taking damage."
  },
  "water-absorb": {
    "id": 11,
    "name": "water-absorb",
    "nameEn": "Water Absorb",
    "namePt": "Absorção de Água",
    "desc": "If hit by a Water-type move, the Pokémon has its HP restored instead of taking damage."
  },
  "oblivious": {
    "id": 12,
    "name": "oblivious",
    "nameEn": "Oblivious",
    "namePt": "Desatento",
    "desc": "The Pokémon is oblivious, keeping it from being infatuated, falling for taunts, or being affected by Intimidate."
  },
  "cloud-nine": {
    "id": 13,
    "name": "cloud-nine",
    "nameEn": "Cloud Nine",
    "namePt": "Céu Limpo",
    "desc": "\"Negates all effects of weather"
  },
  "compound-eyes": {
    "id": 14,
    "name": "compound-eyes",
    "nameEn": "Compound Eyes",
    "namePt": "Olhos Compostos",
    "desc": "Increases moves' accuracy to 1.3×."
  },
  "insomnia": {
    "id": 15,
    "name": "insomnia",
    "nameEn": "Insomnia",
    "namePt": "Insônia",
    "desc": "Prevents sleep."
  },
  "color-change": {
    "id": 16,
    "name": "color-change",
    "nameEn": "Color Change",
    "namePt": "Mudança de Cor",
    "desc": "Changes type to match when hit by a damaging move."
  },
  "immunity": {
    "id": 17,
    "name": "immunity",
    "nameEn": "Immunity",
    "namePt": "Imunidade",
    "desc": "Prevents poison."
  },
  "flash-fire": {
    "id": 18,
    "name": "flash-fire",
    "nameEn": "Flash Fire",
    "namePt": "Fogo Absorvente",
    "desc": "If hit by a Fire-type move, the Pokémon absorbs the flames and uses them to power up its own Fire-type moves."
  },
  "shield-dust": {
    "id": 19,
    "name": "shield-dust",
    "nameEn": "Shield Dust",
    "namePt": "Pó Protetor",
    "desc": "Protects against incoming moves' extra effects."
  },
  "own-tempo": {
    "id": 20,
    "name": "own-tempo",
    "nameEn": "Own Tempo",
    "namePt": "Ritmo Próprio",
    "desc": "The Pokémon sticks to its own tempo, preventing it from becoming confused or being affected by Intimidate."
  },
  "suction-cups": {
    "id": 21,
    "name": "suction-cups",
    "nameEn": "Suction Cups",
    "namePt": "Ventosas",
    "desc": "Prevents being forced out of battle by other Pokémon's moves."
  },
  "intimidate": {
    "id": 22,
    "name": "intimidate",
    "nameEn": "Intimidate",
    "namePt": "Intimidação",
    "desc": "When the Pokémon enters a battle, it intimidates opposing Pokémon and makes them cower, lowering their Attack stats."
  },
  "shadow-tag": {
    "id": 23,
    "name": "shadow-tag",
    "nameEn": "Shadow Tag",
    "namePt": "Marca Sombria",
    "desc": "Prevents opponents from fleeing or switching out."
  },
  "rough-skin": {
    "id": 24,
    "name": "rough-skin",
    "nameEn": "Rough Skin",
    "namePt": "Pele Áspera",
    "desc": "Damages attacking Pokémon for 1/8 their max HP on contact."
  },
  "wonder-guard": {
    "id": 25,
    "name": "wonder-guard",
    "nameEn": "Wonder Guard",
    "namePt": "Guarda Maravilha",
    "desc": "Protects against damaging moves that are not super effective."
  },
  "levitate": {
    "id": 26,
    "name": "levitate",
    "nameEn": "Levitate",
    "namePt": "Levitação",
    "desc": "By floating in the air, the Pokémon receives full immunity to all Ground-type moves."
  },
  "effect-spore": {
    "id": 27,
    "name": "effect-spore",
    "nameEn": "Effect Spore",
    "namePt": "Esporo de Efeito",
    "desc": "O contato físico com este Pokémon pode causar poison, sleep, or paralysis on the attacker no atacante."
  },
  "synchronize": {
    "id": 28,
    "name": "synchronize",
    "nameEn": "Synchronize",
    "namePt": "Sincronizar",
    "desc": "If the Pokémon is burned, paralyzed, or poisoned by another Pokémon, that Pokémon will be inflicted with the same status condition."
  },
  "clear-body": {
    "id": 29,
    "name": "clear-body",
    "nameEn": "Clear Body",
    "namePt": "Corpo Claro",
    "desc": "Prevents stats from being lowered by other Pokémon."
  },
  "natural-cure": {
    "id": 30,
    "name": "natural-cure",
    "nameEn": "Natural Cure",
    "namePt": "Cura Natural",
    "desc": "Cures any major status ailment upon switching out."
  },
  "lightning-rod": {
    "id": 31,
    "name": "lightning-rod",
    "nameEn": "Lightning Rod",
    "namePt": "Pára-raios",
    "desc": "The Pokémon draws in all Electric-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted."
  },
  "serene-grace": {
    "id": 32,
    "name": "serene-grace",
    "nameEn": "Serene Grace",
    "namePt": "Graça Serena",
    "desc": "Doubles the chance of moves' extra effects occurring."
  },
  "swift-swim": {
    "id": 33,
    "name": "swift-swim",
    "nameEn": "Swift Swim",
    "namePt": "Nado Rápido",
    "desc": "Doubles Speed during rain."
  },
  "chlorophyll": {
    "id": 34,
    "name": "chlorophyll",
    "nameEn": "Chlorophyll",
    "namePt": "Clorofila",
    "desc": "Doubles Speed during strong sunlight."
  },
  "illuminate": {
    "id": 35,
    "name": "illuminate",
    "nameEn": "Illuminate",
    "namePt": "Iluminar",
    "desc": "By illuminating its surroundings, the Pokémon prevents its accuracy from being lowered."
  },
  "trace": {
    "id": 36,
    "name": "trace",
    "nameEn": "Trace",
    "namePt": "Rastrear",
    "desc": "When it enters a battle, the Pokémon copies an opposing Pokémon’s Ability."
  },
  "huge-power": {
    "id": 37,
    "name": "huge-power",
    "nameEn": "Huge Power",
    "namePt": "Poder Imenso",
    "desc": "Doubles Attack in battle."
  },
  "poison-point": {
    "id": 38,
    "name": "poison-point",
    "nameEn": "Poison Point",
    "namePt": "Ponto Venenoso",
    "desc": "Has a 30% chance of poisoning attacking Pokémon on contact."
  },
  "inner-focus": {
    "id": 39,
    "name": "inner-focus",
    "nameEn": "Inner Focus",
    "namePt": "Foco Interno",
    "desc": "The Pokémon’s intensely focused, and that Protege o Pokémon contra flinching."
  },
  "magma-armor": {
    "id": 40,
    "name": "magma-armor",
    "nameEn": "Magma Armor",
    "namePt": "Armadura de Magma",
    "desc": "The Pokémon is covered with hot magma, which prevents the Pokémon from becoming frozen."
  },
  "water-veil": {
    "id": 41,
    "name": "water-veil",
    "nameEn": "Water Veil",
    "namePt": "Véu de Água",
    "desc": "The Pokémon is covered with a water veil, which prevents the Pokémon from getting a burn."
  },
  "magnet-pull": {
    "id": 42,
    "name": "magnet-pull",
    "nameEn": "Magnet Pull",
    "namePt": "Atração Magnética",
    "desc": "Prevents Steel opponents from fleeing or switching out."
  },
  "soundproof": {
    "id": 43,
    "name": "soundproof",
    "nameEn": "Soundproof",
    "namePt": "À Prova de Som",
    "desc": "Protects against sound-based moves."
  },
  "rain-dish": {
    "id": 44,
    "name": "rain-dish",
    "nameEn": "Rain Dish",
    "namePt": "Prato de Chuva",
    "desc": "Heals for 1/16 max HP after each turn during rain."
  },
  "sand-stream": {
    "id": 45,
    "name": "sand-stream",
    "nameEn": "Sand Stream",
    "namePt": "Fluxo de Areia",
    "desc": "Summons a sandstorm that lasts indefinitely upon entering battle."
  },
  "pressure": {
    "id": 46,
    "name": "pressure",
    "nameEn": "Pressure",
    "namePt": "Pressão",
    "desc": "Puts other Pokémon under pressure, causing them to expend more PP to use their moves."
  },
  "thick-fat": {
    "id": 47,
    "name": "thick-fat",
    "nameEn": "Thick Fat",
    "namePt": "Gordura Espessa",
    "desc": "The Pokémon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves."
  },
  "early-bird": {
    "id": 48,
    "name": "early-bird",
    "nameEn": "Early Bird",
    "namePt": "Madrugador",
    "desc": "Makes sleep pass twice as quickly."
  },
  "flame-body": {
    "id": 49,
    "name": "flame-body",
    "nameEn": "Flame Body",
    "namePt": "Corpo em Chamas",
    "desc": "Has a 30% chance of burning attacking Pokémon on contact."
  },
  "run-away": {
    "id": 50,
    "name": "run-away",
    "nameEn": "Run Away",
    "namePt": "Fugir",
    "desc": "Ensures success fleeing from wild battles."
  },
  "keen-eye": {
    "id": 51,
    "name": "keen-eye",
    "nameEn": "Keen Eye",
    "namePt": "Olho Vivo",
    "desc": "Prevents accuracy from being lowered."
  },
  "hyper-cutter": {
    "id": 52,
    "name": "hyper-cutter",
    "nameEn": "Hyper Cutter",
    "namePt": "Hiper Cortador",
    "desc": "The Pokémon’s prized, mighty pincers prevent other Pokémon from lowering its Attack stat."
  },
  "pickup": {
    "id": 53,
    "name": "pickup",
    "nameEn": "Pickup",
    "namePt": "Coleta",
    "desc": "The Pokémon may pick up an item another Pokémon used during a battle. It may pick up items outside of battle, too."
  },
  "truant": {
    "id": 54,
    "name": "truant",
    "nameEn": "Truant",
    "namePt": "Preguiçoso",
    "desc": "Each time the Pokémon uses a move, it spends the next turn loafing around."
  },
  "hustle": {
    "id": 55,
    "name": "hustle",
    "nameEn": "Hustle",
    "namePt": "Agitação",
    "desc": "Boosts the Attack stat, but lowers accuracy."
  },
  "cute-charm": {
    "id": 56,
    "name": "cute-charm",
    "nameEn": "Cute Charm",
    "namePt": "Charme Gracioso",
    "desc": "Has a 30% chance of infatuating attacking Pokémon on contact."
  },
  "plus": {
    "id": 57,
    "name": "plus",
    "nameEn": "Plus",
    "namePt": "Mais",
    "desc": "Increases Special Attack to 1.5× when a friendly Pokémon has Plus or Minus."
  },
  "minus": {
    "id": 58,
    "name": "minus",
    "nameEn": "Minus",
    "namePt": "Menos",
    "desc": "Increases Special Attack to 1.5× when a friendly Pokémon has Plus or Minus."
  },
  "forecast": {
    "id": 59,
    "name": "forecast",
    "nameEn": "Forecast",
    "namePt": "Previsão do Tempo",
    "desc": "The Pokémon transforms with the weather to change its type to Water, Fire, or Ice."
  },
  "sticky-hold": {
    "id": 60,
    "name": "sticky-hold",
    "nameEn": "Sticky Hold",
    "namePt": "Aderência",
    "desc": "Prevents a held item from being removed by other Pokémon."
  },
  "shed-skin": {
    "id": 61,
    "name": "shed-skin",
    "nameEn": "Shed Skin",
    "namePt": "Muda de Pele",
    "desc": "Has a 33% chance of curing any major status ailment after each turn."
  },
  "guts": {
    "id": 62,
    "name": "guts",
    "nameEn": "Guts",
    "namePt": "Bravura",
    "desc": "Increases Attack to 1.5× with a major status ailment."
  },
  "marvel-scale": {
    "id": 63,
    "name": "marvel-scale",
    "nameEn": "Marvel Scale",
    "namePt": "Escama Maravilha",
    "desc": "Increases Defense to 1.5× with a major status ailment."
  },
  "liquid-ooze": {
    "id": 64,
    "name": "liquid-ooze",
    "nameEn": "Liquid Ooze",
    "namePt": "Lodo Líquido",
    "desc": "The oozed liquid has a strong stench, which damages attackers using any draining move."
  },
  "overgrow": {
    "id": 65,
    "name": "overgrow",
    "nameEn": "Overgrow",
    "namePt": "Supercrescimento",
    "desc": "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  "blaze": {
    "id": 66,
    "name": "blaze",
    "nameEn": "Blaze",
    "namePt": "Chama",
    "desc": "Strengthens Fire moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  "torrent": {
    "id": 67,
    "name": "torrent",
    "nameEn": "Torrent",
    "namePt": "Torrente",
    "desc": "Strengthens Water moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  "swarm": {
    "id": 68,
    "name": "swarm",
    "nameEn": "Swarm",
    "namePt": "Enxame",
    "desc": "Strengthens Bug moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  "rock-head": {
    "id": 69,
    "name": "rock-head",
    "nameEn": "Rock Head",
    "namePt": "Cabeça de Pedra",
    "desc": "Protects against recoil damage."
  },
  "drought": {
    "id": 70,
    "name": "drought",
    "nameEn": "Drought",
    "namePt": "Seca",
    "desc": "Summons strong sunlight that lasts indefinitely upon entering battle."
  },
  "arena-trap": {
    "id": 71,
    "name": "arena-trap",
    "nameEn": "Arena Trap",
    "namePt": "Armadilha de Arena",
    "desc": "Prevents opponents from fleeing or switching out.  Eluded by Flying-types and Pokémon in the air."
  },
  "vital-spirit": {
    "id": 72,
    "name": "vital-spirit",
    "nameEn": "Vital Spirit",
    "namePt": "Espírito Vital",
    "desc": "The Pokémon is full of vitality, and that prevents it from falling asleep."
  },
  "white-smoke": {
    "id": 73,
    "name": "white-smoke",
    "nameEn": "White Smoke",
    "namePt": "Fumaça Branca",
    "desc": "The Pokémon is protected by its white smoke, which Impede que outros Pokémon reduzam seus atributos."
  },
  "pure-power": {
    "id": 74,
    "name": "pure-power",
    "nameEn": "Pure Power",
    "namePt": "Poder Puro",
    "desc": "Using its pure power, the Pokémon doubles its Attack stat."
  },
  "shell-armor": {
    "id": 75,
    "name": "shell-armor",
    "nameEn": "Shell Armor",
    "namePt": "Armadura de Casca",
    "desc": "Protects against critical hits."
  },
  "air-lock": {
    "id": 76,
    "name": "air-lock",
    "nameEn": "Air Lock",
    "namePt": "Eclusa de Ar",
    "desc": "\"Negates all effects of weather"
  },
  "tangled-feet": {
    "id": 77,
    "name": "tangled-feet",
    "nameEn": "Tangled Feet",
    "namePt": "Pés Trôpegos",
    "desc": "Doubles evasion when confused."
  },
  "motor-drive": {
    "id": 78,
    "name": "motor-drive",
    "nameEn": "Motor Drive",
    "namePt": "Motor Elétrico",
    "desc": "The Pokémon takes no damage when hit by Electric-type moves. Instead, its Speed stat is boosted."
  },
  "rivalry": {
    "id": 79,
    "name": "rivalry",
    "nameEn": "Rivalry",
    "namePt": "Rivalidade",
    "desc": "The Pokémon’s competitive spirit makes it deal more damage to Pokémon of the same gender, but less damage to Pokémon of the opposite gender."
  },
  "steadfast": {
    "id": 80,
    "name": "steadfast",
    "nameEn": "Steadfast",
    "namePt": "Inabalável",
    "desc": "Raises Speed one stage upon flinching."
  },
  "snow-cloak": {
    "id": 81,
    "name": "snow-cloak",
    "nameEn": "Snow Cloak",
    "namePt": "Manto de Neve",
    "desc": "Increases evasion to 1.25× during hail.  Protects against hail damage."
  },
  "gluttony": {
    "id": 82,
    "name": "gluttony",
    "nameEn": "Gluttony",
    "namePt": "Gula",
    "desc": "If the Pokémon is holding a Berry to be eaten when its HP is low, it will instead eat the Berry when its HP drops to half or less."
  },
  "anger-point": {
    "id": 83,
    "name": "anger-point",
    "nameEn": "Anger Point",
    "namePt": "Ponto de Fúria",
    "desc": "The Pokémon is angered when it takes a critical hit, and that maxes its Attack stat."
  },
  "unburden": {
    "id": 84,
    "name": "unburden",
    "nameEn": "Unburden",
    "namePt": "Alívio",
    "desc": "Doubles Speed upon using or losing a held item."
  },
  "heatproof": {
    "id": 85,
    "name": "heatproof",
    "nameEn": "Heatproof",
    "namePt": "À Prova de Calor",
    "desc": "Halves damage from Fire moves and burns."
  },
  "simple": {
    "id": 86,
    "name": "simple",
    "nameEn": "Simple",
    "namePt": "Simples",
    "desc": "Doubles the Pokémon's stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
  },
  "dry-skin": {
    "id": 87,
    "name": "dry-skin",
    "nameEn": "Dry Skin",
    "namePt": "Pele Seca",
    "desc": "Restores the Pokémon’s HP in rain or when it is hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves."
  },
  "download": {
    "id": 88,
    "name": "download",
    "nameEn": "Download",
    "namePt": "Download",
    "desc": "Raises the attack stat corresponding to the opponents' weaker defense one stage upon entering battle."
  },
  "iron-fist": {
    "id": 89,
    "name": "iron-fist",
    "nameEn": "Iron Fist",
    "namePt": "Punho de Ferro",
    "desc": "Strengthens punch-based moves to 1.2× their power."
  },
  "poison-heal": {
    "id": 90,
    "name": "poison-heal",
    "nameEn": "Poison Heal",
    "namePt": "Cura Venenosa",
    "desc": "If poisoned, the Pokémon has its HP restored instead of taking damage."
  },
  "adaptability": {
    "id": 91,
    "name": "adaptability",
    "nameEn": "Adaptability",
    "namePt": "Adaptabilidade",
    "desc": "Increases the same-type attack bonus from 1.5× to 2×."
  },
  "skill-link": {
    "id": 92,
    "name": "skill-link",
    "nameEn": "Skill Link",
    "namePt": "Vínculo de Habilidades",
    "desc": "Extends two-to-five-hit moves and Triple Kick to their full length every time."
  },
  "hydration": {
    "id": 93,
    "name": "hydration",
    "nameEn": "Hydration",
    "namePt": "Hidratação",
    "desc": "Cures any major status ailment after each turn during rain."
  },
  "solar-power": {
    "id": 94,
    "name": "solar-power",
    "nameEn": "Solar Power",
    "namePt": "Poder Solar",
    "desc": "In harsh sunlight, the Pokémon’s Sp. Atk stat is boosted, but its HP decreases every turn."
  },
  "quick-feet": {
    "id": 95,
    "name": "quick-feet",
    "nameEn": "Quick Feet",
    "namePt": "Pés Velozes",
    "desc": "Increases Speed to 1.5× with a major status ailment."
  },
  "normalize": {
    "id": 96,
    "name": "normalize",
    "nameEn": "Normalize",
    "namePt": "Normalizar",
    "desc": "Makes the Pokémon's moves all act Normal-type."
  },
  "sniper": {
    "id": 97,
    "name": "sniper",
    "nameEn": "Sniper",
    "namePt": "Atirador de Elite",
    "desc": "If the Pokémon's attack lands a critical hit, the attack is powered up even further."
  },
  "magic-guard": {
    "id": 98,
    "name": "magic-guard",
    "nameEn": "Magic Guard",
    "namePt": "Guarda Mágica",
    "desc": "Protects against damage not directly caused by a move."
  },
  "no-guard": {
    "id": 99,
    "name": "no-guard",
    "nameEn": "No Guard",
    "namePt": "Sem Guarda",
    "desc": "Ensures all moves used by and against the Pokémon hit."
  },
  "stall": {
    "id": 100,
    "name": "stall",
    "nameEn": "Stall",
    "namePt": "Atraso",
    "desc": "Makes the Pokémon move last within its move's priority bracket."
  },
  "technician": {
    "id": 101,
    "name": "technician",
    "nameEn": "Technician",
    "namePt": "Técnico",
    "desc": "Strengthens moves of 60 base power or less to 1.5× their power."
  },
  "leaf-guard": {
    "id": 102,
    "name": "leaf-guard",
    "nameEn": "Leaf Guard",
    "namePt": "Guarda de Folha",
    "desc": "Protects against major status ailments during strong sunlight."
  },
  "klutz": {
    "id": 103,
    "name": "klutz",
    "nameEn": "Klutz",
    "namePt": "Desajeitado",
    "desc": "Prevents the Pokémon from using its held item in battle."
  },
  "mold-breaker": {
    "id": 104,
    "name": "mold-breaker",
    "nameEn": "Mold Breaker",
    "namePt": "Quebra-Molde",
    "desc": "Bypasses targets' abilities if they could hinder or prevent a move."
  },
  "super-luck": {
    "id": 105,
    "name": "super-luck",
    "nameEn": "Super Luck",
    "namePt": "Super Sorte",
    "desc": "Raises moves' critical hit rates one stage."
  },
  "aftermath": {
    "id": 106,
    "name": "aftermath",
    "nameEn": "Aftermath",
    "namePt": "Consequência",
    "desc": "Damages the attacker for 1/4 its max HP when knocked out by a contact move."
  },
  "anticipation": {
    "id": 107,
    "name": "anticipation",
    "nameEn": "Anticipation",
    "namePt": "Antecipação",
    "desc": "\"Notifies all trainers upon entering battle if an opponent has a super-effective move"
  },
  "forewarn": {
    "id": 108,
    "name": "forewarn",
    "nameEn": "Forewarn",
    "namePt": "Pré-aviso",
    "desc": "When it enters a battle, the Pokémon can tell one of the moves an opposing Pokémon has."
  },
  "unaware": {
    "id": 109,
    "name": "unaware",
    "nameEn": "Unaware",
    "namePt": "Alheio",
    "desc": "When attacking, the Pokémon ignores the target’s stat changes."
  },
  "tinted-lens": {
    "id": 110,
    "name": "tinted-lens",
    "nameEn": "Tinted Lens",
    "namePt": "Lente Colorida",
    "desc": "Doubles damage inflicted with not-very-effective moves."
  },
  "filter": {
    "id": 111,
    "name": "filter",
    "nameEn": "Filter",
    "namePt": "Filtro",
    "desc": "Decreases damage taken from super-effective moves by 1/4."
  },
  "slow-start": {
    "id": 112,
    "name": "slow-start",
    "nameEn": "Slow Start",
    "namePt": "Início Lento",
    "desc": "For five turns, the Pokémon’s Attack and Speed stats are halved."
  },
  "scrappy": {
    "id": 113,
    "name": "scrappy",
    "nameEn": "Scrappy",
    "namePt": "Valente",
    "desc": "Lets the Pokémon's Normal and Fighting moves hit Ghost Pokémon."
  },
  "storm-drain": {
    "id": 114,
    "name": "storm-drain",
    "nameEn": "Storm Drain",
    "namePt": "Dreno de Tempestade",
    "desc": "The Pokémon draws in all Water-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted."
  },
  "ice-body": {
    "id": 115,
    "name": "ice-body",
    "nameEn": "Ice Body",
    "namePt": "Corpo de Gelo",
    "desc": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
  },
  "solid-rock": {
    "id": 116,
    "name": "solid-rock",
    "nameEn": "Solid Rock",
    "namePt": "Rocha Sólida",
    "desc": "Decreases damage taken from super-effective moves by 1/4."
  },
  "snow-warning": {
    "id": 117,
    "name": "snow-warning",
    "nameEn": "Snow Warning",
    "namePt": "Aviso de Neve",
    "desc": "Summons hail that lasts indefinitely upon entering battle."
  },
  "honey-gather": {
    "id": 118,
    "name": "honey-gather",
    "nameEn": "Honey Gather",
    "namePt": "Colheita de Mel",
    "desc": "The Pokémon may pick up Honey after battle."
  },
  "frisk": {
    "id": 119,
    "name": "frisk",
    "nameEn": "Frisk",
    "namePt": "Revistar",
    "desc": "When it enters a battle, the Pokémon can check an opposing Pokémon’s held item."
  },
  "reckless": {
    "id": 120,
    "name": "reckless",
    "nameEn": "Reckless",
    "namePt": "Imprudente",
    "desc": "Strengthens recoil moves to 1.2× their power."
  },
  "multitype": {
    "id": 121,
    "name": "multitype",
    "nameEn": "Multitype",
    "namePt": "Multitipo",
    "desc": "Changes Arceus's type and form to match its held Plate."
  },
  "flower-gift": {
    "id": 122,
    "name": "flower-gift",
    "nameEn": "Flower Gift",
    "namePt": "Presente Floral",
    "desc": "Increases friendly Pokémon's Attack and Special Defense to 1.5× during strong sunlight."
  },
  "bad-dreams": {
    "id": 123,
    "name": "bad-dreams",
    "nameEn": "Bad Dreams",
    "namePt": "Pesadelos",
    "desc": "Damages sleeping opponents for 1/8 their max HP after each turn."
  },
  "pickpocket": {
    "id": 124,
    "name": "pickpocket",
    "nameEn": "Pickpocket",
    "namePt": "Batedor de Carteira",
    "desc": "Steals attacking Pokémon's held items on contact."
  },
  "sheer-force": {
    "id": 125,
    "name": "sheer-force",
    "nameEn": "Sheer Force",
    "namePt": "Força Bruta",
    "desc": "Removes any additional effects from the Pokémon’s moves, but increases the moves’ power."
  },
  "contrary": {
    "id": 126,
    "name": "contrary",
    "nameEn": "Contrary",
    "namePt": "Contrário",
    "desc": "Inverts stat changes."
  },
  "unnerve": {
    "id": 127,
    "name": "unnerve",
    "nameEn": "Unnerve",
    "namePt": "Desconcertar",
    "desc": "Prevents opposing Pokémon from eating held Berries."
  },
  "defiant": {
    "id": 128,
    "name": "defiant",
    "nameEn": "Defiant",
    "namePt": "Desafiador",
    "desc": "If the Pokémon has any stat lowered by an opposing Pokémon, its Attack stat will be boosted sharply."
  },
  "defeatist": {
    "id": 129,
    "name": "defeatist",
    "nameEn": "Defeatist",
    "namePt": "Derrotista",
    "desc": "Halves Attack and Special Attack at 50% max HP or less."
  },
  "cursed-body": {
    "id": 130,
    "name": "cursed-body",
    "nameEn": "Cursed Body",
    "namePt": "Corpo Amaldiçoado",
    "desc": "Has a 30% chance of Disabling any move that hits the Pokémon."
  },
  "healer": {
    "id": 131,
    "name": "healer",
    "nameEn": "Healer",
    "namePt": "Curador",
    "desc": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn."
  },
  "friend-guard": {
    "id": 132,
    "name": "friend-guard",
    "nameEn": "Friend Guard",
    "namePt": "Guarda Amiga",
    "desc": "Decreases all direct damage taken by friendly Pokémon to 0.75×."
  },
  "weak-armor": {
    "id": 133,
    "name": "weak-armor",
    "nameEn": "Weak Armor",
    "namePt": "Armadura Frágil",
    "desc": "The Pokémon’s Defense stat is lowered when it takes damage from physical moves, but its Speed stat is sharply boosted."
  },
  "heavy-metal": {
    "id": 134,
    "name": "heavy-metal",
    "nameEn": "Heavy Metal",
    "namePt": "Metal Pesado",
    "desc": "Doubles the Pokémon's weight."
  },
  "light-metal": {
    "id": 135,
    "name": "light-metal",
    "nameEn": "Light Metal",
    "namePt": "Metal Leve",
    "desc": "Halves the Pokémon's weight."
  },
  "multiscale": {
    "id": 136,
    "name": "multiscale",
    "nameEn": "Multiscale",
    "namePt": "Multiescamas",
    "desc": "Halves damage taken from full HP."
  },
  "toxic-boost": {
    "id": 137,
    "name": "toxic-boost",
    "nameEn": "Toxic Boost",
    "namePt": "Impulso Tóxico",
    "desc": "Increases Attack to 1.5× when poisoned."
  },
  "flare-boost": {
    "id": 138,
    "name": "flare-boost",
    "nameEn": "Flare Boost",
    "namePt": "Impulso de Fogo",
    "desc": "Increases Special Attack to 1.5× when burned."
  },
  "harvest": {
    "id": 139,
    "name": "harvest",
    "nameEn": "Harvest",
    "namePt": "Colheita",
    "desc": "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime."
  },
  "telepathy": {
    "id": 140,
    "name": "telepathy",
    "nameEn": "Telepathy",
    "namePt": "Telepatia",
    "desc": "Protects against friendly Pokémon's damaging moves."
  },
  "moody": {
    "id": 141,
    "name": "moody",
    "nameEn": "Moody",
    "namePt": "Inconstante",
    "desc": "Every turn, one of the Pokémon’s stats will be boosted sharply but another stat will be lowered."
  },
  "overcoat": {
    "id": 142,
    "name": "overcoat",
    "nameEn": "Overcoat",
    "namePt": "Casaco Protetor",
    "desc": "Protege o Pokémon contra things like sand, hail, and powder."
  },
  "poison-touch": {
    "id": 143,
    "name": "poison-touch",
    "nameEn": "Poison Touch",
    "namePt": "Toque Venenoso",
    "desc": "Has a 30% chance of poisoning target Pokémon upon contact."
  },
  "regenerator": {
    "id": 144,
    "name": "regenerator",
    "nameEn": "Regenerator",
    "namePt": "Regenerador",
    "desc": "Heals for 1/3 max HP upon switching out."
  },
  "big-pecks": {
    "id": 145,
    "name": "big-pecks",
    "nameEn": "Big Pecks",
    "namePt": "Peito Forte",
    "desc": "Protects against Defense drops."
  },
  "sand-rush": {
    "id": 146,
    "name": "sand-rush",
    "nameEn": "Sand Rush",
    "namePt": "Ímpeto de Areia",
    "desc": "Doubles Speed during a sandstorm.  Protects against sandstorm damage."
  },
  "wonder-skin": {
    "id": 147,
    "name": "wonder-skin",
    "nameEn": "Wonder Skin",
    "namePt": "Pele Maravilha",
    "desc": "Lowers incoming non-damaging moves' base accuracy to exactly 50%."
  },
  "analytic": {
    "id": 148,
    "name": "analytic",
    "nameEn": "Analytic",
    "namePt": "Analítico",
    "desc": "Strengthens moves to 1.3× their power when moving last."
  },
  "illusion": {
    "id": 149,
    "name": "illusion",
    "nameEn": "Illusion",
    "namePt": "Ilusão",
    "desc": "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move."
  },
  "imposter": {
    "id": 150,
    "name": "imposter",
    "nameEn": "Imposter",
    "namePt": "Impostor",
    "desc": "Transforms upon entering battle."
  },
  "infiltrator": {
    "id": 151,
    "name": "infiltrator",
    "nameEn": "Infiltrator",
    "namePt": "Infiltrador",
    "desc": "The Pokémon’s moves are unaffected by the target’s barriers, substitutes, and the like."
  },
  "mummy": {
    "id": 152,
    "name": "mummy",
    "nameEn": "Mummy",
    "namePt": "Múmia",
    "desc": "Changes attacking Pokémon's abilities to Mummy on contact."
  },
  "moxie": {
    "id": 153,
    "name": "moxie",
    "nameEn": "Moxie",
    "namePt": "Auto-confiança",
    "desc": "When the Pokémon knocks out a target, it shows moxie, which boosts its Attack stat."
  },
  "justified": {
    "id": 154,
    "name": "justified",
    "nameEn": "Justified",
    "namePt": "Justificado",
    "desc": "When the Pokémon is hit by a Dark-type attack, its Attack stat is boosted by its sense of justice."
  },
  "rattled": {
    "id": 155,
    "name": "rattled",
    "nameEn": "Rattled",
    "namePt": "Sobressaltado",
    "desc": "The Pokémon gets scared when hit by a Dark-, Ghost-, or Bug-type attack or if intimidated, which boosts its Speed stat."
  },
  "magic-bounce": {
    "id": 156,
    "name": "magic-bounce",
    "nameEn": "Magic Bounce",
    "namePt": "Reflexo Mágico",
    "desc": "Reflects most non-damaging moves back at their user."
  },
  "sap-sipper": {
    "id": 157,
    "name": "sap-sipper",
    "nameEn": "Sap Sipper",
    "namePt": "Sugador de Seiva",
    "desc": "The Pokémon takes no damage when hit by Grass-type moves. Instead, its Attack stat is boosted."
  },
  "prankster": {
    "id": 158,
    "name": "prankster",
    "nameEn": "Prankster",
    "namePt": "Travesso",
    "desc": "Raises non-damaging moves' priority by one stage."
  },
  "sand-force": {
    "id": 159,
    "name": "sand-force",
    "nameEn": "Sand Force",
    "namePt": "Força de Areia",
    "desc": "Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm."
  },
  "iron-barbs": {
    "id": 160,
    "name": "iron-barbs",
    "nameEn": "Iron Barbs",
    "namePt": "Farpas de Ferro",
    "desc": "Damages attacking Pokémon for 1/8 their max HP on contact."
  },
  "zen-mode": {
    "id": 161,
    "name": "zen-mode",
    "nameEn": "Zen Mode",
    "namePt": "Modo Zen",
    "desc": "\"Changes Darmanitan's form after each turn depending on its HP: Zen Mode below 50% max HP"
  },
  "victory-star": {
    "id": 162,
    "name": "victory-star",
    "nameEn": "Victory Star",
    "namePt": "Estrela da Vitória",
    "desc": "Increases moves' accuracy to 1.1× for friendly Pokémon."
  },
  "turboblaze": {
    "id": 163,
    "name": "turboblaze",
    "nameEn": "Turboblaze",
    "namePt": "Turbo-chama",
    "desc": "Bypasses targets' abilities if they could hinder or prevent moves."
  },
  "teravolt": {
    "id": 164,
    "name": "teravolt",
    "nameEn": "Teravolt",
    "namePt": "Teravoltagem",
    "desc": "Bypasses targets' abilities if they could hinder or prevent moves."
  },
  "aroma-veil": {
    "id": 165,
    "name": "aroma-veil",
    "nameEn": "Aroma Veil",
    "namePt": "Véu de Aroma",
    "desc": "Protects allies against moves that affect their mental state."
  },
  "flower-veil": {
    "id": 166,
    "name": "flower-veil",
    "nameEn": "Flower Veil",
    "namePt": "Véu de Flores",
    "desc": "Protects friendly Grass Pokémon from having their stats lowered by other Pokémon."
  },
  "cheek-pouch": {
    "id": 167,
    "name": "cheek-pouch",
    "nameEn": "Cheek Pouch",
    "namePt": "Bolsa na Bochecha",
    "desc": "The Pokémon’s HP is restored when it eats any Berry, in addition to the Berry’s usual effect."
  },
  "protean": {
    "id": 168,
    "name": "protean",
    "nameEn": "Protean",
    "namePt": "Proteano",
    "desc": "Changes the bearer's type to match each move it uses."
  },
  "fur-coat": {
    "id": 169,
    "name": "fur-coat",
    "nameEn": "Fur Coat",
    "namePt": "Casaco de Peles",
    "desc": "Halves damage from physical attacks."
  },
  "magician": {
    "id": 170,
    "name": "magician",
    "nameEn": "Magician",
    "namePt": "Mágico",
    "desc": "Steals the target's held item when the bearer uses a damaging move."
  },
  "bulletproof": {
    "id": 171,
    "name": "bulletproof",
    "nameEn": "Bulletproof",
    "namePt": "À Prova de Balas",
    "desc": "Protects against bullet, ball, and bomb-based moves."
  },
  "competitive": {
    "id": 172,
    "name": "competitive",
    "nameEn": "Competitive",
    "namePt": "Competitivo",
    "desc": "Raises Special Attack by two stages upon having any stat lowered."
  },
  "strong-jaw": {
    "id": 173,
    "name": "strong-jaw",
    "nameEn": "Strong Jaw",
    "namePt": "Mandíbula Forte",
    "desc": "Strengthens biting moves to 1.5× their power."
  },
  "refrigerate": {
    "id": 174,
    "name": "refrigerate",
    "nameEn": "Refrigerate",
    "namePt": "Refrigerar",
    "desc": "Turns the bearer's Normal moves into Ice moves and strengthens them to 1.3× their power."
  },
  "sweet-veil": {
    "id": 175,
    "name": "sweet-veil",
    "nameEn": "Sweet Veil",
    "namePt": "Véu Doce",
    "desc": "Prevents friendly Pokémon from sleeping."
  },
  "stance-change": {
    "id": 176,
    "name": "stance-change",
    "nameEn": "Stance Change",
    "namePt": "Mudança de Postura",
    "desc": "Changes Aegislash to Blade Forme before using a damaging move, or Shield Forme before using King’s Shield."
  },
  "gale-wings": {
    "id": 177,
    "name": "gale-wings",
    "nameEn": "Gale Wings",
    "namePt": "Asas da Ventania",
    "desc": "Raises Flying moves' priority by one stage."
  },
  "mega-launcher": {
    "id": 178,
    "name": "mega-launcher",
    "nameEn": "Mega Launcher",
    "namePt": "Mega Lançador",
    "desc": "Strengthens aura and pulse moves to 1.5× their power."
  },
  "grass-pelt": {
    "id": 179,
    "name": "grass-pelt",
    "nameEn": "Grass Pelt",
    "namePt": "Pele de Grama",
    "desc": "Boosts Defense while Grassy Terrain is in effect."
  },
  "symbiosis": {
    "id": 180,
    "name": "symbiosis",
    "nameEn": "Symbiosis",
    "namePt": "Simbiose",
    "desc": "Passes the bearer's held item to an ally when the ally uses up its item."
  },
  "tough-claws": {
    "id": 181,
    "name": "tough-claws",
    "nameEn": "Tough Claws",
    "namePt": "Garras Poderosas",
    "desc": "Strengthens moves that make contact to 1.33× their power."
  },
  "pixilate": {
    "id": 182,
    "name": "pixilate",
    "nameEn": "Pixilate",
    "namePt": "Pixilato",
    "desc": "Turns the bearer's Normal moves into Fairy moves and strengthens them to 1.3× their power."
  },
  "gooey": {
    "id": 183,
    "name": "gooey",
    "nameEn": "Gooey",
    "namePt": "Viscoso",
    "desc": "Lowers attacking Pokémon's Speed by one stage on contact."
  },
  "aerilate": {
    "id": 184,
    "name": "aerilate",
    "nameEn": "Aerilate",
    "namePt": "Aerilato",
    "desc": "Turns the bearer's Normal moves into Flying moves and strengthens them to 1.3× their power."
  },
  "parental-bond": {
    "id": 185,
    "name": "parental-bond",
    "nameEn": "Parental Bond",
    "namePt": "Laço Maternal",
    "desc": "Lets the bearer hit twice with damaging moves.  The second hit has half power."
  },
  "dark-aura": {
    "id": 186,
    "name": "dark-aura",
    "nameEn": "Dark Aura",
    "namePt": "Aura Sombria",
    "desc": "Strengthens Dark moves to 1.33× their power for all friendly and opposing Pokémon."
  },
  "fairy-aura": {
    "id": 187,
    "name": "fairy-aura",
    "nameEn": "Fairy Aura",
    "namePt": "Aura de Fada",
    "desc": "Strengthens Fairy moves to 1.33× their power for all friendly and opposing Pokémon."
  },
  "aura-break": {
    "id": 188,
    "name": "aura-break",
    "nameEn": "Aura Break",
    "namePt": "Quebra de Aura",
    "desc": "Makes Dark Aura and Fairy Aura weaken moves of their respective types."
  },
  "primordial-sea": {
    "id": 189,
    "name": "primordial-sea",
    "nameEn": "Primordial Sea",
    "namePt": "Mar Primordial",
    "desc": "\"Creates heavy rain"
  },
  "desolate-land": {
    "id": 190,
    "name": "desolate-land",
    "nameEn": "Desolate Land",
    "namePt": "Terra Desolada",
    "desc": "\"Creates extremely harsh sunlight"
  },
  "delta-stream": {
    "id": 191,
    "name": "delta-stream",
    "nameEn": "Delta Stream",
    "namePt": "Corrente Delta",
    "desc": "\"Creates a mysterious air current"
  },
  "stamina": {
    "id": 192,
    "name": "stamina",
    "nameEn": "Stamina",
    "namePt": "Vigor",
    "desc": "Raises this Pokémon's Defense by one stage when it takes damage from a move."
  },
  "wimp-out": {
    "id": 193,
    "name": "wimp-out",
    "nameEn": "Wimp Out",
    "namePt": "Covarde",
    "desc": "This Pokémon automatically switches out when its HP drops below half."
  },
  "emergency-exit": {
    "id": 194,
    "name": "emergency-exit",
    "nameEn": "Emergency Exit",
    "namePt": "Saída de Emergência",
    "desc": "The Pokémon, sensing danger, switches out when its HP drops to half or less."
  },
  "water-compaction": {
    "id": 195,
    "name": "water-compaction",
    "nameEn": "Water Compaction",
    "namePt": "Compactação de Água",
    "desc": "Raises this Pokémon's Defense by two stages when it's hit by a Water move."
  },
  "merciless": {
    "id": 196,
    "name": "merciless",
    "nameEn": "Merciless",
    "namePt": "Implacável",
    "desc": "This Pokémon's moves critical hit against poisoned targets."
  },
  "shields-down": {
    "id": 197,
    "name": "shields-down",
    "nameEn": "Shields Down",
    "namePt": "Escudos Abaixados",
    "desc": "When its HP drops to half or less, the Pokémon's shell breaks and it becomes aggressive."
  },
  "stakeout": {
    "id": 198,
    "name": "stakeout",
    "nameEn": "Stakeout",
    "namePt": "Emboscada",
    "desc": "This Pokémon's moves have double power against Pokémon that switched in this turn."
  },
  "water-bubble": {
    "id": 199,
    "name": "water-bubble",
    "nameEn": "Water Bubble",
    "namePt": "Bolha de Água",
    "desc": "Halves damage from Fire moves, doubles damage of Water moves, and prevents burns."
  },
  "steelworker": {
    "id": 200,
    "name": "steelworker",
    "nameEn": "Steelworker",
    "namePt": "Metalúrgico",
    "desc": "This Pokémon's Steel moves have 1.5× power."
  },
  "berserk": {
    "id": 201,
    "name": "berserk",
    "nameEn": "Berserk",
    "namePt": "Fúria Desenfreada",
    "desc": "Raises this Pokémon's Special Attack by one stage every time its HP drops below half."
  },
  "slush-rush": {
    "id": 202,
    "name": "slush-rush",
    "nameEn": "Slush Rush",
    "namePt": "Ímpeto de Neve",
    "desc": "During Hail, this Pokémon has double Speed."
  },
  "long-reach": {
    "id": 203,
    "name": "long-reach",
    "nameEn": "Long Reach",
    "namePt": "Alcance Longo",
    "desc": "This Pokémon's moves do not make contact."
  },
  "liquid-voice": {
    "id": 204,
    "name": "liquid-voice",
    "nameEn": "Liquid Voice",
    "namePt": "Voz Líquida",
    "desc": "Sound-based moves become Water-type."
  },
  "triage": {
    "id": 205,
    "name": "triage",
    "nameEn": "Triage",
    "namePt": "Triagem",
    "desc": "This Pokémon's healing moves have their priority increased by 3."
  },
  "galvanize": {
    "id": 206,
    "name": "galvanize",
    "nameEn": "Galvanize",
    "namePt": "Galvanizar",
    "desc": "This Pokémon's Normal moves are Electric and have their power increased to 1.2×."
  },
  "surge-surfer": {
    "id": 207,
    "name": "surge-surfer",
    "nameEn": "Surge Surfer",
    "namePt": "Surfista de Pulso",
    "desc": "Doubles this Pokémon's Speed on Electric Terrain."
  },
  "schooling": {
    "id": 208,
    "name": "schooling",
    "nameEn": "Schooling",
    "namePt": "Cardume",
    "desc": "When it has a lot of HP, the Pokémon forms a powerful school. It stops schooling when its HP is low."
  },
  "disguise": {
    "id": 209,
    "name": "disguise",
    "nameEn": "Disguise",
    "namePt": "Disfarce",
    "desc": "Once per battle, the shroud that covers the Pokémon can protect it from an attack."
  },
  "battle-bond": {
    "id": 210,
    "name": "battle-bond",
    "nameEn": "Battle Bond",
    "namePt": "Vínculo de Batalha",
    "desc": "When the Pokémon knocks out a target, its bond with its Trainer is strengthened, and its Attack, Sp. Atk, and Speed stats are boosted."
  },
  "power-construct": {
    "id": 211,
    "name": "power-construct",
    "nameEn": "Power Construct",
    "namePt": "Construção de Poder",
    "desc": "Cells gather to aid the Pokémon when its HP drops to half or less, causing it to change into its Complete Forme."
  },
  "corrosion": {
    "id": 212,
    "name": "corrosion",
    "nameEn": "Corrosion",
    "namePt": "Corrosão",
    "desc": "This Pokémon can inflict poison on Poison and Steel Pokémon."
  },
  "comatose": {
    "id": 213,
    "name": "comatose",
    "nameEn": "Comatose",
    "namePt": "Comatoso",
    "desc": "This Pokémon always  acts as though it were Asleep."
  },
  "queenly-majesty": {
    "id": 214,
    "name": "queenly-majesty",
    "nameEn": "Queenly Majesty",
    "namePt": "Majestade Rainha",
    "desc": "Its majesty pressures the opposing Pokémon, making it unable to attack using priority moves."
  },
  "innards-out": {
    "id": 215,
    "name": "innards-out",
    "nameEn": "Innards Out",
    "namePt": "Vísceras Expostas",
    "desc": "When the Pokémon is knocked out, it damages its attacker by the amount equal to the HP it had left before it was hit."
  },
  "dancer": {
    "id": 216,
    "name": "dancer",
    "nameEn": "Dancer",
    "namePt": "Dançarino",
    "desc": "Whenever a dance move is used in battle, the Pokémon will copy the user to immediately perform that dance move itself."
  },
  "battery": {
    "id": 217,
    "name": "battery",
    "nameEn": "Battery",
    "namePt": "Bateria",
    "desc": "Ally Pokémon's moves have their power increased to 1.3×."
  },
  "fluffy": {
    "id": 218,
    "name": "fluffy",
    "nameEn": "Fluffy",
    "namePt": "Fofo",
    "desc": "Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves."
  },
  "dazzling": {
    "id": 219,
    "name": "dazzling",
    "nameEn": "Dazzling",
    "namePt": "Deslumbrante",
    "desc": "The Pokémon dazzles its opponents, making them unable to use priority moves against the Pokémon or its allies."
  },
  "soul-heart": {
    "id": 220,
    "name": "soul-heart",
    "nameEn": "Soul Heart",
    "namePt": "Coração de Alma",
    "desc": "This Pokémon's Special Attack rises by one stage every time any Pokémon faints."
  },
  "tangling-hair": {
    "id": 221,
    "name": "tangling-hair",
    "nameEn": "Tangling Hair",
    "namePt": "Cabelo Emaranhado",
    "desc": "When this Pokémon takes regular damage from a contact move, the attacking Pokémon's Speed lowers by one stage."
  },
  "receiver": {
    "id": 222,
    "name": "receiver",
    "nameEn": "Receiver",
    "namePt": "Receptor",
    "desc": "When an ally faints, this Pokémon gains its Ability."
  },
  "power-of-alchemy": {
    "id": 223,
    "name": "power-of-alchemy",
    "nameEn": "Power Of Alchemy",
    "namePt": "Poder da Alquimia",
    "desc": "When an ally faints, this Pokémon gains its Ability."
  },
  "beast-boost": {
    "id": 224,
    "name": "beast-boost",
    "nameEn": "Beast Boost",
    "namePt": "Impulso da Fera",
    "desc": "Raises this Pokémon's highest stat by one stage when it faints another Pokémon."
  },
  "rks-system": {
    "id": 225,
    "name": "rks-system",
    "nameEn": "Rks System",
    "namePt": "Sistema RKS",
    "desc": "Changes this Pokémon's type to match its held Memory."
  },
  "electric-surge": {
    "id": 226,
    "name": "electric-surge",
    "nameEn": "Electric Surge",
    "namePt": "Pulso Elétrico",
    "desc": "When this Pokémon enters battle, it changes the terrain to Electric Terrain."
  },
  "psychic-surge": {
    "id": 227,
    "name": "psychic-surge",
    "nameEn": "Psychic Surge",
    "namePt": "Pulso Psíquico",
    "desc": "When this Pokémon enters battle, it changes the terrain to Psychic Terrain."
  },
  "misty-surge": {
    "id": 228,
    "name": "misty-surge",
    "nameEn": "Misty Surge",
    "namePt": "Pulso de Névoa",
    "desc": "When this Pokémon enters battle, it changes the terrain to Misty Terrain."
  },
  "grassy-surge": {
    "id": 229,
    "name": "grassy-surge",
    "nameEn": "Grassy Surge",
    "namePt": "Pulso de Grama",
    "desc": "When this Pokémon enters battle, it changes the terrain to Grassy Terrain."
  },
  "full-metal-body": {
    "id": 230,
    "name": "full-metal-body",
    "nameEn": "Full Metal Body",
    "namePt": "Corpo de Metal Completo",
    "desc": "Other Pokémon cannot lower this Pokémon's stats."
  },
  "shadow-shield": {
    "id": 231,
    "name": "shadow-shield",
    "nameEn": "Shadow Shield",
    "namePt": "Escudo Sombrio",
    "desc": "\"When this Pokémon has full HP"
  },
  "prism-armor": {
    "id": 232,
    "name": "prism-armor",
    "nameEn": "Prism Armor",
    "namePt": "Armadura de Prisma",
    "desc": "Reduces super-effective damage to 0.75×."
  },
  "neuroforce": {
    "id": 233,
    "name": "neuroforce",
    "nameEn": "Neuroforce",
    "namePt": "Neuroforça",
    "desc": "Increases super-effective damage dealt to 1.25×."
  },
  "intrepid-sword": {
    "id": 234,
    "name": "intrepid-sword",
    "nameEn": "Intrepid Sword",
    "namePt": "Espada Intrépida",
    "desc": "Boosts Attack in battle."
  },
  "dauntless-shield": {
    "id": 235,
    "name": "dauntless-shield",
    "nameEn": "Dauntless Shield",
    "namePt": "Escudo Destemido",
    "desc": "Boosts Defense in battle."
  },
  "libero": {
    "id": 236,
    "name": "libero",
    "nameEn": "Libero",
    "namePt": "Líbero",
    "desc": "Libero changes the Pokémon's type to that of its previously used attack."
  },
  "ball-fetch": {
    "id": 237,
    "name": "ball-fetch",
    "nameEn": "Ball Fetch",
    "namePt": "Buscar Bola",
    "desc": "If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle."
  },
  "cotton-down": {
    "id": 238,
    "name": "cotton-down",
    "nameEn": "Cotton Down",
    "namePt": "Pluma de Algodão",
    "desc": "When the Pokémon is hit by an attack, it scatters cotton fluff around and lowers the Speed stats of all Pokémon except itself."
  },
  "propeller-tail": {
    "id": 239,
    "name": "propeller-tail",
    "nameEn": "Propeller Tail",
    "namePt": "Cauda Hélice",
    "desc": "Ignores moves and abilities that draw in moves."
  },
  "mirror-armor": {
    "id": 240,
    "name": "mirror-armor",
    "nameEn": "Mirror Armor",
    "namePt": "Armadura Espelhada",
    "desc": "Reflects any stat-lowering effects."
  },
  "gulp-missile": {
    "id": 241,
    "name": "gulp-missile",
    "nameEn": "Gulp Missile",
    "namePt": "Míssil Engolidor",
    "desc": "When the Pokémon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to attack."
  },
  "stalwart": {
    "id": 242,
    "name": "stalwart",
    "nameEn": "Stalwart",
    "namePt": "Inflexível",
    "desc": "Ignores moves and abilities that draw in moves."
  },
  "steam-engine": {
    "id": 243,
    "name": "steam-engine",
    "nameEn": "Steam Engine",
    "namePt": "Motor a Vapor",
    "desc": "Boosts the Speed stat drastically when the Pokémon is hit by a Fire- or Water-type move."
  },
  "punk-rock": {
    "id": 244,
    "name": "punk-rock",
    "nameEn": "Punk Rock",
    "namePt": "Punk Rock",
    "desc": "Boosts sound-based moves and halves damage from the same moves."
  },
  "sand-spit": {
    "id": 245,
    "name": "sand-spit",
    "nameEn": "Sand Spit",
    "namePt": "Cuspe de Areia",
    "desc": "Creates a sandstorm when hit by an attack."
  },
  "ice-scales": {
    "id": 246,
    "name": "ice-scales",
    "nameEn": "Ice Scales",
    "namePt": "Escamas de Gelo",
    "desc": "The Pokémon is protected by ice scales, which halve the damage taken from special moves."
  },
  "ripen": {
    "id": 247,
    "name": "ripen",
    "nameEn": "Ripen",
    "namePt": "Amadurecer",
    "desc": "Doubles the effect of berries."
  },
  "ice-face": {
    "id": 248,
    "name": "ice-face",
    "nameEn": "Ice Face",
    "namePt": "Cara de Gelo",
    "desc": "The Pokémon’s ice head can take a physical attack as a substitute, but the attack also changes the Pokémon’s appearance. The ice will be restored when it snows."
  },
  "power-spot": {
    "id": 249,
    "name": "power-spot",
    "nameEn": "Power Spot",
    "namePt": "Ponto de Poder",
    "desc": "\"Just being next to the Pokémon powers up moves.\""
  },
  "mimicry": {
    "id": 250,
    "name": "mimicry",
    "nameEn": "Mimicry",
    "namePt": "Mimetismo",
    "desc": "Changes type depending on the terrain."
  },
  "screen-cleaner": {
    "id": 251,
    "name": "screen-cleaner",
    "nameEn": "Screen Cleaner",
    "namePt": "Limpador de Telas",
    "desc": "When the Pokémon enters a battle, the effects of Light Screen, Reflect, and Aurora Veil are nullified for both opposing and ally Pokémon."
  },
  "steely-spirit": {
    "id": 252,
    "name": "steely-spirit",
    "nameEn": "Steely Spirit",
    "namePt": "Espírito de Aço",
    "desc": "Powers up ally Pokémon's Steel-type moves."
  },
  "perish-body": {
    "id": 253,
    "name": "perish-body",
    "nameEn": "Perish Body",
    "namePt": "Corpo Perecível",
    "desc": "When hit by a move that makes direct contact, the Pokémon and the attacker will faint after three turns unless they switch out of battle."
  },
  "wandering-spirit": {
    "id": 254,
    "name": "wandering-spirit",
    "nameEn": "Wandering Spirit",
    "namePt": "Espírito Errante",
    "desc": "Swaps abilities with opponents on contact."
  },
  "gorilla-tactics": {
    "id": 255,
    "name": "gorilla-tactics",
    "nameEn": "Gorilla Tactics",
    "namePt": "Táticas de Gorila",
    "desc": "Boosts the Pokémon's Attack stat but only allows the use of the first selected move."
  },
  "neutralizing-gas": {
    "id": 256,
    "name": "neutralizing-gas",
    "nameEn": "Neutralizing Gas",
    "namePt": "Gás Neutralizador",
    "desc": "While the Pokémon is in the battle, the effects of all other Pokémon's Abilities will be nullified or will not be triggered."
  },
  "pastel-veil": {
    "id": 257,
    "name": "pastel-veil",
    "nameEn": "Pastel Veil",
    "namePt": "Véu Pastel",
    "desc": "Prevents the Pokémon and its allies from being poisoned."
  },
  "hunger-switch": {
    "id": 258,
    "name": "hunger-switch",
    "nameEn": "Hunger Switch",
    "namePt": "Troca por Fome",
    "desc": "The Pokémon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of every turn."
  },
  "quick-draw": {
    "id": 259,
    "name": "quick-draw",
    "nameEn": "Quick Draw",
    "namePt": "Saque Rápido",
    "desc": "Enables the Pokémon to move first occasionally."
  },
  "unseen-fist": {
    "id": 260,
    "name": "unseen-fist",
    "nameEn": "Unseen Fist",
    "namePt": "Punho Invisível",
    "desc": "If the Pokémon uses moves that make direct contact, it can attack the target even if the target protects itself."
  },
  "curious-medicine": {
    "id": 261,
    "name": "curious-medicine",
    "nameEn": "Curious Medicine",
    "namePt": "Remédio Curioso",
    "desc": "When the Pokémon enters a battle, it scatters medicine from its shell, which removes all stat changes from allies."
  },
  "transistor": {
    "id": 262,
    "name": "transistor",
    "nameEn": "Transistor",
    "namePt": "Transistor",
    "desc": "Powers up Electric-type moves."
  },
  "dragons-maw": {
    "id": 263,
    "name": "dragons-maw",
    "nameEn": "Dragons Maw",
    "namePt": "Mandíbula de Dragão",
    "desc": "Powers up Dragon-type moves."
  },
  "chilling-neigh": {
    "id": 264,
    "name": "chilling-neigh",
    "nameEn": "Chilling Neigh",
    "namePt": "Relincho Gélido",
    "desc": "When the Pokémon knocks out a target, it utters a chilling neigh, which boosts its Attack stat."
  },
  "grim-neigh": {
    "id": 265,
    "name": "grim-neigh",
    "nameEn": "Grim Neigh",
    "namePt": "Relincho Sombrio",
    "desc": "When the Pokémon knocks out a target, it utters a terrifying neigh, which boosts its Sp. Atk stat."
  },
  "as-one-glastrier": {
    "id": 266,
    "name": "as-one-glastrier",
    "nameEn": "As One Glastrier",
    "namePt": "As One Glastrier",
    "desc": "Combines the effects of Unnerve and Chilling Neigh."
  },
  "as-one-spectrier": {
    "id": 267,
    "name": "as-one-spectrier",
    "nameEn": "As One Spectrier",
    "namePt": "As One Spectrier",
    "desc": "Combines the effects of Unnerve and Grim Neigh."
  },
  "lingering-aroma": {
    "id": 268,
    "name": "lingering-aroma",
    "nameEn": "Lingering Aroma",
    "namePt": "Aroma Persistente",
    "desc": "Contact changes the attacker's Ability to Lingering Aroma."
  },
  "seed-sower": {
    "id": 269,
    "name": "seed-sower",
    "nameEn": "Seed Sower",
    "namePt": "Semeador",
    "desc": "Turns the ground into Grassy Terrain when the Pokémon is hit by an attack."
  },
  "thermal-exchange": {
    "id": 270,
    "name": "thermal-exchange",
    "nameEn": "Thermal Exchange",
    "namePt": "Troca Térmica",
    "desc": "Raises Attack when hit by a Fire-type move. Cannot be burned."
  },
  "anger-shell": {
    "id": 271,
    "name": "anger-shell",
    "nameEn": "Anger Shell",
    "namePt": "Carapaça Furiosa",
    "desc": "When an attack causes its HP to drop to half or less, the Pokémon gets angry. This lowers its Defense and Sp. Def stats but boosts its Attack, Sp. Atk, and Speed stats."
  },
  "purifying-salt": {
    "id": 272,
    "name": "purifying-salt",
    "nameEn": "Purifying Salt",
    "namePt": "Sal Purificador",
    "desc": "Protects from status conditions and halves damage from Ghost-type moves."
  },
  "well-baked-body": {
    "id": 273,
    "name": "well-baked-body",
    "nameEn": "Well Baked Body",
    "namePt": "Corpo Bem Assado",
    "desc": "The Pokémon takes no damage when hit by Fire-type moves. Instead, its Defense stat is sharply boosted."
  },
  "wind-rider": {
    "id": 274,
    "name": "wind-rider",
    "nameEn": "Wind Rider",
    "namePt": "Cavaleiro do Vento",
    "desc": "Gives immunity to wind moves, and causes the Pokémon's Attack to increase by one stage when hit by one."
  },
  "guard-dog": {
    "id": 275,
    "name": "guard-dog",
    "nameEn": "Guard Dog",
    "namePt": "Cão de Guarda",
    "desc": "Boosts Attack if intimidated, and prevents being forced to switch out."
  },
  "rocky-payload": {
    "id": 276,
    "name": "rocky-payload",
    "nameEn": "Rocky Payload",
    "namePt": "Carga Rochosa",
    "desc": "Powers up Rock-type moves."
  },
  "wind-power": {
    "id": 277,
    "name": "wind-power",
    "nameEn": "Wind Power",
    "namePt": "Energia Eólica",
    "desc": "The Pokémon becomes charged when it is hit by a wind move, boosting the power of the next Electric-type move the Pokémon uses."
  },
  "zero-to-hero": {
    "id": 278,
    "name": "zero-to-hero",
    "nameEn": "Zero To Hero",
    "namePt": "De Zero a Herói",
    "desc": "Transforms into its Hero Form when switching out."
  },
  "commander": {
    "id": 279,
    "name": "commander",
    "nameEn": "Commander",
    "namePt": "Comandante",
    "desc": "When the Pokémon enters a battle, it goes inside the mouth of an ally Dondozo if one is on the field. The Pokémon then issues commands from there."
  },
  "electromorphosis": {
    "id": 280,
    "name": "electromorphosis",
    "nameEn": "Electromorphosis",
    "namePt": "Eletromorfose",
    "desc": "The Pokémon becomes charged when it takes damage, boosting the power of the next Electric-type move the Pokémon uses."
  },
  "protosynthesis": {
    "id": 281,
    "name": "protosynthesis",
    "nameEn": "Protosynthesis",
    "namePt": "Protossíntese",
    "desc": "Raises highest stat in harsh sunlight, or if holding Booster Energy."
  },
  "quark-drive": {
    "id": 282,
    "name": "quark-drive",
    "nameEn": "Quark Drive",
    "namePt": "Propulsão de Quarks",
    "desc": "Raises highest stat on Electric Terrain, or if holding Booster Energy."
  },
  "good-as-gold": {
    "id": 283,
    "name": "good-as-gold",
    "nameEn": "Good As Gold",
    "namePt": "Bom Como Ouro",
    "desc": "A body of pure, solid gold gives the Pokémon full immunity to other Pokémon’s status moves."
  },
  "vessel-of-ruin": {
    "id": 284,
    "name": "vessel-of-ruin",
    "nameEn": "Vessel Of Ruin",
    "namePt": "Vaso da Ruína",
    "desc": "Lowers Special Attack of all Pokémon except itself."
  },
  "sword-of-ruin": {
    "id": 285,
    "name": "sword-of-ruin",
    "nameEn": "Sword Of Ruin",
    "namePt": "Espada da Ruína",
    "desc": "Lowers Defense of all Pokémon except itself."
  },
  "tablets-of-ruin": {
    "id": 286,
    "name": "tablets-of-ruin",
    "nameEn": "Tablets Of Ruin",
    "namePt": "Tábuas da Ruína",
    "desc": "Lowers Attack of all Pokémon except itself."
  },
  "beads-of-ruin": {
    "id": 287,
    "name": "beads-of-ruin",
    "nameEn": "Beads Of Ruin",
    "namePt": "Contas da Ruína",
    "desc": "Lowers Special Defense of all Pokémon except itself."
  },
  "orichalcum-pulse": {
    "id": 288,
    "name": "orichalcum-pulse",
    "nameEn": "Orichalcum Pulse",
    "namePt": "Pulso de Oricon",
    "desc": "Turns the sunlight harsh when entering battle, and boosts Attack while active."
  },
  "hadron-engine": {
    "id": 289,
    "name": "hadron-engine",
    "nameEn": "Hadron Engine",
    "namePt": "Motor de Hádrons",
    "desc": "Creates an Electric Terrain when entering battle, and boosts Special Attack while active."
  },
  "opportunist": {
    "id": 290,
    "name": "opportunist",
    "nameEn": "Opportunist",
    "namePt": "Oportunista",
    "desc": "If an opponent’s stat is boosted, the Pokémon seizes the opportunity to boost the same stat for itself."
  },
  "cud-chew": {
    "id": 291,
    "name": "cud-chew",
    "nameEn": "Cud Chew",
    "namePt": "Ruminação",
    "desc": "When the Pokémon eats a Berry, it will regurgitate that Berry at the end of the next turn and eat it one more time."
  },
  "sharpness": {
    "id": 292,
    "name": "sharpness",
    "nameEn": "Sharpness",
    "namePt": "Afiamento",
    "desc": "Powers up slicing moves."
  },
  "supreme-overlord": {
    "id": 293,
    "name": "supreme-overlord",
    "nameEn": "Supreme Overlord",
    "namePt": "Soberano Supremo",
    "desc": "When the Pokémon enters a battle, its Attack and Sp. Atk stats are slightly boosted for each of the allies in its party that have already been defeated."
  },
  "costar": {
    "id": 294,
    "name": "costar",
    "nameEn": "Costar",
    "namePt": "Coestrela",
    "desc": "When the Pokémon enters a battle, it copies an ally’s stat changes."
  },
  "toxic-debris": {
    "id": 295,
    "name": "toxic-debris",
    "nameEn": "Toxic Debris",
    "namePt": "Detritos Tóxicos",
    "desc": "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves."
  },
  "armor-tail": {
    "id": 296,
    "name": "armor-tail",
    "nameEn": "Armor Tail",
    "namePt": "Cauda Armadurada",
    "desc": "Prevents the opponent from using any moves that have priority, such as Quick Attack."
  },
  "earth-eater": {
    "id": 297,
    "name": "earth-eater",
    "nameEn": "Earth Eater",
    "namePt": "Devorador de Terra",
    "desc": "If hit by a Ground-type move, the Pokémon has its HP restored instead of taking damage."
  },
  "mycelium-might": {
    "id": 298,
    "name": "mycelium-might",
    "nameEn": "Mycelium Might",
    "namePt": "Poder do Micélio",
    "desc": "The Pokémon will always act more slowly when using status moves, but these moves will be unimpeded by the Ability of the target."
  },
  "minds-eye": {
    "id": 299,
    "name": "minds-eye",
    "nameEn": "Minds Eye",
    "namePt": "Minds Eye",
    "desc": "The Pokémon ignores changes to opponents' evasiveness, its accuracy can't be lowered, and it can hit Ghost types with Normal-type and Fighting-type moves"
  },
  "supersweet-syrup": {
    "id": 300,
    "name": "supersweet-syrup",
    "nameEn": "Supersweet Syrup",
    "namePt": "Xarope Superdoce",
    "desc": "A sickly sweet scent spreads across the field the first time the Pokémon enters a battle, lowering the evasiveness of opposing Pokémon."
  },
  "hospitality": {
    "id": 301,
    "name": "hospitality",
    "nameEn": "Hospitality",
    "namePt": "Hospitalidade",
    "desc": "When the Pokémon enters a battle, it showers its ally with hospitality, restoring a small amount of the ally's HP"
  },
  "toxic-chain": {
    "id": 302,
    "name": "toxic-chain",
    "nameEn": "Toxic Chain",
    "namePt": "Corrente Tóxica",
    "desc": "May cause bad poisoning when the Pokémon hits an opponent with a move."
  },
  "embody-aspect": {
    "id": 303,
    "name": "embody-aspect",
    "nameEn": "Embody Aspect",
    "namePt": "Embody Aspect",
    "desc": "The Pokémon's heart fills with memories, causing the Mask to shine and one of the Pokémon's stats to be boosted."
  },
  "tera-shift": {
    "id": 304,
    "name": "tera-shift",
    "nameEn": "Tera Shift",
    "namePt": "Troca Tera",
    "desc": "When the Pokémon enters a battle, it absorbs the energy around itself and transforms into its Terastal Form."
  },
  "tera-shell": {
    "id": 305,
    "name": "tera-shell",
    "nameEn": "Tera Shell",
    "namePt": "Carapaça Tera",
    "desc": "All damage-dealing moves that hit the Pokémon when its HP is full will not be very effective."
  },
  "teraform-zero": {
    "id": 306,
    "name": "teraform-zero",
    "nameEn": "Teraform Zero",
    "namePt": "Teraforma Zero",
    "desc": "When Terapagos changes into its Stellar Form, it uses its hidden powers to eliminate all effects of weather and terrain, reducing them to zero."
  },
  "poison-puppeteer": {
    "id": 307,
    "name": "poison-puppeteer",
    "nameEn": "Poison Puppeteer",
    "namePt": "Titereiro Venenoso",
    "desc": "Pokémon poisoned by Pecharunt's moves will also become confused."
  },
  "piercing-drill": {
    "id": 308,
    "name": "piercing-drill",
    "nameEn": "Piercing Drill",
    "namePt": "Piercing Drill",
    "desc": "When the Pokémon uses contact moves, it can hit even targets that are protecting themselves, dealing 1/4 of the damage that the move would otherwise deal. Everything aside from the target's protective effects is still triggered."
  },
  "dragonize": {
    "id": 309,
    "name": "dragonize",
    "nameEn": "Dragonize",
    "namePt": "Dragonize",
    "desc": "The Pokémon's Normal-type moves become Dragon-type moves and their power is boosted by 20%."
  },
  "mega-sol": {
    "id": 310,
    "name": "mega-sol",
    "nameEn": "Mega Sol",
    "namePt": "Mega Sol",
    "desc": "Even when the sunlight has not turned harsh, the Pokémon can use its moves as if the weather were harsh sunlight."
  },
  "spicy-spray": {
    "id": 311,
    "name": "spicy-spray",
    "nameEn": "Spicy Spray",
    "namePt": "Spicy Spray",
    "desc": "When the Pokémon takes damage from a move, it burns the attacker."
  },
  "eelevate": {
    "id": 312,
    "name": "eelevate",
    "nameEn": "Eelevate",
    "namePt": "Eelevate",
    "desc": "The Pokémon floats off the ground, making it immune to Ground-type moves, as well as the Spikes, Toxic Spikes, and Sticky Web statuses. When the Pokémon knocks out a target with an attack, its highest stat is boosted by 1 stage."
  },
  "fire-mane": {
    "id": 313,
    "name": "fire-mane",
    "nameEn": "Fire Mane",
    "namePt": "Fire Mane",
    "desc": "Boosts the power of the Pokémon's Fire-type moves by 50%."
  },
  "aura-guard": {
    "id": 314,
    "name": "aura-guard",
    "nameEn": "Aura Guard",
    "namePt": "Aura Guard",
    "desc": "A Pokémon with Aura Guard takes half damage from moves that make contact."
  }
};

if (typeof module !== 'undefined') {
    module.exports = { ABILITIES_DATABASE };
}
