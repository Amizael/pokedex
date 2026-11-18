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

// Tradução de condições de evolução para Português
const EVOLUTION_TRANSLATIONS = {
    'thunder-stone': 'Pedra do Trovão',
    'water-stone': 'Pedra da Água',
    'fire-stone': 'Pedra de Fogo',
    'leaf-stone': 'Pedra da Folha',
    'moon-stone': 'Pedra da Lua',
    'sun-stone': 'Pedra Solar',
    'ice-stone': 'Pedra de Gelo',
    'trade': 'Troca',
    'level-up': 'Subir de Nível',
    'use-item': 'Usar Item',
    'use-move': 'Usar Golpe'
};

// Tradução de Habilidades Comuns da 1ª Geração
const ABILITY_TRANSLATIONS = {
    'overgrow': 'Supercrescimento',
    'chlorophyll': 'Clorofila',
    'blaze': 'Chama',
    'solar-power': 'Poder Solar',
    'torrent': 'Torrente',
    'rain-dish': 'Prato de Chuva',
    'shield-dust': 'Pó Protetor',
    'run-away': 'Fuga',
    'shed-skin': 'Mudar de Pele',
    'compound-eyes': 'Olhos Compostos',
    'tinted-lens': 'Lente Escura',
    'swarm': 'Enxame',
    'sniper': 'Atirador de Elite',
    'keen-eye': 'Olhar Aguçado',
    'tangled-feet': 'Pés Trôpegos',
    'guts': 'Coragem',
    'hustle': 'Apressado',
    'intimidate': 'Intimidação',
    'unnerve': 'Desconcertar',
    'static': 'Estática',
    'lightning-rod': 'Pára-raios',
    'sand-veil': 'Véu de Areia',
    'sand-rush': 'Corrida na Areia',
    'poison-point': 'Ponto de Veneno',
    'rivalry': 'Rivalidade',
    'sheer-force': 'Força Bruta',
    'cute-charm': 'Charme Gracioso',
    'magic-guard': 'Guarda Mágica',
    'flash-fire': 'Fogo Absorvente',
    'drought': 'Seca',
    'competitive': 'Competitivo',
    'frisk': 'Revistar',
    'inner-focus': 'Foco Interior',
    'infiltrator': 'Infiltrador',
    'stench': 'Mau Cheiro',
    'sticky-hold': 'Aderência',
    'effect-spore': 'Esporo Venenoso',
    'dry-skin': 'Pele Seca',
    'damp': 'Umidade',
    'cloud-nine': 'Sem Clima',
    'vital-spirit': 'Espírito Vital',
    'anger-point': 'Ponto de Raiva',
    'water-absorb': 'Absorção de Água',
    'synchronize': 'Sincronia',
    'no-guard': 'Sem Guarda',
    'steadfast': 'Determinado',
    'gluttony': 'Gula',
    'clear-body': 'Corpo Claro',
    'liquid-ooze': 'Lodo Líquido',
    'rock-head': 'Cabeça de Rocha',
    'sturdy': 'Robustez',
    'magnet-pull': 'Atração Magnética',
    'analytic': 'Analítico',
    'early-bird': 'Pássaro Madrugador',
    'hydration': 'Hidratação',
    'thick-fat': 'Gordura Espessa',
    'ice-body': 'Corpo de Gelo',
    'poison-touch': 'Toque Venenoso',
    'shell-armor': 'Armadura de Casca',
    'skill-link': 'Elo de Habilidade',
    'levitate': 'Levitação',
    'cursed-body': 'Corpo Amaldiçoado',
    'insomnia': 'Insônia',
    'forewarn': 'Aviso Prévio',
    'hyper-cutter': 'Hiper Cortador',
    'soundproof': 'À Prova de Som',
    'filter': 'Filtro',
    'scrappy': 'Briguento',
    'natural-cure': 'Cura Natural',
    'serene-grace': 'Graça Serena',
    'swift-swim': 'Nado Rápido',
    'volt-absorb': 'Absorção Elétrica',
    'pressure': 'Pressão',
    'trace': 'Rastrear',
    'adaptability': 'Adaptabilidade',
    'super-luck': 'Super Sorte',
    'limber': 'Flexível',
    'technician': 'Técnico',
    'pickup': 'Coleta',
    'oblivious': 'Alheio',
    'own-tempo': 'No Próprio Ritmo',
    'regenerator': 'Regenerador',
    'reckless': 'Temerário',
    'iron-fist': 'Punho de Ferro',
    'unaware': 'Desatento',
    'wonder-skin': 'Pele Fantástica',
    'mummy': 'Múmia',
    'immunity': 'Imunidade'
};

