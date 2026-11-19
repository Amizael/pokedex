// Controlador da Enciclopédia Pokémon: Golpes, Itens e Mecânicas Especiais de Batalha

let currentMainView = 'view-pokedex'; // 'view-pokedex' | 'view-moves' | 'view-items' | 'view-gimmicks'

// Filtros da aba Golpes
let movesSearchTerm = '';
let movesSelectedType = 'all';
let movesSelectedCategory = 'all';

// Filtros da aba Itens
let itemsSearchTerm = '';
let itemsSelectedCategory = 'all';

// Sub-aba ativa em Gimmicks
let currentGimmickSubTab = 'mega-evolution';

/**
 * Alterna entre as visões principais do site
 */
function switchMainView(viewId) {
    currentMainView = viewId;

    // Atualiza botões da navegação do site
    document.querySelectorAll('.site-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewId);
    });

    // Atualiza painéis de visão
    document.querySelectorAll('.main-view').forEach(view => {
        view.classList.toggle('active', view.id === viewId);
    });

    // Rola para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Inicializa conteúdo da visão quando acessada pela primeira vez
    if (viewId === 'view-moves') {
        renderMovesEncyclopedia();
    } else if (viewId === 'view-items') {
        renderItemsEncyclopedia();
    } else if (viewId === 'view-gimmicks') {
        renderGimmicksSection();
    }
}

/**
 * =========================================================================
 * 1. ABA GOLPES (CATÁLOGO COMPLETO DE ATAQUES)
 * =========================================================================
 */
function renderMovesEncyclopedia() {
    const container = document.getElementById('moves-encyclopedia-grid');
    const counter = document.getElementById('moves-count-label');
    if (!container || typeof ALL_MOVES_DATA === 'undefined') return;

    let moves = Object.values(ALL_MOVES_DATA);

    // Filtro de busca
    if (movesSearchTerm) {
        moves = moves.filter(m => {
            const namePt = (m.namePt || '').toLowerCase();
            const nameEn = (m.name || '').toLowerCase();
            return namePt.includes(movesSearchTerm) || nameEn.includes(movesSearchTerm);
        });
    }

    // Filtro de tipo
    if (movesSelectedType !== 'all') {
        moves = moves.filter(m => m.type === movesSelectedType);
    }

    // Filtro de categoria
    if (movesSelectedCategory !== 'all') {
        moves = moves.filter(m => m.category === movesSelectedCategory);
    }

    if (counter) {
        counter.textContent = `Exibindo ${moves.length} golpes registrados`;
    }

    if (moves.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Nenhum golpe encontrado</h3>
                <p>Nenhum ataque corresponde aos filtros selecionados.</p>
            </div>
        `;
        return;
    }

    const cardsHtml = moves.slice(0, 150).map(m => {
        const typeInfo = TYPE_INFO[m.type] || { namePt: m.type, color: '#888', textColor: '#fff' };

        let catText = 'Físico';
        let catClass = 'physical';
        if (m.category === 'special') {
            catText = 'Especial';
            catClass = 'special';
        } else if (m.category === 'status') {
            catText = 'Status';
            catClass = 'status';
        }

        const powerVal = m.power !== null && m.power !== undefined ? m.power : '—';
        const accVal = m.accuracy !== null && m.accuracy !== undefined ? `${m.accuracy}%` : '—';
        const ppVal = m.pp || '—';

        return `
            <article class="move-card-full">
                <div class="move-card-top">
                    <div class="move-title-wrap">
                        <h3 class="move-card-pt-name">${m.namePt || m.name}</h3>
                        <span class="move-card-en-name">${m.name.replace(/-/g, ' ')}</span>
                    </div>
                    <div class="move-badges-wrap">
                        <span class="type-badge" style="background-color: ${typeInfo.color}; color: ${typeInfo.textColor}">${typeInfo.namePt}</span>
                        <span class="category-badge ${catClass}">${catText}</span>
                    </div>
                </div>

                <div class="move-card-stats-row">
                    <div class="stat-pill"><span class="lbl">Poder:</span> <strong>${powerVal}</strong></div>
                    <div class="stat-pill"><span class="lbl">Precisão:</span> <strong>${accVal}</strong></div>
                    <div class="stat-pill"><span class="lbl">PP:</span> <strong>${ppVal}</strong></div>
                </div>

                <p class="move-card-desc">${m.desc || 'Efeito oficial registrado na Pokédex.'}</p>
            </article>
        `;
    }).join('');

    container.innerHTML = cardsHtml;
}

/**
 * =========================================================================
 * 2. ABA ITENS (CATÁLOGO DE ITENS OFICIAIS)
 * =========================================================================
 */
function renderItemsEncyclopedia() {
    const container = document.getElementById('items-encyclopedia-grid');
    const counter = document.getElementById('items-count-label');
    if (!container || typeof ITEMS_DATABASE === 'undefined') return;

    let items = [...ITEMS_DATABASE];

    // Filtro de busca
    if (itemsSearchTerm) {
        items = items.filter(it => {
            const namePt = (it.namePt || '').toLowerCase();
            const nameEn = (it.nameEn || '').toLowerCase();
            return namePt.includes(itemsSearchTerm) || nameEn.includes(itemsSearchTerm);
        });
    }

    // Filtro de categoria
    if (itemsSelectedCategory !== 'all') {
        items = items.filter(it => it.category === itemsSelectedCategory);
    }

    if (counter) {
        counter.textContent = `Exibindo ${items.length} itens do universo Pokémon`;
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Nenhum item encontrado</h3>
                <p>Nenhum item corresponde aos critérios de pesquisa.</p>
            </div>
        `;
        return;
    }

    const cardsHtml = items.map(it => {
        return `
            <article class="item-card-full">
                <div class="item-card-icon-box">
                    <img src="${it.image}" alt="${it.namePt}" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'" />
                </div>
                <div class="item-card-body">
                    <div class="item-card-header">
                        <h3 class="item-card-name">${it.namePt}</h3>
                        <span class="item-card-category">${it.category}</span>
                    </div>
                    <span class="item-card-en-name">${it.nameEn}</span>
                    <p class="item-card-desc">${it.desc}</p>
                </div>
            </article>
        `;
    }).join('');

    container.innerHTML = cardsHtml;
}

