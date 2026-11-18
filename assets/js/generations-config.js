// Configuração e Arquitetura Multi-Geração da Pokédex (Gerações I a IX • 1025 Pokémon)
// Baseado nas documentações e bancos de dados oficiais: PokéAPI, Bulbapedia, Serebii e Project Pokémon

const GENERATIONS_CONFIG = {
    1: {
        id: 1,
        roman: 'I',
        name: 'Kanto',
        startId: 1,
        endId: 151,
        total: 151,
        mainGames: 'Red, Blue, Yellow',
        region: 'Kanto',
        starters: [1, 4, 7], // Bulbasaur, Charmander, Squirtle
        versionGroups: ['red-blue', 'yellow', 'firered-leafgreen']
    },
    2: {
        id: 2,
        roman: 'II',
        name: 'Johto',
        startId: 152,
        endId: 251,
        total: 100,
        mainGames: 'Gold, Silver, Crystal',
        region: 'Johto',
        starters: [152, 155, 158], // Chikorita, Cyndaquil, Totodile
        versionGroups: ['gold-silver', 'crystal', 'heartgold-soulsilver']
    },
    3: {
        id: 3,
        roman: 'III',
        name: 'Hoenn',
        startId: 252,
        endId: 386,
        total: 135,
        mainGames: 'Ruby, Sapphire, Emerald, FireRed, LeafGreen',
        region: 'Hoenn',
        starters: [252, 255, 258], // Treecko, Torchic, Mudkip
        versionGroups: ['ruby-sapphire', 'emerald', 'firered-leafgreen']
    },
    4: {
        id: 4,
        roman: 'IV',
        name: 'Sinnoh',
        startId: 387,
        endId: 493,
        total: 107,
        mainGames: 'Diamond, Pearl, Platinum, HeartGold, SoulSilver',
        region: 'Sinnoh',
        starters: [387, 390, 393], // Turtwig, Chimchar, Piplup
        versionGroups: ['diamond-pearl', 'platinum', 'heartgold-soulsilver', 'brilliant-diamond-shining-pearl']
    },
    5: {
        id: 5,
        roman: 'V',
        name: 'Unova',
        startId: 494,
        endId: 649,
        total: 156,
        mainGames: 'Black, White, Black 2, White 2',
        region: 'Unova',
        starters: [494, 497, 500], // Snivy, Tepig, Oshawott
        versionGroups: ['black-white', 'black-2-white-2']
    },
    6: {
        id: 6,
        roman: 'VI',
        name: 'Kalos',
        startId: 650,
        endId: 721,
        total: 72,
        mainGames: 'X, Y, Omega Ruby, Alpha Sapphire',
        region: 'Kalos',
        starters: [650, 653, 656], // Chespin, Fennekin, Froakie
        versionGroups: ['x-y', 'omega-ruby-alpha-sapphire']
    },
    7: {
        id: 7,
        roman: 'VII',
        name: 'Alola',
        startId: 722,
        endId: 809,
        total: 88,
        mainGames: 'Sun, Moon, Ultra Sun, Ultra Moon, Let\'s Go Pikachu & Eevee',
        region: 'Alola',
        starters: [722, 725, 728], // Rowlet, Litten, Popplio
        versionGroups: ['sun-moon', 'ultra-sun-ultra-moon', 'lets-go-pikachu-lets-go-eevee']
    },
    8: {
        id: 8,
        roman: 'VIII',
        name: 'Galar / Hisui',
        startId: 810,
        endId: 905,
        total: 96,
        mainGames: 'Sword, Shield, Brilliant Diamond, Shining Pearl, Legends: Arceus',
        region: 'Galar',
        starters: [810, 813, 816], // Grookey, Scorbunny, Sobble
        versionGroups: ['sword-shield', 'the-isle-of-armor', 'the-crown-tundra', 'brilliant-diamond-shining-pearl', 'legends-arceus']
    },
    9: {
        id: 9,
        roman: 'IX',
        name: 'Paldea',
        startId: 906,
        endId: 1025,
        total: 120,
        mainGames: 'Scarlet, Violet, Legends: Z-A',
        region: 'Paldea',
        starters: [906, 909, 912], // Sprigatito, Fuecoco, Quaxly
        versionGroups: ['scarlet-violet', 'the-teal-mask', 'the-indigo-disk', 'legends-za']
    }
};

/**
 * Retorna qual geração um Pokémon pertence com base no seu número da National Dex
 */
function getGenerationByPokemonId(id) {
    const numId = parseInt(id, 10);
    for (const [genId, info] of Object.entries(GENERATIONS_CONFIG)) {
        if (numId >= info.startId && numId <= info.endId) {
            return info;
        }
    }
    return GENERATIONS_CONFIG[1];
}

/**
 * Retorna a lista de todas as gerações formatada para filtros e seletores
 */
function getAllGenerationsList() {
    return Object.values(GENERATIONS_CONFIG);
}

if (typeof module !== 'undefined') {
    module.exports = { GENERATIONS_CONFIG, getGenerationByPokemonId, getAllGenerationsList };
}
