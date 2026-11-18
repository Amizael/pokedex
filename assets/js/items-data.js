// Catálogo Oficial de Itens Pokémon (Gerações I a IX)
const ITEMS_DATABASE = [
  {
    "id": 1,
    "identifier": "master-ball",
    "namePt": "Master Bola",
    "nameEn": "Master Ball",
    "category": "Pokébolas",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png",
    "desc": "A melhor Pokébola com o mais alto nível de desempenho. Captura qualquer Pokémon selvagem infalivelmente."
  },
  {
    "id": 2,
    "identifier": "ultra-ball",
    "namePt": "Ultra Bola",
    "nameEn": "Ultra Ball",
    "category": "Pokébolas",
    "cost": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
    "desc": "Uma Pokébola ultra-eficiente com taxa de sucesso superior à Grande Bola."
  },
  {
    "id": 3,
    "identifier": "great-ball",
    "namePt": "Grande Bola",
    "nameEn": "Great Ball",
    "category": "Pokébolas",
    "cost": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png",
    "desc": "Uma Pokébola de alto desempenho que oferece maior taxa de sucesso na captura do que uma Pokébola padrão."
  },
  {
    "id": 4,
    "identifier": "poke-ball",
    "namePt": "Pokébola",
    "nameEn": "Poke Ball",
    "category": "Pokébolas",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
    "desc": "Um dispositivo em formato esférico usado para capturar e abrigar Pokémon selvagens."
  },
  {
    "id": 5,
    "identifier": "safari-ball",
    "namePt": "Bola Safari",
    "nameEn": "Safari Ball",
    "category": "Pokébolas",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png",
    "desc": "Uma Pokébola especial camuflada usada exclusivamente na Zona Safari e no Grande Pântano."
  },
  {
    "id": 6,
    "identifier": "net-ball",
    "namePt": "Bola Rede",
    "nameEn": "Net Ball",
    "category": "Pokébolas",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png",
    "desc": "Uma Pokébola eficaz especialmente para capturar Pokémon do tipo Água e Inseto."
  },
  {
    "id": 7,
    "identifier": "dive-ball",
    "namePt": "Bola Mergulho",
    "nameEn": "Dive Ball",
    "category": "Pokébolas",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png",
    "desc": "Uma Pokébola excelente para capturar Pokémon que vivem nas profundezas do oceano."
  },
  {
    "id": 10,
    "identifier": "timer-ball",
    "namePt": "Bola Cronômetro",
    "nameEn": "Timer Ball",
    "category": "Pokébolas",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png",
    "desc": "Uma Pokébola que se torna progressivamente mais eficaz conforme a batalha se prolonga."
  },
  {
    "id": 11,
    "identifier": "luxury-ball",
    "namePt": "Bola Luxo",
    "nameEn": "Luxury Ball",
    "category": "Pokébolas",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png",
    "desc": "Uma Pokébola muito confortável que aumenta a amizade do Pokémon capturado mais rapidamente."
  },
  {
    "id": 12,
    "identifier": "premier-ball",
    "namePt": "Bola Comemorativa",
    "nameEn": "Premier Ball",
    "category": "Pokébolas",
    "cost": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png",
    "desc": "Uma Pokébola comemorativa rara produzida para celebrar uma ocasião especial."
  },
  {
    "id": 13,
    "identifier": "dusk-ball",
    "namePt": "Bola Crepúsculo",
    "nameEn": "Dusk Ball",
    "category": "Pokébolas",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-ball.png",
    "desc": "Uma Pokébola com taxa de captura 3× maior se usada durante a noite ou dentro de cavernas escuras."
  },
  {
    "id": 15,
    "identifier": "quick-ball",
    "namePt": "Bola Rápida",
    "nameEn": "Quick Ball",
    "category": "Pokébolas",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/quick-ball.png",
    "desc": "Uma Pokébola de alta tecnologia com taxa de captura 5× maior se utilizada logo no primeiro turno da batalha."
  },
  {
    "id": 17,
    "identifier": "potion",
    "namePt": "Poção",
    "nameEn": "Potion",
    "category": "Cura & Medicina",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    "desc": "Medicamento em spray que restaura 20 Pontos de Saúde (PS) de um Pokémon."
  },
  {
    "id": 18,
    "identifier": "antidote",
    "namePt": "Antídoto",
    "nameEn": "Antidote",
    "category": "Cura de Condições",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png",
    "desc": "Um medicamento em spray que cura o envenenamento de um Pokémon."
  },
  {
    "id": 23,
    "identifier": "full-restore",
    "namePt": "Restauração Total",
    "nameEn": "Full Restore",
    "category": "Cura & Medicina",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png",
    "desc": "Restaura todos os PS e cura todas as condições de estado (paralisia, veneno, sono, queimadura, congelamento)."
  },
  {
    "id": 24,
    "identifier": "max-potion",
    "namePt": "Poção Máxima",
    "nameEn": "Max Potion",
    "category": "Cura & Medicina",
    "cost": 2500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png",
    "desc": "Medicamento em spray supremo que restaura completamente todos os PS de um Pokémon."
  },
  {
    "id": 25,
    "identifier": "hyper-potion",
    "namePt": "Hiperpoção",
    "nameEn": "Hyper Potion",
    "category": "Cura & Medicina",
    "cost": 1500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png",
    "desc": "Medicamento de alta qualidade em spray que restaura 120 Pontos de Saúde (PS)."
  },
  {
    "id": 26,
    "identifier": "super-potion",
    "namePt": "Superpoção",
    "nameEn": "Super Potion",
    "category": "Cura & Medicina",
    "cost": 700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png",
    "desc": "Medicamento em spray avançado que restaura 60 Pontos de Saúde (PS) de um Pokémon ferido."
  },
  {
    "id": 27,
    "identifier": "full-heal",
    "namePt": "Cura Total",
    "nameEn": "Full Heal",
    "category": "Cura de Condições",
    "cost": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png",
    "desc": "Um spray que cura qualquer condição de estado alterada de um Pokémon."
  },
  {
    "id": 28,
    "identifier": "revive",
    "namePt": "Reviver",
    "nameEn": "Revive",
    "category": "Revitalização",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png",
    "desc": "Um medicamento que reanima um Pokémon desmaiado, restaurando metade de seus PS máximos."
  },
  {
    "id": 29,
    "identifier": "max-revive",
    "namePt": "Reviver Máximo",
    "nameEn": "Max Revive",
    "category": "Revitalização",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-revive.png",
    "desc": "Um medicamento supremo que reanima um Pokémon desmaiado com todos os seus PS recuperados."
  },
  {
    "id": 38,
    "identifier": "ether",
    "namePt": "Éter",
    "nameEn": "Ether",
    "category": "Recuperação de PP",
    "cost": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ether.png",
    "desc": "Restaura 10 Pontos de Poder (PP) de um golpe selecionado do Pokémon."
  },
  {
    "id": 40,
    "identifier": "elixir",
    "namePt": "Elixir",
    "nameEn": "Elixir",
    "category": "Recuperação de PP",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/elixir.png",
    "desc": "Restaura 10 Pontos de Poder (PP) de todos os golpes do Pokémon."
  },
  {
    "id": 45,
    "identifier": "hp-up",
    "namePt": "PS Mais",
    "nameEn": "Hp Up",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hp-up.png",
    "desc": "Suplemento líquido que eleva os Pontos Base (EVs) de Saúde máxima do Pokémon."
  },
  {
    "id": 46,
    "identifier": "protein",
    "namePt": "Proteína",
    "nameEn": "Protein",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protein.png",
    "desc": "Bebida nutritiva que aumenta os Pontos Base (EVs) de Ataque do Pokémon."
  },
  {
    "id": 47,
    "identifier": "iron",
    "namePt": "Ferro",
    "nameEn": "Iron",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iron.png",
    "desc": "Bebida rica em minerais que aumenta os Pontos Base (EVs) de Defesa do Pokémon."
  },
  {
    "id": 48,
    "identifier": "carbos",
    "namePt": "Carboidrato",
    "nameEn": "Carbos",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/carbos.png",
    "desc": "Bebida que aumenta os Pontos Base (EVs) de Velocidade do Pokémon."
  },
  {
    "id": 49,
    "identifier": "calcium",
    "namePt": "Cálcio",
    "nameEn": "Calcium",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/calcium.png",
    "desc": "Suplemento que aumenta os Pontos Base (EVs) de Ataque Especial do Pokémon."
  },
  {
    "id": 50,
    "identifier": "rare-candy",
    "namePt": "Doce Raro",
    "nameEn": "Rare Candy",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rare-candy.png",
    "desc": "Um doce energético que eleva imediatamente o nível do Pokémon em 1 estágio."
  },
  {
    "id": 52,
    "identifier": "zinc",
    "namePt": "Zinco",
    "nameEn": "Zinc",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/zinc.png",
    "desc": "Suplemento que aumenta os Pontos Base (EVs) de Defesa Especial do Pokémon."
  },
  {
    "id": 80,
    "identifier": "sun-stone",
    "namePt": "Pedra do Sol",
    "nameEn": "Sun Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png",
    "desc": "Uma pedra avermelhada que brilha como a luz solar. Faz certas espécies evoluírem (ex: Gloom, Sunkern, Cottonee)."
  },
  {
    "id": 81,
    "identifier": "moon-stone",
    "namePt": "Pedra da Lua",
    "nameEn": "Moon Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png",
    "desc": "Uma pedra preta reluzente como a noite. Faz certas espécies evoluírem (ex: Nidorina, Nidorino, Clefairy, Jigglypuff)."
  },
  {
    "id": 82,
    "identifier": "fire-stone",
    "namePt": "Pedra de Fogo",
    "nameEn": "Fire Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png",
    "desc": "Uma pedra peculiar que emite calor. Faz certas espécies de Pokémon evoluírem (ex: Vulpix, Growlithe, Eevee)."
  },
  {
    "id": 83,
    "identifier": "thunder-stone",
    "namePt": "Pedra do Trovão",
    "nameEn": "Thunder Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png",
    "desc": "Uma pedra com padrão de raio elétrico. Faz certas espécies evoluírem (ex: Pikachu, Eevee, Eelektrik)."
  },
  {
    "id": 84,
    "identifier": "water-stone",
    "namePt": "Pedra da Água",
    "nameEn": "Water Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png",
    "desc": "Uma pedra límpida e azul como o mar. Faz certas espécies evoluírem (ex: Poliwhirl, Shellder, Staryu, Eevee)."
  },
  {
    "id": 85,
    "identifier": "leaf-stone",
    "namePt": "Pedra da Folha",
    "nameEn": "Leaf Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png",
    "desc": "Uma pedra com a marca de uma folha fóssil. Faz certas espécies evoluírem (ex: Gloom, Weepinbell, Exeggcute)."
  },
  {
    "id": 107,
    "identifier": "shiny-stone",
    "namePt": "Pedra Brilhante",
    "nameEn": "Shiny Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png",
    "desc": "Uma pedra deslumbrante que emana luz forte. Faz certas espécies evoluírem (ex: Roselia, Togetic, Minccino)."
  },
  {
    "id": 108,
    "identifier": "dusk-stone",
    "namePt": "Pedra do Crepúsculo",
    "nameEn": "Dusk Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png",
    "desc": "Uma pedra tão escura quanto as sombras. Faz certas espécies evoluírem (ex: Murkrow, Misdreavus, Lampent)."
  },
  {
    "id": 109,
    "identifier": "dawn-stone",
    "namePt": "Pedra da Alvorada",
    "nameEn": "Dawn Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dawn-stone.png",
    "desc": "Uma pedra especial que reluz como o amanhecer. Faz Kirlia macho virar Gallade e Snorunt fêmea virar Froslass."
  },
  {
    "id": 197,
    "identifier": "choice-band",
    "namePt": "Faixa de Escolha",
    "nameEn": "Choice Band",
    "category": "Itens de Escolha",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-band.png",
    "desc": "Aumenta o Ataque do Pokémon em 50%, mas permite usar apenas o primeiro golpe selecionado até ser recolhido."
  },
  {
    "id": 211,
    "identifier": "leftovers",
    "namePt": "Restos",
    "nameEn": "Leftovers",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leftovers.png",
    "desc": "Item segurado que restaura gradualmente 1/16 dos PS máximos do Pokémon ao final de cada turno."
  },
  {
    "id": 245,
    "identifier": "expert-belt",
    "namePt": "Cinto do Especialista",
    "nameEn": "Expert Belt",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/expert-belt.png",
    "desc": "Aumenta em 20% o poder dos movimentos que causam dano super-efetivo contra o adversário."
  },
  {
    "id": 247,
    "identifier": "life-orb",
    "namePt": "Esfera da Vida",
    "nameEn": "Life Orb",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/life-orb.png",
    "desc": "Item segurado que aumenta o dano de todos os ataques em 30%, mas consome 10% do PS máximo a cada golpe."
  },
  {
    "id": 252,
    "identifier": "focus-sash",
    "namePt": "Faixa do Foco",
    "nameEn": "Focus Sash",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/focus-sash.png",
    "desc": "Se o Pokémon estiver com PS cheio e receber um golpe que o nocautearia, ele sobrevive com 1 PS restante."
  },
  {
    "id": 264,
    "identifier": "choice-scarf",
    "namePt": "Lenço de Escolha",
    "nameEn": "Choice Scarf",
    "category": "Itens de Escolha",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-scarf.png",
    "desc": "Aumenta a Velocidade em 50%, mas permite utilizar apenas o primeiro movimento escolhido."
  },
  {
    "id": 274,
    "identifier": "choice-specs",
    "namePt": "Óculos de Escolha",
    "nameEn": "Choice Specs",
    "category": "Itens de Escolha",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-specs.png",
    "desc": "Aumenta o Ataque Especial em 50%, mas trava o Pokémon no primeiro golpe utilizado."
  },
  {
    "id": 581,
    "identifier": "eviolite",
    "namePt": "Mineral Evolutivo",
    "nameEn": "Eviolite",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/eviolite.png",
    "desc": "Aumenta a Defesa e a Defesa Especial em 50% quando segurado por um Pokémon que ainda pode evoluir."
  },
  {
    "id": 583,
    "identifier": "rocky-helmet",
    "namePt": "Capacete Rochoso",
    "nameEn": "Rocky Helmet",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rocky-helmet.png",
    "desc": "Se o Pokémon for atingido por um ataque de contato físico, o atacante sofre dano de 1/6 de seus PS máximos."
  },
  {
    "id": 683,
    "identifier": "assault-vest",
    "namePt": "Colete de Assalto",
    "nameEn": "Assault Vest",
    "category": "Itens Segurados",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/assault-vest.png",
    "desc": "Aumenta a Defesa Especial em 50%, mas impede que o usuário execute movimentos de status (não ofensivos)."
  },
  {
    "id": 695,
    "identifier": "gengarite",
    "namePt": "Gengarita",
    "nameEn": "Gengarite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gengarite.png",
    "desc": "Permite que Gengar mega-evolua para Mega Gengar (adquirindo a temida habilidade Shadow Tag)."
  },
  {
    "id": 699,
    "identifier": "charizardite-x",
    "namePt": "Charizardita X",
    "nameEn": "Charizardite X",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charizardite-x.png",
    "desc": "Permite que Charizard mega-evolua para Mega Charizard X durante a batalha (adquirindo tipo Fogo/Dragão)."
  },
  {
    "id": 701,
    "identifier": "mewtwonite-x",
    "namePt": "Mewtwonita X",
    "nameEn": "Mewtwonite X",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewtwonite-x.png",
    "desc": "Permite que Mewtwo mega-evolua para Mega Mewtwo X (adquirindo tipo Psíquico/Lutador)."
  },
  {
    "id": 702,
    "identifier": "mewtwonite-y",
    "namePt": "Mewtwonita Y",
    "nameEn": "Mewtwonite Y",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewtwonite-y.png",
    "desc": "Permite que Mewtwo mega-evolua para Mega Mewtwo Y (atingindo astronômicos 194 de Ataque Especial)."
  },
  {
    "id": 712,
    "identifier": "lucarionite",
    "namePt": "Lucarionita",
    "nameEn": "Lucarionite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucarionite.png",
    "desc": "Permite que Lucario mega-evolua para Mega Lucario (adquirindo a habilidade Adaptability)."
  },
  {
    "id": 717,
    "identifier": "charizardite-y",
    "namePt": "Charizardita Y",
    "nameEn": "Charizardite Y",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charizardite-y.png",
    "desc": "Permite que Charizard mega-evolua para Mega Charizard Y (adquirindo a habilidade Drought)."
  },
  {
    "id": 739,
    "identifier": "mega-ring",
    "namePt": "Mega Anel",
    "nameEn": "Mega Ring",
    "category": "Gimmicks & Batalha",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mega-ring.png",
    "desc": "Dispositivo contendo a Key Stone. Permite que treinadores ativem a Mega Evolução com uma Mega Stone compatível."
  },
  {
    "id": 838,
    "identifier": "z-ring",
    "namePt": "Anel Z",
    "nameEn": "Z Ring",
    "category": "Gimmicks & Batalha",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/z-ring.png",
    "desc": "Pulseira de Alola que canaliza o Z-Power através de Z-Crystals para disparar os devastadores Movimentos Z."
  },
  {
    "id": 885,
    "identifier": "ice-stone",
    "namePt": "Pedra de Gelo",
    "nameEn": "Ice Stone",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png",
    "desc": "Uma pedra gélida como uma geleira eterna. Faz Alolan Vulpix, Alolan Sandshrew e Galarian Darumaka evoluírem."
  },
  {
    "id": 887,
    "identifier": "beast-ball",
    "namePt": "Bola Criatura",
    "nameEn": "Beast Ball",
    "category": "Pokébolas",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/beast-ball.png",
    "desc": "Uma Pokébola desenvolvida pela Fundação Aether especialmente para capturar Ultra Criaturas (Ultra Beasts)."
  },
  {
    "id": 1141,
    "identifier": "dynamax-band",
    "namePt": "Faixa Dynamax",
    "nameEn": "Dynamax Band",
    "category": "Gimmicks & Batalha",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dynamax-band.png",
    "desc": "Pulseira especial com Wishing Star que permite ativar o fenômeno Dynamax e Gigantamax em Galar."
  },
  {
    "id": 1178,
    "identifier": "heavy-duty-boots",
    "namePt": "Botas Resistentes",
    "nameEn": "Heavy Duty Boots",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heavy-duty-boots.png",
    "desc": "Protege o Pokémon segurador contra os efeitos de perigos de entrada na arena (Stealth Rock, Spikes, etc.)."
  },
  {
    "id": 1186,
    "identifier": "exp-candy-xl",
    "namePt": "Doce de Exp. GG",
    "nameEn": "Exp Candy Xl",
    "category": "Vitaminas & Nutrição",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/exp-candy-xl.png",
    "desc": "Um doce colossal que concede instantaneamente 30.000 pontos de experiência ao Pokémon."
  },
  {
    "id": 1669,
    "identifier": "tera-orb",
    "namePt": "Orbe Tera",
    "nameEn": "Tera Orb",
    "category": "Gimmicks & Batalha",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tera-orb.png",
    "desc": "Dispositivo em formato de orbe cristalino de Paldea que permite ativar a Teracristalização."
  },
  {
    "id": 1696,
    "identifier": "booster-energy",
    "namePt": "Energia de Impulso",
    "nameEn": "Booster Energy",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/booster-energy.png",
    "desc": "Cápsula de energia futurista que ativa instantaneamente as habilidades Protosynthesis ou Quark Drive."
  }
];

if (typeof module !== 'undefined') {
    module.exports = { ITEMS_DATABASE };
}
