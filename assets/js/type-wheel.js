// ==========================================================================
// RODA INTERATIVA DE TIPAGENS POKÉMON (ESTILO PINTEREST)
// Diagrama canônico com a Pokébola branca central e conexões de combate
// - Linhas Verdes: Causa dano 2× (Vantagem)
// - Linhas Vermelhas: Recebe dano 2× (Fraqueza)
// ==========================================================================

const TYPE_WHEEL_ORDER = [
    'electric',
    'normal',
    'rock',
    'ground',
    'fire',
    'fighting',
    'fairy',
    'psychic',
    'poison',
    'dragon',
    'ghost',
    'dark',
    'steel',
    'flying',
    'water',
    'ice',
    'grass',
    'bug'
];

// Configuração dimensional da roda SVG (base 600x600)
const WHEEL_CONFIG = {
    centerX: 300,
    centerY: 300,
    radius: 232,           // Raio da circunferência das esferas
    orbRadius: 28,         // Raio generoso (56px diâmetro) para alta legibilidade
    pokeballRadius: 150    // Raio da Pokébola central branca minimalista
};

/**
 * Retorna as coordenadas exatas (x, y) de um tipo na circunferência da roda
 */
function getTypeCoordinates(typeKey) {
    const index = TYPE_WHEEL_ORDER.indexOf(typeKey);
    if (index === -1) return { x: 300, y: 300, angleDeg: 0 };

    const total = TYPE_WHEEL_ORDER.length;
    // Começa às 12 horas (-90 graus) em sentido horário
    const angleDeg = (index * (360 / total)) - 90;
    const angleRad = (angleDeg * Math.PI) / 180;

    return {
        x: WHEEL_CONFIG.centerX + WHEEL_CONFIG.radius * Math.cos(angleRad),
        y: WHEEL_CONFIG.centerY + WHEEL_CONFIG.radius * Math.sin(angleRad),
        angleDeg
    };
}

/**
 * Renderiza o ícone SVG interno em vetor de cada tipo (estilo canônico de alta fidelidade)
 */
