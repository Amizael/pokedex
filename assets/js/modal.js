// Controle e Renderização do Modal de Detalhes da Pokédex (Estilo Oficial com 3 Abas • Gerações I a IX)

let currentModalPokemonId = null;
let currentModalPokemon = null;
let currentModalSpeciesData = null;
let activeModalFormVariant = null;
let currentActiveTab = 'tab-overview'; // 'tab-overview' | 'tab-matchups' | 'tab-moves'
let currentMoveFilter = 'all';
let currentModalMovesGen = 1;
let currentModalMovesData = null;
let currentMatchupScope = 'gen'; // 'gen' (geração atual) | 'all' (todas as 9 gerações)

/**
 * Seleciona uma variante/forma alternativa do Pokémon no modal
 */
function selectModalFormVariant(formId) {
    activeModalFormVariant = formId;
    if (currentModalPokemon) {
        renderModalContent(currentModalPokemon, currentModalSpeciesData);
    }
}

/**
 * Atualiza o conteúdo do modal ativo (usado pelo I18nController ao trocar idioma)
 */
function refreshActiveModalContent() {
    const modalElement = document.getElementById('pokemon-modal');
    if (modalElement && modalElement.classList.contains('open') && currentModalPokemon) {
        renderModalContent(currentModalPokemon, currentModalSpeciesData);
        if (currentActiveTab === 'tab-moves') {
            renderMovesPanelContent();
        }
    }
}

/**
 * Abre o modal de detalhes do Pokémon
 */
async function openPokemonModal(pokemonId) {
    const numId = parseInt(pokemonId, 10);
    if (!numId || numId < 1 || numId > 1025) return;

    currentModalPokemonId = numId;
    activeModalFormVariant = null;
    const modalElement = document.getElementById('pokemon-modal');
    const modalBody = document.getElementById('modal-body-content');

    if (!modalElement || !modalBody) return;

    // Exibe o modal com indicador de carregamento
    modalElement.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Busca o Pokémon do catálogo geral
    const pokemon = (window.allPokemons || []).find(p => p.id === numId) ||
                    (typeof ALL_POKEMONS !== 'undefined' ? ALL_POKEMONS.find(p => p.id === numId) : null);

    currentModalPokemon = pokemon;
    currentModalSpeciesData = null;

    if (!pokemon) {
        modalBody.innerHTML = `
            <div class="modal-loading">
                <div class="pokeball-spinner"></div>
                <p>Carregando informações do Pokémon...</p>
            </div>
        `;
        return;
    }

    // Define a geração padrão dos ataques: geração do próprio Pokémon ou a geração ativa nos filtros
    currentModalMovesGen = pokemon.generation || 1;
    currentMoveFilter = 'all';

    // Renderiza a estrutura básica imediatamente
    renderModalContent(pokemon, null);

    // Carrega ataques da geração inicial
    loadModalMoves(numId, currentModalMovesGen);

    // Carrega dados adicionais de espécie e evolução assincronamente
    try {
        const speciesData = await POKE_API.getSpeciesAndEvolution(numId);
        if (currentModalPokemonId === numId) {
            currentModalSpeciesData = speciesData;
            renderModalContent(pokemon, speciesData);
            renderMovesPanelContent();
        }
    } catch (err) {
        console.error('Erro ao buscar dados complementares do modal:', err);
    }
}

/**
 * Fecha o modal de detalhes
 */
function closePokemonModal() {
    const modalElement = document.getElementById('pokemon-modal');
    if (modalElement) {
        modalElement.classList.remove('open');
    }
    document.body.style.overflow = '';
    currentModalPokemonId = null;
    currentModalPokemon = null;
    currentModalSpeciesData = null;
    currentModalMovesData = null;
    activeModalFormVariant = null;
}

/**
 * Navega para o Pokémon anterior ou próximo
 */
function navigateModalPokemon(direction) {
    if (!currentModalPokemonId) return;
    const nextId = currentModalPokemonId + direction;
    if (nextId >= 1 && nextId <= 1025) {
        activeModalFormVariant = null;
        openPokemonModal(nextId);
    }
}

/**
 * Alterna entre as abas do modal
 */
function switchModalTab(tabId) {
    currentActiveTab = tabId;

    // Atualiza botões das abas
    document.querySelectorAll('.modal-tab-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Atualiza painéis das abas
    document.querySelectorAll('.modal-tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === tabId);
    });
}

/**
 * Alterna o escopo de confrontos na Aba 2 (Geração Atual vs Todas as Gerações)
 */
function setMatchupScope(scope) {
    currentMatchupScope = scope;
    const pokemon = (window.allPokemons || []).find(p => p.id === currentModalPokemonId);
    if (!pokemon) return;

    const list = scope === 'gen'
        ? (window.allPokemons || []).filter(p => p.generation === pokemon.generation)
        : (window.allPokemons || []);

    const matchups = calculatePokemonMatchups(pokemon, list);

    // Atualiza fitas
    const strongContainer = document.getElementById('matchup-strong-container');
    const weakContainer = document.getElementById('matchup-weak-container');
    const strongCounter = document.getElementById('matchup-strong-count');
    const weakCounter = document.getElementById('matchup-weak-count');

    if (strongContainer) {
        strongContainer.innerHTML = renderMatchupRibbon(matchups.strongAgainst, 'strong', 'ribbon-strong');
    }
    if (weakContainer) {
        weakContainer.innerHTML = renderMatchupRibbon(matchups.weakAgainst, 'weak', 'ribbon-weak');
    }
    if (strongCounter) strongCounter.textContent = `${matchups.strongAgainst.length} Pokémon`;
    if (weakCounter) weakCounter.textContent = `${matchups.weakAgainst.length} Pokémon`;

    // Atualiza botões de escopo
    document.querySelectorAll('.matchup-scope-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.scope === scope);
    });
}

/**
 * Carrega e atualiza a lista de movimentos para a geração selecionada no modal
 */
