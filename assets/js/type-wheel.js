// Roda Interativa Circular de Tipagens Pokémon
// Baseada no diagrama canônico de tipos com a Pokébola central e linhas de conexões de combate
// Linhas Verdes: Causa dano super-efetivo (2×)
// Linhas Vermelhas: Recebe dano super-efetivo (2×)

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

// Posições pré-calculadas na circunferência
const WHEEL_CONFIG = {
    centerX: 300,
    centerY: 300,
    radius: 228,
    orbRadius: 22,
    pokeballRadius: 145
};

/**
 * Retorna as coordenadas (x, y) de um tipo na roda
 */
function getTypeCoordinates(typeKey) {
    const index = TYPE_WHEEL_ORDER.indexOf(typeKey);
    if (index === -1) return { x: 300, y: 300 };

    const total = TYPE_WHEEL_ORDER.length;
    // Começa às 12 horas (-90 graus)
    const angleDeg = (index * (360 / total)) - 90;
    const angleRad = (angleDeg * Math.PI) / 180;

    return {
        x: WHEEL_CONFIG.centerX + WHEEL_CONFIG.radius * Math.cos(angleRad),
        y: WHEEL_CONFIG.centerY + WHEEL_CONFIG.radius * Math.sin(angleRad),
        angleDeg
    };
}

/**
 * Renderiza o ícone SVG interno de cada tipo
 */