function renderTypeIconSvg(type) {
    switch (type) {
        case 'electric':
            // Raio elétrico estilizado
            return `<polygon points="2,-14 9,-2 2,-2 6,14 -8,0 -1,0" fill="#ffffff" />`;
        
        case 'normal':
            // Estrela de 6 pontas (como no Pinterest)
            return `<polygon points="0,-14 3.5,-5 12,-7 6,-0.5 11,8 2,4 0,14 -3.5,5 -12,7 -6,0.5 -11,-8 -2,-4" fill="#ffffff" />`;
        
        case 'rock':
            // Gema/rocha facetada em 3D
            return `
                <polygon points="0,-13 11,-6 11,7 0,14 -11,7 -11,-6" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linejoin="round"/>
                <line x1="0" y1="-13" x2="0" y2="14" stroke="#ffffff" stroke-width="1.8"/>
                <line x1="-11" y1="-6" x2="11" y2="7" stroke="#ffffff" stroke-width="1.8"/>
                <line x1="-11" y1="7" x2="11" y2="-6" stroke="#ffffff" stroke-width="1.8"/>
            `;
        
        case 'ground':
            // Montanha/estratos em camadas escalonadas
            return `<polygon points="-13,11 -13,4 -7,4 -7,-2 -1,-2 -1,-11 5,-11 5,1 13,1 13,11" fill="#ffffff" />`;
        
        case 'fire':
            // Chama tripla dinâmica
            return `<path d="M0,13 C-6,11 -12,5 -12,-2 C-12,-8 -8,-12 0,-16 C-2,-9 2,-8 4,-4 C6,-8 6,-12 4,-15 C10,-9 12,-3 11,3 C10,9 6,13 0,13 Z" fill="#ffffff" />`;
        
        case 'fighting':
            // Punho cerrado
            return `
                <path d="M-9,9 L-9,-1 L-5,-6 L4,-6 L9,-1 L9,9 L4,11 L-5,11 Z" fill="#ffffff" />
                <path d="M-6,0 L-6,7 M-2,0 L-2,7 M2,0 L2,7 M6,0 L6,7" stroke="#c22e28" stroke-width="2" stroke-linecap="round"/>
            `;
        
        case 'fairy':
            // Asas de fada/borboleta
            return `
                <path d="M0,3 C-4,-6 -13,-9 -10,1 C-8,7 0,12 0,12 C0,12 8,7 10,1 C13,-9 4,-6 0,3 Z" fill="#ffffff"/>
                <path d="M0,-2 C-3,-8 -11,-10 -9,-4 C-7,1 0,3 0,3 C0,3 7,1 9,-4 C11,-10 3,-8 0,-2 Z" fill="#ffffff"/>
            `;
        
        case 'psychic':
            // Olho místico com pupila
            return `
                <ellipse cx="0" cy="0" rx="13" ry="8" fill="none" stroke="#ffffff" stroke-width="2.5"/>
                <circle cx="0" cy="0" r="4" fill="#ffffff"/>
            `;
        
        case 'poison':
            // Caveira e ossos cruzados
            return `
                <circle cx="0" cy="-3.5" r="7.5" fill="#ffffff"/>
                <rect x="-4.5" y="4" width="9" height="5" rx="1.5" fill="#ffffff"/>
                <circle cx="-3" cy="-3.5" r="2" fill="#a33ea1"/>
                <circle cx="3" cy="-3.5" r="2" fill="#a33ea1"/>
                <line x1="-10" y1="10" x2="10" y2="10" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
            `;
        
        case 'dragon':
            // Garra de dragão com 3 pontas
            return `
                <path d="M-9,9 C-8,2 -10,-5 -7,-12 C-6,-7 -3,-2 -3,9 Z" fill="#ffffff"/>
                <path d="M0,10 C0,0 -1,-9 1,-15 C2,-9 4,0 4,10 Z" fill="#ffffff"/>
                <path d="M9,9 C8,2 10,-5 7,-12 C6,-7 3,-2 3,9 Z" fill="#ffffff"/>
            `;
        
        case 'ghost':
            // Espiral etérea / vórtice
            return `<path d="M0,12 C-8,12 -13,6 -13,0 C-13,-8 -6,-13 0,-13 C7,-13 12,-7 12,-1 C12,5 7,8 3,8 C-1,8 -3,5 -3,2 C-3,-1 -1,-3 1,-3" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round"/>`;
        
        case 'dark':
            // Lua crescente
            return `<path d="M4,-12 C-5,-10 -10,-3 -8,5 C-6,12 2,14 7,11 C1,11 -4,8 -5,2 C-6,-4 -2,-9 4,-12 Z" fill="#ffffff"/>`;
        
        case 'steel':
            // Porca hexagonal com parafuso
            return `
                <polygon points="-7,-11 7,-11 12,-1 7,9 -7,9 -12,-1" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linejoin="round"/>
                <circle cx="0" cy="-1" r="3.5" fill="#ffffff"/>
            `;
        
        case 'flying':
            // Nuvem alada / vento
            return `<path d="M-12,4 C-12,0 -9,-3 -6,-3 C-5,-7 -1,-10 3,-10 C8,-10 11,-7 11,-2 C13,-2 14,0 14,2 C14,6 11,8 8,8 L-10,8 C-11,8 -12,6 -12,4 Z" fill="#ffffff"/>`;
        
        case 'water':
            // Gota de água fluida
            return `<path d="M0,-14 C-2,-12 -10,-1 -10,5 C-10,11 -5,15 0,15 C5,15 10,11 10,5 C10,-1 2,-12 0,-14 Z" fill="#ffffff"/>`;
        
        case 'ice':
            // Floco de neve de 6 braços
            return `
                <line x1="0" y1="-13" x2="0" y2="13" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="-11" y1="-6.5" x2="11" y2="6.5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="-11" y1="6.5" x2="11" y2="-6.5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
            `;
        
        case 'grass':
            // Folha com nervura
            return `
                <path d="M-11,11 C-10,-3 3,-12 12,-12 C11,4 -3,12 -11,11 Z" fill="#ffffff"/>
                <line x1="-8" y1="8" x2="6" y2="-6" stroke="#7ac74c" stroke-width="2" stroke-linecap="round"/>
            `;
        
        case 'bug':
            // Colmeia / favo de mel (3 hexágonos)
            return `
                <polygon points="0,-13 5,-10 5,-5 0,-2 -5,-5 -5,-10" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
                <polygon points="-6,-3 -1,0 -1,5 -6,8 -11,5 -11,0" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
                <polygon points="6,-3 11,0 11,5 6,8 1,5 1,0" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
            `;
        
        default:
            return `<circle r="6" fill="#ffffff" />`;
    }
}