/**
 * =========================================================================
 * 3. ABA GIMMICKS DE BATALHA (MECÂNICAS DAS GERAÇÕES)
 * =========================================================================
 */
function renderGimmicksSection() {
    const container = document.getElementById('gimmick-detail-container');
    if (!container || typeof BATTLE_GIMMICKS_DATA === 'undefined') return;

    const data = BATTLE_GIMMICKS_DATA[currentGimmickSubTab];
    if (!data) return;

    // Atualiza botões das sub-abas
    document.querySelectorAll('.gimmick-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.gimmick === currentGimmickSubTab);
    });

    const mechanicsHtml = data.mechanics.map(m => `<li>${m}</li>`).join('');

    let formsHtml = '';
    if (data.featuredForms && data.featuredForms.length > 0) {
        formsHtml = `
            <div class="gimmick-forms-section">
                <h3 class="gimmick-forms-title">Destaques e Formas Notáveis</h3>
                <div class="gimmick-forms-grid">
                    ${data.featuredForms.map(f => {
                        const typesBadges = (f.types || []).map(t => {
                            const info = TYPE_INFO[t] || { namePt: t, color: '#777', textColor: '#fff' };
                            return `<span class="type-badge" style="background-color: ${info.color}; color: ${info.textColor}">${info.namePt}</span>`;
                        }).join('');

                        return `
                            <div class="gimmick-form-card">
                                ${f.image ? `
                                    <div class="gimmick-form-img-wrap">
                                        <img src="${f.image}" alt="${f.form || f.pokemon}" loading="lazy" />
                                    </div>
                                ` : ''}
                                <div class="gimmick-form-info">
                                    <h4 class="gimmick-form-name">${f.form || f.pokemon || f.name}</h4>
                                    ${typesBadges ? `<div class="gimmick-form-types">${typesBadges}</div>` : ''}
                                    ${f.ability ? `<p class="gimmick-form-spec"><strong>Habilidade:</strong> ${f.ability}</p>` : ''}
                                    ${f.stone ? `<p class="gimmick-form-spec"><strong>Item:</strong> ${f.stone}</p>` : ''}
                                    ${f.crystal ? `<p class="gimmick-form-spec"><strong>Cristal:</strong> ${f.crystal}</p>` : ''}
                                    ${f.gmaxMove ? `<p class="gimmick-form-spec"><strong>G-Max Move:</strong> ${f.gmaxMove}</p>` : ''}
                                    ${f.bst ? `<p class="gimmick-form-spec"><strong>BST:</strong> ${f.bst} pontos</p>` : ''}
                                    ${f.desc ? `<p class="gimmick-form-desc">${f.desc}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <article class="gimmick-main-article" style="--gimmick-color: ${data.badgeColor}">
            <header class="gimmick-header">
                <div class="gimmick-title-block">
                    <span class="gimmick-icon-badge" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>
                    </span>
                    <div>
                        <h2 class="gimmick-title">${data.name}</h2>
                        <span class="gimmick-gen-tag">${data.generation}</span>
                    </div>
                </div>
                <div class="gimmick-items-box">
                    <div class="item-tag"><strong>Item Chave:</strong> ${data.keyItem}</div>
                    <div class="item-tag"><strong>Item Segurado:</strong> ${data.heldItem}</div>
                </div>
            </header>

            <div class="gimmick-desc-box">
                <p class="gimmick-summary">${data.description}</p>
            </div>

            <div class="gimmick-rules-card">
                <h3 class="gimmick-rules-title">Regras e Funcionamento em Batalha</h3>
                <ul class="gimmick-rules-list">
                    ${mechanicsHtml}
                </ul>
            </div>

            ${formsHtml}
        </article>
    `;
}

/**
 * Alterna a sub-aba ativa na visão de Gimmicks de Batalha
 */
function switchGimmickSubTab(gimmickKey) {
    currentGimmickSubTab = gimmickKey;
    renderGimmicksSection();
}

/**
 * Inicialização dos ouvintes de eventos da enciclopédia
 */
document.addEventListener('DOMContentLoaded', () => {
    // Busca e filtros de Golpes
    const movesInput = document.getElementById('moves-search-input');
    if (movesInput) {
        movesInput.addEventListener('input', (e) => {
            movesSearchTerm = e.target.value.trim().toLowerCase();
            renderMovesEncyclopedia();
        });
    }

    const movesTypeSelect = document.getElementById('moves-type-filter');
    if (movesTypeSelect) {
        movesTypeSelect.addEventListener('change', (e) => {
            movesSelectedType = e.target.value;
            renderMovesEncyclopedia();
        });
    }

    const movesCatSelect = document.getElementById('moves-category-filter');
    if (movesCatSelect) {
        movesCatSelect.addEventListener('change', (e) => {
            movesSelectedCategory = e.target.value;
            renderMovesEncyclopedia();
        });
    }

    // Busca e filtros de Itens
    const itemsInput = document.getElementById('items-search-input');
    if (itemsInput) {
        itemsInput.addEventListener('input', (e) => {
            itemsSearchTerm = e.target.value.trim().toLowerCase();
            renderItemsEncyclopedia();
        });
    }

    const itemsCatSelect = document.getElementById('items-category-filter');
    if (itemsCatSelect) {
        itemsCatSelect.addEventListener('change', (e) => {
            itemsSelectedCategory = e.target.value;
            renderItemsEncyclopedia();
        });
    }

    // Atualiza visual ao alternar idioma
    window.addEventListener('languagechange', () => {
        if (currentMainView === 'view-moves') {
            renderMovesEncyclopedia();
        } else if (currentMainView === 'view-items') {
            renderItemsEncyclopedia();
        } else if (currentMainView === 'view-gimmicks') {
            renderGimmicksSection();
        }
    });
});

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        switchMainView,
        renderMovesEncyclopedia,
        renderItemsEncyclopedia,
        renderGimmicksSection,
        switchGimmickSubTab
    };
}