function renderTypeIconSvg(type) {
    switch (type) {
        case 'electric':
            return `<polygon points="0,-10 4,-1 -2,-1 3,10 -4,1 1,1" fill="#ffffff" />`;
        case 'fire':
            return `<path d="M0,10 C-4,8 -7,4 -7,0 C-7,-4 -3,-8 0,-11 C-1,-6 2,-5 3,-3 C5,-5 5,-8 4,-10 C7,-6 8,-1 7,2 C6,7 3,9 0,10 Z" fill="#ffffff" />`;
        case 'water':
            return `<path d="M0,-10 C-1,-8 -6,0 -6,4 C-6,8 -3,10 0,10 C3,10 6,8 6,4 C6,0 1,-8 0,-10 Z" fill="#ffffff" />`;
        case 'grass':
            return `<path d="M-7,7 C-6,-3 2,-9 7,-9 C6,2 -2,8 -7,7 Z M-4,4 L3,-3" stroke="#ffffff" stroke-width="1.5" fill="#ffffff" />`;
        case 'normal':
            return `<circle r="4" fill="#ffffff"/><circle r="7.5" fill="none" stroke="#ffffff" stroke-width="1.5"/>`;
        case 'ice':
            return `<line x1="0" y1="-8" x2="0" y2="8" stroke="#ffffff" stroke-width="2"/><line x1="-7" y1="-4" x2="7" y2="4" stroke="#ffffff" stroke-width="2"/><line x1="-7" y1="4" x2="7" y2="-4" stroke="#ffffff" stroke-width="2"/>`;
        case 'fighting':
            return `<path d="M-5,5 L-5,-2 L-2,-5 L2,-5 L5,-2 L5,5 Z M-2,-2 L-2,3 M2,-2 L2,3" fill="#ffffff" />`;
        case 'poison':
            return `<circle r="5" fill="#ffffff" cy="-1.5"/><rect x="-3.5" y="2" width="7" height="4" rx="1.5" fill="#ffffff"/><circle cx="-2" cy="-1.5" r="1.2" fill="#7b2cbf"/><circle cx="2" cy="-1.5" r="1.2" fill="#7b2cbf"/>`;
        case 'ground':
            return `<polygon points="-7,6 -2,-5 2,-5 7,6" fill="#ffffff"/>`;
        case 'flying':
            return `<path d="M-7,2 Q-3,-5 0,-2 Q3,-5 7,2 Q0,-2 -7,2 Z" fill="#ffffff" />`;
        case 'psychic':
            return `<ellipse rx="7" ry="4.5" fill="none" stroke="#ffffff" stroke-width="2"/><circle r="2.2" fill="#ffffff"/>`;
        case 'bug':
            return `<ellipse rx="3.5" ry="5.5" fill="#ffffff"/><circle cx="0" cy="-5" r="2.5" fill="#ffffff"/>`;
        case 'rock':
            return `<polygon points="0,-7 6,-3 4,6 -4,6 -6,-3" fill="#ffffff"/>`;
        case 'ghost':
            return `<path d="M-5,6 C-6,0 -5,-6 0,-6 C5,-6 6,0 5,6 C3,4 2,6 0,4 C-2,6 -3,4 -5,6 Z" fill="#ffffff"/>`;
        case 'dragon':
            return `<path d="M-5,5 Q-2,-3 0,-6 Q2,-3 5,5 Q0,2 -5,5 Z" fill="#ffffff"/>`;
        case 'steel':
            return `<polygon points="-6,-3.5 0,-7 6,-3.5 6,3.5 0,7 -6,3.5" fill="none" stroke="#ffffff" stroke-width="2"/><circle r="2" fill="#ffffff"/>`;
        case 'fairy':
            return `<path d="M0,0 C-5,-7 -7,-2 0,6 C7,-2 5,-7 0,0 Z" fill="#ffffff"/>`;
        case 'dark':
            return `<path d="M2,-6 C-3,-5 -5,0 -2,5 C-6,3 -7,-3 -2,-6 Z" fill="#ffffff"/>`;
        default:
            return `<circle r="5" fill="#ffffff" />`;
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

    // Calcula tipos fortes (causa 2x) e tipos fracos (recebe 2x)
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

    // Coordenadas do tipo selecionado
    const activeCoords = activeType ? getTypeCoordinates(activeType) : null;

    // Linhas verdes (Vantagem ofensiva 2x)
    const greenLinesHtml = (activeCoords && strongAgainst.length > 0)
        ? strongAgainst.map(t => {
            const target = getTypeCoordinates(t);
            return `
                <line x1="${activeCoords.x}" y1="${activeCoords.y}" x2="${target.x}" y2="${target.y}"
                      stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" class="wheel-relation-line green" />
            `;
        }).join('')
        : '';

    // Linhas vermelhas (Fraqueza defensiva 2x)
    const redLinesHtml = (activeCoords && weakAgainst.length > 0)
        ? weakAgainst.map(t => {
            const target = getTypeCoordinates(t);
            return `
                <line x1="${activeCoords.x}" y1="${activeCoords.y}" x2="${target.x}" y2="${target.y}"
                      stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" class="wheel-relation-line red" />
            `;
        }).join('')
        : '';

    // Orbs dos 18 tipos
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
            <g class="${orbClass}" transform="translate(${coords.x}, ${coords.y})" onclick="onTypeWheelClick('${t}')" style="--orb-color: ${info.color}">
                <!-- Círculo externo brilhante -->
                <circle r="${WHEEL_CONFIG.orbRadius}" fill="${info.color}" class="orb-bg-circle" />
                <circle r="${WHEEL_CONFIG.orbRadius - 2}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" />
                <!-- Brilho glossy superior -->
                <ellipse cx="0" cy="-9" rx="12" ry="5" fill="rgba(255,255,255,0.35)" />
                <!-- Ícone central -->
                ${renderTypeIconSvg(t)}
                <!-- Rótulo de título flutuante -->
                <title>${info.namePt}</title>
            </g>
        `;
    }).join('');

    // Conteúdo da Pokébola Central
    let centerContentHtml = '';
    if (!activeType) {
        centerContentHtml = `
            <g class="pokeball-center-group" onclick="resetTypeWheel()">
                <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" fill="#181818" stroke="#333" stroke-width="4" />
                <!-- Top Half White Pokéball Silhouette -->
                <path d="M 160 300 A 140 140 0 0 1 440 300 Z" fill="#ffffff" opacity="0.95" />
                <!-- Bottom Half White Pokéball Silhouette -->
                <path d="M 160 300 A 140 140 0 0 0 440 300 Z" fill="#ffffff" opacity="0.95" />
                <!-- Black Belt -->
                <rect x="160" y="292" width="280" height="16" fill="#181818" />
                <!-- Center Pokéball Button -->
                <circle cx="300" cy="300" r="46" fill="#ffffff" stroke="#181818" stroke-width="12" />
                <circle cx="300" cy="300" r="22" fill="#ffffff" stroke="#333" stroke-width="3" />
                
                <!-- Text Instruction -->
                <text x="300" y="235" text-anchor="middle" class="wheel-text-sub" fill="#181818">FILTRO INTERATIVO</text>
                <text x="300" y="375" text-anchor="middle" class="wheel-text-hint" fill="#181818">Clique num tipo</text>
            </g>
        `;
    } else {
        centerContentHtml = `
            <g class="pokeball-center-group active" onclick="resetTypeWheel()">
                <circle cx="300" cy="300" r="${WHEEL_CONFIG.pokeballRadius}" fill="#1e1e1e" stroke="${activeInfo.color}" stroke-width="4" />
                
                <!-- Top Badge Color Glow -->
                <circle cx="300" cy="225" r="28" fill="${activeInfo.color}" class="center-type-badge-glow" />
                <g transform="translate(300, 225)">
                    ${renderTypeIconSvg(activeType)}
                </g>

                <!-- Type Name -->
                <text x="300" y="278" text-anchor="middle" class="wheel-text-title" fill="#ffffff">
                    ${activeInfo.namePt.toUpperCase()}
                </text>

                <!-- Relations Summary -->
                <text x="300" y="306" text-anchor="middle" class="wheel-text-strong" fill="#22c55e">
                    Vantagem contra ${strongAgainst.length} tipos
                </text>
                <text x="300" y="328" text-anchor="middle" class="wheel-text-weak" fill="#ef4444">
                    Fraqueza contra ${weakAgainst.length} tipos
                </text>

                <!-- Reset Button -->
                <rect x="230" y="350" width="140" height="28" rx="14" fill="#333" stroke="#555" stroke-width="1" class="wheel-reset-pill" />
                <text x="300" y="369" text-anchor="middle" class="wheel-text-reset" fill="#ccc">Limpar filtro</text>
            </g>
        `;
    }

    container.innerHTML = `
        <div class="type-wheel-wrapper">
            <svg viewBox="0 0 600 600" class="type-wheel-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <!-- Fundo Circular Escuro -->
                <circle cx="300" cy="300" r="290" fill="#0d0d0d" stroke="#262626" stroke-width="2" />
                <circle cx="300" cy="300" r="${WHEEL_CONFIG.radius}" fill="none" stroke="#222" stroke-width="1.5" stroke-dasharray="4 6" />

                <!-- Pokébola Central e Painel de Info -->
                ${centerContentHtml}

                <!-- Linhas Verdes (Vantagem) -->
                <g class="wheel-lines-group" filter="url(#glow-green)">
                    ${greenLinesHtml}
                </g>

                <!-- Linhas Vermelhas (Fraqueza) -->
                <g class="wheel-lines-group" filter="url(#glow-red)">
                    ${redLinesHtml}
                </g>

                <!-- Orbs dos 18 Tipos -->
                <g class="wheel-orbs-group">
                    ${orbsHtml}
                </g>
            </svg>

            <!-- Legenda da Roda de Tipos -->
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
 * Clique em um orb da roda de tipos
 */
function onTypeWheelClick(typeKey) {
    if (selectedType === typeKey) {
        selectedType = 'all';
    } else {
        selectedType = typeKey;
    }

    displayedLimit = ITEMS_PER_PAGE;
    renderTypeWheelSvg();

    // Sincroniza também com os botões lineares de tipo se visíveis
    document.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === selectedType);
    });

    applyFiltersAndRender();
}

/**
 * Reseta a roda de tipos para exibir todos os tipos
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