// Tradução de Categorias / Gênero
const GENUS_TRANSLATIONS = {
    'Seed Pokémon': 'Pokémon Semente',
    'Lizard Pokémon': 'Pokémon Lagarto',
    'Flame Pokémon': 'Pokémon Chama',
    'Tiny Turtle Pokémon': 'Pokémon Tartaruguinha',
    'Turtle Pokémon': 'Pokémon Tartaruga',
    'Shellfish Pokémon': 'Pokémon Crustáceo',
    'Worm Pokémon': 'Pokémon Verme',
    'Cocoon Pokémon': 'Pokémon Casulo',
    'Butterfly Pokémon': 'Pokémon Borboleta',
    'Hairy Bug Pokémon': 'Pokémon Inseto Peludo',
    'Poison Bee Pokémon': 'Pokémon Abelha Venenosa',
    'Tiny Bird Pokémon': 'Pokémon Passarinho',
    'Bird Pokémon': 'Pokémon Pássaro',
    'Mouse Pokémon': 'Pokémon Rato',
    'Beak Pokémon': 'Pokémon Bico',
    'Snake Pokémon': 'Pokémon Cobra',
    'Cobra Pokémon': 'Pokémon Naja',
    'Poison Pin Pokémon': 'Pokémon Espinho Venenoso',
    'Drill Pokémon': 'Pokémon Broca',
    'Fairy Pokémon': 'Pokémon Fada',
    'Fox Pokémon': 'Pokémon Raposa',
    'Bat Pokémon': 'Pokémon Morcego',
    'Weed Pokémon': 'Pokémon Erva',
    'Flower Pokémon': 'Pokémon Flor',
    'Mushroom Pokémon': 'Pokémon Cogumelo',
    'Insect Pokémon': 'Pokémon Inseto',
    'Poison Moth Pokémon': 'Pokémon Mariposa Venenosa',
    'Mole Pokémon': 'Pokémon Toupeira',
    'Scratch Cat Pokémon': 'Pokémon Gato Arranhador',
    'Classy Cat Pokémon': 'Pokémon Gato Elegante',
    'Duck Pokémon': 'Pokémon Pato',
    'Pig Monkey Pokémon': 'Pokémon Macaco Suíno',
    'Puppy Pokémon': 'Pokémon Filhote de Cão',
    'Legendary Pokémon': 'Pokémon Lendário',
    'Tadpole Pokémon': 'Pokémon Girino',
    'Psi Pokémon': 'Pokémon Psi',
    'Superpower Pokémon': 'Pokémon Superpoder',
    'Flycatcher Pokémon': 'Pokémon Papa-moscas',
    'Jellyfish Pokémon': 'Pokémon Água-viva',
    'Rock Pokémon': 'Pokémon Rocha',
    'Megaton Pokémon': 'Pokémon Megaton',
    'Fire Horse Pokémon': 'Pokémon Cavalo de Fogo',
    'Dopey Pokémon': 'Pokémon Lento',
    'Hermit Crab Pokémon': 'Pokémon Caranguejo Eremita',
    'Magnet Pokémon': 'Pokémon Ímã',
    'Wild Duck Pokémon': 'Pokémon Pato Selvagem',
    'Twin Bird Pokémon': 'Pokémon Pássaro Duplo',
    'Triple Bird Pokémon': 'Pokémon Pássaro Triplo',
    'Sea Lion Pokémon': 'Pokémon Leão-marinho',
    'Sludge Pokémon': 'Pokémon Lama',
    'Bivalve Pokémon': 'Pokémon Bivalve',
    'Gas Pokémon': 'Pokémon Gás',
    'Shadow Pokémon': 'Pokémon Sombra',
    'Rock Snake Pokémon': 'Pokémon Cobra de Pedra',
    'Hypnosis Pokémon': 'Pokémon Hipnose',
    'River Crab Pokémon': 'Pokémon Caranguejo do Rio',
    'Pincer Pokémon': 'Pokémon Pinça',
    'Ball Pokémon': 'Pokémon Bola',
    'Egg Pokémon': 'Pokémon Ovo',
    'Coconut Pokémon': 'Pokémon Coco',
    'Lonely Pokémon': 'Pokémon Solitário',
    'Bone Keeper Pokémon': 'Pokémon Guardião de Ossos',
    'Kicking Pokémon': 'Pokémon Chutador',
    'Punching Pokémon': 'Pokémon Socador',
    'Licking Pokémon': 'Pokémon Lambedor',
    'Poison Gas Pokémon': 'Pokémon Gás Venenoso',
    'Spikes Pokémon': 'Pokémon Espinhos',
    'Vine Pokémon': 'Pokémon Cipó',
    'Parent Pokémon': 'Pokémon Pai/Mãe',
    'Dragon Pokémon': 'Pokémon Dragão',
    'Goldfish Pokémon': 'Pokémon Peixinho Dourado',
    'Starshape Pokémon': 'Pokémon Estrela',
    'Mysterious Pokémon': 'Pokémon Misterioso',
    'Barrier Pokémon': 'Pokémon Barreira',
    'Mantis Pokémon': 'Pokémon Louva-a-deus',
    'Humanshape Pokémon': 'Pokémon Forma Humana',
    'Electric Pokémon': 'Pokémon Elétrico',
    'Spitfire Pokémon': 'Pokémon Cuspidor de Fogo',
    'Stagbeetle Pokémon': 'Pokémon Besouro Chifrudo',
    'Wild Bull Pokémon': 'Pokémon Touro Selvagem',
    'Fish Pokémon': 'Pokémon Peixe',
    'Atrocious Pokémon': 'Pokémon Atroz',
    'Transport Pokémon': 'Pokémon Transporte',
    'Transform Pokémon': 'Pokémon Transformação',
    'Evolution Pokémon': 'Pokémon Evolução',
    'Bubble Jet Pokémon': 'Pokémon Jato de Bolhas',
    'Lightning Pokémon': 'Pokémon Raio',
    'Virtual Pokémon': 'Pokémon Virtual',
    'Spiral Pokémon': 'Pokémon Espiral',
    'Fossil Pokémon': 'Pokémon Fóssil',
    'Sleeping Pokémon': 'Pokémon Sonolento',
    'Freeze Pokémon': 'Pokémon Congelamento',
    'Genetic Pokémon': 'Pokémon Genético',
    'New Species Pokémon': 'Pokémon Nova Espécie'
};
