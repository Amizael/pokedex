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
    "category": "Mecânicas Especiais & Batalha",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mega-ring.png",
    "desc": "Dispositivo contendo a Key Stone. Permite que treinadores ativem a Mega Evolução com uma Mega Stone compatível."
  },
  {
    "id": 838,
    "identifier": "z-ring",
    "namePt": "Anel Z",
    "nameEn": "Z Ring",
    "category": "Mecânicas Especiais & Batalha",
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
    "category": "Mecânicas Especiais & Batalha",
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
    "category": "Mecânicas Especiais & Batalha",
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
  },
  {
    "id": 1697,
    "identifier": "covert-cloak",
    "namePt": "Capa Oculta",
    "nameEn": "Covert Cloak",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/covert-cloak.png",
    "desc": "Uma capa encapuzada que oculta o portador, protegendo-o contra os efeitos secundários de ataques adversários (como recuo de Fake Out ou dano de Salt Cure)."
  },
  {
    "id": 1698,
    "identifier": "loaded-dice",
    "namePt": "Dado Viciado",
    "nameEn": "Loaded Dice",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/loaded-dice.png",
    "desc": "Um dado adulterado que assegura que movimentos de múltiplos golpes (como Icicle Spear, Scale Shot e Population Bomb) acertem sempre 4 ou 5 vezes."
  },
  {
    "id": 1699,
    "identifier": "clear-amulet",
    "namePt": "Amuleto Límpido",
    "nameEn": "Clear Amulet",
    "category": "Itens Segurados",
    "cost": 30000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/clear-amulet.png",
    "desc": "Um amuleto translúcido e brilhante que impede que habilidades (como Intimidate) ou movimentos inimigos reduzam os atributos do portador."
  },
  {
    "id": 1700,
    "identifier": "punching-glove",
    "namePt": "Luva de Boxe",
    "nameEn": "Punching Glove",
    "category": "Itens Segurados",
    "cost": 15000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/punching-glove.png",
    "desc": "Aumenta em 10% a potência dos golpes baseados em soco e impede que o atacante faça contato físico direto com o adversário."
  },
  {
    "id": 1701,
    "identifier": "mirror-herb",
    "namePt": "Erva Espelho",
    "nameEn": "Mirror Herb",
    "category": "Itens Segurados",
    "cost": 30000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mirror-herb.png",
    "desc": "Uma erva reflexiva de uso único que copia imediatamente qualquer aumento de atributos que o adversário aplique sobre si mesmo durante a batalha."
  },
  {
    "id": 1702,
    "identifier": "ability-shield",
    "namePt": "Escudo de Habilidade",
    "nameEn": "Ability Shield",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ability-shield.png",
    "desc": "Um escudo protetor que impede que a habilidade passiva do portador seja alterada, copiada ou anulada por habilidades ou golpes inimigos."
  },
  {
    "id": 541,
    "identifier": "air-balloon",
    "namePt": "Balão de Ar",
    "nameEn": "Air Balloon",
    "category": "Itens Segurados",
    "cost": 15000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/air-balloon.png",
    "desc": "Permite ao portador flutuar no ar, conferindo imunidade completa a golpes Terrestres e espinhos até que sofra dano direto."
  },
  {
    "id": 639,
    "identifier": "weakness-policy",
    "namePt": "Seguro de Fraqueza",
    "nameEn": "Weakness Policy",
    "category": "Itens Segurados",
    "cost": 50000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/weakness-policy.png",
    "desc": "Consumível que eleva drasticamente o Ataque e o Ataque Especial (+2 estágios cada) quando o portador é atingido por um golpe super-efetivo."
  },
  {
    "id": 281,
    "identifier": "black-sludge",
    "namePt": "Lodo Preto",
    "nameEn": "Black Sludge",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/black-sludge.png",
    "desc": "Recupera 1/16 do HP máximo a cada turno para Pokémon do tipo Veneno. Causa dano contínuo de 1/16 do HP em qualquer outra tipagem."
  },
  {
    "id": 273,
    "identifier": "flame-orb",
    "namePt": "Orbe de Chamas",
    "nameEn": "Flame Orb",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/flame-orb.png",
    "desc": "Causa queimadura no portador ao término do primeiro turno em combate. Ativa habilidades como Guts, Quick Feet e Flare Boost."
  },
  {
    "id": 272,
    "identifier": "toxic-orb",
    "namePt": "Orbe Tóxico",
    "nameEn": "Toxic Orb",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/toxic-orb.png",
    "desc": "Inflige envenenamento grave no portador ao final do primeiro turno. Essencial para ativar Poison Heal, Guts e estratégias de Facade."
  },
  {
    "id": 214,
    "identifier": "white-herb",
    "namePt": "Erva Branca",
    "nameEn": "White Herb",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/white-herb.png",
    "desc": "Consumível que restaura imediatamente quaisquer atributos que tenham sido reduzidos por movimentos próprios (como Shell Smash) ou inimigos."
  },
  {
    "id": 219,
    "identifier": "power-herb",
    "namePt": "Erva do Poder",
    "nameEn": "Power Herb",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-herb.png",
    "desc": "Permite a execução imediata no primeiro turno de movimentos que exigem um turno prévio de carregamento (como Meteor Beam e Solar Beam)."
  },
  {
    "id": 215,
    "identifier": "mental-herb",
    "namePt": "Erva Mental",
    "nameEn": "Mental Herb",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mental-herb.png",
    "desc": "Dissipa instantaneamente os efeitos inibidores de movimentos adversários, tais como Taunt, Encore, Torment, Disable e atração."
  },
  {
    "id": 547,
    "identifier": "eject-button",
    "namePt": "Botão de Ejeção",
    "nameEn": "Eject Button",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/eject-button.png",
    "desc": "Força a substituição imediata do portador assim que ele recebe dano direto de um ataque adversário, facilitando o reposicionamento da equipe."
  },
  {
    "id": 1119,
    "identifier": "eject-pack",
    "namePt": "Mochila de Ejeção",
    "nameEn": "Eject Pack",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/eject-pack.png",
    "desc": "Força a substituição imediata do portador caso qualquer um de seus atributos seja reduzido durante o combate (ativa com Overheat ou Make It Rain)."
  },
  {
    "id": 542,
    "identifier": "red-card",
    "namePt": "Cartão Vermelho",
    "nameEn": "Red Card",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/red-card.png",
    "desc": "Consumível que força a troca imediata do Pokémon atacante do oponente por um colega de equipe aleatório após causar dano ao usuário."
  },
  {
    "id": 295,
    "identifier": "shed-shell",
    "namePt": "Carapaça de Muda",
    "nameEn": "Shed Shell",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shed-shell.png",
    "desc": "Garante que o portador possa ser trocado a qualquer momento em batalha, ignorando habilidades aprisionadoras como Shadow Tag e Arena Trap."
  },
  {
    "id": 650,
    "identifier": "safety-goggles",
    "namePt": "Óculos de Proteção",
    "nameEn": "Safety Goggles",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safety-goggles.png",
    "desc": "Concede imunidade completa a danos climáticos residuais (Tempestade de Areia/Granizo) e a golpes baseados em pó ou esporos (Spore, Sleep Powder)."
  },
  {
    "id": 863,
    "identifier": "protective-pads",
    "namePt": "Caneleiras Protetoras",
    "nameEn": "Protective Pads",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protective-pads.png",
    "desc": "Caneleiras almofadadas que protegem o usuário dos efeitos secundários adversos provocados por golpes que fazem contato físico."
  },
  {
    "id": 269,
    "identifier": "light-clay",
    "namePt": "Argila Leve",
    "nameEn": "Light Clay",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/light-clay.png",
    "desc": "Estende o tempo de duração das barreiras protetoras Refletir (Reflect), Tela de Luz (Light Screen) e Véu de Aurora de 5 para 8 turnos."
  },
  {
    "id": 285,
    "identifier": "damp-rock",
    "namePt": "Pedra Úmida",
    "nameEn": "Damp Rock",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/damp-rock.png",
    "desc": "Estende a duração da condição climática de Chuva (Rain Dance ou Drizzle) de 5 para 8 turnos quando o portador a invoca."
  },
  {
    "id": 284,
    "identifier": "heat-rock",
    "namePt": "Pedra Quente",
    "nameEn": "Heat Rock",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heat-rock.png",
    "desc": "Estende a duração da condição climática de Sol Intenso (Sunny Day ou Drought) de 5 para 8 turnos quando o portador a invoca."
  },
  {
    "id": 283,
    "identifier": "smooth-rock",
    "namePt": "Pedra Suave",
    "nameEn": "Smooth Rock",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/smooth-rock.png",
    "desc": "Estende a duração da Tempestade de Areia (Sandstorm ou Sand Stream) de 5 para 8 turnos quando o portador a invoca."
  },
  {
    "id": 282,
    "identifier": "icy-rock",
    "namePt": "Pedra de Gelo",
    "nameEn": "Icy Rock",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/icy-rock.png",
    "desc": "Estende a duração da Nevasca ou Granizo (Snowscape ou Snow Warning) de 5 para 8 turnos quando o portador a invoca."
  },
  {
    "id": 879,
    "identifier": "terrain-extender",
    "namePt": "Extensor de Terreno",
    "nameEn": "Terrain Extender",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/terrain-extender.png",
    "desc": "Estende a duração de terrenos elementais de batalha (Elétrico, Psíquico, Planta e Névoa) de 5 para 8 turnos."
  },
  {
    "id": 880,
    "identifier": "electric-seed",
    "namePt": "Semente Elétrica",
    "nameEn": "Electric Seed",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/electric-seed.png",
    "desc": "Consumível que eleva a Defesa em 1 estágio assim que o Terreno Elétrico entra em efeito no campo de batalha."
  },
  {
    "id": 881,
    "identifier": "psychic-seed",
    "namePt": "Semente Psíquica",
    "nameEn": "Psychic Seed",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/psychic-seed.png",
    "desc": "Consumível que eleva a Defesa Especial em 1 estágio assim que o Terreno Psíquico entra em efeito no campo de batalha."
  },
  {
    "id": 882,
    "identifier": "grassy-seed",
    "namePt": "Semente de Planta",
    "nameEn": "Grassy Seed",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/grassy-seed.png",
    "desc": "Consumível que eleva a Defesa em 1 estágio assim que o Terreno de Planta entra em efeito no campo de batalha."
  },
  {
    "id": 883,
    "identifier": "misty-seed",
    "namePt": "Semente da Névoa",
    "nameEn": "Misty Seed",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/misty-seed.png",
    "desc": "Consumível que eleva a Defesa Especial em 1 estágio assim que o Terreno de Névoa entra em efeito no campo de batalha."
  },
  {
    "id": 1118,
    "identifier": "throat-spray",
    "namePt": "Spray de Garganta",
    "nameEn": "Throat Spray",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/throat-spray.png",
    "desc": "Consumível que eleva o Ataque Especial em 1 estágio imediatamente após o portador desferir qualquer movimento baseado em som."
  },
  {
    "id": 1121,
    "identifier": "blunder-policy",
    "namePt": "Seguro de Erro",
    "nameEn": "Blunder Policy",
    "category": "Itens Segurados",
    "cost": 50000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blunder-policy.png",
    "desc": "Consumível que eleva drasticamente a Velocidade do portador em +2 estágios caso erre um golpe por imprecisão."
  },
  {
    "id": 1120,
    "identifier": "room-service",
    "namePt": "Serviço de Quarto",
    "nameEn": "Room Service",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/room-service.png",
    "desc": "Consumível que reduz a Velocidade do portador em 1 estágio no instante em que a dimensão Trick Room é criada em campo."
  },
  {
    "id": 232,
    "identifier": "scope-lens",
    "namePt": "Lente de Escopo",
    "nameEn": "Scope Lens",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/scope-lens.png",
    "desc": "Uma lente de precisão óptica que amplia em 1 nível a probabilidade de o portador acertar golpes críticos."
  },
  {
    "id": 265,
    "identifier": "wide-lens",
    "namePt": "Lente Ampla",
    "nameEn": "Wide Lens",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wide-lens.png",
    "desc": "Uma lente que amplia o campo de visão, aumentando a precisão de todos os golpes do usuário em 10%."
  },
  {
    "id": 276,
    "identifier": "zoom-lens",
    "namePt": "Lente de Zoom",
    "nameEn": "Zoom Lens",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/zoom-lens.png",
    "desc": "Uma lente especial que amplia a precisão dos movimentos do usuário em 20% caso ele ataque após o adversário no turno."
  },
  {
    "id": 266,
    "identifier": "muscle-band",
    "namePt": "Faixa Muscular",
    "nameEn": "Muscle Band",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/muscle-band.png",
    "desc": "Uma faixa resistente que amplifica o poder e dano numérico de todos os ataques da categoria Física em 10%."
  },
  {
    "id": 267,
    "identifier": "wise-glasses",
    "namePt": "Óculos Sábios",
    "nameEn": "Wise Glasses",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wise-glasses.png",
    "desc": "Óculos de lentes espessas que amplificam a potência e dano numérico de todos os ataques da categoria Especial em 10%."
  },
  {
    "id": 277,
    "identifier": "metronome",
    "namePt": "Metrônomo",
    "nameEn": "Metronome",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metronome.png",
    "desc": "Aumenta o dano de um mesmo golpe utilizado consecutivamente em 20% a cada turno repetido, acumulando até o limite de +100%."
  },
  {
    "id": 253,
    "identifier": "shell-bell",
    "namePt": "Sino de Concha",
    "nameEn": "Shell Bell",
    "category": "Itens Segurados",
    "cost": 20000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shell-bell.png",
    "desc": "Um sino de concha marinha que converte 1/8 de todo o dano causado ao adversário em restauração de Pontos de Saúde (HP)."
  },
  {
    "id": 544,
    "identifier": "binding-band",
    "namePt": "Faixa de Aprisionamento",
    "nameEn": "Binding Band",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/binding-band.png",
    "desc": "Aumenta a intensidade do dano residual de final de turno infligido por movimentos aprisionadores (como Fire Spin e Whirlpool)."
  },
  {
    "id": 286,
    "identifier": "grip-claw",
    "namePt": "Garra de Aperto",
    "nameEn": "Grip Claw",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/grip-claw.png",
    "desc": "Garante que todos os movimentos que aprisionam o adversário perdurem pela duração máxima de 7 turnos seguidos."
  },
  {
    "id": 296,
    "identifier": "big-root",
    "namePt": "Raiz Grande",
    "nameEn": "Big Root",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/big-root.png",
    "desc": "Amplia em 30% a quantidade de vida recuperada através de golpes de drenagem (como Giga Drain, Drain Punch e Leech Seed)."
  },
  {
    "id": 278,
    "identifier": "iron-ball",
    "namePt": "Bola de Ferro",
    "nameEn": "Iron Ball",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iron-ball.png",
    "desc": "Reduz a Velocidade do portador em 50% e suprime quaisquer imunidades defensivas ao tipo Terrestre (incluindo tipo Voador e Levitate)."
  },
  {
    "id": 279,
    "identifier": "lagging-tail",
    "namePt": "Cauda Lenta",
    "nameEn": "Lagging Tail",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lagging-tail.png",
    "desc": "Um item pesado que obriga o Pokémon a agir na última posição dentro de sua respectiva faixa de prioridade no turno."
  },
  {
    "id": 543,
    "identifier": "ring-target",
    "namePt": "Alvo de Anel",
    "nameEn": "Ring Target",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ring-target.png",
    "desc": "Um item misterioso que anula todas as imunidades defensivas conferidas pela tipagem natural do Pokémon portador."
  },
  {
    "id": 288,
    "identifier": "sticky-barb",
    "namePt": "Farpas Grudentas",
    "nameEn": "Sticky Barb",
    "category": "Itens Segurados",
    "cost": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sticky-barb.png",
    "desc": "Causa dano contínuo de 1/8 do HP máximo por turno ao portador e transfere-se para qualquer oponente que fizer contato físico."
  },
  {
    "id": 158,
    "identifier": "sitrus-berry",
    "namePt": "Fruta Sitrus",
    "nameEn": "Sitrus Berry",
    "category": "Bagas (Berries)",
    "cost": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sitrus-berry.png",
    "desc": "Restaura imediatamente 25% dos Pontos de Saúde (HP) máximos assim que a vida do portador cai para 50% ou menos."
  },
  {
    "id": 157,
    "identifier": "lum-berry",
    "namePt": "Fruta Lum",
    "nameEn": "Lum Berry",
    "category": "Bagas (Berries)",
    "cost": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lum-berry.png",
    "desc": "Cura instantaneamente qualquer problema de condição de status que afete o portador (queimadura, sono, paralisia, veneno ou confusão)."
  },
  {
    "id": 149,
    "identifier": "chesto-berry",
    "namePt": "Fruta Chesto",
    "nameEn": "Chesto Berry",
    "category": "Bagas (Berries)",
    "cost": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/chesto-berry.png",
    "desc": "Desperta imediatamente o portador caso ele adormeça, sendo a base tática fundamental do combo Rest + Chesto."
  },
  {
    "id": 154,
    "identifier": "leppa-berry",
    "namePt": "Fruta Leppa",
    "nameEn": "Leppa Berry",
    "category": "Bagas (Berries)",
    "cost": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leppa-berry.png",
    "desc": "Restaura 10 Pontos de Poder (PP) do movimento que tiver esgotado ou estiver com menor quantidade de usos."
  },
  {
    "id": 203,
    "identifier": "salac-berry",
    "namePt": "Fruta Salac",
    "nameEn": "Salac Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/salac-berry.png",
    "desc": "Consumível que eleva a Velocidade em 1 estágio em momentos de aperto (quando o HP cai para 25% ou menos)."
  },
  {
    "id": 201,
    "identifier": "liechi-berry",
    "namePt": "Fruta Liechi",
    "nameEn": "Liechi Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/liechi-berry.png",
    "desc": "Consumível que eleva o Ataque em 1 estágio em momentos de aperto (quando o HP cai para 25% ou menos)."
  },
  {
    "id": 204,
    "identifier": "petaya-berry",
    "namePt": "Fruta Petaya",
    "nameEn": "Petaya Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/petaya-berry.png",
    "desc": "Consumível que eleva o Ataque Especial em 1 estágio em momentos de aperto (quando o HP cai para 25% ou menos)."
  },
  {
    "id": 210,
    "identifier": "custap-berry",
    "namePt": "Fruta Custap",
    "nameEn": "Custap Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/custap-berry.png",
    "desc": "Assegura que o próximo movimento do portador tenha prioridade máxima de execução no turno seguinte quando a vida estiver em 25% ou menos."
  },
  {
    "id": 189,
    "identifier": "chople-berry",
    "namePt": "Fruta Chople",
    "nameEn": "Chople Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/chople-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Lutador recebido pelo portador."
  },
  {
    "id": 188,
    "identifier": "yache-berry",
    "namePt": "Fruta Yache",
    "nameEn": "Yache Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/yache-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Gelo recebido pelo portador (vital para dragões)."
  },
  {
    "id": 191,
    "identifier": "shuca-berry",
    "namePt": "Fruta Shuca",
    "nameEn": "Shuca Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shuca-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Terrestre recebido pelo portador."
  },
  {
    "id": 184,
    "identifier": "occa-berry",
    "namePt": "Fruta Occa",
    "nameEn": "Occa Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/occa-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Fogo recebido pelo portador."
  },
  {
    "id": 185,
    "identifier": "passho-berry",
    "namePt": "Fruta Passho",
    "nameEn": "Passho Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/passho-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Água recebido pelo portador."
  },
  {
    "id": 186,
    "identifier": "wacan-berry",
    "namePt": "Fruta Wacan",
    "nameEn": "Wacan Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wacan-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Elétrico recebido pelo portador."
  },
  {
    "id": 187,
    "identifier": "rindo-berry",
    "namePt": "Fruta Rindo",
    "nameEn": "Rindo Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rindo-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Planta recebido pelo portador."
  },
  {
    "id": 192,
    "identifier": "coba-berry",
    "namePt": "Fruta Coba",
    "nameEn": "Coba Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/coba-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Voador recebido pelo portador."
  },
  {
    "id": 193,
    "identifier": "payapa-berry",
    "namePt": "Fruta Payapa",
    "nameEn": "Payapa Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/payapa-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Psíquico recebido pelo portador."
  },
  {
    "id": 194,
    "identifier": "tanga-berry",
    "namePt": "Fruta Tanga",
    "nameEn": "Tanga Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tanga-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Inseto recebido pelo portador."
  },
  {
    "id": 195,
    "identifier": "charti-berry",
    "namePt": "Fruta Charti",
    "nameEn": "Charti Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charti-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Pedra recebido pelo portador."
  },
  {
    "id": 196,
    "identifier": "kasib-berry",
    "namePt": "Fruta Kasib",
    "nameEn": "Kasib Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kasib-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Fantasma recebido pelo portador."
  },
  {
    "id": 197,
    "identifier": "haban-berry",
    "namePt": "Fruta Haban",
    "nameEn": "Haban Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/haban-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Dragão recebido pelo portador."
  },
  {
    "id": 198,
    "identifier": "colbur-berry",
    "namePt": "Fruta Colbur",
    "nameEn": "Colbur Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/colbur-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Sombrio recebido pelo portador."
  },
  {
    "id": 199,
    "identifier": "babiri-berry",
    "namePt": "Fruta Babiri",
    "nameEn": "Babiri Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/babiri-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Aço recebido pelo portador."
  },
  {
    "id": 686,
    "identifier": "roseli-berry",
    "namePt": "Fruta Roseli",
    "nameEn": "Roseli Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/roseli-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Fada recebido pelo portador."
  },
  {
    "id": 190,
    "identifier": "kebia-berry",
    "namePt": "Fruta Kebia",
    "nameEn": "Kebia Berry",
    "category": "Bagas (Berries)",
    "cost": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kebia-berry.png",
    "desc": "Amortece pela metade o dano do primeiro ataque super-efetivo do tipo Veneno recebido pelo portador."
  },
  {
    "id": 1103,
    "identifier": "rusted-sword",
    "namePt": "Espada Enferrujada",
    "nameEn": "Rusted Sword",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rusted-sword.png",
    "desc": "Uma espada lendária corroída pelo tempo. Quando segurada por Zacian, transforma-o em sua forma Coroada (Fada/Aço)."
  },
  {
    "id": 1104,
    "identifier": "rusted-shield",
    "namePt": "Escudo Enferrujado",
    "nameEn": "Rusted Shield",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rusted-shield.png",
    "desc": "Um escudo lendário corroído pelo tempo. Quando segurado por Zamazenta, transforma-o em sua forma Coroada (Lutador/Aço)."
  },
  {
    "id": 2108,
    "identifier": "cornerstone-mask",
    "namePt": "Máscara do Alicerce",
    "nameEn": "Cornerstone Mask",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cornerstone-mask.png",
    "desc": "Máscara pétrea de Ogerpon que lhe concede a forma Planta/Pedra com a habilidade Sturdy e bônus de dano de 20%."
  },
  {
    "id": 2107,
    "identifier": "wellspring-mask",
    "namePt": "Máscara da Nascente",
    "nameEn": "Wellspring Mask",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wellspring-mask.png",
    "desc": "Máscara límpida de Ogerpon que lhe concede a forma Planta/Água com a habilidade Water Absorb e bônus de dano de 20%."
  },
  {
    "id": 2106,
    "identifier": "hearthflame-mask",
    "namePt": "Máscara da Fornalha",
    "nameEn": "Hearthflame Mask",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hearthflame-mask.png",
    "desc": "Máscara flamejante de Ogerpon que lhe concede a forma Planta/Fogo com a habilidade Mold Breaker e bônus de dano de 20%."
  },
  {
    "id": 1777,
    "identifier": "adamant-crystal",
    "namePt": "Cristal Adamantino",
    "nameEn": "Adamant Crystal",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/adamant-crystal.png",
    "desc": "Um orbe cintilante que irradia poder temporal. Permite a Dialga assumir sua imponente Forma Origem."
  },
  {
    "id": 1778,
    "identifier": "lustrous-globe",
    "namePt": "Globo Lustroso",
    "nameEn": "Lustrous Globe",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lustrous-globe.png",
    "desc": "Um globo resplandecente que emana energia espacial. Permite a Palkia assumir sua majestosa Forma Origem."
  },
  {
    "id": 1779,
    "identifier": "griseous-core",
    "namePt": "Núcleo Brilhante",
    "nameEn": "Griseous Core",
    "category": "Itens Segurados",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/griseous-core.png",
    "desc": "Um núcleo dimensional que canaliza a energia do Mundo Distorcido. Permite a Giratina assumir a Forma Origem."
  },
  {
    "id": 236,
    "identifier": "light-ball",
    "namePt": "Bola de Luz",
    "nameEn": "Light Ball",
    "category": "Itens Segurados",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/light-ball.png",
    "desc": "Um orbe misterioso exclusivo de Pikachu que dobra seus atributos de Ataque e Ataque Especial em batalha."
  },
  {
    "id": 258,
    "identifier": "thick-club",
    "namePt": "Osso Grosso",
    "nameEn": "Thick Club",
    "category": "Itens Segurados",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thick-club.png",
    "desc": "Um osso duro e resistente que dobra o atributo de Ataque físico quando segurado por Cubone ou Marowak."
  },
  {
    "id": 225,
    "identifier": "soul-dew",
    "namePt": "Orvalho d'Alma",
    "nameEn": "Soul Dew",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/soul-dew.png",
    "desc": "Um orbe de beleza sublime que aumenta em 20% o poder dos ataques dos tipos Psíquico e Dragão de Latios e Latias."
  },
  {
    "id": 259,
    "identifier": "leek",
    "namePt": "Alho-poró",
    "nameEn": "Leek",
    "category": "Itens Segurados",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leek.png",
    "desc": "O talo vegetal característico de Farfetch'd e Sirfetch'd que amplia sua taxa de acertos críticos em +2 estágios."
  },
  {
    "id": 659,
    "identifier": "venusaurite",
    "namePt": "Venusaurita",
    "nameEn": "Venusaurite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/venusaurite.png",
    "desc": "Permite a Venusaur megaevoluir para Mega Venusaur durante o combate."
  },
  {
    "id": 661,
    "identifier": "blastoisinite",
    "namePt": "Blastoisita",
    "nameEn": "Blastoisinite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blastoisinite.png",
    "desc": "Permite a Blastoise megaevoluir para Mega Blastoise durante o combate."
  },
  {
    "id": 679,
    "identifier": "alakazite",
    "namePt": "Alakazamita",
    "nameEn": "Alakazite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/alakazite.png",
    "desc": "Permite a Alakazam megaevoluir para Mega Alakazam durante o combate."
  },
  {
    "id": 675,
    "identifier": "kangaskhanite",
    "namePt": "Kangaskhanita",
    "nameEn": "Kangaskhanite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kangaskhanite.png",
    "desc": "Permite a Kangaskhan megaevoluir para Mega Kangaskhan durante o combate."
  },
  {
    "id": 671,
    "identifier": "pinsirite",
    "namePt": "Pinsirita",
    "nameEn": "Pinsirite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pinsirite.png",
    "desc": "Permite a Pinsir megaevoluir para Mega Pinsir durante o combate."
  },
  {
    "id": 676,
    "identifier": "gyaradosite",
    "namePt": "Gyaradosita",
    "nameEn": "Gyaradosite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gyaradosite.png",
    "desc": "Permite a Gyarados megaevoluir para Mega Gyarados durante o combate."
  },
  {
    "id": 672,
    "identifier": "aerodactylite",
    "namePt": "Aerodactylita",
    "nameEn": "Aerodactylite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aerodactylite.png",
    "desc": "Permite a Aerodactyl megaevoluir para Mega Aerodactyl durante o combate."
  },
  {
    "id": 658,
    "identifier": "ampharosite",
    "namePt": "Ampharolita",
    "nameEn": "Ampharosite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ampharosite.png",
    "desc": "Permite a Ampharos megaevoluir para Mega Ampharos durante o combate."
  },
  {
    "id": 670,
    "identifier": "scizorite",
    "namePt": "Scizorita",
    "nameEn": "Scizorite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/scizorite.png",
    "desc": "Permite a Scizor megaevoluir para Mega Scizor durante o combate."
  },
  {
    "id": 680,
    "identifier": "heracronite",
    "namePt": "Heracrossita",
    "nameEn": "Heracronite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heracronite.png",
    "desc": "Permite a Heracross megaevoluir para Mega Heracross durante o combate."
  },
  {
    "id": 666,
    "identifier": "houndoominite",
    "namePt": "Houndoominita",
    "nameEn": "Houndoominite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/houndoominite.png",
    "desc": "Permite a Houndoom megaevoluir para Mega Houndoom durante o combate."
  },
  {
    "id": 669,
    "identifier": "tyranitarite",
    "namePt": "Tyranitarita",
    "nameEn": "Tyranitarite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tyranitarite.png",
    "desc": "Permite a Tyranitar megaevoluir para Mega Tyranitar durante o combate."
  },
  {
    "id": 738,
    "identifier": "sceptilite",
    "namePt": "Sceptilita",
    "nameEn": "Sceptilite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sceptilite.png",
    "desc": "Permite a Sceptile megaevoluir para Mega Sceptile durante o combate."
  },
  {
    "id": 664,
    "identifier": "blazikenite",
    "namePt": "Blazikenita",
    "nameEn": "Blazikenite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blazikenite.png",
    "desc": "Permite a Blaziken megaevoluir para Mega Blaziken durante o combate."
  },
  {
    "id": 744,
    "identifier": "swampertite",
    "namePt": "Swampertita",
    "nameEn": "Swampertite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/swampertite.png",
    "desc": "Permite a Swampert megaevoluir para Mega Swampert durante o combate."
  },
  {
    "id": 657,
    "identifier": "gardevoirite",
    "namePt": "Gardevoirita",
    "nameEn": "Gardevoirite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gardevoirite.png",
    "desc": "Permite a Gardevoir megaevoluir para Mega Gardevoir durante o combate."
  },
  {
    "id": 754,
    "identifier": "sablenite",
    "namePt": "Sablenita",
    "nameEn": "Sablenite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sablenite.png",
    "desc": "Permite a Sableye megaevoluir para Mega Sableye durante o combate."
  },
  {
    "id": 681,
    "identifier": "mawilite",
    "namePt": "Mawilita",
    "nameEn": "Mawilite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mawilite.png",
    "desc": "Permite a Mawile megaevoluir para Mega Mawile durante o combate."
  },
  {
    "id": 667,
    "identifier": "aggronite",
    "namePt": "Aggronita",
    "nameEn": "Aggronite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aggronite.png",
    "desc": "Permite a Aggron megaevoluir para Mega Aggron durante o combate."
  },
  {
    "id": 665,
    "identifier": "medichamite",
    "namePt": "Medichamita",
    "nameEn": "Medichamite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/medichamite.png",
    "desc": "Permite a Medicham megaevoluir para Mega Medicham durante o combate."
  },
  {
    "id": 682,
    "identifier": "manectite",
    "namePt": "Manectrita",
    "nameEn": "Manectite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/manectite.png",
    "desc": "Permite a Manectric megaevoluir para Mega Manectric durante o combate."
  },
  {
    "id": 753,
    "identifier": "sharpedonite",
    "namePt": "Sharpedonita",
    "nameEn": "Sharpedonite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sharpedonite.png",
    "desc": "Permite a Sharpedo megaevoluir para Mega Sharpedo durante o combate."
  },
  {
    "id": 767,
    "identifier": "cameruptite",
    "namePt": "Cameruptita",
    "nameEn": "Cameruptite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cameruptite.png",
    "desc": "Permite a Camerupt megaevoluir para Mega Camerupt durante o combate."
  },
  {
    "id": 755,
    "identifier": "altarianite",
    "namePt": "Altarianita",
    "nameEn": "Altarianite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/altarianite.png",
    "desc": "Permite a Altaria megaevoluir para Mega Altaria durante o combate."
  },
  {
    "id": 668,
    "identifier": "banettite",
    "namePt": "Banettita",
    "nameEn": "Banettite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/banettite.png",
    "desc": "Permite a Banette megaevoluir para Mega Banette durante o combate."
  },
  {
    "id": 677,
    "identifier": "absolite",
    "namePt": "Absolita",
    "nameEn": "Absolite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/absolite.png",
    "desc": "Permite a Absol megaevoluir para Mega Absol durante o combate."
  },
  {
    "id": 763,
    "identifier": "glalitite",
    "namePt": "Glalitita",
    "nameEn": "Glalitite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/glalitite.png",
    "desc": "Permite a Glalie megaevoluir para Mega Glalie durante o combate."
  },
  {
    "id": 769,
    "identifier": "salamencite",
    "namePt": "Salamencita",
    "nameEn": "Salamencite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/salamencite.png",
    "desc": "Permite a Salamence megaevoluir para Mega Salamence durante o combate."
  },
  {
    "id": 758,
    "identifier": "metagrossite",
    "namePt": "Metagrossita",
    "nameEn": "Metagrossite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metagrossite.png",
    "desc": "Permite a Metagross megaevoluir para Mega Metagross durante o combate."
  },
  {
    "id": 684,
    "identifier": "latiasite",
    "namePt": "Latiasita",
    "nameEn": "Latiasite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/latiasite.png",
    "desc": "Permite a Latias megaevoluir para Mega Latias durante o combate."
  },
  {
    "id": 685,
    "identifier": "latiosite",
    "namePt": "Latiosita",
    "nameEn": "Latiosite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/latiosite.png",
    "desc": "Permite a Latios megaevoluir para Mega Latios durante o combate."
  },
  {
    "id": 768,
    "identifier": "lopunnite",
    "namePt": "Lopunnita",
    "nameEn": "Lopunnite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lopunnite.png",
    "desc": "Permite a Lopunny megaevoluir para Mega Lopunny durante o combate."
  },
  {
    "id": 673,
    "identifier": "garchompite",
    "namePt": "Garchompita",
    "nameEn": "Garchompite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/garchompite.png",
    "desc": "Permite a Garchomp megaevoluir para Mega Garchomp durante o combate."
  },
  {
    "id": 674,
    "identifier": "abomasnowite",
    "namePt": "Abomasnowita",
    "nameEn": "Abomasnowite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/abomasnowite.png",
    "desc": "Permite a Abomasnow megaevoluir para Mega Abomasnow durante o combate."
  },
  {
    "id": 756,
    "identifier": "galladite",
    "namePt": "Galladita",
    "nameEn": "Galladite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/galladite.png",
    "desc": "Permite a Gallade megaevoluir para Mega Gallade durante o combate."
  },
  {
    "id": 757,
    "identifier": "audinite",
    "namePt": "Audinita",
    "nameEn": "Audinite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/audinite.png",
    "desc": "Permite a Audino megaevoluir para Mega Audino durante o combate."
  },
  {
    "id": 764,
    "identifier": "diancite",
    "namePt": "Diancita",
    "nameEn": "Diancite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/diancite.png",
    "desc": "Permite a Diancie megaevoluir para Mega Diancie durante o combate."
  },
  {
    "id": 770,
    "identifier": "beedrillite",
    "namePt": "Beedrillita",
    "nameEn": "Beedrillite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/beedrillite.png",
    "desc": "Permite a Beedrill megaevoluir para Mega Beedrill durante o combate."
  },
  {
    "id": 762,
    "identifier": "pidgeotite",
    "namePt": "Pidgeotita",
    "nameEn": "Pidgeotite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pidgeotite.png",
    "desc": "Permite a Pidgeot megaevoluir para Mega Pidgeot durante o combate."
  },
  {
    "id": 761,
    "identifier": "slowbronite",
    "namePt": "Slowbronita",
    "nameEn": "Slowbronite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/slowbronite.png",
    "desc": "Permite a Slowbro megaevoluir para Mega Slowbro durante o combate."
  },
  {
    "id": 745,
    "identifier": "steelixite",
    "namePt": "Steelixita",
    "nameEn": "Steelixite",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/steelixite.png",
    "desc": "Permite a Steelix megaevoluir para Mega Steelix durante o combate."
  },
  {
    "id": 765,
    "identifier": "red-orb",
    "namePt": "Orbe Vermelho",
    "nameEn": "Red Orb",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/red-orb.png",
    "desc": "Um orbe escarlate ancestral que desencadeia a Reversão Primitiva de Groudon ao entrar em campo."
  },
  {
    "id": 766,
    "identifier": "blue-orb",
    "namePt": "Orbe Azul",
    "nameEn": "Blue Orb",
    "category": "Mega Pedras (Mega Evolução)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blue-orb.png",
    "desc": "Um orbe safira ancestral que desencadeia a Reversão Primitiva de Kyogre ao entrar em campo."
  },
  {
    "id": 807,
    "identifier": "normalium-z",
    "namePt": "Normalium Z",
    "nameEn": "Normalium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/normalium-z.png",
    "desc": "Converte movimentos do tipo Normal no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 808,
    "identifier": "firium-z",
    "namePt": "Firium Z",
    "nameEn": "Firium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/firium-z.png",
    "desc": "Converte movimentos do tipo Fogo no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 809,
    "identifier": "waterium-z",
    "namePt": "Waterium Z",
    "nameEn": "Waterium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/waterium-z.png",
    "desc": "Converte movimentos do tipo Água no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 810,
    "identifier": "electrium-z",
    "namePt": "Electrium Z",
    "nameEn": "Electrium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/electrium-z.png",
    "desc": "Converte movimentos do tipo Elétrico no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 811,
    "identifier": "grassium-z",
    "namePt": "Grassium Z",
    "nameEn": "Grassium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/grassium-z.png",
    "desc": "Converte movimentos do tipo Planta no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 812,
    "identifier": "icium-z",
    "namePt": "Icium Z",
    "nameEn": "Icium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/icium-z.png",
    "desc": "Converte movimentos do tipo Gelo no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 813,
    "identifier": "fightinium-z",
    "namePt": "Fightinium Z",
    "nameEn": "Fightinium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fightinium-z.png",
    "desc": "Converte movimentos do tipo Lutador no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 814,
    "identifier": "poisonium-z",
    "namePt": "Poisonium Z",
    "nameEn": "Poisonium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poisonium-z.png",
    "desc": "Converte movimentos do tipo Veneno no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 815,
    "identifier": "groundium-z",
    "namePt": "Groundium Z",
    "nameEn": "Groundium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/groundium-z.png",
    "desc": "Converte movimentos do tipo Terrestre no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 816,
    "identifier": "flyinium-z",
    "namePt": "Flyinium Z",
    "nameEn": "Flyinium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/flyinium-z.png",
    "desc": "Converte movimentos do tipo Voador no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 817,
    "identifier": "psychium-z",
    "namePt": "Psychium Z",
    "nameEn": "Psychium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/psychium-z.png",
    "desc": "Converte movimentos do tipo Psíquico no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 818,
    "identifier": "buginium-z",
    "namePt": "Buginium Z",
    "nameEn": "Buginium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/buginium-z.png",
    "desc": "Converte movimentos do tipo Inseto no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 819,
    "identifier": "rockium-z",
    "namePt": "Rockium Z",
    "nameEn": "Rockium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rockium-z.png",
    "desc": "Converte movimentos do tipo Pedra no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 820,
    "identifier": "ghostium-z",
    "namePt": "Ghostium Z",
    "nameEn": "Ghostium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ghostium-z.png",
    "desc": "Converte movimentos do tipo Fantasma no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 821,
    "identifier": "dragonium-z",
    "namePt": "Dragonium Z",
    "nameEn": "Dragonium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragonium-z.png",
    "desc": "Converte movimentos do tipo Dragão no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 822,
    "identifier": "darkinium-z",
    "namePt": "Darkinium Z",
    "nameEn": "Darkinium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/darkinium-z.png",
    "desc": "Converte movimentos do tipo Sombrio no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 823,
    "identifier": "steelium-z",
    "namePt": "Steelium Z",
    "nameEn": "Steelium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/steelium-z.png",
    "desc": "Converte movimentos do tipo Aço no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 824,
    "identifier": "fairium-z",
    "namePt": "Fairium Z",
    "nameEn": "Fairium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fairium-z.png",
    "desc": "Converte movimentos do tipo Fada no poderoso Movimento Z elemental correspondente."
  },
  {
    "id": 825,
    "identifier": "pikanium-z",
    "namePt": "Pikanium Z",
    "nameEn": "Pikanium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pikanium-z.png",
    "desc": "Cristal Z exclusivo que permite a Pikachu (Choque Catastrófico) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 842,
    "identifier": "pikashunium-z",
    "namePt": "Pikashunium Z",
    "nameEn": "Pikashunium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pikashunium-z.png",
    "desc": "Cristal Z exclusivo que permite a Pikachu de Boné (Raio de 10.000.000 de Volts) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 832,
    "identifier": "aloraichium-z",
    "namePt": "Aloraichium Z",
    "nameEn": "Aloraichium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aloraichium-z.png",
    "desc": "Cristal Z exclusivo que permite a Raichu de Alola (Surfe Elétrico Energizado) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 831,
    "identifier": "eevium-z",
    "namePt": "Eevium Z",
    "nameEn": "Eevium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/eevium-z.png",
    "desc": "Cristal Z exclusivo que permite a Eevee (Poder de Eevium) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 833,
    "identifier": "snorlium-z",
    "namePt": "Snorlium Z",
    "nameEn": "Snorlium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/snorlium-z.png",
    "desc": "Cristal Z exclusivo que permite a Snorlax (Panqueca Esmagadora) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 834,
    "identifier": "mewnium-z",
    "namePt": "Mewnium Z",
    "nameEn": "Mewnium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mewnium-z.png",
    "desc": "Cristal Z exclusivo que permite a Mew (Supernova Gênesis) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 826,
    "identifier": "decidium-z",
    "namePt": "Decidium Z",
    "nameEn": "Decidium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/decidium-z.png",
    "desc": "Cristal Z exclusivo que permite a Decidueye (Chuva de Flechas Sinistras) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 827,
    "identifier": "incinium-z",
    "namePt": "Incinium Z",
    "nameEn": "Incinium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/incinium-z.png",
    "desc": "Cristal Z exclusivo que permite a Incineroar (Salto Mortal Malicioso) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 828,
    "identifier": "primarium-z",
    "namePt": "Primarium Z",
    "nameEn": "Primarium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/primarium-z.png",
    "desc": "Cristal Z exclusivo que permite a Primarina (Sinfonia Oceânica) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 988,
    "identifier": "lycanium-z",
    "namePt": "Lycanium Z",
    "nameEn": "Lycanium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lycanium-z.png",
    "desc": "Cristal Z exclusivo que permite a Lycanroc (Tempestade de Presas Radiais) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 989,
    "identifier": "mimikium-z",
    "namePt": "Mimikium Z",
    "nameEn": "Mimikium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mimikium-z.png",
    "desc": "Cristal Z exclusivo que permite a Mimikyu (Abraço Amigável Acolhedor) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 990,
    "identifier": "kommonium-z",
    "namePt": "Kommonium Z",
    "nameEn": "Kommonium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kommonium-z.png",
    "desc": "Cristal Z exclusivo que permite a Kommo-o (Estrondo Trovejante de Clangor) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 829,
    "identifier": "tapunium-z",
    "namePt": "Tapunium Z",
    "nameEn": "Tapunium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tapunium-z.png",
    "desc": "Cristal Z exclusivo que permite a Guardiões Tapu (Fúria de Alola) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 991,
    "identifier": "solganium-z",
    "namePt": "Solganium Z",
    "nameEn": "Solganium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/solganium-z.png",
    "desc": "Cristal Z exclusivo que permite a Solgaleo / Necrozma (Açoite Solar Fulgurante) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 992,
    "identifier": "lunalium-z",
    "namePt": "Lunalium Z",
    "nameEn": "Lunalium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lunalium-z.png",
    "desc": "Cristal Z exclusivo que permite a Lunala / Necrozma (Raio Menesgênico Lunar) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 993,
    "identifier": "ultranecrozium-z",
    "namePt": "Ultranecrozium Z",
    "nameEn": "Ultranecrozium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultranecrozium-z.png",
    "desc": "Cristal Z exclusivo que permite a Necrozma (Luz que Extingue o Céu) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 835,
    "identifier": "marshadium-z",
    "namePt": "Marshadium Z",
    "nameEn": "Marshadium Z",
    "category": "Cristais Z (Movimentos Z)",
    "cost": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/marshadium-z.png",
    "desc": "Cristal Z exclusivo que permite a Marshadow (Golpe dos Sete Estrelas Sombrias) desferir seu Movimento Z de assinatura."
  },
  {
    "id": 298,
    "identifier": "flame-plate",
    "namePt": "Placa de Fogo",
    "nameEn": "Flame Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/flame-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Fogo. Muda a tipagem e o golpe Judgment de Arceus para Fogo."
  },
  {
    "id": 299,
    "identifier": "splash-plate",
    "namePt": "Placa de Água",
    "nameEn": "Splash Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/splash-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Água. Muda a tipagem e o golpe Judgment de Arceus para Água."
  },
  {
    "id": 300,
    "identifier": "zap-plate",
    "namePt": "Placa do Raio",
    "nameEn": "Zap Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/zap-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Elétrico. Muda a tipagem e o golpe Judgment de Arceus para Elétrico."
  },
  {
    "id": 301,
    "identifier": "meadow-plate",
    "namePt": "Placa da Campina",
    "nameEn": "Meadow Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/meadow-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Planta. Muda a tipagem e o golpe Judgment de Arceus para Planta."
  },
  {
    "id": 302,
    "identifier": "icicle-plate",
    "namePt": "Placa do Gelo",
    "nameEn": "Icicle Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/icicle-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Gelo. Muda a tipagem e o golpe Judgment de Arceus para Gelo."
  },
  {
    "id": 303,
    "identifier": "fist-plate",
    "namePt": "Placa do Punho",
    "nameEn": "Fist Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fist-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Lutador. Muda a tipagem e o golpe Judgment de Arceus para Lutador."
  },
  {
    "id": 304,
    "identifier": "toxic-plate",
    "namePt": "Placa Tóxica",
    "nameEn": "Toxic Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/toxic-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Veneno. Muda a tipagem e o golpe Judgment de Arceus para Veneno."
  },
  {
    "id": 305,
    "identifier": "earth-plate",
    "namePt": "Placa da Terra",
    "nameEn": "Earth Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/earth-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Terrestre. Muda a tipagem e o golpe Judgment de Arceus para Terrestre."
  },
  {
    "id": 306,
    "identifier": "sky-plate",
    "namePt": "Placa do Céu",
    "nameEn": "Sky Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sky-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Voador. Muda a tipagem e o golpe Judgment de Arceus para Voador."
  },
  {
    "id": 307,
    "identifier": "mind-plate",
    "namePt": "Placa da Mente",
    "nameEn": "Mind Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mind-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Psíquico. Muda a tipagem e o golpe Judgment de Arceus para Psíquico."
  },
  {
    "id": 308,
    "identifier": "insect-plate",
    "namePt": "Placa do Inseto",
    "nameEn": "Insect Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/insect-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Inseto. Muda a tipagem e o golpe Judgment de Arceus para Inseto."
  },
  {
    "id": 309,
    "identifier": "stone-plate",
    "namePt": "Placa de Pedra",
    "nameEn": "Stone Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/stone-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Pedra. Muda a tipagem e o golpe Judgment de Arceus para Pedra."
  },
  {
    "id": 310,
    "identifier": "spooky-plate",
    "namePt": "Placa Assustadora",
    "nameEn": "Spooky Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/spooky-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Fantasma. Muda a tipagem e o golpe Judgment de Arceus para Fantasma."
  },
  {
    "id": 311,
    "identifier": "draco-plate",
    "namePt": "Placa do Dragão",
    "nameEn": "Draco Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/draco-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Dragão. Muda a tipagem e o golpe Judgment de Arceus para Dragão."
  },
  {
    "id": 312,
    "identifier": "dread-plate",
    "namePt": "Placa do Pavor",
    "nameEn": "Dread Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dread-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Sombrio. Muda a tipagem e o golpe Judgment de Arceus para Sombrio."
  },
  {
    "id": 313,
    "identifier": "iron-plate",
    "namePt": "Placa de Ferro",
    "nameEn": "Iron Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iron-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Aço. Muda a tipagem e o golpe Judgment de Arceus para Aço."
  },
  {
    "id": 684,
    "identifier": "pixie-plate",
    "namePt": "Placa Encantada",
    "nameEn": "Pixie Plate",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pixie-plate.png",
    "desc": "Uma tábua ancestral que aumenta em 20% o poder dos golpes do tipo Fada. Muda a tipagem e o golpe Judgment de Arceus para Fada."
  },
  {
    "id": 904,
    "identifier": "fire-memory",
    "namePt": "Memória de Fogo",
    "nameEn": "Fire Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Fogo. Muda a tipagem e o golpe Multi-Attack de Silvally para Fogo."
  },
  {
    "id": 905,
    "identifier": "water-memory",
    "namePt": "Memória de Água",
    "nameEn": "Water Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Água. Muda a tipagem e o golpe Multi-Attack de Silvally para Água."
  },
  {
    "id": 907,
    "identifier": "grass-memory",
    "namePt": "Memória de Planta",
    "nameEn": "Grass Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/grass-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Planta. Muda a tipagem e o golpe Multi-Attack de Silvally para Planta."
  },
  {
    "id": 906,
    "identifier": "electric-memory",
    "namePt": "Memória Elétrica",
    "nameEn": "Electric Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/electric-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Elétrico. Muda a tipagem e o golpe Multi-Attack de Silvally para Elétrico."
  },
  {
    "id": 908,
    "identifier": "ice-memory",
    "namePt": "Memória de Gelo",
    "nameEn": "Ice Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Gelo. Muda a tipagem e o golpe Multi-Attack de Silvally para Gelo."
  },
  {
    "id": 909,
    "identifier": "fighting-memory",
    "namePt": "Memória de Luta",
    "nameEn": "Fighting Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fighting-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Lutador. Muda a tipagem e o golpe Multi-Attack de Silvally para Lutador."
  },
  {
    "id": 910,
    "identifier": "poison-memory",
    "namePt": "Memória de Veneno",
    "nameEn": "Poison Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poison-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Veneno. Muda a tipagem e o golpe Multi-Attack de Silvally para Veneno."
  },
  {
    "id": 911,
    "identifier": "ground-memory",
    "namePt": "Memória Terrestre",
    "nameEn": "Ground Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ground-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Terrestre. Muda a tipagem e o golpe Multi-Attack de Silvally para Terrestre."
  },
  {
    "id": 912,
    "identifier": "flying-memory",
    "namePt": "Memória Voadora",
    "nameEn": "Flying Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/flying-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Voador. Muda a tipagem e o golpe Multi-Attack de Silvally para Voador."
  },
  {
    "id": 913,
    "identifier": "psychic-memory",
    "namePt": "Memória Psíquica",
    "nameEn": "Psychic Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/psychic-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Psíquico. Muda a tipagem e o golpe Multi-Attack de Silvally para Psíquico."
  },
  {
    "id": 914,
    "identifier": "bug-memory",
    "namePt": "Memória de Inseto",
    "nameEn": "Bug Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/bug-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Inseto. Muda a tipagem e o golpe Multi-Attack de Silvally para Inseto."
  },
  {
    "id": 915,
    "identifier": "rock-memory",
    "namePt": "Memória de Pedra",
    "nameEn": "Rock Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rock-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Pedra. Muda a tipagem e o golpe Multi-Attack de Silvally para Pedra."
  },
  {
    "id": 916,
    "identifier": "ghost-memory",
    "namePt": "Memória Fantasma",
    "nameEn": "Ghost Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ghost-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Fantasma. Muda a tipagem e o golpe Multi-Attack de Silvally para Fantasma."
  },
  {
    "id": 917,
    "identifier": "dragon-memory",
    "namePt": "Memória de Dragão",
    "nameEn": "Dragon Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragon-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Dragão. Muda a tipagem e o golpe Multi-Attack de Silvally para Dragão."
  },
  {
    "id": 918,
    "identifier": "dark-memory",
    "namePt": "Memória Sombria",
    "nameEn": "Dark Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dark-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Sombrio. Muda a tipagem e o golpe Multi-Attack de Silvally para Sombrio."
  },
  {
    "id": 919,
    "identifier": "steel-memory",
    "namePt": "Memória de Aço",
    "nameEn": "Steel Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/steel-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Aço. Muda a tipagem e o golpe Multi-Attack de Silvally para Aço."
  },
  {
    "id": 920,
    "identifier": "fairy-memory",
    "namePt": "Memória Fada",
    "nameEn": "Fairy Memory",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fairy-memory.png",
    "desc": "Um disco de memória contendo dados do tipo Fada. Muda a tipagem e o golpe Multi-Attack de Silvally para Fada."
  },
  {
    "id": 116,
    "identifier": "burn-drive",
    "namePt": "Cartucho de Fogo",
    "nameEn": "Burn Drive",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-drive.png",
    "desc": "Um módulo de dados que converte o movimento Techno Blast de Genesect para o tipo Fogo."
  },
  {
    "id": 117,
    "identifier": "douse-drive",
    "namePt": "Cartucho de Água",
    "nameEn": "Douse Drive",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/douse-drive.png",
    "desc": "Um módulo de dados que converte o movimento Techno Blast de Genesect para o tipo Água."
  },
  {
    "id": 118,
    "identifier": "shock-drive",
    "namePt": "Cartucho Elétrico",
    "nameEn": "Shock Drive",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shock-drive.png",
    "desc": "Um módulo de dados que converte o movimento Techno Blast de Genesect para o tipo Elétrico."
  },
  {
    "id": 119,
    "identifier": "chill-drive",
    "namePt": "Cartucho de Gelo",
    "nameEn": "Chill Drive",
    "category": "Itens Segurados",
    "cost": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/chill-drive.png",
    "desc": "Um módulo de dados que converte o movimento Techno Blast de Genesect para o tipo Gelo."
  },
  {
    "id": 233,
    "identifier": "metal-coat",
    "namePt": "Revestimento Metálico",
    "nameEn": "Metal Coat",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-coat.png",
    "desc": "Aumenta em 20% os golpes do tipo Aço. Quando segurado durante uma troca, permite que Onix evolua para Steelix e Scyther para Scizor."
  },
  {
    "id": 221,
    "identifier": "kings-rock",
    "namePt": "Pedra do Rei",
    "nameEn": "King's Rock",
    "category": "Pedras & Evolução",
    "cost": 5000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kings-rock.png",
    "desc": "Pode causar recuo (flinch) no oponente ao atacar. Quando segurado em troca, evolui Poliwhirl para Politoed e Slowpoke para Slowking."
  },
  {
    "id": 235,
    "identifier": "dragon-scale",
    "namePt": "Escama de Dragão",
    "nameEn": "Dragon Scale",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragon-scale.png",
    "desc": "Uma escama grossa e resistente. Quando segurada por Seadra durante uma troca, desencadeia sua evolução para Kingdra."
  },
  {
    "id": 252,
    "identifier": "up-grade",
    "namePt": "Upgrade",
    "nameEn": "Up-Grade",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/up-grade.png",
    "desc": "Um dispositivo óptico contendo dados de programação. Segurado por Porygon em uma troca para evoluir para Porygon2."
  },
  {
    "id": 324,
    "identifier": "dubious-disc",
    "namePt": "Disco Duvidoso",
    "nameEn": "Dubious Disc",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dubious-disc.png",
    "desc": "Um disco transparente contendo código misterioso. Segurado por Porygon2 em uma troca para evoluir para Porygon-Z."
  },
  {
    "id": 321,
    "identifier": "protector",
    "namePt": "Protetor",
    "nameEn": "Protector",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protector.png",
    "desc": "Uma blindagem protetora extremamente rígida e pesada. Segurada por Rhydon em troca para evoluir para Rhyperior."
  },
  {
    "id": 322,
    "identifier": "electirizer",
    "namePt": "Eletrizador",
    "nameEn": "Electirizer",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/electirizer.png",
    "desc": "Uma caixa que armazena quantidades colossais de eletricidade. Segurada por Electabuzz em troca para evoluir para Electivire."
  },
  {
    "id": 323,
    "identifier": "magmarizer",
    "namePt": "Magmatizador",
    "nameEn": "Magmarizer",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/magmarizer.png",
    "desc": "Uma caixa que contém magma vulcânico de alta temperatura. Segurada por Magmar em troca para evoluir para Magmortar."
  },
  {
    "id": 325,
    "identifier": "reaper-cloth",
    "namePt": "Tecido Ceifador",
    "nameEn": "Reaper Cloth",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/reaper-cloth.png",
    "desc": "Um tecido imbuído de energia espiritual maligna. Segurado por Dusclops em troca para evoluir para Dusknoir."
  },
  {
    "id": 537,
    "identifier": "prism-scale",
    "namePt": "Escama Prisma",
    "nameEn": "Prism Scale",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/prism-scale.png",
    "desc": "Uma escama brilhante que refrata a luz em arco-íris. Segurada por Feebas em troca para evoluir para Milotic."
  },
  {
    "id": 687,
    "identifier": "whipped-dream",
    "namePt": "Doce de Chantilly",
    "nameEn": "Whipped Dream",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/whipped-dream.png",
    "desc": "Um doce fofo e açucarado. Segurado por Swirlix em troca para evoluir para Slurpuff."
  },
  {
    "id": 688,
    "identifier": "sachet",
    "namePt": "Sachê Aromático",
    "nameEn": "Sachet",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sachet.png",
    "desc": "Um sachê perfumado com aroma exótico. Segurado por Spritzee em troca para evoluir para Aromatisse."
  },
  {
    "id": 226,
    "identifier": "deep-sea-tooth",
    "namePt": "Dente das Profundezas",
    "nameEn": "Deep Sea Tooth",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/deep-sea-tooth.png",
    "desc": "Dobra o Ataque Especial de Clamperl. Segurado em troca para evoluir para Huntail."
  },
  {
    "id": 227,
    "identifier": "deep-sea-scale",
    "namePt": "Escama das Profundezas",
    "nameEn": "Deep Sea Scale",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/deep-sea-scale.png",
    "desc": "Dobra a Defesa Especial de Clamperl. Segurado em troca para evoluir para Gorebyss."
  },
  {
    "id": 326,
    "identifier": "razor-claw",
    "namePt": "Garra Navalha",
    "nameEn": "Razor Claw",
    "category": "Pedras & Evolução",
    "cost": 5000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razor-claw.png",
    "desc": "Aumenta a chance de acertos críticos. Segurada por Sneasel à noite ao subir de nível para evoluir para Weavile."
  },
  {
    "id": 327,
    "identifier": "razor-fang",
    "namePt": "Presa Navalha",
    "nameEn": "Razor Fang",
    "category": "Pedras & Evolução",
    "cost": 5000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razor-fang.png",
    "desc": "Pode fazer o oponente recuar ao sofrer dano. Segurada por Gligar à noite ao subir de nível para evoluir para Gliscor."
  },
  {
    "id": 110,
    "identifier": "oval-stone",
    "namePt": "Pedra Oval",
    "nameEn": "Oval Stone",
    "category": "Pedras & Evolução",
    "cost": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oval-stone.png",
    "desc": "Uma pedra perfeitamente redonda e lisa. Segurada por Happiny durante o dia ao subir de nível para evoluir para Chansey."
  },
  {
    "id": 1110,
    "identifier": "sweet-apple",
    "namePt": "Maçã Doce",
    "nameEn": "Sweet Apple",
    "category": "Pedras & Evolução",
    "cost": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sweet-apple.png",
    "desc": "Uma maçã intensamente doce. Quando usada em Applin, desencadeia sua evolução para Appletun."
  },
  {
    "id": 1111,
    "identifier": "tart-apple",
    "namePt": "Maçã Ácida",
    "nameEn": "Tart Apple",
    "category": "Pedras & Evolução",
    "cost": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tart-apple.png",
    "desc": "Uma maçã extremamente ácida. Quando usada em Applin, desencadeia sua evolução para Flapple."
  },
  {
    "id": 2109,
    "identifier": "syrupy-apple",
    "namePt": "Maçã Confeitada",
    "nameEn": "Syrupy Apple",
    "category": "Pedras & Evolução",
    "cost": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/syrupy-apple.png",
    "desc": "Uma maçã coberta por calda brilhante de Kitakami. Usada em Applin para evoluir para Dipplin."
  },
  {
    "id": 1114,
    "identifier": "cracked-pot",
    "namePt": "Bule Rachado",
    "nameEn": "Cracked Pot",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cracked-pot.png",
    "desc": "Um bule antigo rachado que permite a Sinistea Forma Falsificada evoluir para Polteageist."
  },
  {
    "id": 1115,
    "identifier": "chipped-pot",
    "namePt": "Bule Lascado",
    "nameEn": "Chipped Pot",
    "category": "Pedras & Evolução",
    "cost": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/chipped-pot.png",
    "desc": "Um bule antigo lascado que permite a Sinistea Forma Autêntica evoluir para Polteageist."
  },
  {
    "id": 1703,
    "identifier": "auspicious-armor",
    "namePt": "Armadura Nobre",
    "nameEn": "Auspicious Armor",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/auspicious-armor.png",
    "desc": "Uma armadura imbuída de sentimentos auspiciosos. Usada em Charcadet para evoluir para Armarouge."
  },
  {
    "id": 1704,
    "identifier": "malicious-armor",
    "namePt": "Armadura Maléfica",
    "nameEn": "Malicious Armor",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/malicious-armor.png",
    "desc": "Uma armadura forjada a partir de rancor persistente. Usada em Charcadet para evoluir para Ceruledge."
  },
  {
    "id": 1705,
    "identifier": "leaders-crest",
    "namePt": "Brasão do Líder",
    "nameEn": "Leader's Crest",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaders-crest.png",
    "desc": "Um brasão metálico orgulhoso segurado pelo líder Bisharp. Permite evoluir para Kingambit ao derrotar três rivais."
  },
  {
    "id": 1706,
    "identifier": "black-augurite",
    "namePt": "Augurita Negra",
    "nameEn": "Black Augurite",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/black-augurite.png",
    "desc": "Uma pedra vulcânica negra vítrea de Hisui. Usada em Scyther para evoluir para Kleavor."
  },
  {
    "id": 1707,
    "identifier": "peat-block",
    "namePt": "Bloco de Turfa",
    "nameEn": "Peat Block",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/peat-block.png",
    "desc": "Um bloco de lama mineral pantanosa de Hisui. Usado em Ursaring durante a lua cheia para evoluir para Ursaluna."
  },
  {
    "id": 2110,
    "identifier": "metal-alloy",
    "namePt": "Liga Metálica",
    "nameEn": "Metal Alloy",
    "category": "Pedras & Evolução",
    "cost": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-alloy.png",
    "desc": "Um compósito de metal leve e ultrarresistente. Usado em Duraludon para evoluir para Archaludon."
  }
];

if (typeof module !== 'undefined') {
    module.exports = { ITEMS_DATABASE };
}