async function loadModalMoves(pokemonId, generationId) {
    currentModalMovesData = { loading: true, moves: [] };
    renderMovesPanelContent();

    try {
        const result = await POKE_API.getPokemonMoves(pokemonId, generationId);
        if (currentModalPokemonId === pokemonId) {
            currentModalMovesData = result;
            renderMovesPanelContent();
        }
    } catch (err) {
        console.error('Erro ao buscar movimentos da geração:', err);
        currentModalMovesData = { notAvailable: false, moves: [] };
        renderMovesPanelContent();
    }
}

/**
 * Manipulador da troca de geração no seletor de ataques
 */
function onModalMovesGenChange(genId) {
    currentModalMovesGen = parseInt(genId, 10);
    currentMoveFilter = 'all';
    if (currentModalPokemonId) {
        loadModalMoves(currentModalPokemonId, currentModalMovesGen);
    }
}

/**
 * Filtra a lista de golpes por método de aprendizado (Nível, MT/MO, Tutor, Ovo)
 */
function filterMovesList(method) {
    currentMoveFilter = method;

    // Atualiza pílulas de filtro
    document.querySelectorAll('.move-filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.method === method);
    });

    // Atualiza visibilidade dos golpes
    const rows = document.querySelectorAll('.move-item-row');
    let visibleCount = 0;

    rows.forEach(row => {
        const rowMethod = row.dataset.method;
        const matches = (method === 'all' || rowMethod === method);
        row.style.display = matches ? 'flex' : 'none';
        if (matches) visibleCount++;
    });

    const emptyBox = document.getElementById('empty-moves-filtered');
    if (emptyBox) {
        emptyBox.style.display = (visibleCount === 0 && rows.length > 0) ? 'block' : 'none';
    }
}

/**
 * Renderiza o conteúdo dinâmico da Aba 3 (Ataques)
 */
