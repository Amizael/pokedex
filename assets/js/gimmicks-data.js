// Banco de Dados Oficial de Mecânicas Especiais de Batalha (Gerações VI a IX)

const BATTLE_GIMMICKS_DATA = {
    'mega-evolution': {
        id: 'mega-evolution',
        name: 'Mega Evolução',
        enName: 'Mega Evolution',
        generation: 'Geração VI (Kalos & Hoenn) • Retorno confirmado em Legends: Z-A',
        keyItem: 'Mega Anel / Mega Pulseira (Pedra Chave)',
        heldItem: 'Mega Pedra correspondente à espécie',
        badgeColor: '#e02424',
        icon: '',
        description: 'Um fenômeno misterioso que permite a certos Pokémon ultrapassarem o estágio final de evolução durante o combate, liberando energia infinita que eleva seu potencial genético ao limite máximo.',
        mechanics: [
            'Adiciona exatamente +100 pontos ao Total de Pontos de Base (BST) do Pokémon (exceto Mega Alakazam na Geração VI).',
            'Pode alterar ou adicionar uma nova tipagem elemental (ex: Charizard torna-se Fogo/Dragão no Mega Charizard X).',
            'Concede uma nova habilidade exclusiva de alto impacto (ex: Adaptabilidade, Garras Robustas, Aerilato, Seca).',
            'Permitido apenas 1 uso por equipe em cada batalha oficial.',
            'Dura até o final da partida ou até o Pokémon ser nocauteado.',
            'Rayquaza não necessita de Mega Pedra, megaevoluindo ao conhecer o movimento lendário Ascensão do Dragão.'
        ],
        featuredForms: [
            { pokemon: 'Charizard', form: 'Mega Charizard X', types: ['fire', 'dragon'], ability: 'Garras Robustas', bst: 634, stone: 'Charizardita X', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png' },
            { pokemon: 'Charizard', form: 'Mega Charizard Y', types: ['fire', 'flying'], ability: 'Seca', bst: 634, stone: 'Charizardita Y', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png' },
            { pokemon: 'Mewtwo', form: 'Mega Mewtwo X', types: ['psychic', 'fighting'], ability: 'Inabalável', bst: 780, stone: 'Mewtwonita X', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png' },
            { pokemon: 'Mewtwo', form: 'Mega Mewtwo Y', types: ['psychic'], ability: 'Insônia', bst: 780, stone: 'Mewtwonita Y', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png' },
            { pokemon: 'Lucario', form: 'Mega Lucario', types: ['fighting', 'steel'], ability: 'Adaptabilidade', bst: 625, stone: 'Lucarionita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png' },
            { pokemon: 'Gengar', form: 'Mega Gengar', types: ['ghost', 'poison'], ability: 'Marca das Sombras', bst: 600, stone: 'Gengarita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png' },
            { pokemon: 'Rayquaza', form: 'Mega Rayquaza', types: ['dragon', 'flying'], ability: 'Corrente Delta', bst: 780, stone: 'Movimento Ascensão do Dragão', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png' },
            { pokemon: 'Garchomp', form: 'Mega Garchomp', types: ['dragon', 'ground'], ability: 'Força de Areia', bst: 700, stone: 'Garchompita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png' },
            { pokemon: 'Gardevoir', form: 'Mega Gardevoir', types: ['psychic', 'fairy'], ability: 'Pele Encantada', bst: 618, stone: 'Gardevoirita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png' },
            { pokemon: 'Blaziken', form: 'Mega Blaziken', types: ['fire', 'fighting'], ability: 'Impulso de Velocidade', bst: 630, stone: 'Blazikenita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png' },
            { pokemon: 'Tyranitar', form: 'Mega Tyranitar', types: ['rock', 'dark'], ability: 'Fluxo de Areia', bst: 700, stone: 'Tyranitarita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png' },
            { pokemon: 'Salamence', form: 'Mega Salamence', types: ['dragon', 'flying'], ability: 'Aerilato', bst: 700, stone: 'Salamencita', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png' }
        ]
    },

    'z-moves': {
        id: 'z-moves',
        name: 'Movimentos Z',
        enName: 'Z-Moves',
        generation: 'Geração VII (Alola)',
        keyItem: 'Pulseira Z / Superpulseira Z',
        heldItem: 'Cristal Z correspondente',
        badgeColor: '#eab308',
        icon: '',
        description: 'Golpes de poder extraordinário desencadeados pela sincronização total entre a força de vontade do Treinador e o poder natural do Pokémon na ensolarada região de Alola.',
        mechanics: [
            'Permite executar 1 único Movimento Z avassalador por batalha.',
            'O Pokémon deve segurar o Cristal Z e conhecer pelo menos um movimento do tipo correspondente.',
            'O poder do Movimento Z é calculado com base no poder do golpe original (podendo ultrapassar 200 de Poder).',
            'Mesmo que o oponente utilize movimentos defensivos como Proteção ou Detecção, o Movimento Z atravessa a barreira causando 25% de dano residual.',
            'Existem 18 Cristais Z padrão (1 para cada tipo elemental) e 17 Cristais Z exclusivos de espécies específicas.'
        ],
        featuredForms: [
            { pokemon: 'Pikachu', move: 'Choque Catastrófico (Catastropika)', type: 'electric', power: 210, crystal: 'Pikanium Z', desc: 'Pikachu é envolvido por uma aura elétrica colossal e atirado contra o oponente com velocidade máxima.' },
            { pokemon: 'Pikachu (Boné)', move: 'Raio de 10.000.000 de Volts', type: 'electric', power: 195, crystal: 'Pikashunium Z', desc: 'Dispara 7 relâmpagos multicores com altíssima probabilidade de acerto crítico.' },
            { pokemon: 'Decidueye', move: 'Chuva de Flechas Sinistras', type: 'ghost', power: 180, crystal: 'Decidium Z', desc: 'Mergulha na sombra e dispara dezenas de flechas de penas sombrias que perfuram o oponente.' },
            { pokemon: 'Incineroar', move: 'Salto Mortal Malicioso', type: 'dark', power: 180, crystal: 'Incinium Z', desc: 'Salta em um ringue de fogo em chamas e esmaga o adversário com um golpe de luta livre devastador.' },
            { pokemon: 'Primarina', move: 'Sinfonia Oceânica', type: 'water', power: 195, crystal: 'Primarium Z', desc: 'Controla uma bolha aquática gigante com sua voz encantadora e a detona sobre o campo.' },
            { pokemon: 'Snorlax', move: 'Panqueca Esmagadora', type: 'normal', power: 210, crystal: 'Snorlium Z', desc: 'Snorlax desperta de seu sono profundo, corre com grande ímpeto e cai com todo o seu peso sobre o adversário.' },
            { pokemon: 'Mew', move: 'Supernova Gênesis', type: 'psychic', power: 185, crystal: 'Mewnium Z', desc: 'Canaliza a essência primordial do mundo Pokémon e cria um Terreno Psíquico no campo de batalha.' },
            { pokemon: 'Raichu de Alola', move: 'Surfe Elétrico Energizado', type: 'electric', power: 175, crystal: 'Aloraichium Z', desc: 'Surfa sobre sua própria cauda energizada e paralisa o adversário infalivelmente.' }
        ]
    },

    'dynamax': {
        id: 'dynamax',
        name: 'Dynamax & Gigantamax',
        enName: 'Dynamax & Gigantamax',
        generation: 'Geração VIII (Galar)',
        keyItem: 'Bracelete Dynamax',
        heldItem: 'Nenhum (mantém seu item segurado comum)',
        badgeColor: '#ec4899',
        icon: '',
        description: 'Um fenômeno exclusivo de Galar onde partículas de energia emanadas de Eternatus fazem os Pokémon atingirem dimensões monumentais, distorcendo o próprio espaço ao seu redor.',
        mechanics: [
            'Ocorre exclusivamente em Estádios Pokémon e Pontos de Energia da região de Galar.',
            'O Pokémon mantém seu item segurado (como Esfera de Vida ou Faixa da Escolha).',
            'Os Pontos de Saúde (PS) do Pokémon dobram de acordo com o seu Nível Dynamax.',
            'Dura exatamente 3 turnos seguidos por batalha.',
            'Todos os ataques ofensivos tornam-se Movimentos Max, cada um com efeito secundário positivo (invocar chuva, sol, terreno ou alterar atributos).',
            'Formas Gigantamax (G-Max): Certos indivíduos de espécies específicas recebem uma transformação visual única e um Movimento Gigantamax exclusivo com efeitos secundários devastadores.'
        ],
        featuredForms: [
            { pokemon: 'Charizard', form: 'Charizard Gigantamax', types: ['fire', 'flying'], gmaxMove: 'Incêndio G-Max', desc: 'Cria chamas eternas que causam dano contínuo de 1/6 a qualquer Pokémon que não seja do tipo Fogo por 4 turnos.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png' },
            { pokemon: 'Pikachu', form: 'Pikachu Gigantamax', types: ['electric'], gmaxMove: 'Eletrochoque G-Max', desc: 'Um choque gigantesco em formato de cauda retrô que paralisa todos os adversários em campo.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10198.png' },
            { pokemon: 'Gengar', form: 'Gengar Gigantamax', types: ['ghost', 'poison'], gmaxMove: 'Terror G-Max', desc: 'Uma boca colossal que engole o solo e impede que todos os adversários fujam ou sejam trocados.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10202.png' },
            { pokemon: 'Lapras', form: 'Lapras Gigantamax', types: ['water', 'ice'], gmaxMove: 'Ressonância G-Max', desc: 'Um canto celestial que ergue o efeito de Véu de Aurora, reduzindo pela metade todo o dano recebido por 5 turnos.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10204.png' },
            { pokemon: 'Cinderace', form: 'Cinderace Gigantamax', types: ['fire'], gmaxMove: 'Bola de Fogo G-Max', desc: 'Uma gigantesca bola de fogo que ignora completamente todas as habilidades defensivas do alvo.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10210.png' },
            { pokemon: 'Inteleon', form: 'Inteleon Gigantamax', types: ['water'], gmaxMove: 'Tiro Certeiro G-Max', desc: 'Uma torre d\'água de franco-atirador com alcance excepcional que ignora as habilidades adversárias.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10212.png' },
            { pokemon: 'Corviknight', form: 'Corviknight Gigantamax', types: ['flying', 'steel'], gmaxMove: 'Fúria dos Ventos G-Max', desc: 'Lâminas de vento colossais que varrem Refletir, Tela de Luz, Pedras Flutuantes e Espinhos do campo.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10213.png' },
            { pokemon: 'Urshifu', form: 'Urshifu Gigantamax', types: ['fighting', 'dark'], gmaxMove: 'Golpe Único G-Max', desc: 'Um punho colossal que atinge o adversário com dano total mesmo através de Proteção ou Guarda Max.', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10226.png' }
        ]
    },

    'terastallization': {
        id: 'terastallization',
        name: 'Teracristalização',
        enName: 'Terastallization',
        generation: 'Geração IX (Paldea)',
        keyItem: 'Orbe Terastal',
        heldItem: 'Nenhum (mantém seu item segurado comum)',
        badgeColor: '#38bdf8',
        icon: '',
        description: 'Um fenômeno cintilante de Paldea no qual os Pokémon brilham como gemas preciosas e ganham uma coroa de cristal na cabeça, alterando sua tipagem defensiva e potencializando seus ataques elementais.',
        mechanics: [
            'Pode ser ativado em qualquer batalha a qualquer momento, sem exigir item segurado.',
            'Dura até o final da batalha ou até o Pokémon desmaiar.',
            'Substitui a tipagem defensiva do Pokémon inteiramente pelo seu Tipo Terastal.',
            'Bônus de Bônus de Ataque do Mesmo Tipo (STAB) Adaptativo: Se o Tipo Terastal for igual ao tipo original do Pokémon, seus golpes desse tipo causam 2.0× de dano (em vez de 1.5×). Se for um tipo diferente, ele mantém o bônus de 1.5× em seus tipos originais e ganha 1.5× no novo Tipo Terastal.',
            'O movimento Explosão Terastal adota o tipo do Tipo Terastal do Pokémon e torna-se Físico ou Especial de acordo com qual atributo for superior.',
            'Tipo Estelar (Stellar Type): Introduzido em The Indigo Disk. Mantém a tipagem defensiva original do Pokémon e concede bônus de 1.2× para movimentos de todos os 18 tipos elementais uma vez por batalha (ou ilimitado para Terapagos na Forma Estelar).'
        ],
        featuredForms: [
            { name: 'Tera Fogo', type: 'fire', icon: '', effect: 'Concede imunidade a queimaduras e fortalece ataques como Lança-chamas para 2.0× de dano.' },
            { name: 'Tera Água', type: 'water', icon: '', effect: 'Remove fraquezas de Pokémon terrestres ou de fogo e amplia o poder de Surfar e Hidro Bomba.' },
            { name: 'Tera Planta', type: 'grass', icon: '', effect: 'Concede imunidade a esporos, pólen e drenagem de Semente Sanguessuga.' },
            { name: 'Tera Elétrico', type: 'electric', icon: '', effect: 'Combinado com a habilidade Levitação (ex: Mismagius), deixa o Pokémon sem nenhuma fraqueza elemental.' },
            { name: 'Tera Aço', type: 'steel', icon: '', effect: 'Uma das melhores tipagens defensivas do jogo, concedendo 10 resistências e imunidade a envenenamento.' },
            { name: 'Tera Fantasma', type: 'ghost', icon: '', effect: 'Concede imunidade instantânea a golpes de Normal e Lutador, além de imunidade a bloqueios de troca.' },
            { name: 'Tera Fada', type: 'fairy', icon: '', effect: 'Transforma dragões em fadas, garantindo imunidade total contra ataques do tipo Dragão.' },
            { name: 'Tipo Estelar', type: 'stellar', icon: '', effect: 'O ápice da Teracristalização descoberto na Área Zero. Fortalece todos os 18 tipos elementais.' }
        ]
    },

    'primal-reversion': {
        id: 'primal-reversion',
        name: 'Reversão Primitiva',
        enName: 'Primal Reversion',
        generation: 'Geração VI (Omega Ruby & Alpha Sapphire)',
        keyItem: 'Orbe Vermelho / Orbe Azul',
        heldItem: 'Orbe Vermelho (Groudon) ou Orbe Azul (Kyogre)',
        badgeColor: '#f97316',
        icon: '',
        description: 'Um retorno ancestral ao poder pleno dos titãs lendários que moldaram a terra e os mares, ativado ao reabsorver a energia da natureza primordial.',
        mechanics: [
            'Ativa-se automaticamente assim que o Pokémon entra em campo segurando seu respectivo Orbe.',
            'Não conta para o limite de 1 Mega Evolução por equipe (pode ser usado junto com uma Mega Evolução na mesma partida).',
            'Eleva o BST de Kyogre e Groudon de 670 para impressionantes 770 pontos.',
            'Groudon Primitivo adquire o tipo secundário Fogo (Fogo/Terrestre) e a habilidade Terra Desolada (Sol Extremo que evapora ataques do tipo Água).',
            'Kyogre Primitivo ganha a habilidade Mar Primordial (Chuva Torrencial que extingue completamente ataques do tipo Fogo).'
        ],
        featuredForms: [
            { pokemon: 'Groudon', form: 'Groudon Primitivo', types: ['ground', 'fire'], ability: 'Terra Desolada', bst: 770, stone: 'Orbe Vermelho', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10078.png' },
            { pokemon: 'Kyogre', form: 'Kyogre Primitivo', types: ['water'], ability: 'Mar Primordial', bst: 770, stone: 'Orbe Azul', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10077.png' }
        ]
    }
};

if (typeof module !== 'undefined') {
    module.exports = { BATTLE_GIMMICKS_DATA };
}
