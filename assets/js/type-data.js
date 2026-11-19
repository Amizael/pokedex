// Dados Oficiais de Tipos, Cores e Matriz de Efetividade (Pokémon)
const TYPE_INFO = {
    normal: { namePt: 'Normal', color: '#a4acaf', textColor: '#212121' },
    fire: { namePt: 'Fogo', color: '#fd7d24', textColor: '#ffffff' },
    water: { namePt: 'Água', color: '#4592c4', textColor: '#ffffff' },
    grass: { namePt: 'Planta', color: '#9bcc50', textColor: '#212121' },
    electric: { namePt: 'Elétrico', color: '#eed535', textColor: '#212121' },
    ice: { namePt: 'Gelo', color: '#51c4e7', textColor: '#212121' },
    fighting: { namePt: 'Lutador', color: '#d56723', textColor: '#ffffff' },
    poison: { namePt: 'Veneno', color: '#b97fc9', textColor: '#ffffff' },
    ground: { namePt: 'Terrestre', color: '#ab9842', textColor: '#ffffff' },
    flying: { namePt: 'Voador', color: '#3dc7ef', textColor: '#212121' },
    psychic: { namePt: 'Psíquico', color: '#f366b9', textColor: '#ffffff' },
    bug: { namePt: 'Inseto', color: '#729f3f', textColor: '#ffffff' },
    rock: { namePt: 'Pedra', color: '#a38c21', textColor: '#ffffff' },
    ghost: { namePt: 'Fantasma', color: '#7b62a3', textColor: '#ffffff' },
    dragon: { namePt: 'Dragão', color: '#f16e57', textColor: '#ffffff' },
    steel: { namePt: 'Aço', color: '#9eb7b8', textColor: '#212121' },
    fairy: { namePt: 'Fada', color: '#fdb9e9', textColor: '#212121' },
    dark: { namePt: 'Sombrio', color: '#707070', textColor: '#ffffff' }
};

// Matriz oficial de dano (Atacante -> Defensor)
const TYPE_CHART = {
    normal: { rock: 0.5, ghost: 0, steel: 0.5 },
    fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
    water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
    electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
    grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
    ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
    fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
    poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
    ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
    flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
    psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
    bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
    rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
    ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
    dragon: { dragon: 2, steel: 0.5, fairy: 0 },
    dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
    steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
    fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
};

const ALL_TYPES = Object.keys(TYPE_INFO);

/**
 * Calcula fraquezas, resistências e imunidades com base nos tipos defensivos
 * e os tipos que este Pokémon causa dano super-efetivo (Countera).
 */
function calculateTypeRelations(defendingTypes) {
    const weaknesses = [];
    const resistances = [];
    const immunities = [];

    ALL_TYPES.forEach(atkType => {
        let multiplier = 1;
        defendingTypes.forEach(defType => {
            if (TYPE_CHART[atkType] && TYPE_CHART[atkType][defType] !== undefined) {
                multiplier *= TYPE_CHART[atkType][defType];
            }
        });

        if (multiplier === 0) {
            immunities.push({ type: atkType, multiplier: 0 });
        } else if (multiplier > 1) {
            weaknesses.push({ type: atkType, multiplier });
        } else if (multiplier < 1) {
            resistances.push({ type: atkType, multiplier });
        }
    });

    // Tipos que os ataques deste Pokémon causam dano super efetivo (Forte contra / Countera)
    const counters = new Set();
    defendingTypes.forEach(t => {
        if (TYPE_CHART[t]) {
            Object.entries(TYPE_CHART[t]).forEach(([targetType, mult]) => {
                if (mult > 1) counters.add(targetType);
            });
        }
    });

    return {
        weaknesses,
        resistances,
        immunities,
        counters: Array.from(counters)
    };
}

/**
 * Calcula a lista de Pokémon reais contra os quais o Pokémon atual tem vantagem (bom contra)
 * ou desvantagem (fraco contra), considerando o dano STAB de ambos os lados.
 */
function calculatePokemonMatchups(currentPokemon, allPokemonsList) {
    if (!currentPokemon || !allPokemonsList || allPokemonsList.length === 0) {
        return { strongAgainst: [], weakAgainst: [] };
    }

    const strongAgainst = [];
    const weakAgainst = [];

    allPokemonsList.forEach(other => {
        if (other.id === currentPokemon.id) return;

        // Dano máximo que o Pokémon atual causa no oponente
        let damageDealt = 0;
        currentPokemon.types.forEach(atkType => {
            let mult = 1;
            other.types.forEach(defType => {
                if (TYPE_CHART[atkType] && TYPE_CHART[atkType][defType] !== undefined) {
                    mult *= TYPE_CHART[atkType][defType];
                }
            });
            if (mult > damageDealt) damageDealt = mult;
        });

        // Dano máximo que o oponente causa no Pokémon atual
        let damageTaken = 0;
        other.types.forEach(atkType => {
            let mult = 1;
            currentPokemon.types.forEach(defType => {
                if (TYPE_CHART[atkType] && TYPE_CHART[atkType][defType] !== undefined) {
                    mult *= TYPE_CHART[atkType][defType];
                }
            });
            if (mult > damageTaken) damageTaken = mult;
        });

        // Bom contra: Seus ataques causam dano super-efetivo (2x ou 4x)
        if (damageDealt >= 2) {
            strongAgainst.push({
                pokemon: other,
                damageDealt,
                damageTaken,
                isClearAdvantage: damageDealt > damageTaken
            });
        }

        // Fraco contra: Os ataques do oponente causam dano super-efetivo (2x ou 4x)
        if (damageTaken >= 2) {
            weakAgainst.push({
                pokemon: other,
                damageDealt,
                damageTaken,
                isCriticalThreat: damageTaken > damageDealt
            });
        }
    });

    // Ordenação por relevância do confronto
    strongAgainst.sort((a, b) => {
        if (b.damageDealt !== a.damageDealt) return b.damageDealt - a.damageDealt;
        if (a.damageTaken !== b.damageTaken) return a.damageTaken - b.damageTaken;
        return a.pokemon.id - b.pokemon.id;
    });

    weakAgainst.sort((a, b) => {
        if (b.damageTaken !== a.damageTaken) return b.damageTaken - a.damageTaken;
        if (a.damageDealt !== b.damageDealt) return a.damageDealt - b.damageDealt;
        return a.pokemon.id - b.pokemon.id;
    });

    return { strongAgainst, weakAgainst };
}

// Tradução de condições de evolução para Português (Gerações I a IX)
const EVOLUTION_TRANSLATIONS = {
    "thunder-stone": "Pedra do Trovão",
    "water-stone": "Pedra da Água",
    "fire-stone": "Pedra de Fogo",
    "leaf-stone": "Pedra da Folha",
    "moon-stone": "Pedra da Lua",
    "sun-stone": "Pedra Solar",
    "shiny-stone": "Pedra do Brilho",
    "dusk-stone": "Pedra do Crepúsculo",
    "dawn-stone": "Pedra da Alvorada",
    "ice-stone": "Pedra de Gelo",
    "oval-stone": "Pedra Oval",
    "metal-coat": "Revestimento Metálico",
    "kings-rock": "Rocha do Rei",
    "dragon-scale": "Escama de Dragão",
    "upgrade": "Upgrade",
    "up-grade": "Upgrade",
    "dubious-disc": "Disco Duvidoso",
    "protector": "Protetor",
    "electirizer": "Eletrizador",
    "magmarizer": "Magmarizador",
    "reaper-cloth": "Pano da Morte",
    "prism-scale": "Escama Prismática",
    "deep-sea-tooth": "Dente das Profundezas",
    "deepseatooth": "Dente das Profundezas",
    "deep-sea-scale": "Escama das Profundezas",
    "deepseascale": "Escama das Profundezas",
    "whipped-dream": "Sonho Recheado",
    "sachet": "Sachê Aromático",
    "razor-claw": "Garra Afiada",
    "razor-fang": "Presa Afiada",
    "sweet-apple": "Maçã Doce",
    "tart-apple": "Maçã Ácida",
    "syrupy-apple": "Maçã Caramelizada",
    "cracked-pot": "Bule Rachado",
    "chipped-pot": "Bule Lascado",
    "unremarkable-teacup": "Xícara Ordinária",
    "masterpiece-teacup": "Xícara Obra-prima",
    "auspicious-armor": "Armadura Nobre",
    "malicious-armor": "Armadura Maléfica",
    "black-augurite": "Augurita Negra",
    "peat-block": "Bloco de Turfa",
    "metal-alloy": "Liga Metálica",
    "galarica-cuff": "Bracelete Galarica",
    "galarica-wreath": "Coroa Galarica",
    "scroll-of-darkness": "Pergaminho da Escuridão",
    "scroll-of-waters": "Pergaminho das Águas",
    "leaders-crest": "Brasão do Líder",
    "strawberry-sweet": "Doce de Morango",
    "berry-sweet": "Doce de Fruta",
    "love-sweet": "Doce de Coração",
    "star-sweet": "Doce de Estrela",
    "clover-sweet": "Doce de Trevo",
    "flower-sweet": "Doce de Flor",
    "ribbon-sweet": "Doce de Laço",
    "dragon-cheer": "Grito do Dragão",
    "ancient-power": "Poder Ancestral",
    "rollout": "Rolamento",
    "dragon-pulse": "Pulso do Dragão",
    "mimic": "Mímica",
    "double-hit": "Golpe Duplo",
    "taunt": "Provocação",
    "hyper-drill": "Hiperfuradeira",
    "twin-beam": "Feixe Duplo",
    "rage-fist": "Punho de Fúria",
    "psyshield-bash": "Golpe de Psicoescudo",
    "barb-barrage": "Rajada de Farpas",
    "bitter-malice": "Malícia Amarga",
    "eterna-forest": "Floresta de Eterna",
    "moss-rock": "Pedra de Musgo",
    "ice-rock": "Pedra de Gelo",
    "magnetic-field": "Campo Magnético",
    "mount-coronet": "Monte Coronet",
    "chargestone-cave": "Caverna da Pedra Elétrica",
    "sinnoh-magnetic-field": "Campo Magnético de Sinnoh",
    "trade": "Troca",
    "level-up": "Subir de Nível",
    "use-item": "Usar Item",
    "use-move": "Usar Golpe",
    "shed": "Espaço na Equipe",
    "spin": "Girar no Lugar com Doce",
    "tower-of-darkness": "Torre da Escuridão",
    "tower-of-waters": "Torre das Águas",
    "three-critical-hits": "3 Golpes Críticos",
    "take-damage": "Receber Dano",
    "recoil-damage": "Dano por Recuo",
    "agile-style-move": "Estilo Ágil",
    "strong-style-move": "Estilo Forte"
};

