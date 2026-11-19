// Catálogo Oficial de Habilidades Pokémon (Gerações I a IX)
const ABILITIES_DATABASE = {
  "stench": {
    "id": 1,
    "name": "stench",
    "nameEn": "Stench",
    "namePt": "Mau Cheiro",
    "desc": "Ao atacar, libera um odor fétido que pode fazer o alvo recuar (10% de chance de flinch)."
  },
  "drizzle": {
    "id": 2,
    "name": "drizzle",
    "nameEn": "Drizzle",
    "namePt": "Chuvisco",
    "desc": "Invoca chuva intensa no campo de batalha ao entrar em combate."
  },
  "speed-boost": {
    "id": 3,
    "name": "speed-boost",
    "nameEn": "Speed Boost",
    "namePt": "Impulso de Velocidade",
    "desc": "Aumenta a Velocidade do Pokémon em um estágio ao final de cada turno."
  },
  "battle-armor": {
    "id": 4,
    "name": "battle-armor",
    "nameEn": "Battle Armor",
    "namePt": "Armadura de Batalha",
    "desc": "Uma armadura rígida protege o Pokémon contra golpes críticos."
  },
  "sturdy": {
    "id": 5,
    "name": "sturdy",
    "nameEn": "Sturdy",
    "namePt": "Firmeza",
    "desc": "Impede o nocaute por um único golpe quando o Pokémon estiver com a vida cheia. Também concede imunidade a golpes de nocaute imediato (OHKO)."
  },
  "damp": {
    "id": 6,
    "name": "damp",
    "nameEn": "Damp",
    "namePt": "Umidade",
    "desc": "Umedece o ambiente ao redor, impedindo todos os Pokémon em campo de usarem golpes autodestrutivos, como Autodestruição e Explosão."
  },
  "limber": {
    "id": 7,
    "name": "limber",
    "nameEn": "Limber",
    "namePt": "Flexibilidade",
    "desc": "O corpo flexível do Pokémon concede imunidade contra a condição de paralisia."
  },
  "sand-veil": {
    "id": 8,
    "name": "sand-veil",
    "nameEn": "Sand Veil",
    "namePt": "Véu de Areia",
    "desc": "Aumenta a evasão em 20% durante tempestades de areia e concede imunidade ao dano desse clima."
  },
  "static": {
    "id": 9,
    "name": "static",
    "nameEn": "Static",
    "namePt": "Estática",
    "desc": "O corpo do Pokémon é carregado de eletricidade estática. Oponentes que fizerem contato físico têm 30% de chance de ficarem paralisados."
  },
  "volt-absorb": {
    "id": 10,
    "name": "volt-absorb",
    "nameEn": "Volt Absorb",
    "namePt": "Absorção de Voltagem",
    "desc": "Se for atingido por um golpe do tipo Elétrico, restaura até 25% do seu PS máximo em vez de receber dano."
  },
  "water-absorb": {
    "id": 11,
    "name": "water-absorb",
    "nameEn": "Water Absorb",
    "namePt": "Absorção de Água",
    "desc": "Se for atingido por um golpe do tipo Água, restaura até 25% do seu PS máximo em vez de receber dano."
  },
  "oblivious": {
    "id": 12,
    "name": "oblivious",
    "nameEn": "Oblivious",
    "namePt": "Desatento",
    "desc": "O Pokémon é alheio a distrações, ficando imune a atração, provocações (Taunt) e à habilidade Intimidação."
  },
  "cloud-nine": {
    "id": 13,
    "name": "cloud-nine",
    "nameEn": "Cloud Nine",
    "namePt": "Céu Limpo",
    "desc": "Anula todos os efeitos e modificadores causados pelas condições climáticas na batalha."
  },
  "compound-eyes": {
    "id": 14,
    "name": "compound-eyes",
    "nameEn": "Compound Eyes",
    "namePt": "Olhos Compostos",
    "desc": "Os olhos compostos aumentam a precisão dos golpes do Pokémon em 30%."
  },
  "insomnia": {
    "id": 15,
    "name": "insomnia",
    "nameEn": "Insomnia",
    "namePt": "Insônia",
    "desc": "O Pokémon sofre de insônia, impedindo-o de adormecer."
  },
  "color-change": {
    "id": 16,
    "name": "color-change",
    "nameEn": "Color Change",
    "namePt": "Mudança de Cor",
    "desc": "Muda a tipagem elementar do Pokémon para o tipo do golpe de dano que acabou de recebê-lo."
  },
  "immunity": {
    "id": 17,
    "name": "immunity",
    "nameEn": "Immunity",
    "namePt": "Imunidade",
    "desc": "O sistema imunológico do Pokémon concede imunidade contra o envenenamento."
  },
  "flash-fire": {
    "id": 18,
    "name": "flash-fire",
    "nameEn": "Flash Fire",
    "namePt": "Fogo Absorvente",
    "desc": "Concede imunidade a golpes do tipo Fogo. Ao ser atingido por um golpe de fogo, ativa chamas que aumentam o poder de seus próprios golpes de fogo em 50%."
  },
  "shield-dust": {
    "id": 19,
    "name": "shield-dust",
    "nameEn": "Shield Dust",
    "namePt": "Pó Protetor",
    "desc": "O pó protetor bloqueia quaisquer efeitos secundários adicionais de golpes sofridos."
  },
  "own-tempo": {
    "id": 20,
    "name": "own-tempo",
    "nameEn": "Own Tempo",
    "namePt": "Ritmo Próprio",
    "desc": "O Pokémon segue seu próprio ritmo, sendo imune a confusão e aos efeitos da habilidade Intimidação."
  },
  "suction-cups": {
    "id": 21,
    "name": "suction-cups",
    "nameEn": "Suction Cups",
    "namePt": "Ventosas",
    "desc": "Fixa-se firmemente ao solo com ventosas, impedindo que o Pokémon seja forçado a sair da batalha por golpes ou itens do oponente."
  },
  "intimidate": {
    "id": 22,
    "name": "intimidate",
    "nameEn": "Intimidate",
    "namePt": "Intimidação",
    "desc": "Ao entrar em combate, intimida os adversários, reduzindo o Ataque deles em um estágio."
  },
  "shadow-tag": {
    "id": 23,
    "name": "shadow-tag",
    "nameEn": "Shadow Tag",
    "namePt": "Marca Sombria",
    "desc": "Aprisiona a sombra do adversário, impedindo que os Pokémon oponentes fujam ou sejam trocados (exceto Pokémon do tipo Fantasma)."
  },
  "rough-skin": {
    "id": 24,
    "name": "rough-skin",
    "nameEn": "Rough Skin",
    "namePt": "Pele Áspera",
    "desc": "Causa dano correspondente a 1/8 do PS máximo ao oponente sempre que receber um golpe de contato físico."
  },
  "wonder-guard": {
    "id": 25,
    "name": "wonder-guard",
    "nameEn": "Wonder Guard",
    "namePt": "Guarda Maravilha",
    "desc": "Uma barreira misteriosa que só permite ao Pokémon receber dano direto de golpes super-efetivos."
  },
  "levitate": {
    "id": 26,
    "name": "levitate",
    "nameEn": "Levitate",
    "namePt": "Levitação",
    "desc": "Flutua no ar, obtendo imunidade total contra ataques do tipo Terrestre, espinhos e terreno de batalha."
  },
  "effect-spore": {
    "id": 27,
    "name": "effect-spore",
    "nameEn": "Effect Spore",
    "namePt": "Esporo de Efeito",
    "desc": "Ao receber contato físico, libera esporos que têm 30% de chance de causar paralisia, veneno ou sono no agressor."
  },
  "synchronize": {
    "id": 28,
    "name": "synchronize",
    "nameEn": "Synchronize",
    "namePt": "Sincronizar",
    "desc": "Ao ser afetado por queimadura, paralisia ou envenenamento, transmite a mesma condição de status para o atacante."
  },
  "clear-body": {
    "id": 29,
    "name": "clear-body",
    "nameEn": "Clear Body",
    "namePt": "Corpo Claro",
    "desc": "Impede que oponentes reduzam as estatísticas deste Pokémon com golpes ou habilidades."
  },
  "natural-cure": {
    "id": 30,
    "name": "natural-cure",
    "nameEn": "Natural Cure",
    "namePt": "Cura Natural",
    "desc": "Cura todas as condições de status negativas do Pokémon ao ser recolhido para a Pokébola."
  },
  "lightning-rod": {
    "id": 31,
    "name": "lightning-rod",
    "nameEn": "Lightning Rod",
    "namePt": "Pára-raios",
    "desc": "Atrai todos os ataques do tipo Elétrico na batalha para si, neutralizando o dano e aumentando seu Ataque Especial em um estágio."
  },
  "serene-grace": {
    "id": 32,
    "name": "serene-grace",
    "nameEn": "Serene Grace",
    "namePt": "Graça Serena",
    "desc": "Aumenta a probabilidade de ativação dos efeitos secundários dos seus golpes em dobro."
  },
  "swift-swim": {
    "id": 33,
    "name": "swift-swim",
    "nameEn": "Swift Swim",
    "namePt": "Nado Rápido",
    "desc": "Dobra a Velocidade do Pokémon enquanto estiver sob o clima de chuva."
  },
  "chlorophyll": {
    "id": 34,
    "name": "chlorophyll",
    "nameEn": "Chlorophyll",
    "namePt": "Clorofila",
    "desc": "Dobra a Velocidade do Pokémon enquanto estiver sob luz solar intensa."
  },
  "illuminate": {
    "id": 35,
    "name": "illuminate",
    "nameEn": "Illuminate",
    "namePt": "Iluminar",
    "desc": "Ilumina o ambiente. A partir da 9ª geração, impede que a precisão do Pokémon seja reduzida e ignora a evasão dos oponentes."
  },
  "trace": {
    "id": 36,
    "name": "trace",
    "nameEn": "Trace",
    "namePt": "Rastrear",
    "desc": "Ao entrar na batalha, copia a habilidade do Pokémon adversário."
  },
  "huge-power": {
    "id": 37,
    "name": "huge-power",
    "nameEn": "Huge Power",
    "namePt": "Poder Imenso",
    "desc": "Dobra a estatística de Ataque físico do Pokémon."
  },
  "poison-point": {
    "id": 38,
    "name": "poison-point",
    "nameEn": "Poison Point",
    "namePt": "Ponto Venenoso",
    "desc": "Oponentes que atingirem o Pokémon com golpes de contato físico têm 30% de chance de serem envenenados."
  },
  "inner-focus": {
    "id": 39,
    "name": "inner-focus",
    "nameEn": "Inner Focus",
    "namePt": "Foco Interno",
    "desc": "O foco interior inabalável do Pokémon impede que ele recue (flinch) e o protege contra a habilidade Intimidação."
  },
  "magma-armor": {
    "id": 40,
    "name": "magma-armor",
    "nameEn": "Magma Armor",
    "namePt": "Armadura de Magma",
    "desc": "A armadura de magma mantém o corpo aquecido, impedindo que o Pokémon seja congelado."
  },
  "water-veil": {
    "id": 41,
    "name": "water-veil",
    "nameEn": "Water Veil",
    "namePt": "Véu de Água",
    "desc": "Um véu protetor de água envolve o Pokémon, impedindo que ele sofra queimaduras."
  },
  "magnet-pull": {
    "id": 42,
    "name": "magnet-pull",
    "nameEn": "Magnet Pull",
    "namePt": "Atração Magnética",
    "desc": "O magnetismo impede que Pokémon adversários do tipo Aço fujam ou sejam trocados."
  },
  "soundproof": {
    "id": 43,
    "name": "soundproof",
    "nameEn": "Soundproof",
    "namePt": "À Prova de Som",
    "desc": "Concede imunidade completa contra quaisquer ataques e efeitos baseados em som."
  },
  "rain-dish": {
    "id": 44,
    "name": "rain-dish",
    "nameEn": "Rain Dish",
    "namePt": "Prato de Chuva",
    "desc": "Recupera 1/16 do seu PS máximo ao final de cada turno em que a chuva estiver ativa."
  },
  "sand-stream": {
    "id": 45,
    "name": "sand-stream",
    "nameEn": "Sand Stream",
    "namePt": "Fluxo de Areia",
    "desc": "Invoca uma tempestade de areia ao entrar em combate."
  },
  "pressure": {
    "id": 46,
    "name": "pressure",
    "nameEn": "Pressure",
    "namePt": "Pressão",
    "desc": "A presença opressora do Pokémon faz com que o adversário consuma 2 PP a cada golpe realizado."
  },
  "thick-fat": {
    "id": 47,
    "name": "thick-fat",
    "nameEn": "Thick Fat",
    "namePt": "Gordura Espessa",
    "desc": "A espessa camada de gordura reduz pela metade o dano recebido de ataques dos tipos Fogo e Gelo."
  },
  "early-bird": {
    "id": 48,
    "name": "early-bird",
    "nameEn": "Early Bird",
    "namePt": "Madrugador",
    "desc": "O Pokémon acorda do estado de sono na metade do tempo normal."
  },
  "flame-body": {
    "id": 49,
    "name": "flame-body",
    "nameEn": "Flame Body",
    "namePt": "Corpo em Chamas",
    "desc": "Oponentes que atingirem o Pokémon com ataques de contato físico têm 30% de chance de sofrerem queimadura."
  },
  "run-away": {
    "id": 50,
    "name": "run-away",
    "nameEn": "Run Away",
    "namePt": "Fugir",
    "desc": "Garante fuga imediata de qualquer batalha contra Pokémon selvagens."
  },
  "keen-eye": {
    "id": 51,
    "name": "keen-eye",
    "nameEn": "Keen Eye",
    "namePt": "Olho Vivo",
    "desc": "A visão aguçada impede que a precisão do Pokémon seja reduzida e ignora o aumento de evasão dos oponentes."
  },
  "hyper-cutter": {
    "id": 52,
    "name": "hyper-cutter",
    "nameEn": "Hyper Cutter",
    "namePt": "Hiper Cortador",
    "desc": "As pinças poderosas impedem que outros Pokémon reduzam a estatística de Ataque deste Pokémon."
  },
  "pickup": {
    "id": 53,
    "name": "pickup",
    "nameEn": "Pickup",
    "namePt": "Coleta",
    "desc": "O Pokémon pode recolher itens consumidos por outros Pokémon em combate ou encontrar itens após batalhas."
  },
  "truant": {
    "id": 54,
    "name": "truant",
    "nameEn": "Truant",
    "namePt": "Preguiçoso",
    "desc": "O Pokémon só pode realizar uma ação a cada dois turnos, tirando folga no turno seguinte."
  },
  "hustle": {
    "id": 55,
    "name": "hustle",
    "nameEn": "Hustle",
    "namePt": "Agitação",
    "desc": "Aumenta o Ataque em 50%, mas reduz a precisão de seus golpes físicos em 20%."
  },
  "cute-charm": {
    "id": 56,
    "name": "cute-charm",
    "nameEn": "Cute Charm",
    "namePt": "Charme Gracioso",
    "desc": "Oponentes do sexo oposto que fizerem contato físico têm 30% de chance de ficarem apaixonados."
  },
  "plus": {
    "id": 57,
    "name": "plus",
    "nameEn": "Plus",
    "namePt": "Mais",
    "desc": "Aumenta o Ataque Especial em 50% se um aliado em campo possuir a habilidade Plus ou Minus."
  },
  "minus": {
    "id": 58,
    "name": "minus",
    "nameEn": "Minus",
    "namePt": "Menos",
    "desc": "Aumenta o Ataque Especial em 50% se um aliado em campo possuir a habilidade Plus ou Minus."
  },
  "forecast": {
    "id": 59,
    "name": "forecast",
    "nameEn": "Forecast",
    "namePt": "Previsão do Tempo",
    "desc": "Transforma o tipo e aparência do Pokémon em Fogo (Sol), Água (Chuva) ou Gelo (Neve/Granizo) conforme o clima."
  },
  "sticky-hold": {
    "id": 60,
    "name": "sticky-hold",
    "nameEn": "Sticky Hold",
    "namePt": "Aderência",
    "desc": "O corpo viscoso impede que oponentes roubem ou derrubem o item segurado pelo Pokémon."
  },
  "shed-skin": {
    "id": 61,
    "name": "shed-skin",
    "nameEn": "Shed Skin",
    "namePt": "Muda de Pele",
    "desc": "O Pokémon tem 33% de chance de curar qualquer condição de status negativa ao final de cada turno."
  },
  "guts": {
    "id": 62,
    "name": "guts",
    "nameEn": "Guts",
    "namePt": "Bravura",
    "desc": "Aumenta o Ataque físico em 50% quando o Pokémon estiver sob uma condição de status negativa. Também ignora a redução de dano da queimadura."
  },
  "marvel-scale": {
    "id": 63,
    "name": "marvel-scale",
    "nameEn": "Marvel Scale",
    "namePt": "Escama Maravilha",
    "desc": "Aumenta a Defesa em 50% enquanto o Pokémon estiver sob uma condição de status negativa."
  },
  "liquid-ooze": {
    "id": 64,
    "name": "liquid-ooze",
    "nameEn": "Liquid Ooze",
    "namePt": "Lodo Líquido",
    "desc": "Oponentes que drenarem a vida deste Pokémon recebem dano equivalente ao montante que tentaram recuperar."
  },
  "overgrow": {
    "id": 65,
    "name": "overgrow",
    "nameEn": "Overgrow",
    "namePt": "Supercrescimento",
    "desc": "Aumenta a potência de golpes do tipo Planta em 50% quando o PS estiver abaixo de 1/3 do máximo."
  },
  "blaze": {
    "id": 66,
    "name": "blaze",
    "nameEn": "Blaze",
    "namePt": "Chama",
    "desc": "Aumenta a potência de golpes do tipo Fogo em 50% quando o PS estiver abaixo de 1/3 do máximo."
  },
  "torrent": {
    "id": 67,
    "name": "torrent",
    "nameEn": "Torrent",
    "namePt": "Torrente",
    "desc": "Aumenta a potência de golpes do tipo Água em 50% quando o PS estiver abaixo de 1/3 do máximo."
  },
  "swarm": {
    "id": 68,
    "name": "swarm",
    "nameEn": "Swarm",
    "namePt": "Enxame",
    "desc": "Aumenta a potência de golpes do tipo Inseto em 50% quando o PS estiver abaixo de 1/3 do máximo."
  },
  "rock-head": {
    "id": 69,
    "name": "rock-head",
    "nameEn": "Rock Head",
    "namePt": "Cabeça de Pedra",
    "desc": "Protege o Pokémon contra qualquer dano de recuo causado pelos seus próprios ataques."
  },
  "drought": {
    "id": 70,
    "name": "drought",
    "nameEn": "Drought",
    "namePt": "Seca",
    "desc": "Invoca luz solar intensa no campo de batalha ao entrar em combate."
  },
  "arena-trap": {
    "id": 71,
    "name": "arena-trap",
    "nameEn": "Arena Trap",
    "namePt": "Armadilha de Arena",
    "desc": "Impede que oponentes no chão fujam ou sejam trocados (não afeta tipos Voador ou voadores/levitantes)."
  },
  "vital-spirit": {
    "id": 72,
    "name": "vital-spirit",
    "nameEn": "Vital Spirit",
    "namePt": "Espírito Vital",
    "desc": "O espírito cheio de vitalidade do Pokémon impede-o de adormecer."
  },
  "white-smoke": {
    "id": 73,
    "name": "white-smoke",
    "nameEn": "White Smoke",
    "namePt": "Fumaça Branca",
    "desc": "A fumaça branca protetora impede que outros Pokémon reduzam qualquer estatística deste Pokémon."
  },
  "pure-power": {
    "id": 74,
    "name": "pure-power",
    "nameEn": "Pure Power",
    "namePt": "Poder Puro",
    "desc": "Dobra a estatística de Ataque físico do Pokémon."
  },
  "shell-armor": {
    "id": 75,
    "name": "shell-armor",
    "nameEn": "Shell Armor",
    "namePt": "Armadura de Casca",
    "desc": "A concha espessa protege o Pokémon contra golpes críticos."
  },
  "air-lock": {
    "id": 76,
    "name": "air-lock",
    "nameEn": "Air Lock",
    "namePt": "Eclusa de Ar",
    "desc": "Elimina todos os efeitos e modificadores causados por climas na batalha."
  },
  "tangled-feet": {
    "id": 77,
    "name": "tangled-feet",
    "nameEn": "Tangled Feet",
    "namePt": "Pés Trôpegos",
    "desc": "Dobra a taxa de evasão do Pokémon enquanto ele estiver sob a condição de confusão."
  },
  "motor-drive": {
    "id": 78,
    "name": "motor-drive",
    "nameEn": "Motor Drive",
    "namePt": "Motor Elétrico",
    "desc": "Concede imunidade contra ataques Elétricos e aumenta a Velocidade em um estágio ao ser atingido por um."
  },
  "rivalry": {
    "id": 79,
    "name": "rivalry",
    "nameEn": "Rivalry",
    "namePt": "Rivalidade",
    "desc": "Causa 25% a mais de dano contra oponentes do mesmo gênero, mas 25% a menos contra o gênero oposto."
  },
  "steadfast": {
    "id": 80,
    "name": "steadfast",
    "nameEn": "Steadfast",
    "namePt": "Inabalável",
    "desc": "Aumenta a Velocidade em um estágio sempre que o Pokémon for forçado a recuar (flinch)."
  },
  "snow-cloak": {
    "id": 81,
    "name": "snow-cloak",
    "nameEn": "Snow Cloak",
    "namePt": "Manto de Neve",
    "desc": "Aumenta a evasão em 20% durante nevascas ou granizo e concede imunidade ao dano desse clima."
  },
  "gluttony": {
    "id": 82,
    "name": "gluttony",
    "nameEn": "Gluttony",
    "namePt": "Gula",
    "desc": "Faz o Pokémon consumir frutas curativas com metade da vida (50% de PS) em vez de 25%."
  },
  "anger-point": {
    "id": 83,
    "name": "anger-point",
    "nameEn": "Anger Point",
    "namePt": "Ponto de Fúria",
    "desc": "Eleva o Ataque físico ao estágio máximo (+6) ao receber um golpe crítico."
  },
  "unburden": {
    "id": 84,
    "name": "unburden",
    "nameEn": "Unburden",
    "namePt": "Alívio",
    "desc": "Dobra a Velocidade do Pokémon após o consumo ou perda do seu item segurado."
  },
  "heatproof": {
    "id": 85,
    "name": "heatproof",
    "nameEn": "Heatproof",
    "namePt": "À Prova de Calor",
    "desc": "Reduz pela metade o dano recebido de ataques do tipo Fogo e do efeito de queimadura."
  },
  "simple": {
    "id": 86,
    "name": "simple",
    "nameEn": "Simple",
    "namePt": "Simples",
    "desc": "Dobra todos os modificadores de aumento ou redução de estatísticas recebidos pelo Pokémon."
  },
  "dry-skin": {
    "id": 87,
    "name": "dry-skin",
    "nameEn": "Dry Skin",
    "namePt": "Pele Seca",
    "desc": "Restaura PS na chuva e ao receber golpes de Água, mas sofre 25% a mais de dano de Fogo e perde PS no Sol intenso."
  },
  "download": {
    "id": 88,
    "name": "download",
    "nameEn": "Download",
    "namePt": "Download",
    "desc": "Compara as defesas do oponente ao entrar em campo, aumentando o Ataque ou o Ataque Especial no que for mais vulnerável."
  },
  "iron-fist": {
    "id": 89,
    "name": "iron-fist",
    "nameEn": "Iron Fist",
    "namePt": "Punho de Ferro",
    "desc": "Aumenta a potência de golpes baseados em socos em 20%."
  },
  "poison-heal": {
    "id": 90,
    "name": "poison-heal",
    "nameEn": "Poison Heal",
    "namePt": "Cura Venenosa",
    "desc": "Recupera 1/8 do seu PS máximo a cada turno quando o Pokémon estiver envenenado, em vez de sofrer dano."
  },
  "adaptability": {
    "id": 91,
    "name": "adaptability",
    "nameEn": "Adaptability",
    "namePt": "Adaptabilidade",
    "desc": "Aumenta o bônus de dano de mesmo tipo (STAB) de 1.5× para 2.0×."
  },
  "skill-link": {
    "id": 92,
    "name": "skill-link",
    "nameEn": "Skill Link",
    "namePt": "Vínculo de Habilidades",
    "desc": "Garante que golpes de acertos múltiplos (como 2 a 5 acertos) sempre atinjam o número máximo de vezes."
  },
  "hydration": {
    "id": 93,
    "name": "hydration",
    "nameEn": "Hydration",
    "namePt": "Hidratação",
    "desc": "Cura todas as condições de status negativas do Pokémon ao final de cada turno se estiver chovendo."
  },
  "solar-power": {
    "id": 94,
    "name": "solar-power",
    "nameEn": "Solar Power",
    "namePt": "Poder Solar",
    "desc": "Aumenta o Ataque Especial em 50% sob Sol intenso, mas consome 1/8 do PS máximo a cada turno."
  },
  "quick-feet": {
    "id": 95,
    "name": "quick-feet",
    "nameEn": "Quick Feet",
    "namePt": "Pés Velozes",
    "desc": "Aumenta a Velocidade em 50% ao sofrer uma condição de status negativa e ignora a perda de velocidade da paralisia."
  },
  "normalize": {
    "id": 96,
    "name": "normalize",
    "nameEn": "Normalize",
    "namePt": "Normalizar",
    "desc": "Todos os golpes usados pelo Pokémon tornam-se do tipo Normal e têm seu poder aumentado em 20%."
  },
  "sniper": {
    "id": 97,
    "name": "sniper",
    "nameEn": "Sniper",
    "namePt": "Atirador de Elite",
    "desc": "Aumenta o multiplicador de dano de golpes críticos de 1.5× para 2.25×."
  },
  "magic-guard": {
    "id": 98,
    "name": "magic-guard",
    "nameEn": "Magic Guard",
    "namePt": "Guarda Mágica",
    "desc": "O Pokémon só recebe dano proveniente de ataques diretos, ficando imune a veneno, queimadura, clima, recuo e espinhos."
  },
  "no-guard": {
    "id": 99,
    "name": "no-guard",
    "nameEn": "No Guard",
    "namePt": "Sem Guarda",
    "desc": "Garante que todos os ataques disparados ou recebidos por este Pokémon acertem o alvo sem errar."
  },
  "stall": {
    "id": 100,
    "name": "stall",
    "nameEn": "Stall",
    "namePt": "Atraso",
    "desc": "O Pokémon sempre age por último dentro da sua prioridade de ação."
  },
  "technician": {
    "id": 101,
    "name": "technician",
    "nameEn": "Technician",
    "namePt": "Técnico",
    "desc": "Aumenta em 50% a potência de qualquer golpe que possua poder base igual ou inferior a 60."
  },
  "leaf-guard": {
    "id": 102,
    "name": "leaf-guard",
    "nameEn": "Leaf Guard",
    "namePt": "Guarda de Folha",
    "desc": "Protege o Pokémon contra qualquer condição de status negativa enquanto o Sol intenso estiver brilhando."
  },
  "klutz": {
    "id": 103,
    "name": "klutz",
    "nameEn": "Klutz",
    "namePt": "Desajeitado",
    "desc": "O Pokémon é estabanado e não consegue utilizar os benefícios do seu item segurado."
  },
  "mold-breaker": {
    "id": 104,
    "name": "mold-breaker",
    "nameEn": "Mold Breaker",
    "namePt": "Quebra-Molde",
    "desc": "Ignora e neutraliza habilidades defensivas do adversário que possam afetar a execução dos seus golpes."
  },
  "super-luck": {
    "id": 105,
    "name": "super-luck",
    "nameEn": "Super Luck",
    "namePt": "Super Sorte",
    "desc": "Eleva a taxa de acertos críticos do Pokémon em um estágio."
  },
  "aftermath": {
    "id": 106,
    "name": "aftermath",
    "nameEn": "Aftermath",
    "namePt": "Consequência",
    "desc": "Se for nocauteado por um ataque de contato físico, causa dano correspondente a 1/4 do PS máximo ao agressor."
  },
  "anticipation": {
    "id": 107,
    "name": "anticipation",
    "nameEn": "Anticipation",
    "namePt": "Antecipação",
    "desc": "Sente o perigo e avisa ao entrar na batalha se o adversário possui algum golpe super-efetivo ou de nocaute imediato."
  },
  "forewarn": {
    "id": 108,
    "name": "forewarn",
    "nameEn": "Forewarn",
    "namePt": "Pré-aviso",
    "desc": "Revela o golpe de maior poder base do oponente ao entrar em combate."
  },
  "unaware": {
    "id": 109,
    "name": "unaware",
    "nameEn": "Unaware",
    "namePt": "Alheio",
    "desc": "Ao atacar ou defender, ignora quaisquer modificadores de aumento ou redução de estatísticas do oponente."
  },
  "tinted-lens": {
    "id": 110,
    "name": "tinted-lens",
    "nameEn": "Tinted Lens",
    "namePt": "Lente Colorida",
    "desc": "Dobra o dano de ataques que forem categorizados como 'não muito efetivos' contra o defensor."
  },
  "filter": {
    "id": 111,
    "name": "filter",
    "nameEn": "Filter",
    "namePt": "Filtro",
    "desc": "Reduz o dano recebido de ataques super-efetivos em 25%."
  },
  "slow-start": {
    "id": 112,
    "name": "slow-start",
    "nameEn": "Slow Start",
    "namePt": "Início Lento",
    "desc": "Reduz o Ataque e a Velocidade do Pokémon pela metade durante os primeiros 5 turnos após entrar em combate."
  },
  "scrappy": {
    "id": 113,
    "name": "scrappy",
    "nameEn": "Scrappy",
    "namePt": "Valente",
    "desc": "Permite que ataques dos tipos Normal e Lutador atinjam Pokémon do tipo Fantasma, além de imunizar contra Intimidação."
  },
  "storm-drain": {
    "id": 114,
    "name": "storm-drain",
    "nameEn": "Storm Drain",
    "namePt": "Dreno de Tempestade",
    "desc": "Atrai ataques do tipo Água para si, neutralizando o dano e aumentando seu Ataque Especial em um estágio."
  },
  "ice-body": {
    "id": 115,
    "name": "ice-body",
    "nameEn": "Ice Body",
    "namePt": "Corpo de Gelo",
    "desc": "Recupera 1/16 do seu PS máximo a cada turno sob granizo ou nevasca e concede imunidade a dano desse clima."
  },
  "solid-rock": {
    "id": 116,
    "name": "solid-rock",
    "nameEn": "Solid Rock",
    "namePt": "Rocha Sólida",
    "desc": "Reduz o dano sofrido de ataques super-efetivos em 25%."
  },
  "snow-warning": {
    "id": 117,
    "name": "snow-warning",
    "nameEn": "Snow Warning",
    "namePt": "Aviso de Neve",
    "desc": "Invoca uma nevasca/granizo ao entrar no campo de batalha."
  },
  "honey-gather": {
    "id": 118,
    "name": "honey-gather",
    "nameEn": "Honey Gather",
    "namePt": "Colheita de Mel",
    "desc": "O Pokémon pode recolher mel doce após o término de batalhas."
  },
  "frisk": {
    "id": 119,
    "name": "frisk",
    "nameEn": "Frisk",
    "namePt": "Revistar",
    "desc": "Examina o oponente ao entrar na batalha e revela o item que ele está segurando."
  },
  "reckless": {
    "id": 120,
    "name": "reckless",
    "nameEn": "Reckless",
    "namePt": "Imprudente",
    "desc": "Aumenta a potência de ataques que causam dano de recuo em 20%."
  },
  "multitype": {
    "id": 121,
    "name": "multitype",
    "nameEn": "Multitype",
    "namePt": "Multitipo",
    "desc": "Muda a tipagem elementar e a forma do Pokémon conforme a Placa elemental ou Cristal Z que estiver segurando."
  },
  "flower-gift": {
    "id": 122,
    "name": "flower-gift",
    "nameEn": "Flower Gift",
    "namePt": "Presente Floral",
    "desc": "Sob luz solar intensa, aumenta o Ataque e a Defesa Especial do Pokémon e de seus aliados em 50%."
  },
  "bad-dreams": {
    "id": 123,
    "name": "bad-dreams",
    "nameEn": "Bad Dreams",
    "namePt": "Pesadelos",
    "desc": "Causa dano de 1/8 do PS máximo a qualquer oponente que estiver dormindo ao final de cada turno."
  },
  "pickpocket": {
    "id": 124,
    "name": "pickpocket",
    "nameEn": "Pickpocket",
    "namePt": "Batedor de Carteira",
    "desc": "Rouba o item segurado do agressor ao receber um ataque de contato físico."
  },
  "sheer-force": {
    "id": 125,
    "name": "sheer-force",
    "nameEn": "Sheer Force",
    "namePt": "Força Bruta",
    "desc": "Aumenta o poder dos golpes com efeitos secundários em 30%, mas elimina a ativação desses efeitos adicionais."
  },
  "contrary": {
    "id": 126,
    "name": "contrary",
    "nameEn": "Contrary",
    "namePt": "Contrário",
    "desc": "Inverte o sentido de quaisquer modificações de atributos (ganhos viram perdas e perdas viram ganhos)."
  },
  "unnerve": {
    "id": 127,
    "name": "unnerve",
    "nameEn": "Unnerve",
    "namePt": "Desconcertar",
    "desc": "Desconcerta os oponentes pela sua presença, impedindo-os de consumir frutas durante o combate."
  },
  "defiant": {
    "id": 128,
    "name": "defiant",
    "nameEn": "Defiant",
    "namePt": "Desafiador",
    "desc": "Aumenta o Ataque do Pokémon em dois estágios (+2) sempre que uma estatística sua for reduzida pelo adversário."
  },
  "defeatist": {
    "id": 129,
    "name": "defeatist",
    "nameEn": "Defeatist",
    "namePt": "Derrotista",
    "desc": "Reduz o Ataque e o Ataque Especial pela metade quando o PS do Pokémon cair para 50% ou menos."
  },
  "cursed-body": {
    "id": 130,
    "name": "cursed-body",
    "nameEn": "Cursed Body",
    "namePt": "Corpo Amaldiçoado",
    "desc": "Ao receber um ataque, tem 30% de chance de desativar o golpe utilizado pelo oponente."
  },
  "healer": {
    "id": 131,
    "name": "healer",
    "nameEn": "Healer",
    "namePt": "Curador",
    "desc": "Tem 30% de chance de curar as condições de status negativas de um aliado adjacente ao final do turno."
  },
  "friend-guard": {
    "id": 132,
    "name": "friend-guard",
    "nameEn": "Friend Guard",
    "namePt": "Guarda Amiga",
    "desc": "Reduz o dano sofrido pelos aliados em batalha em 25%."
  },
  "weak-armor": {
    "id": 133,
    "name": "weak-armor",
    "nameEn": "Weak Armor",
    "namePt": "Armadura Frágil",
    "desc": "Ao receber dano físico, reduz a Defesa em um estágio e aumenta a Velocidade em dois estágios."
  },
  "heavy-metal": {
    "id": 134,
    "name": "heavy-metal",
    "nameEn": "Heavy Metal",
    "namePt": "Metal Pesado",
    "desc": "Dobra o peso corporal do Pokémon."
  },
  "light-metal": {
    "id": 135,
    "name": "light-metal",
    "nameEn": "Light Metal",
    "namePt": "Metal Leve",
    "desc": "Reduz o peso corporal do Pokémon pela metade."
  },
  "multiscale": {
    "id": 136,
    "name": "multiscale",
    "nameEn": "Multiscale",
    "namePt": "Multiescamas",
    "desc": "Reduz pela metade o dano recebido de ataques quando o Pokémon estiver com a vida cheia (100% de PS)."
  },
  "toxic-boost": {
    "id": 137,
    "name": "toxic-boost",
    "nameEn": "Toxic Boost",
    "namePt": "Impulso Tóxico",
    "desc": "Aumenta o poder dos ataques físicos em 50% enquanto o Pokémon estiver sob a condição de envenenamento."
  },
  "flare-boost": {
    "id": 138,
    "name": "flare-boost",
    "nameEn": "Flare Boost",
    "namePt": "Impulso de Fogo",
    "desc": "Aumenta o poder dos ataques especiais em 50% enquanto o Pokémon estiver com queimadura."
  },
  "harvest": {
    "id": 139,
    "name": "harvest",
    "nameEn": "Harvest",
    "namePt": "Colheita",
    "desc": "Tem 50% de chance de restaurar uma fruta consumida ao final de cada turno (100% sob Sol intenso)."
  },
  "telepathy": {
    "id": 140,
    "name": "telepathy",
    "nameEn": "Telepathy",
    "namePt": "Telepatia",
    "desc": "Antecipa as ações e evita receber dano de ataques desferidos pelos próprios aliados em batalhas em dupla."
  },
  "moody": {
    "id": 141,
    "name": "moody",
    "nameEn": "Moody",
    "namePt": "Inconstante",
    "desc": "Ao final de cada turno, eleva uma estatística aleatória em dois estágios e reduz outra em um estágio."
  },
  "overcoat": {
    "id": 142,
    "name": "overcoat",
    "nameEn": "Overcoat",
    "namePt": "Casaco Protetor",
    "desc": "Protege contra o dano de climas de areia/nevasca e contra todos os golpes baseados em pó ou esporos."
  },
  "poison-touch": {
    "id": 143,
    "name": "poison-touch",
    "nameEn": "Poison Touch",
    "namePt": "Toque Venenoso",
    "desc": "Concede 30% de chance de envenenar o alvo ao desferir golpes de contato físico."
  },
  "regenerator": {
    "id": 144,
    "name": "regenerator",
    "nameEn": "Regenerator",
    "namePt": "Regenerador",
    "desc": "Recupera até 1/3 do seu PS máximo ao ser trocado ou recolhido para a Pokébola."
  },
  "big-pecks": {
    "id": 145,
    "name": "big-pecks",
    "nameEn": "Big Pecks",
    "namePt": "Peito Forte",
    "desc": "Protege a carapaça e impede que a Defesa do Pokémon seja reduzida por outros Pokémon."
  },
  "sand-rush": {
    "id": 146,
    "name": "sand-rush",
    "nameEn": "Sand Rush",
    "namePt": "Ímpeto de Areia",
    "desc": "Dobra a Velocidade durante tempestades de areia e concede imunidade ao dano desse clima."
  },
  "wonder-skin": {
    "id": 147,
    "name": "wonder-skin",
    "nameEn": "Wonder Skin",
    "namePt": "Pele Maravilha",
    "desc": "Faz com que golpes de status usados contra este Pokémon tenham precisão reduzida para 50%."
  },
  "analytic": {
    "id": 148,
    "name": "analytic",
    "nameEn": "Analytic",
    "namePt": "Analítico",
    "desc": "Aumenta a potência do golpe em 30% se o Pokémon agir após todos os outros combatentes no turno."
  },
  "illusion": {
    "id": 149,
    "name": "illusion",
    "nameEn": "Illusion",
    "namePt": "Ilusão",
    "desc": "Assume a aparência e o nome do último Pokémon da sua equipe até sofrer dano direto."
  },
  "imposter": {
    "id": 150,
    "name": "imposter",
    "nameEn": "Imposter",
    "namePt": "Impostor",
    "desc": "Transforma-se imediatamente no Pokémon oponente à sua frente ao entrar em combate."
  },
  "infiltrator": {
    "id": 151,
    "name": "infiltrator",
    "nameEn": "Infiltrator",
    "namePt": "Infiltrador",
    "desc": "Atravessa barreiras e ignora efeitos como Substituto, Telas de Luz, Reflexo e Véu de Aurora."
  },
  "mummy": {
    "id": 152,
    "name": "mummy",
    "nameEn": "Mummy",
    "namePt": "Múmia",
    "desc": "Ao ser atingido por um golpe de contato físico, substitui a habilidade do agressor por Múmia."
  },
  "moxie": {
    "id": 153,
    "name": "moxie",
    "nameEn": "Moxie",
    "namePt": "Auto-confiança",
    "desc": "Aumenta o Ataque em um estágio (+1) a cada vez que nocautear um oponente em batalha."
  },
  "justified": {
    "id": 154,
    "name": "justified",
    "nameEn": "Justified",
    "namePt": "Justificado",
    "desc": "Aumenta o Ataque em um estágio sempre que for atingido por um golpe do tipo Sombrio."
  },
  "rattled": {
    "id": 155,
    "name": "rattled",
    "nameEn": "Rattled",
    "namePt": "Sobressaltado",
    "desc": "Aumenta a Velocidade em um estágio ao ser atingido por golpes dos tipos Inseto, Fantasma ou Sombrio, ou pela Intimidação."
  },
  "magic-bounce": {
    "id": 156,
    "name": "magic-bounce",
    "nameEn": "Magic Bounce",
    "namePt": "Reflexo Mágico",
    "desc": "Reflete de volta contra o agressor quaisquer golpes de status, riscos de entrada e reduções de atributos."
  },
  "sap-sipper": {
    "id": 157,
    "name": "sap-sipper",
    "nameEn": "Sap Sipper",
    "namePt": "Sugador de Seiva",
    "desc": "Concede imunidade a golpes do tipo Planta e eleva o Ataque em um estágio ao ser atingido por um."
  },
  "prankster": {
    "id": 158,
    "name": "prankster",
    "nameEn": "Prankster",
    "namePt": "Travesso",
    "desc": "Concede prioridade (+1) a todos os golpes de status usados pelo Pokémon."
  },
  "sand-force": {
    "id": 159,
    "name": "sand-force",
    "nameEn": "Sand Force",
    "namePt": "Força de Areia",
    "desc": "Aumenta em 30% o poder de golpes dos tipos Pedra, Terrestre e Aço durante tempestades de areia."
  },
  "iron-barbs": {
    "id": 160,
    "name": "iron-barbs",
    "nameEn": "Iron Barbs",
    "namePt": "Farpas de Ferro",
    "desc": "Causa dano de 1/8 do PS máximo ao atacante sempre que receber um golpe de contato físico."
  },
  "zen-mode": {
    "id": 161,
    "name": "zen-mode",
    "nameEn": "Zen Mode",
    "namePt": "Modo Zen",
    "desc": "Muda a forma e os atributos do Pokémon quando seu PS cai abaixo de metade."
  },
  "victory-star": {
    "id": 162,
    "name": "victory-star",
    "nameEn": "Victory Star",
    "namePt": "Estrela da Vitória",
    "desc": "Aumenta a precisão de todos os golpes do próprio Pokémon e de seus aliados em campo em 10%."
  },
  "turboblaze": {
    "id": 163,
    "name": "turboblaze",
    "nameEn": "Turboblaze",
    "namePt": "Turbo-chama",
    "desc": "Neutraliza e ignora as habilidades defensivas do oponente ao atacar."
  },
  "teravolt": {
    "id": 164,
    "name": "teravolt",
    "nameEn": "Teravolt",
    "namePt": "Teravoltagem",
    "desc": "Neutraliza e ignora as habilidades defensivas do oponente ao atacar."
  },
  "aroma-veil": {
    "id": 165,
    "name": "aroma-veil",
    "nameEn": "Aroma Veil",
    "namePt": "Véu de Aroma",
    "desc": "Protege o próprio Pokémon e seus aliados contra efeitos que limitam a escolha de golpes (como Atração, Taunt e Torment)."
  },
  "flower-veil": {
    "id": 166,
    "name": "flower-veil",
    "nameEn": "Flower Veil",
    "namePt": "Véu de Flores",
    "desc": "Impede a redução de atributos e protege Pokémon aliados do tipo Planta contra condições de status negativas."
  },
  "cheek-pouch": {
    "id": 167,
    "name": "cheek-pouch",
    "nameEn": "Cheek Pouch",
    "namePt": "Bolsa na Bochecha",
    "desc": "Restaura 1/3 do PS máximo ao consumir qualquer fruta, além do efeito normal da fruta."
  },
  "protean": {
    "id": 168,
    "name": "protean",
    "nameEn": "Protean",
    "namePt": "Proteano",
    "desc": "Muda a tipagem do Pokémon para o tipo do movimento que ele está prestes a executar."
  },
  "fur-coat": {
    "id": 169,
    "name": "fur-coat",
    "nameEn": "Fur Coat",
    "namePt": "Casaco de Peles",
    "desc": "Dobra a estatística de Defesa física do Pokémon."
  },
  "magician": {
    "id": 170,
    "name": "magician",
    "nameEn": "Magician",
    "namePt": "Mágico",
    "desc": "Rouba o item segurado do oponente ao atingi-lo com um ataque, caso esteja sem item."
  },
  "bulletproof": {
    "id": 171,
    "name": "bulletproof",
    "nameEn": "Bulletproof",
    "namePt": "À Prova de Balas",
    "desc": "Protege o Pokémon contra ataques baseados em bombas, esferas e projéteis balísticos."
  },
  "competitive": {
    "id": 172,
    "name": "competitive",
    "nameEn": "Competitive",
    "namePt": "Competitivo",
    "desc": "Aumenta o Ataque Especial em dois estágios (+2) sempre que uma estatística for reduzida pelo adversário."
  },
  "strong-jaw": {
    "id": 173,
    "name": "strong-jaw",
    "nameEn": "Strong Jaw",
    "namePt": "Mandíbula Forte",
    "desc": "Aumenta em 50% o poder de ataques baseados em mordidas."
  },
  "refrigerate": {
    "id": 174,
    "name": "refrigerate",
    "nameEn": "Refrigerate",
    "namePt": "Refrigerar",
    "desc": "Converte golpes do tipo Normal para o tipo Gelo e aumenta o poder deles em 20%."
  },
  "sweet-veil": {
    "id": 175,
    "name": "sweet-veil",
    "nameEn": "Sweet Veil",
    "namePt": "Véu Doce",
    "desc": "O aroma doce mantém o próprio Pokémon e seus aliados em campo despertos, impedindo-os de dormir."
  },
  "stance-change": {
    "id": 176,
    "name": "stance-change",
    "nameEn": "Stance Change",
    "namePt": "Mudança de Postura",
    "desc": "Alterna entre a Forma Escudo (ao usar Escudo Real) e a Forma Espada (ao desferir um ataque)."
  },
  "gale-wings": {
    "id": 177,
    "name": "gale-wings",
    "nameEn": "Gale Wings",
    "namePt": "Asas da Ventania",
    "desc": "Concede prioridade (+1) a golpes do tipo Voador quando o Pokémon estiver com a vida cheia (100% de PS)."
  },
  "mega-launcher": {
    "id": 178,
    "name": "mega-launcher",
    "nameEn": "Mega Launcher",
    "namePt": "Mega Lançador",
    "desc": "Aumenta em 50% a potência de golpes baseados em pulsos e disparos de aura."
  },
  "grass-pelt": {
    "id": 179,
    "name": "grass-pelt",
    "nameEn": "Grass Pelt",
    "namePt": "Pele de Grama",
    "desc": "Aumenta a Defesa em 50% enquanto o Terreno Floral (Grassy Terrain) estiver ativo."
  },
  "symbiosis": {
    "id": 180,
    "name": "symbiosis",
    "nameEn": "Symbiosis",
    "namePt": "Simbiose",
    "desc": "Transfere seu item segurado para um aliado que tenha acabado de consumir o seu próprio item."
  },
  "tough-claws": {
    "id": 181,
    "name": "tough-claws",
    "nameEn": "Tough Claws",
    "namePt": "Garras Poderosas",
    "desc": "Aumenta a potência de golpes que fazem contato físico em 30%."
  },
  "pixilate": {
    "id": 182,
    "name": "pixilate",
    "nameEn": "Pixilate",
    "namePt": "Pixilato",
    "desc": "Converte ataques do tipo Normal para o tipo Fada e aumenta seu poder em 20%."
  },
  "gooey": {
    "id": 183,
    "name": "gooey",
    "nameEn": "Gooey",
    "namePt": "Viscoso",
    "desc": "Reduz a Velocidade do agressor em um estágio sempre que o Pokémon for atingido por um golpe de contato."
  },
  "aerilate": {
    "id": 184,
    "name": "aerilate",
    "nameEn": "Aerilate",
    "namePt": "Aerilato",
    "desc": "Converte ataques do tipo Normal para o tipo Voador e aumenta seu poder em 20%."
  },
  "parental-bond": {
    "id": 185,
    "name": "parental-bond",
    "nameEn": "Parental Bond",
    "namePt": "Laço Maternal",
    "desc": "Permite que a mãe e o filhote ataquem juntos, desferindo um segundo golpe que causa 25% do dano normal."
  },
  "dark-aura": {
    "id": 186,
    "name": "dark-aura",
    "nameEn": "Dark Aura",
    "namePt": "Aura Sombria",
    "desc": "Aumenta o poder de todos os ataques do tipo Sombrio usados por quaisquer Pokémon em campo em 33%."
  },
  "fairy-aura": {
    "id": 187,
    "name": "fairy-aura",
    "nameEn": "Fairy Aura",
    "namePt": "Aura de Fada",
    "desc": "Aumenta o poder de todos os ataques do tipo Fada usados por quaisquer Pokémon em campo em 33%."
  },
  "aura-break": {
    "id": 188,
    "name": "aura-break",
    "nameEn": "Aura Break",
    "namePt": "Quebra de Aura",
    "desc": "Inverte os efeitos de Dark Aura e Fairy Aura, reduzindo o poder desses tipos em vez de aumentá-los."
  },
  "primordial-sea": {
    "id": 189,
    "name": "primordial-sea",
    "nameEn": "Primordial Sea",
    "namePt": "Mar Primordial",
    "desc": "Invoca uma tempestade torrencial que anula golpes de Fogo e impede a alteração do clima."
  },
  "desolate-land": {
    "id": 190,
    "name": "desolate-land",
    "nameEn": "Desolate Land",
    "namePt": "Terra Desolada",
    "desc": "Invoca um calor causticante extremo que evapora ataques de Água e impede a alteração do clima."
  },
  "delta-stream": {
    "id": 191,
    "name": "delta-stream",
    "nameEn": "Delta Stream",
    "namePt": "Corrente Delta",
    "desc": "Invoca ventos misteriosos que eliminam as fraquezas elementais de Pokémon do tipo Voador."
  },
  "stamina": {
    "id": 192,
    "name": "stamina",
    "nameEn": "Stamina",
    "namePt": "Vigor",
    "desc": "Aumenta a Defesa física em um estágio sempre que o Pokémon receber dano."
  },
  "wimp-out": {
    "id": 193,
    "name": "wimp-out",
    "nameEn": "Wimp Out",
    "namePt": "Covarde",
    "desc": "Foge ou é trocado automaticamente de batalha assim que seu PS cair abaixo da metade."
  },
  "emergency-exit": {
    "id": 194,
    "name": "emergency-exit",
    "nameEn": "Emergency Exit",
    "namePt": "Saída de Emergência",
    "desc": "Retorna imediatamente para a Pokébola assim que seu PS cair abaixo de 50%."
  },
  "water-compaction": {
    "id": 195,
    "name": "water-compaction",
    "nameEn": "Water Compaction",
    "namePt": "Compactação de Água",
    "desc": "Aumenta a Defesa em dois estágios (+2) ao ser atingido por um golpe do tipo Água."
  },
  "merciless": {
    "id": 196,
    "name": "merciless",
    "nameEn": "Merciless",
    "namePt": "Implacável",
    "desc": "Garante acertos críticos automáticos contra alvos que estejam envenenados."
  },
  "shields-down": {
    "id": 197,
    "name": "shields-down",
    "nameEn": "Shields Down",
    "namePt": "Escudos Abaixados",
    "desc": "Mantém uma couraça impenetrável acima de 50% de PS; quebra a couraça abaixo de 50% para se tornar ofensivo."
  },
  "stakeout": {
    "id": 198,
    "name": "stakeout",
    "nameEn": "Stakeout",
    "namePt": "Emboscada",
    "desc": "Causa o dobro de dano contra oponentes que acabaram de entrar no campo substituindo outro Pokémon."
  },
  "water-bubble": {
    "id": 199,
    "name": "water-bubble",
    "nameEn": "Water Bubble",
    "namePt": "Bolha de Água",
    "desc": "Dobra o dano de ataques de Água, reduz pela metade o dano recebido de Fogo e impede queimaduras."
  },
  "steelworker": {
    "id": 200,
    "name": "steelworker",
    "nameEn": "Steelworker",
    "namePt": "Metalúrgico",
    "desc": "Aumenta em 50% a potência de ataques do tipo Aço."
  },
  "berserk": {
    "id": 201,
    "name": "berserk",
    "nameEn": "Berserk",
    "namePt": "Fúria Desenfreada",
    "desc": "Aumenta o Ataque Especial em um estágio sempre que o PS cair abaixo de 50% após sofrer dano."
  },
  "slush-rush": {
    "id": 202,
    "name": "slush-rush",
    "nameEn": "Slush Rush",
    "namePt": "Ímpeto de Neve",
    "desc": "Dobra a Velocidade do Pokémon enquanto o clima de nevasca ou granizo estiver ativo."
  },
  "long-reach": {
    "id": 203,
    "name": "long-reach",
    "nameEn": "Long Reach",
    "namePt": "Alcance Longo",
    "desc": "O Pokémon ataca à distância sem fazer contato físico com o alvo."
  },
  "liquid-voice": {
    "id": 204,
    "name": "liquid-voice",
    "nameEn": "Liquid Voice",
    "namePt": "Voz Líquida",
    "desc": "Converte todos os golpes baseados em som usados pelo Pokémon para o tipo Água."
  },
  "triage": {
    "id": 205,
    "name": "triage",
    "nameEn": "Triage",
    "namePt": "Triagem",
    "desc": "Concede prioridade máxima (+3) a todos os movimentos que possuem propriedades de cura."
  },
  "galvanize": {
    "id": 206,
    "name": "galvanize",
    "nameEn": "Galvanize",
    "namePt": "Galvanizar",
    "desc": "Converte golpes do tipo Normal para o tipo Elétrico e aumenta o poder deles em 20%."
  },
  "surge-surfer": {
    "id": 207,
    "name": "surge-surfer",
    "nameEn": "Surge Surfer",
    "namePt": "Surfista de Pulso",
    "desc": "Dobra a Velocidade do Pokémon enquanto o Terreno Elétrico estiver ativo."
  },
  "schooling": {
    "id": 208,
    "name": "schooling",
    "nameEn": "Schooling",
    "namePt": "Cardume",
    "desc": "Reúne um cardume colossal e ganha atributos massivos acima de 25% de PS; dispersa-se abaixo de 25%."
  },
  "disguise": {
    "id": 209,
    "name": "disguise",
    "nameEn": "Disguise",
    "namePt": "Disfarce",
    "desc": "Protege o Pokémon contra o primeiro ataque de dano recebido na batalha através de um disfarce de pano."
  },
  "battle-bond": {
    "id": 210,
    "name": "battle-bond",
    "nameEn": "Battle Bond",
    "namePt": "Vínculo de Batalha",
    "desc": "Ao nocautear um oponente, o vínculo eleva o Ataque, Ataque Especial e Velocidade em um estágio."
  },
  "power-construct": {
    "id": 211,
    "name": "power-construct",
    "nameEn": "Power Construct",
    "namePt": "Construção de Poder",
    "desc": "Transforma-se na forma Completa colossal quando seu PS cair abaixo da metade."
  },
  "corrosion": {
    "id": 212,
    "name": "corrosion",
    "nameEn": "Corrosion",
    "namePt": "Corrosão",
    "desc": "Permite envenenar qualquer Pokémon, inclusive tipos Veneno e tipos Aço."
  },
  "comatose": {
    "id": 213,
    "name": "comatose",
    "nameEn": "Comatose",
    "namePt": "Comatoso",
    "desc": "O Pokémon age perpetuamente como se estivesse adormecido, ficando imune a todas as outras condições de status."
  },
  "queenly-majesty": {
    "id": 214,
    "name": "queenly-majesty",
    "nameEn": "Queenly Majesty",
    "namePt": "Majestade Rainha",
    "desc": "A imponência majestosa impede que oponentes utilizem ataques de prioridade contra este Pokémon e seus aliados."
  },
  "innards-out": {
    "id": 215,
    "name": "innards-out",
    "nameEn": "Innards Out",
    "namePt": "Vísceras Expostas",
    "desc": "Ao ser nocauteado, causa dano ao atacante equivalente ao valor exato de PS que lhe restava."
  },
  "dancer": {
    "id": 216,
    "name": "dancer",
    "nameEn": "Dancer",
    "namePt": "Dançarino",
    "desc": "Sempre que outro Pokémon utilizar um movimento de dança, este Pokémon executa imediatamente a mesma dança."
  },
  "battery": {
    "id": 217,
    "name": "battery",
    "nameEn": "Battery",
    "namePt": "Bateria",
    "desc": "Aumenta a potência dos ataques especiais dos aliados em campo em 30%."
  },
  "fluffy": {
    "id": 218,
    "name": "fluffy",
    "nameEn": "Fluffy",
    "namePt": "Fofo",
    "desc": "Reduz pela metade o dano recebido de ataques de contato, mas dobra o dano recebido de golpes de Fogo."
  },
  "dazzling": {
    "id": 219,
    "name": "dazzling",
    "nameEn": "Dazzling",
    "namePt": "Deslumbrante",
    "desc": "O brilho deslumbrante cega os adversários, impedindo que utilizem ataques com prioridade."
  },
  "soul-heart": {
    "id": 220,
    "name": "soul-heart",
    "nameEn": "Soul Heart",
    "namePt": "Coração de Alma",
    "desc": "Aumenta o Ataque Especial em um estágio toda vez que qualquer Pokémon em campo for nocauteado."
  },
  "tangling-hair": {
    "id": 221,
    "name": "tangling-hair",
    "nameEn": "Tangling Hair",
    "namePt": "Cabelo Emaranhado",
    "desc": "Reduz a Velocidade do agressor em um estágio sempre que este Pokémon for atingido por contato físico."
  },
  "receiver": {
    "id": 222,
    "name": "receiver",
    "nameEn": "Receiver",
    "namePt": "Receptor",
    "desc": "Herda e assume a habilidade de um aliado que foi nocauteado na batalha."
  },
  "power-of-alchemy": {
    "id": 223,
    "name": "power-of-alchemy",
    "nameEn": "Power Of Alchemy",
    "namePt": "Poder da Alquimia",
    "desc": "Herda e assume a habilidade de um aliado nocauteado na batalha."
  },
  "beast-boost": {
    "id": 224,
    "name": "beast-boost",
    "nameEn": "Beast Boost",
    "namePt": "Impulso da Fera",
    "desc": "Aumenta em um estágio a estatística mais alta do Pokémon toda vez que ele nocautear um adversário."
  },
  "rks-system": {
    "id": 225,
    "name": "rks-system",
    "nameEn": "Rks System",
    "namePt": "Sistema RKS",
    "desc": "Muda a tipagem do Pokémon conforme a Memória elemental que estiver segurando."
  },
  "electric-surge": {
    "id": 226,
    "name": "electric-surge",
    "nameEn": "Electric Surge",
    "namePt": "Pulso Elétrico",
    "desc": "Invoca o Terreno Elétrico no campo de combate ao entrar na batalha."
  },
  "psychic-surge": {
    "id": 227,
    "name": "psychic-surge",
    "nameEn": "Psychic Surge",
    "namePt": "Pulso Psíquico",
    "desc": "Invoca o Terreno Psíquico no campo de combate ao entrar na batalha."
  },
  "misty-surge": {
    "id": 228,
    "name": "misty-surge",
    "nameEn": "Misty Surge",
    "namePt": "Pulso de Névoa",
    "desc": "Invoca o Terreno Enevoado no campo de combate ao entrar na batalha."
  },
  "grassy-surge": {
    "id": 229,
    "name": "grassy-surge",
    "nameEn": "Grassy Surge",
    "namePt": "Pulso de Grama",
    "desc": "Invoca o Terreno Floral no campo de combate ao entrar na batalha."
  },
  "full-metal-body": {
    "id": 230,
    "name": "full-metal-body",
    "nameEn": "Full Metal Body",
    "namePt": "Corpo de Metal Completo",
    "desc": "Impede que outros Pokémon reduzam quaisquer estatísticas deste Pokémon através de golpes ou habilidades."
  },
  "shadow-shield": {
    "id": 231,
    "name": "shadow-shield",
    "nameEn": "Shadow Shield",
    "namePt": "Escudo Sombrio",
    "desc": "Reduz pela metade o dano recebido de ataques quando o Pokémon estiver com 100% de PS."
  },
  "prism-armor": {
    "id": 232,
    "name": "prism-armor",
    "nameEn": "Prism Armor",
    "namePt": "Armadura de Prisma",
    "desc": "Reduz o dano recebido de ataques super-efetivos em 25%."
  },
  "neuroforce": {
    "id": 233,
    "name": "neuroforce",
    "nameEn": "Neuroforce",
    "namePt": "Neuroforça",
    "desc": "Aumenta o dano de ataques super-efetivos disparados pelo Pokémon em 20%."
  },
  "intrepid-sword": {
    "id": 234,
    "name": "intrepid-sword",
    "nameEn": "Intrepid Sword",
    "namePt": "Espada Intrépida",
    "desc": "Aumenta o Ataque em um estágio ao entrar no combate pela primeira vez na batalha."
  },
  "dauntless-shield": {
    "id": 235,
    "name": "dauntless-shield",
    "nameEn": "Dauntless Shield",
    "namePt": "Escudo Destemido",
    "desc": "Aumenta a Defesa em um estágio ao entrar no combate pela primeira vez na batalha."
  },
  "libero": {
    "id": 236,
    "name": "libero",
    "nameEn": "Libero",
    "namePt": "Líbero",
    "desc": "Muda a tipagem do Pokémon para o tipo do movimento que está prestes a executar."
  },
  "ball-fetch": {
    "id": 237,
    "name": "ball-fetch",
    "nameEn": "Ball Fetch",
    "namePt": "Buscar Bola",
    "desc": "Recolhe a primeira Pokébola que falhar na tentativa de captura de um Pokémon selvagem."
  },
  "cotton-down": {
    "id": 238,
    "name": "cotton-down",
    "nameEn": "Cotton Down",
    "namePt": "Pluma de Algodão",
    "desc": "Ao receber dano, espalha algodão que reduz a Velocidade de todos os outros Pokémon em campo."
  },
  "propeller-tail": {
    "id": 239,
    "name": "propeller-tail",
    "nameEn": "Propeller Tail",
    "namePt": "Cauda Hélice",
    "desc": "Ignora manobras e habilidades de redirecionamento de golpes do adversário."
  },
  "mirror-armor": {
    "id": 240,
    "name": "mirror-armor",
    "nameEn": "Mirror Armor",
    "namePt": "Armadura Espelhada",
    "desc": "Reflete de volta ao adversário qualquer redução de atributo direcionada a este Pokémon."
  },
  "gulp-missile": {
    "id": 241,
    "name": "gulp-missile",
    "nameEn": "Gulp Missile",
    "namePt": "Míssil Engolidor",
    "desc": "Captura uma presa ao usar Mergulho ou Surfe e cospe-a no atacante quando receber dano, causando dano e penalidades."
  },
  "stalwart": {
    "id": 242,
    "name": "stalwart",
    "nameEn": "Stalwart",
    "namePt": "Inflexível",
    "desc": "Ignora movimentos e habilidades dos oponentes que atraiam ou redirecionem ataques."
  },
  "steam-engine": {
    "id": 243,
    "name": "steam-engine",
    "nameEn": "Steam Engine",
    "namePt": "Motor a Vapor",
    "desc": "Aumenta a Velocidade ao estágio máximo (+6) ao ser atingido por um ataque dos tipos Fogo ou Água."
  },
  "punk-rock": {
    "id": 244,
    "name": "punk-rock",
    "nameEn": "Punk Rock",
    "namePt": "Punk Rock",
    "desc": "Aumenta o poder dos seus golpes sonoros em 30% e reduz o dano sofrido de ataques sonoros pela metade."
  },
  "sand-spit": {
    "id": 245,
    "name": "sand-spit",
    "nameEn": "Sand Spit",
    "namePt": "Cuspe de Areia",
    "desc": "Cria uma tempestade de areia ao sofrer dano de um ataque."
  },
  "ice-scales": {
    "id": 246,
    "name": "ice-scales",
    "nameEn": "Ice Scales",
    "namePt": "Escamas de Gelo",
    "desc": "As escamas glaciais reduzem pela metade o dano recebido de todos os ataques especiais."
  },
  "ripen": {
    "id": 247,
    "name": "ripen",
    "nameEn": "Ripen",
    "namePt": "Amadurecer",
    "desc": "Amadurece e dobra os efeitos de qualquer fruta consumida pelo Pokémon."
  },
  "ice-face": {
    "id": 248,
    "name": "ice-face",
    "nameEn": "Ice Face",
    "namePt": "Cara de Gelo",
    "desc": "A cabeça de gelo bloqueia completamente o dano de um ataque físico e se quebra; regenera-se durante granizo/nevasca."
  },
  "power-spot": {
    "id": 249,
    "name": "power-spot",
    "nameEn": "Power Spot",
    "namePt": "Ponto de Poder",
    "desc": "A presença energizada aumenta em 30% o poder dos golpes disparados por seus aliados em campo."
  },
  "mimicry": {
    "id": 250,
    "name": "mimicry",
    "nameEn": "Mimicry",
    "namePt": "Mimetismo",
    "desc": "Muda o tipo do Pokémon para corresponder ao Terreno elemental ativo no campo de combate."
  },
  "screen-cleaner": {
    "id": 251,
    "name": "screen-cleaner",
    "nameEn": "Screen Cleaner",
    "namePt": "Limpador de Telas",
    "desc": "Ao entrar em combate, dissipa e remove quaisquer barreiras defensivas (Reflexo, Tela de Luz e Aurora) de ambos os lados."
  },
  "steely-spirit": {
    "id": 252,
    "name": "steely-spirit",
    "nameEn": "Steely Spirit",
    "namePt": "Espírito de Aço",
    "desc": "Aumenta em 50% o poder dos golpes do tipo Aço utilizados pelo Pokémon e seus aliados."
  },
  "perish-body": {
    "id": 253,
    "name": "perish-body",
    "nameEn": "Perish Body",
    "namePt": "Corpo Perecível",
    "desc": "Ao receber um golpe de contato, ativa um contador de morte súbita (Perish Song) em 3 turnos para ambos os combatentes."
  },
  "wandering-spirit": {
    "id": 254,
    "name": "wandering-spirit",
    "nameEn": "Wandering Spirit",
    "namePt": "Espírito Errante",
    "desc": "Troca de habilidade com o adversário sempre que for atingido por um golpe de contato físico."
  },
  "gorilla-tactics": {
    "id": 255,
    "name": "gorilla-tactics",
    "nameEn": "Gorilla Tactics",
    "namePt": "Táticas de Gorila",
    "desc": "Aumenta o Ataque físico em 50%, mas só permite selecionar o primeiro golpe escolhido na batalha."
  },
  "neutralizing-gas": {
    "id": 256,
    "name": "neutralizing-gas",
    "nameEn": "Neutralizing Gas",
    "namePt": "Gás Neutralizador",
    "desc": "Libera um gás neutralizador que anula e desativa todas as outras habilidades de todos os Pokémon em campo."
  },
  "pastel-veil": {
    "id": 257,
    "name": "pastel-veil",
    "nameEn": "Pastel Veil",
    "namePt": "Véu Pastel",
    "desc": "Protege o próprio Pokémon e seus aliados contra envenenamento e cura aliados envenenados ao entrar em campo."
  },
  "hunger-switch": {
    "id": 258,
    "name": "hunger-switch",
    "nameEn": "Hunger Switch",
    "namePt": "Troca por Fome",
    "desc": "Alterna entre a Forma Satisfeita (Elétrico) e a Forma Voraz (Sombrio) ao final de cada turno."
  },
  "quick-draw": {
    "id": 259,
    "name": "quick-draw",
    "nameEn": "Quick Draw",
    "namePt": "Saque Rápido",
    "desc": "Tem 30% de chance de agir primeiro dentro do seu turno, independentemente da sua Velocidade."
  },
  "unseen-fist": {
    "id": 260,
    "name": "unseen-fist",
    "nameEn": "Unseen Fist",
    "namePt": "Punho Invisível",
    "desc": "Permite que todos os golpes de contato físico do Pokémon atravessem movimentos de proteção como Protect."
  },
  "curious-medicine": {
    "id": 261,
    "name": "curious-medicine",
    "nameEn": "Curious Medicine",
    "namePt": "Remédio Curioso",
    "desc": "Ao entrar em combate, dissipa e reseta todas as alterações de atributos dos seus aliados em campo."
  },
  "transistor": {
    "id": 262,
    "name": "transistor",
    "nameEn": "Transistor",
    "namePt": "Transistor",
    "desc": "Aumenta em 50% o poder de todos os ataques do tipo Elétrico disparados pelo Pokémon."
  },
  "dragons-maw": {
    "id": 263,
    "name": "dragons-maw",
    "nameEn": "Dragons Maw",
    "namePt": "Mandíbula de Dragão",
    "desc": "Aumenta em 50% o poder de todos os ataques do tipo Dragão disparados pelo Pokémon."
  },
  "chilling-neigh": {
    "id": 264,
    "name": "chilling-neigh",
    "nameEn": "Chilling Neigh",
    "namePt": "Relincho Gélido",
    "desc": "Aumenta o Ataque físico em um estágio (+1) toda vez que nocautear um Pokémon oponente."
  },
  "grim-neigh": {
    "id": 265,
    "name": "grim-neigh",
    "nameEn": "Grim Neigh",
    "namePt": "Relincho Sombrio",
    "desc": "Aumenta o Ataque Especial em um estágio (+1) toda vez que nocautear um Pokémon oponente."
  },
  "as-one-glastrier": {
    "id": 266,
    "name": "as-one-glastrier",
    "nameEn": "As One Glastrier",
    "namePt": "Como Um Só (Glastrier)",
    "desc": "Combina a pressão opressora da habilidade Pressure com o aumento de Ataque de Chilling Neigh."
  },
  "as-one-spectrier": {
    "id": 267,
    "name": "as-one-spectrier",
    "nameEn": "As One Spectrier",
    "namePt": "Como Um Só (Spectrier)",
    "desc": "Combina a pressão opressora da habilidade Pressure com o aumento de Ataque Especial de Grim Neigh."
  },
  "lingering-aroma": {
    "id": 268,
    "name": "lingering-aroma",
    "nameEn": "Lingering Aroma",
    "namePt": "Aroma Persistente",
    "desc": "Transmite o aroma persistente para o atacante de contato físico, substituindo a habilidade dele por Lingering Aroma."
  },
  "seed-sower": {
    "id": 269,
    "name": "seed-sower",
    "nameEn": "Seed Sower",
    "namePt": "Semeador",
    "desc": "Invoca o Terreno Floral (Grassy Terrain) no campo ao sofrer dano de um ataque."
  },
  "thermal-exchange": {
    "id": 270,
    "name": "thermal-exchange",
    "nameEn": "Thermal Exchange",
    "namePt": "Troca Térmica",
    "desc": "Aumenta o Ataque em um estágio ao ser atingido por golpes de Fogo e concede imunidade a queimadura."
  },
  "anger-shell": {
    "id": 271,
    "name": "anger-shell",
    "nameEn": "Anger Shell",
    "namePt": "Carapaça Furiosa",
    "desc": "Ao ter o PS reduzido abaixo de 50%, reduz Defesa e Def. Especial em 1 estágio e aumenta Ataque, Atq. Especial e Velocidade em 1 estágio."
  },
  "purifying-salt": {
    "id": 272,
    "name": "purifying-salt",
    "nameEn": "Purifying Salt",
    "namePt": "Sal Purificador",
    "desc": "Concede imunidade a todas as condições de status negativas e reduz pela metade o dano recebido de ataques do tipo Fantasma."
  },
  "well-baked-body": {
    "id": 273,
    "name": "well-baked-body",
    "nameEn": "Well Baked Body",
    "namePt": "Corpo Bem Assado",
    "desc": "Concede imunidade a golpes do tipo Fogo e aumenta a Defesa física em dois estágios (+2) ao ser atingido por um."
  },
  "wind-rider": {
    "id": 274,
    "name": "wind-rider",
    "nameEn": "Wind Rider",
    "namePt": "Cavaleiro do Vento",
    "desc": "Gera aumento de um estágio no Ataque ao ser atingido por golpes de vento ou quando o vento de cauda (Tailwind) estiver ativo."
  },
  "guard-dog": {
    "id": 275,
    "name": "guard-dog",
    "nameEn": "Guard Dog",
    "namePt": "Cão de Guarda",
    "desc": "Impede expulsão ou trocas forçadas; se for intimidado, aumenta o Ataque em um estágio em vez de sofrer penalidade."
  },
  "rocky-payload": {
    "id": 276,
    "name": "rocky-payload",
    "nameEn": "Rocky Payload",
    "namePt": "Carga Rochosa",
    "desc": "Aumenta em 50% a potência de ataques do tipo Pedra."
  },
  "wind-power": {
    "id": 277,
    "name": "wind-power",
    "nameEn": "Wind Power",
    "namePt": "Energia Eólica",
    "desc": "Carrega-se de eletricidade e fortalece o próximo golpe Elétrico ao ser atingido por movimentos baseados em vento."
  },
  "zero-to-hero": {
    "id": 278,
    "name": "zero-to-hero",
    "nameEn": "Zero To Hero",
    "namePt": "De Zero a Herói",
    "desc": "Transforma-se na poderosa Forma Heroica ao retornar para a Pokébola e entrar novamente na batalha."
  },
  "commander": {
    "id": 279,
    "name": "commander",
    "nameEn": "Commander",
    "namePt": "Comandante",
    "desc": "Entra na boca do Pokémon aliado Dondozo em batalhas em dupla, concedendo +2 em todos os atributos dele."
  },
  "electromorphosis": {
    "id": 280,
    "name": "electromorphosis",
    "nameEn": "Electromorphosis",
    "namePt": "Eletromorfose",
    "desc": "Carrega o corpo de energia elétrica ao sofrer dano, dobrando a potência do seu próximo ataque Elétrico."
  },
  "protosynthesis": {
    "id": 281,
    "name": "protosynthesis",
    "nameEn": "Protosynthesis",
    "namePt": "Protossíntese",
    "desc": "Aumenta a estatística mais alta do Pokémon em 30% (ou 50% em Velocidade) sob Sol intenso ou com Energia Inerte segurada."
  },
  "quark-drive": {
    "id": 282,
    "name": "quark-drive",
    "nameEn": "Quark Drive",
    "namePt": "Propulsão de Quarks",
    "desc": "Aumenta a estatística mais alta do Pokémon em 30% (ou 50% em Velocidade) em Terreno Elétrico ou com Energia Inerte segurada."
  },
  "good-as-gold": {
    "id": 283,
    "name": "good-as-gold",
    "nameEn": "Good As Gold",
    "namePt": "Bom Como Ouro",
    "desc": "O corpo de ouro maciço concede imunidade completa contra quaisquer movimentos de status utilizados por adversários."
  },
  "vessel-of-ruin": {
    "id": 284,
    "name": "vessel-of-ruin",
    "nameEn": "Vessel Of Ruin",
    "namePt": "Vaso da Ruína",
    "desc": "Diminui o Ataque Especial de todos os outros Pokémon em campo em 25%."
  },
  "sword-of-ruin": {
    "id": 285,
    "name": "sword-of-ruin",
    "nameEn": "Sword Of Ruin",
    "namePt": "Espada da Ruína",
    "desc": "Diminui a Defesa física de todos os outros Pokémon em campo em 25%."
  },
  "tablets-of-ruin": {
    "id": 286,
    "name": "tablets-of-ruin",
    "nameEn": "Tablets Of Ruin",
    "namePt": "Tábuas da Ruína",
    "desc": "Diminui o Ataque físico de todos os outros Pokémon em campo em 25%."
  },
  "beads-of-ruin": {
    "id": 287,
    "name": "beads-of-ruin",
    "nameEn": "Beads Of Ruin",
    "namePt": "Contas da Ruína",
    "desc": "Diminui a Defesa Especial de todos os outros Pokémon em campo em 25%."
  },
  "orichalcum-pulse": {
    "id": 288,
    "name": "orichalcum-pulse",
    "nameEn": "Orichalcum Pulse",
    "namePt": "Pulso de Oricon",
    "desc": "Invoca luz solar intensa ao entrar em combate e aumenta o Ataque físico em 33% sob esse clima."
  },
  "hadron-engine": {
    "id": 289,
    "name": "hadron-engine",
    "nameEn": "Hadron Engine",
    "namePt": "Motor de Hádrons",
    "desc": "Invoca o Terreno Elétrico ao entrar em combate e aumenta o Ataque Especial em 33% sob esse terreno."
  },
  "opportunist": {
    "id": 290,
    "name": "opportunist",
    "nameEn": "Opportunist",
    "namePt": "Oportunista",
    "desc": "Copia imediatamente quaisquer aumentos de atributos obtidos pelos oponentes durante o combate."
  },
  "cud-chew": {
    "id": 291,
    "name": "cud-chew",
    "nameEn": "Cud Chew",
    "namePt": "Ruminação",
    "desc": "Permite mastigar e consumir novamente a mesma fruta ao final do turno seguinte ao seu uso."
  },
  "sharpness": {
    "id": 292,
    "name": "sharpness",
    "nameEn": "Sharpness",
    "namePt": "Afiamento",
    "desc": "Aumenta em 50% a potência de todos os golpes baseados em lâminas e cortes."
  },
  "supreme-overlord": {
    "id": 293,
    "name": "supreme-overlord",
    "nameEn": "Supreme Overlord",
    "namePt": "Soberano Supremo",
    "desc": "Aumenta o Ataque e o Ataque Especial em 10% adicionais para cada aliado da equipe já nocauteado na batalha."
  },
  "costar": {
    "id": 294,
    "name": "costar",
    "nameEn": "Costar",
    "namePt": "Coestrela",
    "desc": "Ao entrar em combate, copia instantaneamente todas as alterações e aumentos de atributos do seu aliado."
  },
  "toxic-debris": {
    "id": 295,
    "name": "toxic-debris",
    "nameEn": "Toxic Debris",
    "namePt": "Detritos Tóxicos",
    "desc": "Espalha espinhos venenosos (Toxic Spikes) no campo do oponente sempre que receber dano de ataques físicos."
  },
  "armor-tail": {
    "id": 296,
    "name": "armor-tail",
    "nameEn": "Armor Tail",
    "namePt": "Cauda Armadurada",
    "desc": "A couraça na cauda impede que oponentes utilizem ataques com prioridade contra o Pokémon e seus aliados."
  },
  "earth-eater": {
    "id": 297,
    "name": "earth-eater",
    "nameEn": "Earth Eater",
    "namePt": "Devorador de Terra",
    "desc": "Concede imunidade a golpes do tipo Terrestre e restaura 25% do PS máximo ao ser atingido por um."
  },
  "mycelium-might": {
    "id": 298,
    "name": "mycelium-might",
    "nameEn": "Mycelium Might",
    "namePt": "Poder do Micélio",
    "desc": "Permite que seus golpes de status afetem oponentes independentemente de habilidades, mas sempre age por último."
  },
  "minds-eye": {
    "id": 299,
    "name": "minds-eye",
    "nameEn": "Minds Eye",
    "namePt": "Olho da Mente",
    "desc": "Permite atingir Pokémon Fantasma com golpes Normal e Lutador, ignora reduções de precisão e a evasão do oponente."
  },
  "supersweet-syrup": {
    "id": 300,
    "name": "supersweet-syrup",
    "nameEn": "Supersweet Syrup",
    "namePt": "Xarope Superdoce",
    "desc": "Libera uma calda doce irresistível ao entrar em combate, reduzindo a evasão de todos os oponentes em um estágio."
  },
  "hospitality": {
    "id": 301,
    "name": "hospitality",
    "nameEn": "Hospitality",
    "namePt": "Hospitalidade",
    "desc": "Ao entrar em campo em batalhas em dupla, restaura 25% do PS máximo do seu aliado."
  },
  "toxic-chain": {
    "id": 302,
    "name": "toxic-chain",
    "nameEn": "Toxic Chain",
    "namePt": "Corrente Tóxica",
    "desc": "Concede 30% de chance de causar envenenamento grave (badly poisoned) ao acertar qualquer ataque."
  },
  "embody-aspect": {
    "id": 303,
    "name": "embody-aspect",
    "nameEn": "Embody Aspect",
    "namePt": "Incorporar Aspecto",
    "desc": "Ao terastar, manifesta o aspecto da Máscara que estiver usando, elevando um atributo característico em um estágio."
  },
  "tera-shift": {
    "id": 304,
    "name": "tera-shift",
    "nameEn": "Tera Shift",
    "namePt": "Troca Tera",
    "desc": "Transforma-se automaticamente na Forma Terastal ao entrar em batalha."
  },
  "tera-shell": {
    "id": 305,
    "name": "tera-shell",
    "nameEn": "Tera Shell",
    "namePt": "Carapaça Tera",
    "desc": "Quando o Pokémon estiver com 100% de PS, faz com que qualquer ataque de dano recebido seja considerado 'não muito efetivo'."
  },
  "teraform-zero": {
    "id": 306,
    "name": "teraform-zero",
    "nameEn": "Teraform Zero",
    "namePt": "Teraforma Zero",
    "desc": "Ao entrar em campo na Forma Estelar, dissipa permanentemente todos os efeitos de clima e terreno ativos."
  },
  "poison-puppeteer": {
    "id": 307,
    "name": "poison-puppeteer",
    "nameEn": "Poison Puppeteer",
    "namePt": "Titereiro Venenoso",
    "desc": "Incapacita e confunde qualquer oponente que seja envenenado por este Pokémon."
  },
  "piercing-drill": {
    "id": 308,
    "name": "piercing-drill",
    "nameEn": "Piercing Drill",
    "namePt": "Broca Perfurante",
    "desc": "A broca afiada perfura e ignora proteções como Protect e Detect ao desferir ataques."
  },
  "dragonize": {
    "id": 309,
    "name": "dragonize",
    "nameEn": "Dragonize",
    "namePt": "Dragonizar",
    "desc": "Converte todos os golpes do tipo Normal para o tipo Dragão e aumenta a potência deles em 20%."
  },
  "mega-sol": {
    "id": 310,
    "name": "mega-sol",
    "nameEn": "Mega Sol",
    "namePt": "Mega Sol",
    "desc": "Intensifica a absorção de luz solar, aumentando drasticamente o Ataque Especial e a Velocidade sob o Sol."
  },
  "spicy-spray": {
    "id": 311,
    "name": "spicy-spray",
    "nameEn": "Spicy Spray",
    "namePt": "Spray Picante",
    "desc": "Borrifa um spray picante ao sofrer dano físico, reduzindo o Ataque do agressor e causando confusão."
  },
  "eelevate": {
    "id": 312,
    "name": "eelevate",
    "nameEn": "Eelevate",
    "namePt": "Eelevação",
    "desc": "Combina levitação com reflexos rápidos, concedendo imunidade a ataques Terrestres e aumentando a evasão."
  },
  "fire-mane": {
    "id": 313,
    "name": "fire-mane",
    "nameEn": "Fire Mane",
    "namePt": "Juba de Fogo",
    "desc": "A crina em brasa aumenta a potência de todos os ataques do tipo Fogo do Pokémon em 50%."
  },
  "aura-guard": {
    "id": 314,
    "name": "aura-guard",
    "nameEn": "Aura Guard",
    "namePt": "Guarda da Aura",
    "desc": "A aura protetora reduz pela metade o dano recebido de todos os ataques que fizerem contato físico."
  }
};

if (typeof module !== 'undefined') {
    module.exports = { ABILITIES_DATABASE };
}
