// Banco de Dados Oficial de Mecânicas & Gimmicks de Batalha (Gerações VI a IX)

const BATTLE_GIMMICKS_DATA = {
    'mega-evolution': {
        id: 'mega-evolution',
        name: 'Mega Evolução',
        enName: 'Mega Evolution',
        generation: 'Geração VI (Kalos & Hoenn) • Retorno confirmado em Legends: Z-A',
        keyItem: 'Mega Anel / Mega Pulseira (Key Stone)',
        heldItem: 'Mega Pedra correspondente à espécie',
        badgeColor: '#e02424',
        icon: '🧬',
        description: 'Um fenômeno misterioso que permite a certos Pokémon ultrapassarem o estágio final de evolução durante o combate, liberando energia infinita que eleva seu potencial genético ao limite máximo.',
        mechanics: [
            'Adiciona exatamente +100 pontos ao Total de Status Base (BST) do Pokémon (exceto Mega Alakazam em Gen VI).',
            'Pode alterar ou adicionar uma nova tipagem elemental (ex: Charizard torna-se Fogo/Dragão no Mega Charizard X).',
            'Concede uma nova habilidade exclusiva de alto impacto (ex: Adaptability, Tough Claws, Aerilate, Drought).',
            'Permitido apenas 1 uso por equipe em cada batalha oficial.',
            'Dura até o final da partida ou até o Pokémon ser nocauteado.',
            'Rayquaza não necessita de Mega Stone, mega-evoluindo ao conhecer o movimento lendário Dragon Ascent.'
        ],
        featuredForms: [
            { pokemon: 'Charizard', form: 'Mega Charizard X', types: ['fire', 'dragon'], ability: 'Tough Claws', bst: 634, stone: 'Charizardita X', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png' },
            { pokemon: 'Charizard', form: 'Mega Charizard Y', types: ['fire', 'flying'], ability: 'Drought', bst: 634, stone: 'Charizardita Y', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png' },
            { pokemon: 'Mewtwo', form: 'Mega Mewtwo X', types: ['psychic', 'fighting'], ability: 'Steadfast', bst: 780, stone: 'Mewtwonita X', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png' },
            { pokemon: 'Mewtwo', form: 'Mega Mewtwo Y', types: ['psychic'], ability: 'Insomnia', bst: 780, stone: 'Mewtwonita Y', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png' },
            { pokemon: 'Lucario', form: 'Mega Lucario', types: ['fighting', 'steel'], ability: 'Adaptability', bst: 625, stone: 'Lucarionita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png' },
            { pokemon: 'Gengar', form: 'Mega Gengar', types: ['ghost', 'poison'], ability: 'Shadow Tag', bst: 600, stone: 'Gengarita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png' },
            { pokemon: 'Rayquaza', form: 'Mega Rayquaza', types: ['dragon', 'flying'], ability: 'Delta Stream', bst: 780, stone: 'Ataque Dragon Ascent', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png' },
            { pokemon: 'Garchomp', form: 'Mega Garchomp', types: ['dragon', 'ground'], ability: 'Sand Force', bst: 700, stone: 'Garchompita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png' },
            { pokemon: 'Gardevoir', form: 'Mega Gardevoir', types: ['psychic', 'fairy'], ability: 'Pixilate', bst: 618, stone: 'Gardevoirita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png' },
            { pokemon: 'Blaziken', form: 'Mega Blaziken', types: ['fire', 'fighting'], ability: 'Speed Boost', bst: 630, stone: 'Blazikenita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png' },
            { pokemon: 'Tyranitar', form: 'Mega Tyranitar', types: ['rock', 'dark'], ability: 'Sand Stream', bst: 700, stone: 'Tyranitarita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png' },
            { pokemon: 'Salamence', form: 'Mega Salamence', types: ['dragon', 'flying'], ability: 'Aerilate', bst: 700, stone: 'Salamencita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png' }
        ]
    },

    'z-moves': {
        id: 'z-moves',
        name: 'Movimentos Z',
        enName: 'Z-Moves',
        generation: 'Geração VII (Alola)',
        keyItem: 'Anel Z / Super Anel Z (Z-Ring)',
        heldItem: 'Cristal Z correspondente (Z-Crystal)',
        badgeColor: '#eab308',
        icon: '⚡',
        description: 'Golpes de poder extraordinário desencadeados pela sincronização total entre a força de vontade do Treinador e o poder natural do Pokémon na ensolarada região de Alola.',
        mechanics: [
            'Permite executar 1 único Movimento Z avassalador por batalha.',
            'O Pokémon deve segurar o Cristal Z e conhecer pelo menos um movimento do tipo correspondente.',
            'O poder do Z-Move é calculado com base no poder do golpe original (podendo ultrapassar 200 de Poder).',
            'Mesmo que o adversário utilize movimentos defensivos como Protect ou Detect, o Z-Move atravessa a barreira causando 25% de dano residual.',
            'Existem 18 Cristais Z padrão (1 para cada tipo elemental) e 17 Cristais Z exclusivos de espécies específicas.'
        ],
        featuredForms: [
            { pokemon: 'Pikachu', move: 'Catastropika', type: 'electric', power: 210, crystal: 'Pikanium Z', desc: 'Pikachu é envolvido por uma aura elétrica colossal e atirado contra o oponente com toda a velocidade.' },
            { pokemon: 'Pikachu (Boné)', move: '10,000,000 Volt Thunderbolt', type: 'electric', power: 195, crystal: 'Pikashunium Z', desc: 'Dispara 7 relâmpagos multicores com altíssima chance de acerto crítico.' },
            { pokemon: 'Decidueye', move: 'Sinister Arrow Raid', type: 'ghost', power: 180, crystal: 'Decidium Z', desc: 'Mergulha na sombra e dispara dezenas de flechas sombrias que perfuram o oponente.' },
            { pokemon: 'Incineroar', move: 'Malicious Moonsault', type: 'dark', power: 180, crystal: 'Incinium Z', desc: 'Salta em um ringue de fogo em chamas e esmaga o adversário com um golpe de luta livre devastador.' },
            { pokemon: 'Primarina', move: 'Oceanic Operetta', type: 'water', power: 195, crystal: 'Primarium Z', desc: 'Controla uma bolha aquática gigante com sua voz encantadora e a detona sobre o campo.' },
            { pokemon: 'Snorlax', move: 'Pulverizing Pancake', type: 'normal', power: 210, crystal: 'Snorlium Z', desc: 'Snorlax desperta de seu sono profundo, corre em fúria e cai com todo o seu peso sobre o adversário.' },
            { pokemon: 'Mew', move: 'Genesis Supernova', type: 'psychic', power: 185, crystal: 'Mewnium Z', desc: 'Canaliza a essência original do mundo Pokémon e cria um Terreno Psíquico no campo de batalha.' },
            { pokemon: 'Alolan Raichu', move: 'Stoked Sparksurfer', type: 'electric', power: 175, crystal: 'Aloraichium Z', desc: 'Surfa sobre sua própria cauda energizada e paralisa o adversário infalivelmente.' }
        ]
    },

    'dynamax': {
        id: 'dynamax',
        name: 'Dynamax & Gigantamax',
        enName: 'Dynamax & Gigantamax',
        generation: 'Geração VIII (Galar)',
        keyItem: 'Faixa Dynamax (Dynamax Band)',
        heldItem: 'Nenhum (mantém seu item segurado normal)',
        badgeColor: '#ec4899',
        icon: '🌌',
        description: 'Um fenômeno exclusivo de Galar onde partículas de energia emanadas de Eternatus fazem os Pokémon atingirem dimensões monumentais, distorcendo o próprio espaço ao seu redor.',
        mechanics: [
            'Ocorre exclusivamente em Estádios Pokémon e Power Spots da região de Galar.',
            'O Pokémon mantém seu item segurado (como Life Orb ou Choice Band).',
            'Os Pontos de Saúde (PS) do Pokémon dobram de acordo com o seu Nível Dynamax.',
            'Dura exatamente 3 turnos seguidos por batalha.',
            'Todos os ataques ofensivos tornam-se Max Moves, cada um com efeito secundário (invocar chuva, sol, terreno ou alterar atributos).',
            'Formas Gigantamax (G-Max): Certos indivíduos de espécies específicas recebem uma transformação visual única e um G-Max Move exclusivo com efeitos secundários devastadores.'
        ],
        featuredForms: [
            { pokemon: 'Charizard', form: 'Gigantamax Charizard', types: ['fire', 'flying'], gmaxMove: 'G-Max Wildfire', desc: 'Cria chamas eternas que causam dano contínuo de 1/6 a qualquer Pokémon que não seja do tipo Fogo por 4 turnos.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png' },
            { pokemon: 'Pikachu', form: 'Gigantamax Pikachu', types: ['electric'], gmaxMove: 'G-Max Volt Crash', desc: 'Um choque gigantesco em formato de cauda retrô que paralisa todos os adversários em campo.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10198.png' },
            { pokemon: 'Gengar', form: 'Gigantamax Gengar', types: ['ghost', 'poison'], gmaxMove: 'G-Max Terror', desc: 'Uma boca colossal que engole o chão e impede que todos os adversários fujam ou sejam trocados.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10202.png' },
            { pokemon: 'Lapras', form: 'Gigantamax Lapras', types: ['water', 'ice'], gmaxMove: 'G-Max Resonance', desc: 'Um canto celestial que ergue o efeito de Aurora Veil, reduzindo pela metade todo o dano recebido por 5 turnos.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10204.png' },
            { pokemon: 'Cinderace', form: 'Gigantamax Cinderace', types: ['fire'], gmaxMove: 'G-Max Fireball', desc: 'Uma bola de fogo gigante que ignora completamente todas as habilidades defensivas do alvo.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10210.png' },
            { pokemon: 'Inteleon', form: 'Gigantamax Inteleon', types: ['water'], gmaxMove: 'G-Max Hydrosnipe', desc: 'Uma torre d\'água de franco-atirador com alcance absurdo que ignora habilidades adversárias.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10212.png' },
            { pokemon: 'Corviknight', form: 'Gigantamax Corviknight', types: ['flying', 'steel'], gmaxMove: 'G-Max Wind Rage', desc: 'Lâminas de vento gigantescas que varrem Reflect, Light Screen, Stealth Rock e Spikes do campo.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10213.png' },
            { pokemon: 'Urshifu', form: 'Gigantamax Urshifu', types: ['fighting', 'dark'], gmaxMove: 'G-Max One Blow', desc: 'Um punho colossal que atinge o adversário com dano total mesmo que ele use Protect ou Max Guard.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10226.png' }
        ]
    },

    'terastallization': {
        id: 'terastallization',
        name: 'Teracristalização',
        enName: 'Terastallization',
        generation: 'Geração IX (Paldea)',
        keyItem: 'Orbe Tera (Tera Orb)',
        heldItem: 'Nenhum (mantém seu item segurado normal)',
        badgeColor: '#38bdf8',
        icon: '💎',
        description: 'Um fenômeno cintilante de Paldea no qual os Pokémon brilham como gemas preciosas e ganham uma coroa de cristal na cabeça, alterando sua tipagem defensiva e potencializando seus ataques elementais.',
        mechanics: [
            'Pode ser ativado em qualquer batalha a qualquer momento, sem exigir item segurado.',
            'Dura até o final da batalha ou até o Pokémon desmaiar.',
            'Substitui a tipagem defensiva do Pokémon inteiramente pelo seu Tera Type.',
            'Bônus de STAB Adaptativo: Se o Tera Type for igual ao tipo original do Pokémon, seus golpes desse tipo causam 2.0× de dano (em vez de 1.5×). Se for um tipo diferente, ele mantém o bônus de 1.5× em seus tipos originais E ganha 1.5× no novo Tera Type!',
            'O movimento Tera Blast adota o tipo do Tera Type do Pokémon e torna-se Físico ou Especial de acordo com qual atributo for mais alto.',
            'Tipo Estelar (Stellar Type): Introduzido em The Indigo Disk. Mantém a tipagem defensiva original do Pokémon e concede bônus de 1.2× para movimentos de TODOS os 18 tipos elementais uma vez por batalha (ou ilimitado para Terapagos Stellar Form).'
        ],
        featuredForms: [
            { name: 'Tera Fogo', type: 'fire', icon: '🔥', effect: 'Concede imunidade a queimaduras e fortalece ataques como Lança-chamas para 2.0× de dano.' },
            { name: 'Tera Água', type: 'water', icon: '💧', effect: 'Remove fraquezas de Pokémon terrestres ou de fogo e amplia o poder de Surf e Hydro Pump.' },
            { name: 'Tera Planta', type: 'grass', icon: '🍃', effect: 'Concede imunidade a esporos, pólen e drenagem de sanguessuga (Leech Seed).' },
            { name: 'Tera Elétrico', type: 'electric', icon: '⚡', effect: 'Combinado com a habilidade Levitate (ex: Mismagius), deixa o Pokémon sem nenhuma fraqueza elemental!' },
            { name: 'Tera Aço', type: 'steel', icon: '🛡️', effect: 'Uma das melhores tipagens defensivas do jogo, concedendo 10 resistências e imunidade a veneno.' },
            { name: 'Tera Fantasma', type: 'ghost', icon: '👻', effect: 'Concede imunidade instantânea a golpes de Normal e Lutador, além de imunidade a armadilhas de troca.' },
            { name: 'Tera Fada', type: 'fairy', icon: '✨', effect: 'Transforma dragões em fadas, garantindo imunidade total contra ataques do tipo Dragão.' },
            { name: 'Tipo Estelar (Stellar)', type: 'stellar', icon: '🌟', effect: 'O ápice da Teracristalização descoberto na Área Zero. Fortalece todos os 18 tipos elementais.' }
        ]
    },

    'primal-reversion': {
        id: 'primal-reversion',
        name: 'Reversão Primitiva',
        enName: 'Primal Reversion',
        generation: 'Geração VI (Omega Ruby & Alpha Sapphire)',
        keyItem: 'Esfera Vermelha (Red Orb) / Esfera Azul (Blue Orb)',
        heldItem: 'Red Orb (Groudon) ou Blue Orb (Kyogre)',
        badgeColor: '#f97316',
        icon: '🌋',
        description: 'Um retorno ancestral ao poder pleno dos titãs lendários que moldaram a terra e os mares, ativado ao reabsorver a energia da natureza primordial.',
        mechanics: [
            'Ativa-se automaticamente assim que o Pokémon entra em campo segurando sua respectiva Esfera.',
            'Não conta para o limite de 1 Mega Evolução por equipe (pode ser usado junto com uma Mega Evolução!).',
            'Eleva o BST de Kyogre e Groudon de 670 para assustadores 770 pontos.',
            'Groudon Primitivo adquire o tipo secundário Fogo (Fogo/Terrestre) e a habilidade Desolate Land (Sol Extremo que evapora ataques de água).',
            'Kyogre Primitivo ganha a habilidade Primordial Sea (Chuva Torrencial que extingue completamente ataques de fogo).'
        ],
        featuredForms: [
            { pokemon: 'Groudon', form: 'Primal Groudon', types: ['ground', 'fire'], ability: 'Desolate Land', bst: 770, stone: 'Red Orb', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10078.png' },
            { pokemon: 'Kyogre', form: 'Primal Kyogre', types: ['water'], ability: 'Primordial Sea', bst: 770, stone: 'Blue Orb', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10077.png' }
        ]
    }
};

if (typeof module !== 'undefined') {
    module.exports = { BATTLE_GIMMICKS_DATA };
}