// Tradução de Habilidades Oficiais (314 habilidades das Gerações I a IX)
const ABILITY_TRANSLATIONS = {
    "stench": "Mau Cheiro",
    "drizzle": "Chuvisco",
    "speed-boost": "Impulso de Velocidade",
    "battle-armor": "Armadura de Batalha",
    "sturdy": "Firmeza",
    "damp": "Umidade",
    "limber": "Flexibilidade",
    "sand-veil": "Véu de Areia",
    "static": "Estática",
    "volt-absorb": "Absorção de Voltagem",
    "water-absorb": "Absorção de Água",
    "oblivious": "Desatento",
    "cloud-nine": "Céu Limpo",
    "compound-eyes": "Olhos Compostos",
    "insomnia": "Insônia",
    "color-change": "Mudança de Cor",
    "immunity": "Imunidade",
    "flash-fire": "Fogo Absorvente",
    "shield-dust": "Pó Protetor",
    "own-tempo": "Ritmo Próprio",
    "suction-cups": "Ventosas",
    "intimidate": "Intimidação",
    "shadow-tag": "Marca Sombria",
    "rough-skin": "Pele Áspera",
    "wonder-guard": "Guarda Maravilha",
    "levitate": "Levitação",
    "effect-spore": "Esporo de Efeito",
    "synchronize": "Sincronizar",
    "clear-body": "Corpo Claro",
    "natural-cure": "Cura Natural",
    "lightning-rod": "Pára-raios",
    "serene-grace": "Graça Serena",
    "swift-swim": "Nado Rápido",
    "chlorophyll": "Clorofila",
    "illuminate": "Iluminar",
    "trace": "Rastrear",
    "huge-power": "Poder Imenso",
    "poison-point": "Ponto Venenoso",
    "inner-focus": "Foco Interno",
    "magma-armor": "Armadura de Magma",
    "water-veil": "Véu de Água",
    "magnet-pull": "Atração Magnética",
    "soundproof": "À Prova de Som",
    "rain-dish": "Prato de Chuva",
    "sand-stream": "Fluxo de Areia",
    "pressure": "Pressão",
    "thick-fat": "Gordura Espessa",
    "early-bird": "Madrugador",
    "flame-body": "Corpo em Chamas",
    "run-away": "Fugir",
    "keen-eye": "Olho Vivo",
    "hyper-cutter": "Hiper Cortador",
    "pickup": "Coleta",
    "truant": "Preguiçoso",
    "hustle": "Agitação",
    "cute-charm": "Charme Gracioso",
    "plus": "Mais",
    "minus": "Menos",
    "forecast": "Previsão do Tempo",
    "sticky-hold": "Aderência",
    "shed-skin": "Muda de Pele",
    "guts": "Bravura",
    "marvel-scale": "Escama Maravilha",
    "liquid-ooze": "Lodo Líquido",
    "overgrow": "Supercrescimento",
    "blaze": "Chama",
    "torrent": "Torrente",
    "swarm": "Enxame",
    "rock-head": "Cabeça de Pedra",
    "drought": "Seca",
    "arena-trap": "Armadilha de Arena",
    "vital-spirit": "Espírito Vital",
    "white-smoke": "Fumaça Branca",
    "pure-power": "Poder Puro",
    "shell-armor": "Armadura de Casca",
    "air-lock": "Eclusa de Ar",
    "tangled-feet": "Pés Trôpegos",
    "motor-drive": "Motor Elétrico",
    "rivalry": "Rivalidade",
    "steadfast": "Inabalável",
    "snow-cloak": "Manto de Neve",
    "gluttony": "Gula",
    "anger-point": "Ponto de Fúria",
    "unburden": "Alívio",
    "heatproof": "À Prova de Calor",
    "simple": "Simples",
    "dry-skin": "Pele Seca",
    "download": "Download",
    "iron-fist": "Punho de Ferro",
    "poison-heal": "Cura Venenosa",
    "adaptability": "Adaptabilidade",
    "skill-link": "Vínculo de Habilidades",
    "hydration": "Hidratação",
    "solar-power": "Poder Solar",
    "quick-feet": "Pés Velozes",
    "normalize": "Normalizar",
    "sniper": "Atirador de Elite",
    "magic-guard": "Guarda Mágica",
    "no-guard": "Sem Guarda",
    "stall": "Atraso",
    "technician": "Técnico",
    "leaf-guard": "Guarda de Folha",
    "klutz": "Desajeitado",
    "mold-breaker": "Quebra-Molde",
    "super-luck": "Super Sorte",
    "aftermath": "Consequência",
    "anticipation": "Antecipação",
    "forewarn": "Pré-aviso",
    "unaware": "Alheio",
    "tinted-lens": "Lente Colorida",
    "filter": "Filtro",
    "slow-start": "Início Lento",
    "scrappy": "Valente",
    "storm-drain": "Dreno de Tempestade",
    "ice-body": "Corpo de Gelo",
    "solid-rock": "Rocha Sólida",
    "snow-warning": "Aviso de Neve",
    "honey-gather": "Colheita de Mel",
    "frisk": "Revistar",
    "reckless": "Imprudente",
    "multitype": "Multitipo",
    "flower-gift": "Presente Floral",
    "bad-dreams": "Pesadelos",
    "pickpocket": "Batedor de Carteira",
    "sheer-force": "Força Bruta",
    "contrary": "Contrário",
    "unnerve": "Desconcertar",
    "defiant": "Desafiador",
    "defeatist": "Derrotista",
    "cursed-body": "Corpo Amaldiçoado",
    "healer": "Curador",
    "friend-guard": "Guarda Amiga",
    "weak-armor": "Armadura Frágil",
    "heavy-metal": "Metal Pesado",
    "light-metal": "Metal Leve",
    "multiscale": "Multiescamas",
    "toxic-boost": "Impulso Tóxico",
    "flare-boost": "Impulso de Fogo",
    "harvest": "Colheita",
    "telepathy": "Telepatia",
    "moody": "Inconstante",
    "overcoat": "Casaco Protetor",
    "poison-touch": "Toque Venenoso",
    "regenerator": "Regenerador",
    "big-pecks": "Peito Forte",
    "sand-rush": "Ímpeto de Areia",
    "wonder-skin": "Pele Maravilha",
    "analytic": "Analítico",
    "illusion": "Ilusão",
    "imposter": "Impostor",
    "infiltrator": "Infiltrador",
    "mummy": "Múmia",
    "moxie": "Auto-confiança",
    "justified": "Justificado",
    "rattled": "Sobressaltado",
    "magic-bounce": "Reflexo Mágico",
    "sap-sipper": "Sugador de Seiva",
    "prankster": "Travesso",
    "sand-force": "Força de Areia",
    "iron-barbs": "Farpas de Ferro",
    "zen-mode": "Modo Zen",
    "victory-star": "Estrela da Vitória",
    "turboblaze": "Turbo-chama",
    "teravolt": "Teravoltagem",
    "aroma-veil": "Véu de Aroma",
    "flower-veil": "Véu de Flores",
    "cheek-pouch": "Bolsa na Bochecha",
    "protean": "Proteano",
    "fur-coat": "Casaco de Peles",
    "magician": "Mágico",
    "bulletproof": "À Prova de Balas",
    "competitive": "Competitivo",
    "strong-jaw": "Mandíbula Forte",
    "refrigerate": "Refrigerar",
    "sweet-veil": "Véu Doce",
    "stance-change": "Mudança de Postura",
    "gale-wings": "Asas da Ventania",
    "mega-launcher": "Mega Lançador",
    "grass-pelt": "Pele de Grama",
    "symbiosis": "Simbiose",
    "tough-claws": "Garras Poderosas",
    "pixilate": "Pixilato",
    "gooey": "Viscoso",
    "aerilate": "Aerilato",
    "parental-bond": "Laço Maternal",
    "dark-aura": "Aura Sombria",
    "fairy-aura": "Aura de Fada",
    "aura-break": "Quebra de Aura",
    "primordial-sea": "Mar Primordial",
    "desolate-land": "Terra Desolada",
    "delta-stream": "Corrente Delta",
    "stamina": "Vigor",
    "wimp-out": "Covarde",
    "emergency-exit": "Saída de Emergência",
    "water-compaction": "Compactação de Água",
    "merciless": "Implacável",
    "shields-down": "Escudos Abaixados",
    "stakeout": "Emboscada",
    "water-bubble": "Bolha de Água",
    "steelworker": "Metalúrgico",
    "berserk": "Fúria Desenfreada",
    "slush-rush": "Ímpeto de Neve",
    "long-reach": "Alcance Longo",
    "liquid-voice": "Voz Líquida",
    "triage": "Triagem",
    "galvanize": "Galvanizar",
    "surge-surfer": "Surfista de Pulso",
    "schooling": "Cardume",
    "disguise": "Disfarce",
    "battle-bond": "Vínculo de Batalha",
    "power-construct": "Construção de Poder",
    "corrosion": "Corrosão",
    "comatose": "Comatoso",
    "queenly-majesty": "Majestade Rainha",
    "innards-out": "Vísceras Expostas",
    "dancer": "Dançarino",
    "battery": "Bateria",
    "fluffy": "Fofo",
    "dazzling": "Deslumbrante",
    "soul-heart": "Coração de Alma",
    "tangling-hair": "Cabelo Emaranhado",
    "receiver": "Receptor",
    "power-of-alchemy": "Poder da Alquimia",
    "beast-boost": "Impulso da Fera",
    "rks-system": "Sistema RKS",
    "electric-surge": "Pulso Elétrico",
    "psychic-surge": "Pulso Psíquico",
    "misty-surge": "Pulso de Névoa",
    "grassy-surge": "Pulso de Grama",
    "full-metal-body": "Corpo de Metal Completo",
    "shadow-shield": "Escudo Sombrio",
    "prism-armor": "Armadura de Prisma",
    "neuroforce": "Neuroforça",
    "intrepid-sword": "Espada Intrépida",
    "dauntless-shield": "Escudo Destemido",
    "libero": "Líbero",
    "ball-fetch": "Buscar Bola",
    "cotton-down": "Pluma de Algodão",
    "propeller-tail": "Cauda Hélice",
    "mirror-armor": "Armadura Espelhada",
    "gulp-missile": "Míssil Engolidor",
    "stalwart": "Inflexível",
    "steam-engine": "Motor a Vapor",
    "punk-rock": "Punk Rock",
    "sand-spit": "Cuspe de Areia",
    "ice-scales": "Escamas de Gelo",
    "ripen": "Amadurecer",
    "ice-face": "Cara de Gelo",
    "power-spot": "Ponto de Poder",
    "mimicry": "Mimetismo",
    "screen-cleaner": "Limpador de Telas",
    "steely-spirit": "Espírito de Aço",
    "perish-body": "Corpo Perecível",
    "wandering-spirit": "Espírito Errante",
    "gorilla-tactics": "Táticas de Gorila",
    "neutralizing-gas": "Gás Neutralizador",
    "pastel-veil": "Véu Pastel",
    "hunger-switch": "Troca por Fome",
    "quick-draw": "Saque Rápido",
    "unseen-fist": "Punho Invisível",
    "curious-medicine": "Remédio Curioso",
    "transistor": "Transistor",
    "dragons-maw": "Mandíbula de Dragão",
    "chilling-neigh": "Relincho Gélido",
    "grim-neigh": "Relincho Sombrio",
    "as-one-glastrier": "Como Um Só (Glastrier)",
    "as-one-spectrier": "Como Um Só (Spectrier)",
    "lingering-aroma": "Aroma Persistente",
    "seed-sower": "Semeador",
    "thermal-exchange": "Troca Térmica",
    "anger-shell": "Carapaça Furiosa",
    "purifying-salt": "Sal Purificador",
    "well-baked-body": "Corpo Bem Assado",
    "wind-rider": "Cavaleiro do Vento",
    "guard-dog": "Cão de Guarda",
    "rocky-payload": "Carga Rochosa",
    "wind-power": "Energia Eólica",
    "zero-to-hero": "De Zero a Herói",
    "commander": "Comandante",
    "electromorphosis": "Eletromorfose",
    "protosynthesis": "Protossíntese",
    "quark-drive": "Propulsão de Quarks",
    "good-as-gold": "Bom Como Ouro",
    "vessel-of-ruin": "Vaso da Ruína",
    "sword-of-ruin": "Espada da Ruína",
    "tablets-of-ruin": "Tábuas da Ruína",
    "beads-of-ruin": "Contas da Ruína",
    "orichalcum-pulse": "Pulso de Oricon",
    "hadron-engine": "Motor de Hádrons",
    "opportunist": "Oportunista",
    "cud-chew": "Ruminação",
    "sharpness": "Afiamento",
    "supreme-overlord": "Soberano Supremo",
    "costar": "Coestrela",
    "toxic-debris": "Detritos Tóxicos",
    "armor-tail": "Cauda Armadurada",
    "earth-eater": "Devorador de Terra",
    "mycelium-might": "Poder do Micélio",
    "minds-eye": "Olho da Mente",
    "supersweet-syrup": "Xarope Superdoce",
    "hospitality": "Hospitalidade",
    "toxic-chain": "Corrente Tóxica",
    "embody-aspect": "Incorporar Aspecto",
    "tera-shift": "Troca Tera",
    "tera-shell": "Carapaça Tera",
    "teraform-zero": "Teraforma Zero",
    "poison-puppeteer": "Titereiro Venenoso",
    "piercing-drill": "Broca Perfurante",
    "dragonize": "Dragonizar",
    "mega-sol": "Mega Sol",
    "spicy-spray": "Spray Picante",
    "eelevate": "Eelevação",
    "fire-mane": "Juba de Fogo",
    "aura-guard": "Guarda da Aura"
};