function renderMovesPanelContent() {
    const movesContainer = document.getElementById('moves-panel-dynamic-content');
    if (!movesContainer) return;

    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();

    if (!currentModalMovesData || currentModalMovesData.loading) {
        movesContainer.innerHTML = `
            <div class="modal-loading-moves">
                <div class="pokeball-spinner small"></div>
                <p>${isEn ? 'Querying official Pokédex files for this generation...' : 'Consultando dados oficiais da Pokédex para esta geração...'}</p>
            </div>
        `;
        return;
    }

    const pokemon = (window.allPokemons || []).find(p => p.id === currentModalPokemonId);
    const genConfig = GENERATIONS_CONFIG[currentModalMovesGen] || GENERATIONS_CONFIG[1];
    const pokemonName = isEn ? (pokemon?.name?.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') || 'This Pokémon') : (pokemon?.displayName || pokemon?.name || 'Este Pokémon');

    // Se o Pokémon não existia nesta geração
    if (currentModalMovesData.notAvailable) {
        const introducedInfo = GENERATIONS_CONFIG[currentModalMovesData.introducedGen] || { name: `Geração ${currentModalMovesData.introducedGen}`, roman: String(currentModalMovesData.introducedGen) };
        movesContainer.innerHTML = `
            <div class="empty-moves-unavailable">
                <div class="unavailable-icon">i</div>
                <h4>${isEn ? 'Not available in this generation' : 'Não disponível nesta geração'}</h4>
                <p>${isEn 
                    ? `<strong>${pokemonName}</strong> was introduced in <strong>Generation ${introducedInfo.roman} (${introducedInfo.name})</strong> and did not exist in <strong>Generation ${genConfig.roman} (${genConfig.mainGames})</strong>.` 
                    : `<strong>${pokemonName}</strong> foi introduzido oficialmente na <strong>${introducedInfo.roman}ª Geração (${introducedInfo.name})</strong> e não existia nos jogos da <strong>${genConfig.roman}ª Geração (${genConfig.mainGames})</strong>.`}</p>
                <button type="button" class="btn-jump-gen" onclick="document.getElementById('moves-gen-select').value = '${pokemon?.generation || 1}'; onModalMovesGenChange(${pokemon?.generation || 1})">
                    ${isEn ? `View moves in Generation ${introducedInfo.roman} (${introducedInfo.name})` : `Ver ataques na ${introducedInfo.roman}ª Geração (${introducedInfo.name})`}
                </button>
            </div>
        `;
        return;
    }

    const allMoves = currentModalMovesData.moves || [];
    const levelMovesCount = allMoves.filter(m => m.method === 'level-up').length;
    const machineMovesCount = allMoves.filter(m => m.method === 'machine').length;
    const tutorMovesCount = allMoves.filter(m => m.method === 'tutor').length;
    const eggMovesCount = allMoves.filter(m => m.method === 'egg').length;

    const movesListHtml = renderMovesList(allMoves);

    movesContainer.innerHTML = `
        <!-- Filtros de Método de Aprendizado -->
        <div class="moves-filter-bar">
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'all' ? 'active' : ''}" data-method="all" onclick="filterMovesList('all')">
                ${isEn ? 'All' : 'Todos'} (${allMoves.length})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'level-up' ? 'active' : ''}" data-method="level-up" onclick="filterMovesList('level-up')">
                ${isEn ? 'Level Up' : 'Por Nível'} (${levelMovesCount})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'machine' ? 'active' : ''}" data-method="machine" onclick="filterMovesList('machine')">
                ${isEn ? 'TM / HM' : 'Por MT / MO'} (${machineMovesCount})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'tutor' ? 'active' : ''}" data-method="tutor" onclick="filterMovesList('tutor')">
                ${isEn ? 'Move Tutor' : 'Tutor'} (${tutorMovesCount})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'egg' ? 'active' : ''}" data-method="egg" onclick="filterMovesList('egg')">
                ${isEn ? 'Egg Moves' : 'Ovo'} (${eggMovesCount})
            </button>
        </div>

        <!-- Lista Detalhada de Ataques -->
        <div class="moves-list-container" id="moves-list-container">
            ${movesListHtml}
            <div id="empty-moves-filtered" class="empty-moves-state" style="display: none;">
                <p>${isEn ? 'No moves found for the selected filter.' : 'Nenhum golpe encontrado para o filtro selecionado.'}</p>
            </div>
        </div>
    `;

    // Aplica o filtro ativo
    if (currentMoveFilter !== 'all') {
        filterMovesList(currentMoveFilter);
    }
}

/**
 * Constrói o HTML completo do modal estruturado em 3 Abas
 */
function renderModalContent(pokemon, speciesData) {
    const modalBody = document.getElementById('modal-body-content');
    if (!modalBody) return;

    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();

    // Identifica variantes registradas
    const variants = (typeof POKEMON_FORMS_DATABASE !== 'undefined' && POKEMON_FORMS_DATABASE[pokemon.id]) || null;
    const activeVariant = (variants && activeModalFormVariant)
        ? variants.find(v => v.formId === activeModalFormVariant)
        : null;

    // Atributos dinâmicos da criatura (base ou variante ativa)
    const displayedTypes = activeVariant ? activeVariant.types : pokemon.types;
    const displayedImage = activeVariant ? activeVariant.image : pokemon.image;
    const displayedHeight = activeVariant ? activeVariant.height : pokemon.height;
    const displayedWeight = activeVariant ? activeVariant.weight : pokemon.weight;
    const displayedStats = activeVariant ? activeVariant.stats : pokemon.stats;
    const displayedAbilities = activeVariant ? activeVariant.abilities : pokemon.abilities;

    // Nome e descrição dinâmicos
    const baseDisplayName = isEn 
        ? pokemon.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
        : (pokemon.displayName || pokemon.name);

    const displayedName = activeVariant 
        ? (isEn ? activeVariant.nameEn : activeVariant.namePt)
        : baseDisplayName;

    const baseFlavorText = isEn
        ? (speciesData?.flavorTextEn || pokemon.descriptionEn || 'An extraordinary Pokémon registered in the official Pokédex files.')
        : (speciesData?.flavorText || pokemon.description || 'Um Pokémon extraordinário registrado nos arquivos oficiais da Pokédex.');

    const displayedFlavorText = activeVariant
        ? (isEn ? activeVariant.descriptionEn : activeVariant.descriptionPt)
        : (isEn ? (speciesData?.flavorTextEn || pokemon.descriptionEn || baseFlavorText) : (speciesData?.flavorText || pokemon.description || baseFlavorText));

    // Determina categoria canônica em PT e EN sem duplicação de sufixos
    let genus = 'Pokémon';
    if (isEn) {
        genus = speciesData?.genusEn || pokemon.genusEn;
        if (!genus && typeof GENUS_TRANSLATIONS !== 'undefined') {
            const currentPt = speciesData?.genus || pokemon.genus;
            for (const [enKey, ptVal] of Object.entries(GENUS_TRANSLATIONS)) {
                if (ptVal.toLowerCase() === (currentPt || '').toLowerCase()) {
                    genus = enKey;
                    break;
                }
            }
        }
        if (!genus) {
            const raw = pokemon.genus || 'Pokémon';
            genus = (raw.toLowerCase().includes('pokémon') || raw.toLowerCase().includes('pokemon')) ? raw : `${raw} Pokémon`;
        }
    } else {
        genus = speciesData?.genus || pokemon.genus || 'Pokémon';
    }

    const genderText = isEn
        ? (speciesData?.genderText ? (speciesData.genderText.replace(/Macho/g, 'Male').replace(/Fêmea/g, 'Female').replace(/Sem Gênero/g, 'Genderless')) : '50% Male, 50% Female')
        : (speciesData?.genderText || '50% Macho, 50% Fêmea');

    // Relações elementais
    const relations = calculateTypeRelations(displayedTypes);

    // Tipagens do Pokémon
    const primaryType = displayedTypes[0];
    const primaryColor = TYPE_INFO[primaryType]?.color || '#30a7d7';

    // Confrontos com base no escopo ativo (usando a tipagem da variante ativa)
    const currentPokemonWithVariant = { ...pokemon, types: displayedTypes };
    const matchupList = currentMatchupScope === 'gen'
        ? (window.allPokemons || []).filter(p => p.generation === pokemon.generation)
        : (window.allPokemons || []);
    const matchups = calculatePokemonMatchups(currentPokemonWithVariant, matchupList);

    // Navegação anterior / próximo (1 a 1025)
    const prevId = pokemon.id > 1 ? pokemon.id - 1 : null;
    const nextId = pokemon.id < 1025 ? pokemon.id + 1 : null;

    const prevPokemon = prevId ? (window.allPokemons || []).find(p => p.id === prevId) : null;
    const nextPokemon = nextId ? (window.allPokemons || []).find(p => p.id === nextId) : null;

    const prevDisplayName = prevPokemon ? (isEn ? prevPokemon.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : (prevPokemon.displayName || prevPokemon.name)) : '';
    const nextDisplayName = nextPokemon ? (isEn ? nextPokemon.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : (nextPokemon.displayName || nextPokemon.name)) : '';

    // Geração do Pokémon
    const genInfo = GENERATIONS_CONFIG[pokemon.generation] || GENERATIONS_CONFIG[1];

    // Tipos badges
    const typesHtml = displayedTypes.map(t => {
        const info = TYPE_INFO[t] || { namePt: t, nameEn: t, color: '#777', textColor: '#fff' };
        const label = isEn ? (info.nameEn || info.namePt) : info.namePt;
        return `<span class="type-badge large" style="background-color: ${info.color}; color: ${info.textColor}">${label}</span>`;
    }).join('');

    // Fraquezas
    const weaknessesHtml = relations.weaknesses.length > 0
        ? relations.weaknesses.map(w => {
            const info = TYPE_INFO[w.type] || { namePt: w.type, nameEn: w.type, color: '#777', textColor: '#fff' };
            const label = isEn ? (info.nameEn || info.namePt) : info.namePt;
            const multText = w.multiplier === 4 ? '4×' : '2×';
            return `
                <div class="relation-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                    <span>${label}</span>
                    <span class="multiplier">${multText}</span>
                </div>
            `;
        }).join('')
        : `<span class="empty-relation">${isEn ? 'No direct weaknesses' : 'Nenhuma fraqueza direta'}</span>`;

    // Vantagens
    const countersHtml = relations.counters.length > 0
        ? relations.counters.map(c => {
            const info = TYPE_INFO[c] || { namePt: c, nameEn: c, color: '#777', textColor: '#fff' };
            const label = isEn ? (info.nameEn || info.namePt) : info.namePt;
            return `
                <div class="relation-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                    <span>${label}</span>
                    <span class="multiplier">2×</span>
                </div>
            `;
        }).join('')
        : `<span class="empty-relation">${isEn ? 'No direct advantages' : 'Nenhuma vantagem direta'}</span>`;

    // Resistências
    const resistancesHtml = relations.resistances.length > 0 || relations.immunities.length > 0
        ? [
            ...relations.resistances.map(r => {
                const info = TYPE_INFO[r.type] || { namePt: r.type, nameEn: r.type, color: '#777', textColor: '#fff' };
                const label = isEn ? (info.nameEn || info.namePt) : info.namePt;
                const multText = r.multiplier <= 0.25 ? '¼×' : '½×';
                return `
                    <div class="relation-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                        <span>${label}</span>
                        <span class="multiplier">${multText}</span>
                    </div>
                `;
            }),
            ...relations.immunities.map(im => {
                const info = TYPE_INFO[im.type] || { namePt: im.type, nameEn: im.type, color: '#777', textColor: '#fff' };
                const label = isEn ? (info.nameEn || info.namePt) : info.namePt;
                return `
                    <div class="relation-badge immunity" style="background-color: ${info.color}; color: ${info.textColor}">
                        <span>${label}</span>
                        <span class="multiplier">0×</span>
                    </div>
                `;
            })
        ].join('')
        : `<span class="empty-relation">${isEn ? 'Normal damage from all types' : 'Dano normal de todos os tipos'}</span>`;

    // Habilidades com descrição
    const abilitiesCardsHtml = displayedAbilities.map(a => {
        const abInfo = (typeof ABILITIES_DATABASE !== 'undefined' && ABILITIES_DATABASE[a.raw]) || {};
        const ptName = abInfo.namePt || a.name;
        const enName = abInfo.nameEn || a.raw.replace(/-/g, ' ');
        const desc = isEn ? (abInfo.descEn || abInfo.desc || 'Official Pokédex registered ability.') : (abInfo.desc || 'Habilidade oficial registrada na Pokédex.');
        const badgeText = isEn ? (a.is_hidden ? 'Hidden' : 'Standard') : (a.is_hidden ? 'Oculta' : 'Comum');
        const badgeClass = a.is_hidden ? 'hidden-ability' : 'common-ability';

        return `
            <div class="modal-ability-item">
                <div class="modal-ability-header">
                    <span class="ability-pt-title">${isEn ? enName : ptName}</span>
                    <span class="ability-en-sub">(${isEn ? ptName : enName})</span>
                    <span class="ability-type-badge ${badgeClass}">${badgeText}</span>
                </div>
                <p class="modal-ability-desc">${desc}</p>
            </div>
        `;
    }).join('') || `<p class="empty-ability">${isEn ? 'No abilities recorded.' : 'Nenhuma habilidade registrada.'}</p>`;

    // Estatísticas
    const stats = displayedStats;
    const maxStat = 255;

    // Fitas da Aba 2 (sem scroll infinito)
    const strongRibbonHtml = renderMatchupRibbon(matchups.strongAgainst, 'strong', 'ribbon-strong');
    const weakRibbonHtml = renderMatchupRibbon(matchups.weakAgainst, 'weak', 'ribbon-weak');

    // Evolução HTML
    const evolutionHtml = renderEvolutionSection(speciesData?.evolutionChain, pokemon.id);

    // Opções do seletor de geração na Aba 3
    const genOptionsHtml = Object.values(GENERATIONS_CONFIG).map(g => {
        const isSelected = g.id === currentModalMovesGen ? 'selected' : '';
        const genLabel = isEn ? `Generation ${g.roman} (${g.mainGames})` : `Geração ${g.roman} (${g.mainGames})`;
        return `<option value="${g.id}" ${isSelected}>${genLabel}</option>`;
    }).join('');

    // Painel de Formas Alternativas
    let formsSelectorHtml = '';
    if (variants && variants.length > 0) {
        formsSelectorHtml = `
            <div class="forms-selector-section">
                <div class="forms-section-header">
                    <span class="forms-title">${isEn ? 'Alternative Forms & Variants' : 'Formas & Variantes Alternativas'}</span>
                </div>
                <div class="forms-chips-list">
                    <button type="button" class="form-chip-btn ${!activeVariant ? 'active' : ''}" onclick="selectModalFormVariant(null)">
                        ${isEn ? 'Standard Form' : 'Forma Padrão'}
                    </button>
                    ${variants.map(v => `
                        <button type="button" class="form-chip-btn ${activeVariant && activeVariant.formId === v.formId ? 'active' : ''}" onclick="selectModalFormVariant('${v.formId}')">
                            ${isEn ? v.nameEn : v.namePt}
                        </button>
                    `).join('')}
                </div>
                ${activeVariant && activeVariant.requiredItem ? `
                    <div class="required-item-banner">
                        <span class="required-item-title">${isEn ? 'Required Activation Item:' : 'Item de Ativação Obrigatório:'}</span>
                        <div class="required-item-chip">
                            <img src="${activeVariant.requiredItem.image}" 
                                 alt="${isEn ? activeVariant.requiredItem.nameEn : activeVariant.requiredItem.namePt}" 
                                 class="item-icon-img"
                                 onerror="this.style.display='none'" />
                            <span class="item-name-text">${activeVariant.requiredItem.namePt} (${activeVariant.requiredItem.nameEn})</span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <!-- Cabeçalho do Modal com Navegação -->
        <header class="modal-header">
            <div class="modal-nav">
                ${prevPokemon ? `
                    <button type="button" class="btn-nav prev" onclick="navigateModalPokemon(-1)" title="${prevDisplayName}">
                        <span class="nav-arrow">&larr;</span>
                        <span class="nav-num">${prevPokemon.formattedId}</span>
                        <span class="nav-name">${prevDisplayName}</span>
                    </button>
                ` : `<div class="nav-spacer"></div>`}

                <div class="modal-title-box">
                    <h2 class="pokemon-modal-name">${displayedName}</h2>
                    <span class="pokemon-modal-id">${pokemon.formattedId}</span>
                    <span class="pokemon-modal-gen">Gen ${genInfo.roman} • ${genInfo.name}</span>
                </div>

                ${nextPokemon ? `
                    <button type="button" class="btn-nav next" onclick="navigateModalPokemon(1)" title="${nextDisplayName}">
                        <span class="nav-name">${nextDisplayName}</span>
                        <span class="nav-num">${nextPokemon.formattedId}</span>
                        <span class="nav-arrow">&rarr;</span>
                    </button>
                ` : `<div class="nav-spacer"></div>`}
            </div>

            <div class="modal-header-actions">
                <div class="lang-switch-wrapper" data-component="lang-switch">
                    <button type="button" 
                            class="lang-pill-switch" 
                            role="switch" 
                            aria-checked="${isEn}" 
                            aria-label="${isEn ? 'Switch language between Portuguese and English' : 'Alternar idioma entre Português e Inglês'}"
                            onclick="I18nController.toggleLanguage()">
                        <span class="lang-pill-track">
                            <span class="lang-pill-indicator"></span>
                            <span class="lang-label pt-label">PT</span>
                            <span class="lang-label en-label">EN</span>
                        </span>
                    </button>
                </div>
                <button type="button" class="modal-close-btn" onclick="closePokemonModal()" aria-label="${isEn ? 'Close Modal' : 'Fechar Modal'}">&times;</button>
            </div>
        </header>

        <!-- Barra de Navegação por Abas -->
        <nav class="modal-tabs-nav" aria-label="${isEn ? 'Information Tabs' : 'Abas de Informação'}">
            <button type="button" class="modal-tab-button ${currentActiveTab === 'tab-overview' ? 'active' : ''}" data-tab="tab-overview" onclick="switchModalTab('tab-overview')">
                ${isEn ? 'Overview' : 'Visão Geral'}
            </button>
            <button type="button" class="modal-tab-button ${currentActiveTab === 'tab-matchups' ? 'active' : ''}" data-tab="tab-matchups" onclick="switchModalTab('tab-matchups')">
                ${isEn ? 'Matchups' : 'Vantagens & Fraquezas'}
            </button>
            <button type="button" class="modal-tab-button ${currentActiveTab === 'tab-moves' ? 'active' : ''}" data-tab="tab-moves" onclick="switchModalTab('tab-moves')">
                ${isEn ? 'Moves' : 'Ataques'}
            </button>
        </nav>

        <!-- Conteúdo das Abas -->
        <div class="modal-tab-container">
            <!-- ==========================================
                 ABA 1: VISÃO GERAL
                 ========================================== -->
            <div id="tab-overview" class="modal-tab-panel ${currentActiveTab === 'tab-overview' ? 'active' : ''}">
                ${formsSelectorHtml}

                <div class="modal-grid">
                    <!-- Coluna Esquerda: Imagem, Tipos e Relações de Tipos -->
                    <div class="modal-col-left">
                        <div class="modal-image-card" style="--hero-glow: ${primaryColor}">
                            <img src="${displayedImage}" alt="${displayedName}" class="modal-pokemon-img" />
                        </div>

                        <div class="types-row">
                            ${typesHtml}
                        </div>

                        <!-- Seção de Fraquezas -->
                        <div class="modal-section-card">
                            <h3 class="section-title">
                                <span>${isEn ? 'Weaknesses' : 'Fraquezas'}</span>
                            </h3>
                            <div class="relations-grid">
                                ${weaknessesHtml}
                            </div>
                        </div>

                        <!-- Seção de Vantagens -->
                        <div class="modal-section-card">
                            <h3 class="section-title">
                                <span>${isEn ? 'Advantages' : 'Vantagens'}</span>
                            </h3>
                            <div class="relations-grid">
                                ${countersHtml}
                            </div>
                        </div>

                        <!-- Seção de Resistências -->
                        <div class="modal-section-card">
                            <h3 class="section-title">
                                <span>${isEn ? 'Resistances' : 'Resistências'}</span>
                            </h3>
                            <div class="relations-grid">
                                ${resistancesHtml}
                            </div>
                        </div>
                    </div>

                    <!-- Coluna Direita: Descrição, Características, Habilidades e Status -->
                    <div class="modal-col-right">
                        <!-- Descrição Oficial da Pokédex -->
                        <div class="modal-section-card description-card">
                            <h3 class="section-title">${isEn ? 'Pokédex Entry' : 'Descrição da Pokédex'}</h3>
                            <p class="flavor-text">"${displayedFlavorText}"</p>
                        </div>

                        <!-- Características / Perfil -->
                        <div class="modal-section-card profile-card">
                            <h3 class="section-title">${isEn ? 'Characteristics' : 'Características'}</h3>
                            <div class="profile-grid">
                                <div class="profile-item">
                                    <span class="profile-label">${isEn ? 'Height' : 'Altura'}</span>
                                    <span class="profile-value">${displayedHeight} m</span>
                                </div>
                                <div class="profile-item">
                                    <span class="profile-label">${isEn ? 'Weight' : 'Peso'}</span>
                                    <span class="profile-value">${displayedWeight} kg</span>
                                </div>
                                <div class="profile-item">
                                    <span class="profile-label">${isEn ? 'Category' : 'Categoria'}</span>
                                    <span class="profile-value">${genus}</span>
                                </div>
                                <div class="profile-item">
                                    <span class="profile-label">${isEn ? 'Gender' : 'Gênero'}</span>
                                    <span class="profile-value">${genderText}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Habilidades Detalhadas -->
                        <div class="modal-section-card abilities-card">
                            <h3 class="section-title">${isEn ? 'Abilities & Effects' : 'Habilidades & Efeitos'}</h3>
                            <div class="abilities-detail-list">
                                ${abilitiesCardsHtml}
                            </div>
                        </div>

                        <!-- Status Base -->
                        <div class="modal-section-card stats-card">
                            <div class="stats-header">
                                <h3 class="section-title">${isEn ? 'Base Stats' : 'Status Base'}</h3>
                                <span class="stats-total">${isEn ? 'Total' : 'Total'}: <strong>${stats.total}</strong></span>
                            </div>

                            <div class="stats-list">
                                ${renderStatBar(isEn ? 'Hit Points (HP)' : 'Pontos de Saúde (PS)', stats.hp, maxStat, primaryColor)}
                                ${renderStatBar(isEn ? 'Attack' : 'Ataque', stats.attack, maxStat, primaryColor)}
                                ${renderStatBar(isEn ? 'Defense' : 'Defesa', stats.defense, maxStat, primaryColor)}
                                ${renderStatBar(isEn ? 'Sp. Atk' : 'Atq. Especial', stats.spAttack, maxStat, primaryColor)}
                                ${renderStatBar(isEn ? 'Sp. Def' : 'Def. Especial', stats.spDefense, maxStat, primaryColor)}
                                ${renderStatBar(isEn ? 'Speed' : 'Velocidade', stats.speed, maxStat, primaryColor)}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Linha Evolutiva -->
                <div class="modal-evolution-container">
                    <h3 class="section-title evolution-main-title">${isEn ? 'Evolution Chain' : 'Linha Evolutiva'}</h3>
                    ${evolutionHtml}
                </div>
            </div>

            <!-- ==========================================
                 ABA 2: VANTAGENS & FRAQUEZAS (CONFRONTOS)
                 ========================================== -->
            <div id="tab-matchups" class="modal-tab-panel ${currentActiveTab === 'tab-matchups' ? 'active' : ''}">
                <div class="matchup-scope-bar">
                    <span class="scope-label">${isEn ? 'Compare matchups against:' : 'Comparar confrontos contra:'}</span>
                    <div class="scope-btn-group">
                        <button type="button" class="matchup-scope-btn ${currentMatchupScope === 'gen' ? 'active' : ''}" data-scope="gen" onclick="setMatchupScope('gen')">
                            ${isEn ? `Generation ${genInfo.roman} (${genInfo.name})` : `Geração ${genInfo.roman} (${genInfo.name})`}
                        </button>
                        <button type="button" class="matchup-scope-btn ${currentMatchupScope === 'all' ? 'active' : ''}" data-scope="all" onclick="setMatchupScope('all')">
                            ${isEn ? 'All 9 Generations (1025 Pokémon)' : 'Todas as 9 Gerações (1025 Pokémon)'}
                        </button>
                    </div>
                </div>

                <!-- Vantagens -->
                <div class="modal-section-card matchup-section strong-matchup-section">
                    <div class="matchup-section-header">
                        <div class="matchup-title-group">
                            <h3 class="section-title">${isEn ? 'Advantages' : 'Vantagens'}</h3>
                            <p class="section-desc">${isEn ? 'Deals multiplied damage (2× or 4×) against these Pokémon' : 'Causa dano multiplicado (2× ou 4×) contra estes Pokémon'}</p>
                        </div>
                        <span id="matchup-strong-count" class="matchup-count-badge strong">${matchups.strongAgainst.length} Pokémon</span>
                    </div>
                    <div id="matchup-strong-container">
                        ${strongRibbonHtml}
                    </div>
                </div>

                <!-- Fraquezas -->
                <div class="modal-section-card matchup-section weak-matchup-section">
                    <div class="matchup-section-header">
                        <div class="matchup-title-group">
                            <h3 class="section-title">${isEn ? 'Weaknesses' : 'Fraquezas'}</h3>
                            <p class="section-desc">${isEn ? 'Takes increased damage (2× or 4×) from these Pokémon' : 'Recebe dano aumentado (2× ou 4×) contra estes Pokémon'}</p>
                        </div>
                        <span id="matchup-weak-count" class="matchup-count-badge weak">${matchups.weakAgainst.length} Pokémon</span>
                    </div>
                    <div id="matchup-weak-container">
                        ${weakRibbonHtml}
                    </div>
                </div>
            </div>

            <!-- ==========================================
                 ABA 3: ATAQUES (MULTI-GERAÇÃO)
                 ========================================== -->
            <div id="tab-moves" class="modal-tab-panel ${currentActiveTab === 'tab-moves' ? 'active' : ''}">
                <div class="modal-section-card moves-section">
                    <div class="moves-header-bar">
                        <div class="moves-title-group">
                            <h3 class="section-title">${isEn ? 'Learnset & Moves' : 'Ataques'}</h3>
                            <p class="section-desc">${isEn ? `Moves that <strong>${displayedName}</strong> can learn.` : `Movimentos que <strong>${displayedName}</strong> pode aprender.`}</p>
                        </div>
                        <div class="moves-gen-selector">
                            <label for="moves-gen-select" class="gen-select-label">${isEn ? 'Game Generation:' : 'Geração dos Jogos:'}</label>
                            <select id="moves-gen-select" class="moves-gen-dropdown" onchange="onModalMovesGenChange(this.value)">
                                ${genOptionsHtml}
                            </select>
                        </div>
                    </div>

                    <div id="moves-panel-dynamic-content">
                        <!-- Carregado via renderMovesPanelContent() -->
                    </div>
                </div>
            </div>
        </div>
    `;

    renderMovesPanelContent();
}

/**
 * Renderiza a lista de cards/tabelas de ataques
 */
function renderMovesList(movesList) {
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();
    if (!movesList || movesList.length === 0) {
        return `
            <div class="empty-moves-state">
                <p>${isEn ? 'No moves recorded in this generation files.' : 'Nenhum movimento registrado nos arquivos desta geração.'}</p>
            </div>
        `;
    }

    const sortedMoves = [...movesList].sort((a, b) => {
        const methodOrder = { 'level-up': 1, 'machine': 2, 'tutor': 3, 'egg': 4 };
        const orderA = methodOrder[a.method] || 99;
        const orderB = methodOrder[b.method] || 99;
        if (orderA !== orderB) return orderA - orderB;
        if (a.method === 'level-up') return (a.level || 0) - (b.level || 0);
        return a.name.localeCompare(b.name);
    });

    return sortedMoves.map(m => {
        const details = m.details || (typeof ALL_MOVES_DATA !== 'undefined' && ALL_MOVES_DATA[m.name]) || (typeof FRLG_MOVES !== 'undefined' && FRLG_MOVES[m.name]) || {
            name: m.name,
            namePt: m.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            type: 'normal',
            category: 'physical',
            power: '—',
            accuracy: '—',
            pp: 20,
            desc: isEn ? 'Official move recorded in the Pokédex.' : 'Ataque oficial registrado na Pokédex.',
            tm: null,
            tutor: null
        };

        const typeInfo = TYPE_INFO[details.type] || { namePt: details.type, nameEn: details.type, color: '#999', textColor: '#fff' };
        const typeLabel = isEn ? (typeInfo.nameEn || typeInfo.namePt) : typeInfo.namePt;

        let catText = isEn ? 'Physical' : 'Físico';
        let catClass = 'physical';
        if (details.category === 'special') {
            catText = isEn ? 'Special' : 'Especial';
            catClass = 'special';
        } else if (details.category === 'status') {
            catText = isEn ? 'Status' : 'Status';
            catClass = 'status';
        }

        let acquireBadge = '';
        let acquireDesc = '';
        if (m.method === 'level-up') {
            acquireBadge = `<span class="acquire-badge level">${isEn ? 'Lv.' : 'Nv.'} ${m.level || 1}</span>`;
            acquireDesc = isEn ? `At Level ${m.level || 1}` : `Ao atingir o Nível ${m.level || 1}`;
        } else if (m.method === 'machine') {
            const tmCode = details.tm || 'MT/TM';
            const isHm = tmCode.startsWith('MO');
            acquireBadge = `<span class="acquire-badge machine ${isHm ? 'hm' : 'tm'}">${tmCode}</span>`;
            acquireDesc = isHm ? (isEn ? 'Hidden Machine (HM)' : 'Máquina Oculta (MO)') : (isEn ? 'Technical Machine (TM / TR)' : 'Máquina Técnica (MT / TM / DT)');
        } else if (m.method === 'tutor') {
            acquireBadge = `<span class="acquire-badge tutor">${isEn ? 'Tutor' : 'Tutor'}</span>`;
            acquireDesc = details.tutor ? `${isEn ? 'Location:' : 'Local:'} ${details.tutor}` : (isEn ? 'Move Tutor' : 'Tutor de Golpes');
        } else if (m.method === 'egg') {
            acquireBadge = `<span class="acquire-badge egg">${isEn ? 'Egg' : 'Ovo'}</span>`;
            acquireDesc = isEn ? 'Egg Move / Breeding' : 'Cruzamento / Herança Genética';
        } else {
            acquireBadge = `<span class="acquire-badge special">${isEn ? 'Special' : 'Especial'}</span>`;
            acquireDesc = isEn ? 'Special learning method' : 'Condição especial de aprendizado';
        }

        const powerVal = details.power !== null && details.power !== undefined ? details.power : '—';
        const accVal = details.accuracy !== null && details.accuracy !== undefined ? (typeof details.accuracy === 'number' ? `${details.accuracy}%` : details.accuracy) : '—';
        const ppVal = details.pp || '—';

        const mainMoveName = isEn ? details.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : (details.namePt || details.name);
        const subMoveName = isEn ? (details.namePt || '') : details.name.replace(/-/g, ' ');

        return `
            <div class="move-item-row" data-method="${m.method}">
                <div class="move-header-line">
                    <div class="move-acquire-box">
                        ${acquireBadge}
                        <span class="acquire-desc">${acquireDesc}</span>
                    </div>

                    <div class="move-names-group">
                        <h4 class="move-pt-name">${mainMoveName}</h4>
                        ${subMoveName ? `<span class="move-en-name">${isEn ? `(${subMoveName})` : subMoveName}</span>` : ''}
                    </div>

                    <div class="move-badges-group">
                        <span class="type-badge" style="background-color: ${typeInfo.color}; color: ${typeInfo.textColor}">${typeLabel}</span>
                        <span class="category-badge ${catClass}">${catText}</span>
                    </div>

                    <div class="move-stats-grid">
                        <div class="stat-spec">
                            <span class="spec-label">${isEn ? 'Power' : 'Poder'}</span>
                            <span class="spec-val">${powerVal}</span>
                        </div>
                        <div class="stat-spec">
                            <span class="spec-label">${isEn ? 'Accuracy' : 'Precisão'}</span>
                            <span class="spec-val">${accVal}</span>
                        </div>
                        <div class="stat-spec">
                            <span class="spec-label">${isEn ? 'PP' : 'PP'}</span>
                            <span class="spec-val">${ppVal}</span>
                        </div>
                    </div>
                </div>

                <div class="move-desc-box">
                    <p class="move-desc-text">${details.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Renderiza uma fita horizontal de Pokémon para os confrontos (Vantagens / Fraquezas)
 * LIMITA a 30 cards e garante rolagem horizontal estrita sem quebras verticais
 */
function renderMatchupRibbon(list, type, containerId) {
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();
    if (!list || list.length === 0) {
        return `
            <div class="empty-matchup">
                <p>${isEn ? 'No Pokémon found in this category for this typing.' : 'Nenhum Pokémon encontrado nesta categoria para esta tipagem.'}</p>
            </div>
        `;
    }

    // Limita aos 35 mais relevantes para performance e clareza visual
    const displayList = list.slice(0, 35);

    const cardsHtml = displayList.map(item => {
        const p = item.pokemon;
        const isSuper = type === 'strong' ? item.damageDealt === 4 : item.damageTaken === 4;
        const damageVal = type === 'strong' ? item.damageDealt : item.damageTaken;
        const tagText = type === 'strong' 
            ? (isEn ? `DEALS ${damageVal}×` : `CAUSA ${damageVal}×`) 
            : (isEn ? `TAKES ${damageVal}×` : `RECEBE ${damageVal}×`);
        const tagClass = isSuper ? 'super' : 'double';

        const pDisplayName = isEn 
            ? p.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') 
            : (p.displayName || p.name);

        const typesBadges = p.types.map(t => {
            const info = TYPE_INFO[t] || { namePt: t, nameEn: t, color: '#777', textColor: '#fff' };
            const typeLabel = isEn ? (info.nameEn || info.namePt) : info.namePt;
            return `<span class="mini-type-badge" style="background-color: ${info.color}; color: ${info.textColor}">${typeLabel}</span>`;
        }).join('');

        return `
            <div class="matchup-card" onclick="openPokemonModal(${p.id})" tabindex="0" role="button" aria-label="${isEn ? 'View' : 'Ver'} ${pDisplayName}">
                <div class="matchup-tag ${tagClass}">${tagText}</div>
                <div class="matchup-img-wrap">
                    <img src="${p.image}" alt="${pDisplayName}" loading="lazy" />
                </div>
                <span class="matchup-id">${p.formattedId}</span>
                <span class="matchup-name">${pDisplayName}</span>
                <div class="matchup-types">
                    ${typesBadges}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="matchup-ribbon-wrapper ribbon-wrapper">
            <button type="button" class="ribbon-arrow-btn left" onclick="scrollRibbon('${containerId}', -320)" aria-label="${isEn ? 'Scroll left' : 'Rolar para a esquerda'}">&lsaquo;</button>
            <div class="matchup-ribbon-track ribbon-track" id="${containerId}">
                ${cardsHtml}
            </div>
            <button type="button" class="ribbon-arrow-btn right" onclick="scrollRibbon('${containerId}', 320)" aria-label="${isEn ? 'Scroll right' : 'Rolar para a direita'}">&rsaquo;</button>
        </div>
    `;
}

/**
 * Rola horizontalmente a fita de cards de confronto
 */
function scrollRibbon(trackId, amount) {
    const track = document.getElementById(trackId);
    if (track) {
        track.scrollBy({ left: amount, behavior: 'smooth' });
    }
}

/**
 * Renderiza uma barra individual de status base
 */
function renderStatBar(name, value, max, color) {
    const percent = Math.min(100, Math.round((value / max) * 100));
    return `
        <div class="stat-row">
            <span class="stat-name">${name}</span>
            <span class="stat-value">${value}</span>
            <div class="stat-bar-track">
                <div class="stat-bar-fill" style="width: ${percent}%; background-color: ${color};"></div>
            </div>
        </div>
    `;
}

/**
 * Renderiza a linha de evolução com cards visuais e condições (Todas as Gerações)
 */
function renderEvolutionSection(chain, currentId) {
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();
    if (!chain) {
        return `
            <div class="evolution-loading">
                <div class="pokeball-spinner small"></div>
                <p>${isEn ? 'Loading official evolution chain...' : 'Carregando linha evolutiva oficial...'}</p>
            </div>
        `;
    }

    if (!chain.evolvesTo || chain.evolvesTo.length === 0) {
        return `
            <div class="no-evolution-card">
                <p>${isEn ? 'This species has no recorded evolutions in the Pokédex.' : 'Este Pokémon não possui evoluções registradas na Pokédex.'}</p>
            </div>
        `;
    }

    const stages = [];
    function traverse(node, stageIndex) {
        if (!stages[stageIndex]) stages[stageIndex] = [];
        stages[stageIndex].push(node);
        if (node.evolvesTo && node.evolvesTo.length > 0) {
            node.evolvesTo.forEach(child => traverse(child, stageIndex + 1));
        }
    }
    traverse(chain, 0);

    return `
        <div class="evolution-chain-flow">
            ${stages.map((stageList, index) => {
                const stageCards = stageList.map(node => {
                    const isCurrent = node.id === currentId;
                    const formattedId = `Nº ${String(node.id).padStart(4, '0')}`;
                    const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${node.id}.png`;
                    const fallbackUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${node.id}.png`;
                    const nodeGen = getGenerationByPokemonId(node.id);
                    const pMatch = (typeof ALL_POKEMONS !== 'undefined' && ALL_POKEMONS.find(p => p.id === node.id));
                    const baseName = node.name.charAt(0).toUpperCase() + node.name.slice(1).replace(/-/g, ' ');
                    const displayName = isEn ? baseName : (pMatch ? (pMatch.displayName || pMatch.name) : baseName);

                    return `
                        <div class="evolution-card ${isCurrent ? 'current-pokemon' : ''} clickable" onclick="openPokemonModal(${node.id})">
                            ${isCurrent ? `<span class="current-badge">${isEn ? 'Current' : 'Atual'}</span>` : ''}
                            <span class="gen-badge">Gen ${nodeGen.roman}</span>
                            <div class="evo-img-box">
                                <img src="${artworkUrl}" onerror="this.onerror=null; this.src='${fallbackUrl}'" alt="${displayName}" />
                            </div>
                            <span class="evo-id">${formattedId}</span>
                            <span class="evo-name">${displayName}</span>
                            ${node.condition ? `<span class="evo-condition">${node.condition}</span>` : ''}
                        </div>
                    `;
                }).join('');

                const arrowHtml = index < stages.length - 1 ? `
                    <div class="evo-arrow-divider">
                        <span class="evo-arrow">&rarr;</span>
                    </div>
                ` : '';

                return `
                    <div class="evolution-stage-group">
                        <div class="evolution-stage-cards">
                            ${stageCards}
                        </div>
                        ${arrowHtml}
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Configura eventos de teclado (Escape fecha o modal, setas navegam)
document.addEventListener('keydown', (e) => {
    const modalElement = document.getElementById('pokemon-modal');
    if (!modalElement || !modalElement.classList.contains('open')) return;

    if (e.key === 'Escape') {
        closePokemonModal();
    } else if (e.key === 'ArrowLeft') {
        navigateModalPokemon(-1);
    } else if (e.key === 'ArrowRight') {
        navigateModalPokemon(1);
    }
});