/**
 * Renderiza todo o componente SVG da Roda de Tipos
 */
function renderTypeWheelSvg() {
    const container = document.getElementById('type-wheel-container');
    if (!container) return;

    const activeType = selectedType !== 'all' ? selectedType : null;
    const activeInfo = activeType ? TYPE_INFO[activeType] : null;

    // Calcula tipos com vantagem ofensiva (causa 2x) e fraqueza defensiva (recebe 2x)
    let strongAgainst = [];
    let weakAgainst = [];

    if (activeType) {
        // Causa dano 2x (Atacante = activeType)
        if (TYPE_CHART[activeType]) {
            strongAgainst = Object.entries(TYPE_CHART[activeType])
                .filter(([defType, mult]) => mult >= 2)
                .map(([defType]) => defType);
        }

        // Recebe dano 2x (Defensor = activeType)
        weakAgainst = ALL_TYPES.filter(atkType => {
            return TYPE_CHART[atkType] && TYPE_CHART[atkType][activeType] >= 2;
        });
    }

    // Coordenadas centrais do tipo selecionado
    const activeCoords = activeType ? getTypeCoordinates(activeType) : null;

    // Linhas verdes (Vantagem ofensiva 2x)
    const greenLinesHtml = (activeCoords && strongAgainst.length > 0)
        ? strongAgainst.map(t => {
            const target = getTypeCoordinates(t);
            return `
                <line x1="${activeCoords.x}" y1="${activeCoords.y}" x2="${target.x}" y2="${target.y}"
                      class="wheel-relation-line green" />
            `;
        }).join('')
        : '';

    // Linhas vermelhas (Fraqueza defensiva 2x)
    const redLinesHtml = (activeCoords && weakAgainst.length > 0)
        ? weakAgainst.map(t => {
            const target = getTypeCoordinates(t);
            return `
                <line x1="${activeCoords.x}" y1="${activeCoords.y}" x2="${target.x}" y2="${target.y}"
                      class="wheel-relation-line red" />
            `;
        }).join('')
        : '';

    // Anéis de brilho sob as esferas conectadas
    const targetGlowsHtml = activeCoords ? `
        ${strongAgainst.map(t => {
            const c = getTypeCoordinates(t);
            return `<circle cx="${c.x}" cy="${c.y}" r="34" fill="#22c55e" fill-opacity="0.3" stroke="#22c55e" stroke-width="2.5" class="target-glow-ring green" />`;
        }).join('')}
        ${weakAgainst.map(t => {
            const c = getTypeCoordinates(t);
            return `<circle cx="${c.x}" cy="${c.y}" r="34" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="2.5" class="target-glow-ring red" />`;
        }).join('')}
    ` : '';

    // Orbs das 18 tipagens
    const orbsHtml = TYPE_WHEEL_ORDER.map(t => {
        const coords = getTypeCoordinates(t);
        const info = TYPE_INFO[t] || { namePt: t, color: '#777' };
        const isSelected = activeType === t;
        const isStrong = strongAgainst.includes(t);
        const isWeak = weakAgainst.includes(t);

        let orbClass = 'type-wheel-orb';
        if (isSelected) orbClass += ' active-selected';
        else if (isStrong) orbClass += ' target-strong';
        else if (isWeak) orbClass += ' target-weak';

        return `
            <g class="${orbClass}"
               transform="translate(${coords.x}, ${coords.y})"
               onclick="onTypeWheelClick('${t}')"
               style="--orb-color: ${info.color}"
               data-type="${t}">
                
                <!-- Anel de destaque animado para a esfera selecionada -->
                ${isSelected ? `
                    <circle cx="0" cy="0" r="37" fill="none" stroke="#ffffff" stroke-width="2.5" class="orb-aura-selected" stroke-dasharray="6 3" />
                    <circle cx="0" cy="0" r="42" fill="none" stroke="${info.color}" stroke-width="2" class="orb-aura-pulse" />
                ` : ''}

                <!-- Grupo interno centrado em (0, 0) para escalar sem deslocar coordenadas -->
                <g class="orb-inner">
                    <!-- Esfera base com a cor do tipo -->
                    <circle cx="0" cy="0" r="${WHEEL_CONFIG.orbRadius}" fill="${info.color}" class="orb-base-circle" />
                    
                    <!-- Volume 3D e sombra esférica realista -->
                    <circle cx="0" cy="0" r="${WHEEL_CONFIG.orbRadius}" fill="url(#orb-3d-shading)" />
                    
                    <!-- Anel de vidro interno -->
                    <circle cx="0" cy="0" r="${WHEEL_CONFIG.orbRadius - 1.5}" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />
                    
                    <!-- Brilho especular superior (estilo gota de vidro translúcido) -->
                    <ellipse cx="0" cy="-11" rx="17" ry="8" fill="url(#orb-specular-gloss)" />
                    
                    <!-- Ícone em vetor branco nítido -->
                    <g class="orb-icon-group">
                        ${renderTypeIconSvg(t)}
                    </g>
                </g>
                <title>${info.namePt}</title>
            </g>
        `;
    }).join('');

    // Conteúdo da Pokébola Central (Idêntica ao modelo canônico Pinterest)
    let centerPokeballHtml = '';
    if (!activeType) {
        centerPokeballHtml = `
            <g class="pokeball-center-group" onclick="resetTypeWheel()">
                <!-- Pokébola Branca Minimalista (Pinterest) -->
                <g clip-path="url(#pokeball-circle-clip)">
                    <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" fill="#ffffff" />
                    <rect x="140" y="291" width="320" height="18" fill="#121212" />
                    <circle cx="300" cy="300" r="58" fill="#121212" />
                </g>
                <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="2" />
                
                <!-- Botão central da Pokébola -->
                <circle cx="300" cy="300" r="42" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="pokeball-btn-pulse" />
                <circle cx="300" cy="300" r="30" fill="none" stroke="#cccccc" stroke-width="1.2" />

                <!-- Rótulo de instrução discreto e elegante -->
                <text x="300" y="240" text-anchor="middle" class="wheel-pokeball-title" fill="#1e1e1e">RODA DE TIPAGENS</text>
                <text x="300" y="375" text-anchor="middle" class="wheel-pokeball-hint" fill="#444444">Clique num tipo ao redor</text>
            </g>
        `;
    } else {
        centerPokeballHtml = `
            <g class="pokeball-center-group has-active">
                <!-- Pokébola com o corte minimalista preservado -->
                <g clip-path="url(#pokeball-circle-clip)">
                    <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" fill="#ffffff" />
                    <rect x="140" y="291" width="320" height="18" fill="#121212" />
                    <circle cx="300" cy="300" r="58" fill="#121212" />
                </g>
                <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" fill="none" stroke="${activeInfo.color}" stroke-width="3" />

                <!-- Topo da Pokébola: Nome do Tipo e Vantagens Ofensivas -->
                <text x="300" y="210" text-anchor="middle" class="wheel-active-name" fill="#111111">
                    ${activeInfo.namePt.toUpperCase()}
                </text>
                <text x="300" y="238" text-anchor="middle" class="wheel-active-stat strong" fill="#15803d">
                    Causa 2× (Vantagem): ${strongAgainst.length} tipos
                </text>

                <!-- Botão central iluminado com o ícone e a cor da tipagem ativa -->
                <circle cx="300" cy="300" r="42" fill="${activeInfo.color}" stroke="#ffffff" stroke-width="2.5" class="wheel-center-active-btn" />
                <circle cx="300" cy="300" r="42" fill="url(#orb-3d-shading)" />
                <ellipse cx="300" cy="284" rx="25" ry="11" fill="url(#orb-specular-gloss)" />
                <g transform="translate(300, 300) scale(1.15)">
                    ${renderTypeIconSvg(activeType)}
                </g>

                <!-- Base da Pokébola: Fraquezas Defensivas e Botão de Limpar -->
                <text x="300" y="362" text-anchor="middle" class="wheel-active-stat weak" fill="#b91c1c">
                    Recebe 2× (Fraqueza): ${weakAgainst.length} tipos
                </text>

                <!-- Botão interativo para limpar o filtro -->
                <g class="wheel-clear-btn" onclick="resetTypeWheel()">
                    <rect x="225" y="386" width="150" height="30" rx="15" fill="#222222" stroke="#444444" stroke-width="1.5" />
                    <text x="300" y="406" text-anchor="middle" fill="#ffffff" class="wheel-clear-text">✕ Limpar Seleção</text>
                </g>
            </g>
        `;
    }

    container.innerHTML = `
        <div class="type-wheel-wrapper">
            <svg viewBox="0 0 600 600" class="type-wheel-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <!-- Fundo circular com degradê escuro profundo -->
                    <radialGradient id="wheel-bg-rad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#242424" />
                        <stop offset="65%" stop-color="#121212" />
                        <stop offset="100%" stop-color="#050505" />
                    </radialGradient>

                    <!-- Volume 3D e sombra esférica realista para esferas de vidro -->
                    <radialGradient id="orb-3d-shading" cx="35%" cy="30%" r="70%">
                        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
                        <stop offset="45%" stop-color="#ffffff" stop-opacity="0"/>
                        <stop offset="85%" stop-color="#000000" stop-opacity="0.45"/>
                        <stop offset="100%" stop-color="#000000" stop-opacity="0.75"/>
                    </radialGradient>

                    <!-- Brilho especular superior (efeito de vidro translúcido) -->
                    <linearGradient id="orb-specular-gloss" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
                        <stop offset="40%" stop-color="#ffffff" stop-opacity="0.3"/>
                        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                    </linearGradient>

                    <!-- ClipPath para a Pokébola central -->
                    <clipPath id="pokeball-circle-clip">
                        <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" />
                    </clipPath>
                </defs>

                <!-- Fundo circular escuro com borda metálica -->
                <circle cx="300" cy="300" r="294" fill="url(#wheel-bg-rad)" stroke="#222222" stroke-width="2" />
                
                <!-- Guia sutil da órbita das esferas -->
                <circle cx="300" cy="300" r="${WHEEL_CONFIG.radius}" fill="none" stroke="#252525" stroke-width="1.5" stroke-dasharray="4 6" />

                <!-- Pokébola Central e Painel de Informações -->
                ${centerPokeballHtml}

                <!-- Linhas Verdes e Vermelhas de Relações de Combate (desenhadas sob as esferas) -->
                <g class="wheel-lines-group">
                    ${greenLinesHtml}
                    ${redLinesHtml}
                </g>

                <!-- Brilhos sob as esferas conectadas -->
                <g class="wheel-target-glows">
                    ${targetGlowsHtml}
                </g>

                <!-- As 18 Esferas de Vidro das Tipagens Pokémon -->
                <g class="wheel-orbs-group">
                    ${orbsHtml}
                </g>
            </svg>

            <!-- Barra de Legenda Oficial -->
            <div class="wheel-legend-bar">
                <div class="legend-item">
                    <span class="legend-dot green"></span>
                    <span>Linha Verde: Causa 2× (Vantagem)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-dot red"></span>
                    <span>Linha Vermelha: Recebe 2× (Fraqueza)</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Evento de clique em uma das 18 esferas da roda
 */
function onTypeWheelClick(typeKey) {
    if (selectedType === typeKey) {
        selectedType = 'all';
    } else {
        selectedType = typeKey;
    }

    displayedLimit = ITEMS_PER_PAGE;
    renderTypeWheelSvg();

    // Sincroniza também com os botões lineares de tipo se existirem
    document.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === selectedType);
    });

    applyFiltersAndRender();
}

/**
 * Reseta a roda de tipos para exibir todos os Pokémon
 */
function resetTypeWheel() {
    selectedType = 'all';
    displayedLimit = ITEMS_PER_PAGE;
    renderTypeWheelSvg();

    document.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === 'all');
    });

    applyFiltersAndRender();
}

if (typeof module !== 'undefined') {
    module.exports = { renderTypeWheelSvg, onTypeWheelClick, resetTypeWheel };
}