// Tradução Canônica de Categorias / Gênero (Gerações I a IX)
const GENUS_TRANSLATIONS = {
    "Seed Pokémon": "Pokémon Semente",
    "Lizard Pokémon": "Pokémon Lagarto",
    "Flame Pokémon": "Pokémon Chama",
    "Tiny Turtle Pokémon": "Pokémon Tartaruguinha",
    "Turtle Pokémon": "Pokémon Tartaruga",
    "Shellfish Pokémon": "Pokémon Crustáceo",
    "Worm Pokémon": "Pokémon Verme",
    "Cocoon Pokémon": "Pokémon Casulo",
    "Butterfly Pokémon": "Pokémon Borboleta",
    "Hairy Bug Pokémon": "Pokémon Inseto Peludo",
    "Poison Bee Pokémon": "Pokémon Abelha Venenosa",
    "Tiny Bird Pokémon": "Pokémon Passarinho",
    "Bird Pokémon": "Pokémon Pássaro",
    "Mouse Pokémon": "Pokémon Rato",
    "Beak Pokémon": "Pokémon Bico",
    "Snake Pokémon": "Pokémon Cobra",
    "Cobra Pokémon": "Pokémon Naja",
    "Poison Pin Pokémon": "Pokémon Espinho Venenoso",
    "Drill Pokémon": "Pokémon Broca",
    "Fairy Pokémon": "Pokémon Fada",
    "Fox Pokémon": "Pokémon Raposa",
    "Bat Pokémon": "Pokémon Morcego",
    "Weed Pokémon": "Pokémon Erva",
    "Flower Pokémon": "Pokémon Flor",
    "Mushroom Pokémon": "Pokémon Cogumelo",
    "Insect Pokémon": "Pokémon Inseto",
    "Poison Moth Pokémon": "Pokémon Mariposa Venenosa",
    "Mole Pokémon": "Pokémon Toupeira",
    "Scratch Cat Pokémon": "Pokémon Gato Arranhador",
    "Classy Cat Pokémon": "Pokémon Gato Elegante",
    "Duck Pokémon": "Pokémon Pato",
    "Pig Monkey Pokémon": "Pokémon Macaco Suíno",
    "Puppy Pokémon": "Pokémon Filhote de Cão",
    "Legendary Pokémon": "Pokémon Lendário",
    "Tadpole Pokémon": "Pokémon Girino",
    "Psi Pokémon": "Pokémon Psi",
    "Superpower Pokémon": "Pokémon Superpoder",
    "Flycatcher Pokémon": "Pokémon Papa-moscas",
    "Jellyfish Pokémon": "Pokémon Água-viva",
    "Rock Pokémon": "Pokémon Rocha",
    "Megaton Pokémon": "Pokémon Megaton",
    "Fire Horse Pokémon": "Pokémon Cavalo de Fogo",
    "Dopey Pokémon": "Pokémon Lento",
    "Hermit Crab Pokémon": "Pokémon Caranguejo Eremita",
    "Magnet Pokémon": "Pokémon Ímã",
    "Wild Duck Pokémon": "Pokémon Pato Selvagem",
    "Twin Bird Pokémon": "Pokémon Pássaro Duplo",
    "Triple Bird Pokémon": "Pokémon Pássaro Triplo",
    "Sea Lion Pokémon": "Pokémon Leão-marinho",
    "Sludge Pokémon": "Pokémon Lama",
    "Bivalve Pokémon": "Pokémon Bivalve",
    "Gas Pokémon": "Pokémon Gás",
    "Shadow Pokémon": "Pokémon Sombra",
    "Rock Snake Pokémon": "Pokémon Cobra de Pedra",
    "Hypnosis Pokémon": "Pokémon Hipnose",
    "River Crab Pokémon": "Pokémon Caranguejo do Rio",
    "Pincer Pokémon": "Pokémon Pinça",
    "Ball Pokémon": "Pokémon Bola",
    "Egg Pokémon": "Pokémon Ovo",
    "Coconut Pokémon": "Pokémon Coco",
    "Lonely Pokémon": "Pokémon Solitário",
    "Bone Keeper Pokémon": "Pokémon Guardião de Ossos",
    "Kicking Pokémon": "Pokémon Chutador",
    "Punching Pokémon": "Pokémon Socador",
    "Licking Pokémon": "Pokémon Lambedor",
    "Poison Gas Pokémon": "Pokémon Gás Venenoso",
    "Spikes Pokémon": "Pokémon Espinhos",
    "Vine Pokémon": "Pokémon Cipó",
    "Parent Pokémon": "Pokémon Pai/Mãe",
    "Dragon Pokémon": "Pokémon Dragão",
    "Goldfish Pokémon": "Pokémon Peixinho Dourado",
    "Starshape Pokémon": "Pokémon Estrela",
    "Mysterious Pokémon": "Pokémon Misterioso",
    "Barrier Pokémon": "Pokémon Barreira",
    "Mantis Pokémon": "Pokémon Louva-a-deus",
    "Humanshape Pokémon": "Pokémon Forma Humana",
    "Electric Pokémon": "Pokémon Elétrico",
    "Spitfire Pokémon": "Pokémon Cuspidor de Fogo",
    "Stagbeetle Pokémon": "Pokémon Besouro Chifrudo",
    "Wild Bull Pokémon": "Pokémon Touro Selvagem",
    "Fish Pokémon": "Pokémon Peixe",
    "Atrocious Pokémon": "Pokémon Atroz",
    "Transport Pokémon": "Pokémon Transporte",
    "Transform Pokémon": "Pokémon Transformação",
    "Evolution Pokémon": "Pokémon Evolução",
    "Bubble Jet Pokémon": "Pokémon Jato de Bolhas",
    "Lightning Pokémon": "Pokémon Raio",
    "Virtual Pokémon": "Pokémon Virtual",
    "Spiral Pokémon": "Pokémon Espiral",
    "Fossil Pokémon": "Pokémon Fóssil",
    "Sleeping Pokémon": "Pokémon Sonolento",
    "Freeze Pokémon": "Pokémon Congelamento",
    "Genetic Pokémon": "Pokémon Genético",
    "New Species Pokémon": "Pokémon Nova Espécie",
    "Paradox Pokémon": "Pokémon Paradoxo",
    "Abundance Pokémon": "Pokémon Abundância",
    "Acorn Pokémon": "Pokémon Bolota",
    "Alloy Pokémon": "Pokémon Liga Metálica",
    "Ambush Pokémon": "Pokémon Emboscada",
    "Ant Pit Pokémon": "Pokémon Formigueiro",
    "Anteater Pokémon": "Pokémon Tamanduá",
    "Antenna Pokémon": "Pokémon Antena",
    "Apple Core Pokémon": "Pokémon Miolo de Maçã",
    "Apple Hydra Pokémon": "Pokémon Hidra de Maçã",
    "Apple Nectar Pokémon": "Pokémon Néctar de Maçã",
    "Apple Wing Pokémon": "Pokémon Asa de Maçã",
    "Aqua Mouse Pokémon": "Pokémon Rato Aquático",
    "Aqua Rabbit Pokémon": "Pokémon Coelho Aquático",
    "Arm Thrust Pokémon": "Pokémon Empurrão",
    "Armor Bird Pokémon": "Pokémon Pássaro Blindado",
    "Armor Pokémon": "Pokémon Armadura",
    "Arrow Quill Pokémon": "Pokémon Pena de Flecha",
    "Artificial Pokémon": "Pokémon Artificial",
    "Astral Body Pokémon": "Pokémon Corpo Astral",
    "Attaching Pokémon": "Pokémon Fixador",
    "Aurora Pokémon": "Pokémon Aurora",
    "Automaton Pokémon": "Pokémon Autômato",
    "Avianoid Pokémon": "Pokémon Aviário",
    "Axe Jaw Pokémon": "Pokémon Mandíbula de Machado",
    "Axe Pokémon": "Pokémon Machado",
    "Baby Pokémon": "Pokémon Bebê",
    "Bagworm Pokémon": "Pokémon Bicho-do-cesto",
    "Ball Roll Pokémon": "Pokémon Rola-bola",
    "Ball Whale Pokémon": "Pokémon Baleia Bola",
    "Balloon Pokémon": "Pokémon Balão",
    "Barnacle Pokémon": "Pokémon Craca",
    "Bash Buffalo Pokémon": "Pokémon Búfalo Investidor",
    "Battery Pokémon": "Pokémon Bateria",
    "Beat Pokémon": "Pokémon Batida",
    "Beaver Pokémon": "Pokémon Castor",
    "Beckon Pokémon": "Pokémon Aceno",
    "Bee Fly Pokémon": "Pokémon Mosca-abelha",
    "Beehive Pokémon": "Pokémon Colmeia",
    "Bell Pokémon": "Pokémon Sino",
    "Big Blade Pokémon": "Pokémon Grande Lâmina",
    "Big Boss Pokémon": "Pokémon Chefão",
    "Big Catfish Pokémon": "Pokémon Peixe-gato Grande",
    "Big Eater Pokémon": "Pokémon Comilão",
    "Big Fish Pokémon": "Pokémon Peixe Grande",
    "Big Horn Pokémon": "Pokémon Chifre Grande",
    "Big Rock Pokémon": "Pokémon Rocha Grande",
    "Big Voice Pokémon": "Pokémon Voz Poderosa",
    "Big-Hearted Pokémon": "Pokémon Generoso",
    "Bite Pokémon": "Pokémon Mordida",
    "Black Tea Pokémon": "Pokémon Chá Preto",
    "Blade Pokémon": "Pokémon Lâmina",
    "Blade Quill Pokémon": "Pokémon Espinho de Lâmina",
    "Blast Pokémon": "Pokémon Explosão",
    "Blast Turtle Pokémon": "Pokémon Tartaruga Explosiva",
    "Blazing Pokémon": "Pokémon Flamejante",
    "Blimp Pokémon": "Pokémon Dirigível",
    "Blocking Pokémon": "Pokémon Bloqueador",
    "Bloom Sickle Pokémon": "Pokémon Foice em Flor",
    "Blossom Pokémon": "Pokémon Florescimento",
    "Bolt Strike Pokémon": "Pokémon Golpe Elétrico",
    "Bone Vulture Pokémon": "Pokémon Abutre de Ossos",
    "Bonsai Pokémon": "Pokémon Bonsai",
    "Boss Pokémon": "Pokémon Chefe",
    "Bounce Pokémon": "Pokémon Saltitante",
    "Bouquet Pokémon": "Pokémon Buquê",
    "Boxing Pokémon": "Pokémon Boxeador",
    "Bright Pokémon": "Pokémon Brilhante",
    "Bronze Bell Pokémon": "Pokémon Sino de Bronze",
    "Bronze Pokémon": "Pokémon Bronze",
    "Brutal Pokémon": "Pokémon Brutal",
    "Brutal Star Pokémon": "Pokémon Estrela Brutal",
    "Bubble Frog Pokémon": "Pokémon Sapo de Bolhas",
    "Bud Pokémon": "Pokémon Broto",
    "Bug Catcher Pokémon": "Pokémon Pega-insetos",
    "Bugle Beak Pokémon": "Pokémon Bico de Corneta",
    "Bulb Pokémon": "Pokémon Bulbo",
    "Bulk Up Pokémon": "Pokémon Musculoso",
    "Cactus Pokémon": "Pokémon Cacto",
    "Calm Pokémon": "Pokémon Calmo",
    "Candle Pokémon": "Pokémon Vela",
    "Candy Apple Pokémon": "Pokémon Maçã do Amor",
    "Cannon Pokémon": "Pokémon Canhão",
    "Carefree Pokémon": "Pokémon Despreocupado",
    "Caretaker Pokémon": "Pokémon Cuidador",
    "Caring Pokémon": "Pokémon Atencioso",
    "Cat Ferret Pokémon": "Pokémon Furão-gato",
    "Catty Pokémon": "Pokémon Bichano",
    "Cavalry Pokémon": "Pokémon Cavalaria",
    "Cave Pokémon": "Pokémon Caverna",
    "Cavern Pokémon": "Pokémon Caverna",
    "Cell Pokémon": "Pokémon Célula",
    "Centipede Pokémon": "Pokémon Centopeia",
    "Cerebral Pokémon": "Pokémon Cerebral",
    "Cheeky Pokémon": "Pokémon Atrevido",
    "Cheering Pokémon": "Pokémon Torcedor",
    "Cherry Pokémon": "Pokémon Cereja",
    "Chill Pokémon": "Pokémon Gelado",
    "Chinchilla Pokémon": "Pokémon Chinchila",
    "Clamping Pokémon": "Pokémon Prendedor",
    "Clap Pokémon": "Pokémon Aplauso",
    "Clay Doll Pokémon": "Pokémon Boneco de Argila",
    "Clear Wing Pokémon": "Pokémon Asa Transparente",
    "Coal Pokémon": "Pokémon Carvão",
    "Coffin Pokémon": "Pokémon Caixão",
    "Coin Chest Pokémon": "Pokémon Baú de Moedas",
    "Coin Entity Pokémon": "Pokémon Entidade de Moedas",
    "Collective Pokémon": "Pokémon Coletivo",
    "Color Swap Pokémon": "Pokémon Troca-cor",
    "Colossal Pokémon": "Pokémon Colossal",
    "Colt Pokémon": "Pokémon Potro",
    "Comedian Pokémon": "Pokémon Comediante",
    "Compass Pokémon": "Pokémon Bússola",
    "Compressed Pokémon": "Pokémon Compactado",
    "Constraint Pokémon": "Pokémon Restrição",
    "Copperderm Pokémon": "Pokémon Pele de Cobre",
    "Coral Pokémon": "Pokémon Coral",
    "Cotton Bird Pokémon": "Pokémon Pássaro de Algodão",
    "Cotton Bloom Pokémon": "Pokémon Flor de Algodão",
    "Cotton Candy Pokémon": "Pokémon Algodão-doce",
    "Cotton Puff Pokémon": "Pokémon Tufo de Algodão",
    "Cottonweed Pokémon": "Pokémon Erva de Algodão",
    "Couple Pokémon": "Pokémon Casal",
    "Courting Pokémon": "Pokémon Galanteador",
    "Cream Pokémon": "Pokémon Creme",
    "Cricket Pokémon": "Pokémon Grilo",
    "Cruel Pokémon": "Pokémon Cruel",
    "Crystallizing Pokémon": "Pokémon Cristalizante",
    "Curlipede Pokémon": "Pokémon Centopeia Enrolada",
    "Cyclone Pokémon": "Pokémon Ciclone",
    "DNA Pokémon": "Pokémon DNA",
    "Dancer Pokémon": "Pokémon Dançarino",
    "Dancing Pokémon": "Pokémon Dançarino",
    "Dark Pokémon": "Pokémon Escuridão",
    "Daunting Pokémon": "Pokémon Intimidador",
    "Deceiver Pokémon": "Pokémon Trapaceiro",
    "Deep Sea Pokémon": "Pokémon Mar Profundo",
    "Delivery Pokémon": "Pokémon Mensageiro",
    "Desert Croc Pokémon": "Pokémon Crocodilo do Deserto",
    "Despot Pokémon": "Pokémon Déspota",
    "Devious Pokémon": "Pokémon Dissimulado",
    "Diapered Pokémon": "Pokémon Enfraldado",
    "Digging Pokémon": "Pokémon Cavador",
    "Disaster Pokémon": "Pokémon Desastre",
    "Discharge Pokémon": "Pokémon Descarga",
    "Discipline Pokémon": "Pokémon Disciplina",
    "Disguise Pokémon": "Pokémon Disfarce",
    "Diving Pokémon": "Pokémon Mergulhador",
    "Dog Pokémon": "Pokémon Cão",
    "Dolphin Pokémon": "Pokémon Golfinho",
    "Donkey Pokémon": "Pokémon Burro",
    "Draft Horse Pokémon": "Pokémon Cavalo de Tração",
    "Dragon Orb Pokémon": "Pokémon Esfera do Dragão",
    "Drawn Sword Pokémon": "Pokémon Espada Desembainhada",
    "Dream Eater Pokémon": "Pokémon Comedor de Sonhos",
    "Drowsing Pokémon": "Pokémon Sonolento",
    "Drummer Pokémon": "Pokémon Baterista",
    "Duckling Pokémon": "Pokémon Patinho",
    "Eaglet Pokémon": "Pokémon Filhote de Águia",
    "Earthworm Pokémon": "Pokémon Minhoca",
    "Elder Tree Pokémon": "Pokémon Árvore Anciã",
    "EleFish Pokémon": "Pokémon Peixe Elétrico",
    "EleFrog Pokémon": "Pokémon Sapo Elétrico",
    "EleSpider Pokémon": "Pokémon Aranha Elétrica",
    "EleSquirrel Pokémon": "Pokémon Esquilo Elétrico",
    "EleTadpole Pokémon": "Pokémon Girino Elétrico",
    "Electrified Pokémon": "Pokémon Eletrificado",
    "Electron Pokémon": "Pokémon Elétron",
    "Emanation Pokémon": "Pokémon Emanação",
    "Ember Pokémon": "Pokémon Brasa",
    "Embrace Pokémon": "Pokémon Abraço",
    "Emotion Pokémon": "Pokémon Emoção",
    "Emperor Pokémon": "Pokémon Imperador",
    "Endurance Pokémon": "Pokémon Resistência",
    "Eon Pokémon": "Pokémon Éon",
    "Eruption Pokémon": "Pokémon Erupção",
    "Eyeball Pokémon": "Pokémon Globo Ocular",
    "Face Pokémon": "Pokémon Rosto",
    "Family Pokémon": "Pokémon Família",
    "Fang Scorpion Pokémon": "Pokémon Escorpião de Presas",
    "Fang Snake Pokémon": "Pokémon Serpente de Presas",
    "Feeling Pokémon": "Pokémon Sentimento",
    "Fire Blades Pokémon": "Pokémon Lâminas de Fogo",
    "Fire Cat Pokémon": "Pokémon Gato de Fogo",
    "Fire Child Pokémon": "Pokémon Criança de Fogo",
    "Fire Croc Pokémon": "Pokémon Crocodilo de Fogo",
    "Fire Warrior Pokémon": "Pokémon Guerreiro de Fogo",
    "Firefly Pokémon": "Pokémon Vagalume",
    "Fireworks Pokémon": "Pokémon Fogos de Artifício",
    "First Bird Pokémon": "Pokémon Primeiro Pássaro",
    "Fixation Pokémon": "Pokémon Fixação",
    "Flailing Pokémon": "Pokémon Debatente",
    "Flash Pokémon": "Pokémon Clarão",
    "Float Whale Pokémon": "Pokémon Baleia Flutuante",
    "Floating Pokémon": "Pokémon Flutuante",
    "Flowering Pokémon": "Pokémon Florido",
    "Fly Scorpion Pokémon": "Pokémon Escorpião Voador",
    "Forbidden Pokémon": "Pokémon Proibido",
    "Formation Pokémon": "Pokémon Formação",
    "Fragrance Pokémon": "Pokémon Fragrância",
    "Free Climb Pokémon": "Pokémon Escalador Livre",
    "Freezing Pokémon": "Pokémon Congelante",
    "Fresh Snow Pokémon": "Pokémon Neve Fresca",
    "Frigatebird Pokémon": "Pokémon Fragata",
    "Frill Pokémon": "Pokémon Gola",
    "Frog Pokémon": "Pokémon Sapo",
    "Frost Moth Pokémon": "Pokémon Mariposa do Gelo",
    "Frost Tree Pokémon": "Pokémon Árvore de Gelo",
    "Fruit Pokémon": "Pokémon Fruta",
    "Garden Eel Pokémon": "Pokémon Enguia de Jardim",
    "Garden Pokémon": "Pokémon Jardim",
    "Gear Pokémon": "Pokémon Engrenagem",
    "Generator Pokémon": "Pokémon Gerador",
    "Geyser Pokémon": "Pokémon Gêiser",
    "Ghost Dog Pokémon": "Pokémon Cão Fantasma",
    "Gigantic Pokémon": "Pokémon Gigante",
    "Gleam Eyes Pokémon": "Pokémon Olhos Cintilantes",
    "Gloomdweller Pokémon": "Pokémon Habitante das Sombras",
    "Glowing Pokémon": "Pokémon Brilhante",
    "Gnash Teeth Pokémon": "Pokémon Rangente",
    "Grass Cat Pokémon": "Pokémon Gato de Grama",
    "Grass Monkey Pokémon": "Pokémon Macaco de Grama",
    "Grass Quill Pokémon": "Pokémon Pena de Folha",
    "Grasshopper Pokémon": "Pokémon Gafanhoto",
    "Grassland Pokémon": "Pokémon Campina",
    "Gratitude Pokémon": "Pokémon Gratidão",
    "Greedy Pokémon": "Pokémon Ganancioso",
    "Gripper Pokémon": "Pokémon Agarrador",
    "Grove Pokémon": "Pokémon Arvoredo",
    "Grudge Pokémon": "Pokémon Rancor",
    "Gulp Pokémon": "Pokémon Engolidor",
    "Guts Pokémon": "Pokémon Destemido",
    "Hammer Pokémon": "Pokémon Martelo",
    "Hands-On Pokémon": "Pokémon Dedicado",
    "Handstand Pokémon": "Pokémon Parada de Mão",
    "Happiness Pokémon": "Pokémon Felicidade",
    "Hard Scale Pokémon": "Pokémon Escama Dura",
    "Hard Shell Pokémon": "Pokémon Concha Rígida",
    "Head Butt Pokémon": "Pokémon Cabeçada",
    "Hearing Pokémon": "Pokémon Audição",
    "Heavyweight Pokémon": "Pokémon Peso-pesado",
    "Heel Pokémon": "Pokémon Vilão",
    "Hex Nut Pokémon": "Pokémon Porca Sextavada",
    "Hibernator Pokémon": "Pokémon Hibernador",
    "High Temp Pokémon": "Pokémon Alta Temperatura",
    "Hippo Pokémon": "Pokémon Hipopótamo",
    "Hog Pokémon": "Pokémon Javali",
    "Hoodlum Pokémon": "Pokémon Vândalo",
    "Hostile Pokémon": "Pokémon Hostil",
    "Howitzer Pokémon": "Pokémon Obuseiro",
    "Humming Pokémon": "Pokémon Cantador",
    "Ice Break Pokémon": "Pokémon Quebra-gelo",
    "Ice Chunk Pokémon": "Pokémon Pedaço de Gelo",
    "Ice Dragon Pokémon": "Pokémon Dragão de Gelo",
    "Ice Fin Pokémon": "Pokémon Barbatana de Gelo",
    "Iceberg Pokémon": "Pokémon Iceberg",
    "Icy Snow Pokémon": "Pokémon Neve Congelada",
    "Illuminating Pokémon": "Pokémon Iluminador",
    "Illusion Fox Pokémon": "Pokémon Raposa Ilusão",
    "Imitation Pokémon": "Pokémon Imitação",
    "Intertwining Pokémon": "Pokémon Entrelaçado",
    "Intimidation Pokémon": "Pokémon Intimidação",
    "Irate Pokémon": "Pokémon Irritado",
    "Iron Ant Pokémon": "Pokémon Formiga de Ferro",
    "Iron Ball Pokémon": "Pokémon Bola de Ferro",
    "Iron Claw Pokémon": "Pokémon Garra de Ferro",
    "Iron Leg Pokémon": "Pokémon Perna de Ferro",
    "Iron Pokémon": "Pokémon Ferro",
    "Iron Snake Pokémon": "Pokémon Serpente de Ferro",
    "Iron Will Pokémon": "Pokémon Determinação de Ferro",
    "Item Drop Pokémon": "Pokémon Lançador de Itens",
    "Jet Pokémon": "Pokémon Jato",
    "Jettison Pokémon": "Pokémon Ejetor",
    "Jewel Pokémon": "Pokémon Joia",
    "Jolly Pokémon": "Pokémon Alegre",
    "Jubilee Pokémon": "Pokémon Jubileu",
    "Judo Pokémon": "Pokémon Judoca",
    "Jujitsu Pokémon": "Pokémon Lutador de Jiu-jitsu",
    "Junkivore Pokémon": "Pokémon Sucateiro",
    "Karate Pokémon": "Pokémon Carateca",
    "Key Ring Pokémon": "Pokémon Chaveiro",
    "King Pokémon": "Pokémon Rei",
    "Kiss Pokémon": "Pokémon Beijo",
    "Kite Pokémon": "Pokémon Pipa",
    "Kitten Pokémon": "Pokémon Gatinho",
    "Knowledge Pokémon": "Pokémon Conhecimento",
    "Lamp Pokémon": "Pokémon Lâmpada",
    "Land Shark Pokémon": "Pokémon Tubarão Terrestre",
    "Land Snake Pokémon": "Pokémon Cobra Terrestre",
    "Land Spirit Pokémon": "Pokémon Espírito da Terra",
    "Larva Pokémon": "Pokémon Larva",
    "Launch Pokémon": "Pokémon Lançamento",
    "Lava Dome Pokémon": "Pokémon Domo de Lava",
    "Lava Pokémon": "Pokémon Lava",
    "Lazy Pokémon": "Pokémon Preguiçoso",
    "Leaf-Wrapped Pokémon": "Pokémon Envolto em Folha",
    "Lingering Pokémon": "Pokémon Persistente",
    "Lion Cub Pokémon": "Pokémon Filhote de Leão",
    "Lissome Pokémon": "Pokémon Gracioso",
    "Little Bear Pokémon": "Pokémon Ursinho",
    "Live Coal Pokémon": "Pokémon Brasa Viva",
    "Loitering Pokémon": "Pokémon Vagaroso",
    "Long Leg Pokémon": "Pokémon Pernas Longas",
    "Long Neck Pokémon": "Pokémon Pescoço Longo",
    "Long Nose Pokémon": "Pokémon Nariz Longo",
    "Long Tail Pokémon": "Pokémon Cauda Longa",
    "Longevity Pokémon": "Pokémon Longevidade",
    "Lookout Pokémon": "Pokémon Sentinela",
    "Loud Noise Pokémon": "Pokémon Barulhento",
    "Love-Hate Pokémon": "Pokémon Amor e Ódio",
    "Loyal Dog Pokémon": "Pokémon Cão Fiel",
    "Lunar Pokémon": "Pokémon Lunar",
    "Luring Pokémon": "Pokémon Isca",
    "Mach Pokémon": "Pokémon Supersônico",
    "Magical Pokémon": "Pokémon Mágico",
    "Magician Pokémon": "Pokémon Mágico",
    "Magnet Area Pokémon": "Pokémon Área Magnética",
    "Manipulate Pokémon": "Pokémon Manipulador",
    "Mantle Pokémon": "Pokémon Manto",
    "Marionette Pokémon": "Pokémon Marionete",
    "Martial Arts Pokémon": "Pokémon Artes Marciais",
    "Mask Pokémon": "Pokémon Máscara",
    "Matcha Pokémon": "Pokémon Matcha",
    "Meditate Pokémon": "Pokémon Meditação",
    "Megapede Pokémon": "Pokémon Megalópode",
    "Melody Pokémon": "Pokémon Melodia",
    "Meringue Pokémon": "Pokémon Merengue",
    "Metalsmith Pokémon": "Pokémon Metalúrgico",
    "Meteor Pokémon": "Pokémon Meteoro",
    "Meteorite Pokémon": "Pokémon Meteorito",
    "Milk Cow Pokémon": "Pokémon Vaca Leiteira",
    "Mime Pokémon": "Pokémon Mímico",
    "Mimicry Pokémon": "Pokémon Mimetismo",
    "Mischief Pokémon": "Pokémon Travessura",
    "Mitosis Pokémon": "Pokémon Mitose",
    "Mock Kelp Pokémon": "Pokémon Alga Falsa",
    "Mold Pokémon": "Pokémon Mofo",
    "Moth Pokémon": "Pokémon Mariposa",
    "Mount Pokémon": "Pokémon Montaria",
    "Multi-Cyl Pokémon": "Pokémon Multicilindro",
    "Multiplying Pokémon": "Pokémon Multiplicador",
    "Muscular Pokémon": "Pokémon Musculoso",
    "Music Note Pokémon": "Pokémon Nota Musical",
    "Mystic Pokémon": "Pokémon Místico",
    "Nebula Pokémon": "Pokémon Nebulosa",
    "Neon Pokémon": "Pokémon Neon",
    "Numb Pokémon": "Pokémon Entorpecente",
    "Nurturing Pokémon": "Pokémon Afetuoso",
    "Ogre Darner Pokémon": "Pokémon Libélula Gigante",
    "Ogre Scorpion Pokémon": "Pokémon Escorpião Ogro",
    "Old Shrimp Pokémon": "Pokémon Camarão Antigo",
    "Olive Pokémon": "Pokémon Azeitona",
    "Ore Pokémon": "Pokémon Minério",
    "Ostrich Pokémon": "Pokémon Avestruz",
    "Overturning Pokémon": "Pokémon Inversor",
    "Painter Pokémon": "Pokémon Pintor",
    "Paleozoic Pokémon": "Pokémon Paleozoico",
    "Parasite Pokémon": "Pokémon Parasita",
    "Parrot Pokémon": "Pokémon Papagaio",
    "Patient Pokémon": "Pokémon Paciente",
    "Peat Pokémon": "Pokémon Turfa",
    "Penguin Pokémon": "Pokémon Pinguim",
    "Perfume Pokémon": "Pokémon Perfume",
    "Pig Pokémon": "Pokémon Porco",
    "Pin Cluster Pokémon": "Pokémon Aglomerado de Alfinetes",
    "Pitch-Black Pokémon": "Pokémon Escuridão Absoluta",
    "Placid Pokémon": "Pokémon Plácido",
    "Plasma Pokémon": "Pokémon Plasma",
    "Plate Pokémon": "Pokémon Placa",
    "Playhouse Pokémon": "Pokémon Casinha",
    "Plump Mouse Pokémon": "Pokémon Rato Rechonchudo",
    "Poison Bag Pokémon": "Pokémon Bolsa de Veneno",
    "Polka Dot Pokémon": "Pokémon Bolinhas",
    "Pond Skater Pokémon": "Pokémon Alfaiate d'Água",
    "Poodle Pokémon": "Pokémon Poodle",
    "Pop Star Pokémon": "Pokémon Estrela Pop",
    "Posy Picker Pokémon": "Pokémon Colhedor de Buquê",
    "Practicing Pokémon": "Pokémon Aprendiz",
    "Predator Pokémon": "Pokémon Predador",
    "Prim Pokémon": "Pokémon Formal",
    "Protostar Pokémon": "Pokémon Protoestrela",
    "Prototurtle Pokémon": "Pokémon Prototartaruga",
    "Proud Pokémon": "Pokémon Orgulhoso",
    "Pumpkin Pokémon": "Pokémon Abóbora",
    "Punk Pokémon": "Pokémon Punk",
    "Puppet Pokémon": "Pokémon Marionete",
    "Radiator Pokémon": "Pokémon Radiador",
    "Radome Pokémon": "Pokémon Radome",
    "Rage Monkey Pokémon": "Pokémon Macaco Furioso",
    "Rainbow Pokémon": "Pokémon Arco-íris",
    "Rampart Pokémon": "Pokémon Muralha",
    "Rascal Pokémon": "Pokémon Trapalhão",
    "Raven Pokémon": "Pokémon Corvo",
    "Rendezvous Pokémon": "Pokémon Encontro",
    "Requiem Pokémon": "Pokémon Réquiem",
    "Restraint Pokémon": "Pokémon Contenção",
    "Retainer Pokémon": "Pokémon Escudeiro",
    "Revolving Pokémon": "Pokémon Giratório",
    "Rock Head Pokémon": "Pokémon Cabeça de Rocha",
    "Rock Inn Pokémon": "Pokémon Pousada de Rocha",
    "Rock Peak Pokémon": "Pokémon Pico Rochoso",
    "Rock Salt Pokémon": "Pokémon Sal-gema",
    "Rock Skin Pokémon": "Pokémon Pele de Rocha",
    "Rogue Monkey Pokémon": "Pokémon Macaco Rebelde",
    "Rogue Pokémon": "Pokémon Trapaceiro",
    "Rolling Pokémon": "Pokémon Rolador",
    "Roly-Poly Pokémon": "Pokémon Tatu-bola",
    "Royal Heir Pokémon": "Pokémon Herdeiro Real",
    "Royal Pokémon": "Pokémon Majestoso",
    "Royal Sword Pokémon": "Pokémon Espada Real",
    "Ruffian Pokémon": "Pokémon Rufião",
    "Ruinous Pokémon": "Pokémon Ruinoso",
    "Rush Pokémon": "Pokémon Investida",
    "Rushing Pokémon": "Pokémon Apressado",
    "Sage Pokémon": "Pokémon Sábio",
    "Sand Castle Pokémon": "Pokémon Castelo de Areia",
    "Sand Heap Pokémon": "Pokémon Monte de Areia",
    "Sand Snake Pokémon": "Pokémon Serpente de Areia",
    "Savage Pokémon": "Pokémon Selvagem",
    "Scale Pokémon": "Pokémon Escama",
    "Scaly Pokémon": "Pokémon Escamado",
    "Scarecrow Pokémon": "Pokémon Espantalho",
    "Scarf Pokémon": "Pokémon Cachecol",
    "Scatterdust Pokémon": "Pokémon Poeira Espalhada",
    "Scorching Pokémon": "Pokémon Escaldante",
    "Scorpion Pokémon": "Pokémon Escorpião",
    "Screech Pokémon": "Pokémon Guincho",
    "Scuffle Pokémon": "Pokémon Valentão",
    "Sea Basin Pokémon": "Pokémon Bacia Marinha",
    "Sea Creeper Pokémon": "Pokémon Rastejador do Mar",
    "Sea Cucumber Pokémon": "Pokémon Pepino-do-mar",
    "Sea Drifter Pokémon": "Pokémon Náufrago do Mar",
    "Sea Lily Pokémon": "Pokémon Lírio-do-mar",
    "Sea Slug Pokémon": "Pokémon Lesma-do-mar",
    "Sea Urchin Pokémon": "Pokémon Ouriço-do-mar",
    "Sea Weasel Pokémon": "Pokémon Doninha-do-mar",
    "Seafaring Pokémon": "Pokémon Marinheiro",
    "Seagull Pokémon": "Pokémon Gaivota",
    "Season Pokémon": "Pokémon Estações",
    "Serene Pokémon": "Pokémon Sereno",
    "Seven Spot Pokémon": "Pokémon Sete Pontos",
    "Sewing Pokémon": "Pokémon Costureiro",
    "Sharp Blade Pokémon": "Pokémon Lâmina Afiada",
    "Sharp Claw Pokémon": "Pokémon Garra Afiada",
    "Shed Pokémon": "Pokémon Muda de Pele",
    "Shedding Pokémon": "Pokémon Descamação",
    "Sheep Pokémon": "Pokémon Ovelha",
    "Shell Out Pokémon": "Pokémon Descascador",
    "Shield Pokémon": "Pokémon Escudo",
    "Sickle Grass Pokémon": "Pokémon Grama-foice",
    "Silent Pokémon": "Pokémon Silencioso",
    "Singer Pokémon": "Pokémon Cantora",
    "Single Bloom Pokémon": "Pokémon Flor Solitária",
    "Single Horn Pokémon": "Pokémon Chifre Único",
    "Single-Cyl Pokémon": "Pokémon Monocilindro",
    "Skewer Pokémon": "Pokémon Espetador",
    "Skunk Pokémon": "Pokémon Gambá",
    "Sky Squirrel Pokémon": "Pokémon Esquilo Voador",
    "Slacker Pokémon": "Pokémon Preguiçoso",
    "Small Fry Pokémon": "Pokémon Alevino",
    "Snail Pokémon": "Pokémon Caracol",
    "Snapping Pokémon": "Pokémon Mordedor",
    "Snow Hat Pokémon": "Pokémon Chapéu de Neve",
    "Snow Land Pokémon": "Pokémon Terra Nevada",
    "Snowstorm Pokémon": "Pokémon Nevasca",
    "Soft Tissue Pokémon": "Pokémon Tecido Mole",
    "Soloist Pokémon": "Pokémon Solista",
    "Sound Wave Pokémon": "Pokémon Onda Sonora",
    "South Sea Pokémon": "Pokémon Mar do Sul",
    "Spark Pokémon": "Pokémon Faísca",
    "Spicy Pepper Pokémon": "Pokémon Pimenta Picante",
    "Spike Ball Pokémon": "Pokémon Bola de Espinhos",
    "Spiny Armor Pokémon": "Pokémon Armadura de Espinhos",
    "Spiny Fish Pokémon": "Pokémon Peixe Espinhoso",
    "Spiny Nut Pokémon": "Pokémon Noz Espinhosa",
    "Spirit Pokémon": "Pokémon Espírito",
    "Spot Panda Pokémon": "Pokémon Panda Malhado",
    "Spray Pokémon": "Pokémon Spray",
    "Stakeout Pokémon": "Pokémon Espreitador",
    "Star Shape Pokémon": "Pokémon Forma de Estrela",
    "Starling Pokémon": "Pokémon Estorninho",
    "Stealth Pokémon": "Pokémon Furtivo",
    "Steam Pokémon": "Pokémon Vapor",
    "Stomach Pokémon": "Pokémon Estômago",
    "Stone Home Pokémon": "Pokémon Casa de Pedra",
    "Storm Petrel Pokémon": "Pokémon Alma-de-mestre",
    "String Ball Pokémon": "Pokémon Bola de Fio",
    "Strong Arm Pokémon": "Pokémon Braço Forte",
    "Stump Pokémon": "Pokémon Toco",
    "Subterrene Pokémon": "Pokémon Subterrâneo",
    "Swallow Pokémon": "Pokémon Andorinha",
    "Swift Horse Pokémon": "Pokémon Cavalo Veloz",
    "Swine Pokémon": "Pokémon Suíno",
    "Swollen Pokémon": "Pokémon Inchado",
    "Sword Blade Pokémon": "Pokémon Lâmina de Espada",
    "Sword Pokémon": "Pokémon Espada",
    "Symbol Pokémon": "Pokémon Símbolo",
    "Synchronize Pokémon": "Pokémon Sincronia",
    "Synthetic Pokémon": "Pokémon Sintético",
    "Tantrum Pokémon": "Pokémon Birrento",
    "Teamwork Pokémon": "Pokémon Trabalho em Equipe",
    "Tender Pokémon": "Pokémon Carinhoso",
    "Tera Pokémon": "Pokémon Terastal",
    "Terra Whale Pokémon": "Pokémon Baleia da Terra",
    "Thorn Monkey Pokémon": "Pokémon Macaco de Espinhos",
    "Thorn Pod Pokémon": "Pokémon Vagem de Espinhos",
    "Thorn Pokémon": "Pokémon Espinho",
    "Thorn Seed Pokémon": "Pokémon Semente de Espinho",
    "Thunder Pokémon": "Pokémon Trovão",
    "Thunderbolt Pokémon": "Pokémon Raio Trovejante",
    "Thunderclap Pokémon": "Pokémon Estrondo do Trovão",
    "Tiger Cat Pokémon": "Pokémon Gato-tigre",
    "Tiny Bee Pokémon": "Pokémon Abelhinha",
    "Tiny Leaf Pokémon": "Pokémon Folhinha",
    "Tiny Mouse Pokémon": "Pokémon Ratinho",
    "Tiny Pigeon Pokémon": "Pokémon Pombinho",
    "Tiny Raccoon Pokémon": "Pokémon Guaxininho",
    "Tiny Robin Pokémon": "Pokémon Pintassilgo",
    "Tiny Swallow Pokémon": "Pokémon Andorinha Pequena",
    "Torch Pokémon": "Pokémon Tocha",
    "Toxic Lizard Pokémon": "Pokémon Lagarto Tóxico",
    "Toxic Monkey Pokémon": "Pokémon Macaco Tóxico",
    "Toxic Mouse Pokémon": "Pokémon Rato Tóxico",
    "Toxic Mouth Pokémon": "Pokémon Boca Tóxica",
    "Trainee Pokémon": "Pokémon Aprendiz",
    "Trap Pokémon": "Pokémon Armadilha",
    "Trash Bag Pokémon": "Pokémon Saco de Lixo",
    "Trash Heap Pokémon": "Pokémon Monte de Lixo",
    "Tricky Fox Pokémon": "Pokémon Raposa Astuta",
    "Tumbleweed Pokémon": "Pokémon Planta-rolante",
    "Tundra Pokémon": "Pokémon Tundra",
    "Turn Tail Pokémon": "Pokémon Fujão",
    "Tusk Pokémon": "Pokémon Presa",
    "Twin Tusk Pokémon": "Pokémon Duas Presas",
    "Two-Handed Pokémon": "Pokémon Duas Mãos",
    "Two-Sided Pokémon": "Pokémon Dois Lados",
    "Valiant Pokémon": "Pokémon Valente",
    "Verdant Pokémon": "Pokémon Verdejante",
    "Vibration Pokémon": "Pokémon Vibração",
    "Victory Pokémon": "Pokémon Vitória",
    "Viking Pokémon": "Pokémon Viking",
    "Water Bird Pokémon": "Pokémon Pássaro d'Água",
    "Water Bubble Pokémon": "Pokémon Bolha d'Água",
    "Water Fish Pokémon": "Pokémon Peixe d'Água",
    "Water Gun Pokémon": "Pokémon Revólver d'Água",
    "Water Weed Pokémon": "Pokémon Alga d'Água",
    "Weather Pokémon": "Pokémon Clima",
    "Whiskers Pokémon": "Pokémon Bigodes",
    "Whisper Pokémon": "Pokémon Sussurro",
    "White Bird Pokémon": "Pokémon Pássaro Branco",
    "Wicked Pokémon": "Pokémon Malicioso",
    "Wild Horse Pokémon": "Pokémon Cavalo Selvagem",
    "Wild Monkey Pokémon": "Pokémon Macaco Selvagem",
    "Wild Pigeon Pokémon": "Pokémon Pombo Selvagem",
    "Willpower Pokémon": "Pokémon Força de Vontade",
    "Wily Pokémon": "Pokémon Astuto",
    "Wind Chime Pokémon": "Pokémon Sino de Vento",
    "Windveiled Pokémon": "Pokémon Envolto em Vento",
    "Wing Fish Pokémon": "Pokémon Peixe Alado",
    "Wish Pokémon": "Pokémon Desejo",
    "Wolf Pokémon": "Pokémon Lobo",
    "Woodear Pokémon": "Pokémon Orelha-de-pau",
    "Woodpecker Pokémon": "Pokémon Pica-pau",
    "Woolly Crab Pokémon": "Pokémon Caranguejo Peludo",
    "Wrestling Pokémon": "Pokémon Lutador",
    "Wushu Pokémon": "Pokémon Wushu",
    "Zen Charm Pokémon": "Pokémon Talismã Zen"
};

