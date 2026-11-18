// Configuração e Arquitetura Multi-Geração da Pokédex
// Estruturado e pronto para a expansão completa de todas as gerações Pokémon

const GENERATIONS_CONFIG = {
    1: {
        id: 1,
        roman: 'I',
        name: 'Kanto',
        startId: 1,
        endId: 151,
        total: 151,
        mainGames: 'FireRed & LeafGreen / Red & Blue',
        region: 'Kanto',
        starters: [1, 4, 7] // Bulbasaur, Charmander, Squirtle
    },
    2: {
        id: 2,
        roman: 'II',
        name: 'Johto',
        startId: 152,
        endId: 251,
        total: 100,
        mainGames: 'HeartGold & SoulSilver / Gold & Silver',
        region: 'Johto',
        starters: [152, 155, 158] // Chikorita, Cyndaquil, Totodile
    },
    3: {
        id: 3,
        roman: 'III',
        name: 'Hoenn',
        startId: 252,
        endId: 386,
        total: 135,
        mainGames: 'Emerald / Ruby & Sapphire',
        region: 'Hoenn',
        starters: [252, 255, 258] // Treecko, Torchic, Mudkip
    },
    4: {
        id: 4,
        roman: 'IV',
        name: 'Sinnoh',
        startId: 387,
        endId: 493,
        total: 107,
        mainGames: 'Platinum / Diamond & Pearl',
        region: 'Sinnoh',
        starters: [387, 390, 393] // Turtwig, Chimchar, Piplup
    },
    5: {
        id: 5,
        roman: 'V',
        name: 'Unova',
        startId: 494,
        endId: 649,
        total: 156,
        mainGames: 'Black & White / Black 2 & White 2',
        region: 'Unova',
        starters: [494, 497, 500] // Snivy, Tepig, Oshawott
    },
    6: {
        id: 6,
        roman: 'VI',
        name: 'Kalos',
        startId: 650,
        endId: 721,
        total: 72,
        mainGames: 'X & Y',
        region: 'Kalos',
        starters: [650, 653, 656] // Chespin, Fennekin, Froakie
    },
    7: {
        id: 7,
        roman: 'VII',
        name: 'Alola',
        startId: 722,
        endId: 809,
        total: 88,
        mainGames: 'Ultra Sun & Ultra Moon / Sun & Moon',
        region: 'Alola',
        starters: [722, 725, 728] // Rowlet, Litten, Popplio
    },
    8: {
        id: 8,
        roman: 'VIII',
        name: 'Galar / Hisui',
        startId: 810,
        endId: 905,
        total: 96,
        mainGames: 'Sword & Shield / Legends Arceus',
        region: 'Galar',
        starters: [810, 813, 816] // Grookey, Scorbunny, Sobble
    },
    9: {
        id: 9,
        roman: 'IX',
        name: 'Paldea',
        startId: 906,
        endId: 1025,
        total: 120,
        mainGames: 'Scarlet & Violet',
        region: 'Paldea',
        starters: [906, 909, 912] // Sprigatito, Fuecoco, Quaxly
    }
};

/**
 * Retorna qual geração um Pokémon pertence com base no seu número da National Dex
 */
function getGenerationByPokemonId(id) {
    for (const [genId, info] of Object.entries(GENERATIONS_CONFIG)) {
        if (id >= info.startId && id <= info.endId) {
            return info;
        }
    }
    return GENERATIONS_CONFIG[1];
}

if (typeof module !== 'undefined') {
    module.exports = { GENERATIONS_CONFIG, getGenerationByPokemonId };
}