/**
 * Converte qualquer categoria/gênero de espécie em inglês ou formato bruto para Português Oficial
 * @param {string} genusStr 
 * @returns {string}
 */
function translateGenus(genusStr) {
    if (!genusStr || typeof genusStr !== 'string') return 'Pokémon Desconhecido';
    const trimmed = genusStr.trim();
    if (trimmed.startsWith('Pokémon ') || trimmed.startsWith('Pokemon ')) {
        return trimmed.replace(/^Pokemon\s/, 'Pokémon ');
    }
    if (typeof GENUS_TRANSLATIONS !== 'undefined') {
        if (GENUS_TRANSLATIONS[trimmed]) return GENUS_TRANSLATIONS[trimmed];
        const withoutPokemon = trimmed.replace(/\s*Pok[eé]mon$/i, '').trim();
        if (GENUS_TRANSLATIONS[withoutPokemon + ' Pokémon']) return GENUS_TRANSLATIONS[withoutPokemon + ' Pokémon'];
        if (GENUS_TRANSLATIONS[withoutPokemon]) return GENUS_TRANSLATIONS[withoutPokemon];
    }
    return `Pokémon ${trimmed.replace(/\s*Pok[eé]mon$/i, '')}`;
}

/**
 * Formata detalhes de evolução recebidos da PokéAPI ou banco de dados local para Português Oficial
 * @param {object} details 
 * @returns {string}
 */
function formatEvolutionDetail(details) {
    if (!details) return '';

    const trigger = details.trigger?.name;
    const item = details.item?.name;
    const heldItem = details.held_item?.name;
    const knownMove = details.known_move?.name;
    const knownMoveType = details.known_move_type?.name;
    const timeOfDay = details.time_of_day;
    const minLevel = details.min_level;
    const minHappiness = details.min_happiness;
    const minAffection = details.min_affection;
    const minBeauty = details.min_beauty;
    const gender = details.gender; // 1 = fêmea, 2 = macho
    const location = details.location?.name;
    const needsRain = details.needs_overworld_rain;
    const turnUpsideDown = details.turn_upside_down;
    const tradeSpecies = details.trade_species?.name;
    const partySpecies = details.party_species?.name;
    const partyType = details.party_type?.name;
    const relativeStats = details.relative_physical_stats;

    const translateItem = (slug) => {
        if (!slug) return '';
        if (typeof EVOLUTION_TRANSLATIONS !== 'undefined' && EVOLUTION_TRANSLATIONS[slug]) {
            return EVOLUTION_TRANSLATIONS[slug];
        }
        return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    const translateMove = (slug) => {
        if (!slug) return '';
        if (typeof EVOLUTION_TRANSLATIONS !== 'undefined' && EVOLUTION_TRANSLATIONS[slug]) {
            return EVOLUTION_TRANSLATIONS[slug];
        }
        if (typeof ALL_MOVES_DATA !== 'undefined' && ALL_MOVES_DATA[slug]) {
            return ALL_MOVES_DATA[slug].namePt || ALL_MOVES_DATA[slug].nameEn;
        }
        return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    const translateType = (type) => {
        if (!type) return '';
        if (typeof TYPE_INFO !== 'undefined' && TYPE_INFO[type]) {
            return TYPE_INFO[type].namePt;
        }
        return type.charAt(0).toUpperCase() + type.slice(1);
    };

    const translateSpecies = (slug) => {
        if (!slug) return '';
        if (typeof ALL_POKEMONS !== 'undefined') {
            const p = ALL_POKEMONS.find(x => x.name.toLowerCase() === slug.toLowerCase());
            if (p) return p.displayName || p.name;
        }
        return slug.charAt(0).toUpperCase() + slug.slice(1);
    };

    // 1. Usar Item (Pedras, Bules, Armaduras, etc.)
    if (item || trigger === 'use-item') {
        const itemName = translateItem(item);
        return itemName ? `Usar ${itemName}` : 'Usar Item';
    }

    // 2. Troca
    if (trigger === 'trade') {
        if (heldItem) {
            return `Troca segurando ${translateItem(heldItem)}`;
        }
        if (tradeSpecies) {
            return `Troca por ${translateSpecies(tradeSpecies)}`;
        }
        return 'Troca';
    }

    // 3. Triggers especiais
    if (trigger === 'shed') return 'Espaço na equipe com Pokébola';
    if (trigger === 'spin') return 'Girar no lugar com doce';
    if (trigger === 'tower-of-darkness') return 'Torre da Escuridão';
    if (trigger === 'tower-of-waters') return 'Torre das Águas';
    if (trigger === 'three-critical-hits') return '3 Golpes Críticos em 1 combate';
    if (trigger === 'take-damage') return 'Passar sob arco de pedra após dano';

    // 4. Subir de nível com condições
    const conditions = [];

    if (minLevel) {
        conditions.push(`Nível ${minLevel}`);
    }

    if (minHappiness) {
        conditions.push('Amizade Alta');
    }

    if (minAffection) {
        conditions.push('Afeição Alta');
    }

    if (minBeauty) {
        conditions.push('Beleza Alta');
    }

    if (heldItem) {
        conditions.push(`Segurando ${translateItem(heldItem)}`);
    }

    if (knownMove) {
        conditions.push(`Conhecendo ${translateMove(knownMove)}`);
    }

    if (knownMoveType) {
        conditions.push(`Golpe do tipo ${translateType(knownMoveType)}`);
    }

    if (timeOfDay === 'day') {
        conditions.push('Durante o Dia');
    } else if (timeOfDay === 'night') {
        conditions.push('Durante a Noite');
    }

    if (gender === 1) {
        conditions.push('Fêmea');
    } else if (gender === 2) {
        conditions.push('Macho');
    }

    if (needsRain) {
        conditions.push('Chovendo');
    }

    if (turnUpsideDown) {
        conditions.push('Girar console');
    }

    if (partySpecies) {
        conditions.push(`Com ${translateSpecies(partySpecies)} na equipe`);
    }

    if (partyType) {
        conditions.push(`Com tipo ${translateType(partyType)} na equipe`);
    }

    if (relativeStats === 1) {
        conditions.push('Ataque > Defesa');
    } else if (relativeStats === -1) {
        conditions.push('Defesa > Ataque');
    } else if (relativeStats === 0) {
        conditions.push('Ataque = Defesa');
    }

    if (location) {
        conditions.push(`Em ${translateItem(location)}`);
    }

    if (conditions.length > 0) {
        if (!minLevel && trigger === 'level-up') {
            return `Subir de Nível (${conditions.join(' • ')})`;
        }
        return conditions.join(' • ');
    }

    if (trigger) {
        return (typeof EVOLUTION_TRANSLATIONS !== 'undefined' && EVOLUTION_TRANSLATIONS[trigger]) || trigger.replace(/-/g, ' ');
    }

    return 'Condição Especial';
}

if (typeof module !== 'undefined') {
    module.exports = {
        TYPE_INFO,
        TYPE_CHART,
        ALL_TYPES,
        calculateTypeRelations,
        calculatePokemonMatchups,
        EVOLUTION_TRANSLATIONS,
        ABILITY_TRANSLATIONS,
        GENUS_TRANSLATIONS,
        translateGenus,
        formatEvolutionDetail
    };
}
