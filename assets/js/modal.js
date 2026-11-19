// Controle e Renderização do Modal de Detalhes da Pokédex (Estilo Oficial com 3 Abas • Gerações I a IX)

let currentModalPokemonId = null;
let currentActiveTab = 'tab-overview'; // 'tab-overview' | 'tab-matchups' | 'tab-moves'
let currentMoveFilter = 'all';
let currentModalMovesGen = 1;
let currentModalMovesData = null;
let currentMatchupScope = 'gen'; // 'gen' (geração atual) | 'all' (todas as 9 gerações)

/**
 * Abre o modal de detalhes do Pokémon
 */
async function openPokemonModal(pokemonId) {
    const numId = parseInt(pokemonId, 10);
    if (!numId || numId < 1 || numId > 1025) return;

    currentModalPokemonId = numId;
    const modalElement = document.getElementById('pokemon-modal');
    const modalBody = document.getElementById('modal-body-content');

    if (!modalElement || !modalBody) return;

    // Exibe o modal com indicador de carregamento
    modalElement.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Busca o Pokémon do catálogo geral
    const pokemon = (window.allPokemons || []).find(p => p.id === numId) ||
                    (typeof ALL_POKEMONS !== 'undefined' ? ALL_POKEMONS.find(p => p.id === numId) : null);

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
    currentModalMovesData = null;
}

/**
 * Navega para o Pokémon anterior ou próximo
 */
function navigateModalPokemon(direction) {
    if (!currentModalPokemonId) return;
    const nextId = currentModalPokemonId + direction;
    if (nextId >= 1 && nextId <= 1025) {
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

    if (!currentModalMovesData || currentModalMovesData.loading) {
        movesContainer.innerHTML = `
            <div class="modal-loading-moves">
                <div class="pokeball-spinner small"></div>
                <p>Consultando dados oficiais da Pokédex para esta geração...</p>
            </div>
        `;
        return;
    }

    const pokemon = (window.allPokemons || []).find(p => p.id === currentModalPokemonId);
    const genConfig = GENERATIONS_CONFIG[currentModalMovesGen] || GENERATIONS_CONFIG[1];

    // Se o Pokémon não existia nesta geração
    if (currentModalMovesData.notAvailable) {
        const introducedInfo = GENERATIONS_CONFIG[currentModalMovesData.introducedGen] || { name: `Geração ${currentModalMovesData.introducedGen}`, roman: String(currentModalMovesData.introducedGen) };
        movesContainer.innerHTML = `
            <div class="empty-moves-unavailable">
                <div class="unavailable-icon">i</div>
                <h4>Não disponível nesta geração</h4>
                <p><strong>${pokemon?.displayName || pokemon?.name || 'Este Pokémon'}</strong> foi introduzido oficialmente na <strong>${introducedInfo.roman}ª Geração (${introducedInfo.name})</strong> e não existia nos jogos da <strong>${genConfig.roman}ª Geração (${genConfig.mainGames})</strong>.</p>
                <button type="button" class="btn-jump-gen" onclick="document.getElementById('moves-gen-select').value = '${pokemon?.generation || 1}'; onModalMovesGenChange(${pokemon?.generation || 1})">
                    Ver ataques na ${introducedInfo.roman}ª Geração (${introducedInfo.name})
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
                Todos (${allMoves.length})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'level-up' ? 'active' : ''}" data-method="level-up" onclick="filterMovesList('level-up')">
                Por Nível (${levelMovesCount})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'machine' ? 'active' : ''}" data-method="machine" onclick="filterMovesList('machine')">
                Por MT / MO (${machineMovesCount})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'tutor' ? 'active' : ''}" data-method="tutor" onclick="filterMovesList('tutor')">
                Tutor (${tutorMovesCount})
            </button>
            <button type="button" class="move-filter-pill ${currentMoveFilter === 'egg' ? 'active' : ''}" data-method="egg" onclick="filterMovesList('egg')">
                Ovo (${eggMovesCount})
            </button>
        </div>

        <!-- Lista Detalhada de Ataques -->
        <div class="moves-list-container" id="moves-list-container">
            ${movesListHtml}
            <div id="empty-moves-filtered" class="empty-moves-state" style="display: none;">
                <p>Nenhum golpe encontrado para o filtro selecionado.</p>
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

    // Relações elementais
    const relations = calculateTypeRelations(pokemon.types);

    // Tipagens do Pokémon
    const primaryType = pokemon.types[0];
    const primaryColor = TYPE_INFO[primaryType]?.color || '#30a7d7';

    // Confrontos com base no escopo ativo (mesma geração ou todas)
    const matchupList = currentMatchupScope === 'gen'
        ? (window.allPokemons || []).filter(p => p.generation === pokemon.generation)
        : (window.allPokemons || []);
    const matchups = calculatePokemonMatchups(pokemon, matchupList);

    // Navegação anterior / próximo (1 a 1025)
    const prevId = pokemon.id > 1 ? pokemon.id - 1 : null;
    const nextId = pokemon.id < 1025 ? pokemon.id + 1 : null;

    const prevPokemon = prevId ? (window.allPokemons || []).find(p => p.id === prevId) : null;
    const nextPokemon = nextId ? (window.allPokemons || []).find(p => p.id === nextId) : null;

    // Geração do Pokémon
    const genInfo = GENERATIONS_CONFIG[pokemon.generation] || GENERATIONS_CONFIG[1];

    // Dados de espécie
    const flavorText = speciesData?.flavorText || pokemon.description || 'Um Pokémon extraordinário registrado nos arquivos oficiais da Pokédex.';
    const genus = speciesData?.genus || pokemon.genus || 'Pokémon';
    const genderText = speciesData?.genderText || '50% Macho, 50% Fêmea';

    // Tipos badges
    const typesHtml = pokemon.types.map(t => {
        const info = TYPE_INFO[t] || { namePt: t, color: '#777', textColor: '#fff' };
        return `<span class="type-badge large" style="background-color: ${info.color}; color: ${info.textColor}">${info.namePt}</span>`;
    }).join('');

    // Fraquezas
    const weaknessesHtml = relations.weaknesses.length > 0
        ? relations.weaknesses.map(w => {
            const info = TYPE_INFO[w.type] || { namePt: w.type, color: '#777', textColor: '#fff' };
            const multText = w.multiplier === 4 ? '4×' : '2×';
            return `
                <div class="relation-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                    <span>${info.namePt}</span>
                    <span class="multiplier">${multText}</span>
                </div>
            `;
        }).join('')
        : '<span class="empty-relation">Nenhuma fraqueza direta</span>';

    // Vantagens
    const countersHtml = relations.counters.length > 0
        ? relations.counters.map(c => {
            const info = TYPE_INFO[c] || { namePt: c, color: '#777', textColor: '#fff' };
            return `
                <div class="relation-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                    <span>${info.namePt}</span>
                    <span class="multiplier">2×</span>
                </div>
            `;
        }).join('')
        : '<span class="empty-relation">Nenhuma vantagem direta</span>';

    // Resistências
    const resistancesHtml = relations.resistances.length > 0 || relations.immunities.length > 0
        ? [
            ...relations.resistances.map(r => {
                const info = TYPE_INFO[r.type] || { namePt: r.type, color: '#777', textColor: '#fff' };
                const multText = r.multiplier <= 0.25 ? '¼×' : '½×';
                return `
                    <div class="relation-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                        <span>${info.namePt}</span>
                        <span class="multiplier">${multText}</span>
                    </div>
                `;
            }),
            ...relations.immunities.map(im => {
                const info = TYPE_INFO[im.type] || { namePt: im.type, color: '#777', textColor: '#fff' };
                return `
                    <div class="relation-badge immunity" style="background-color: ${info.color}; color: ${info.textColor}">
                        <span>${info.namePt}</span>
                        <span class="multiplier">0×</span>
                    </div>
                `;
            })
        ].join('')
        : '<span class="empty-relation">Dano normal de todos os tipos</span>';

    // Habilidades com descrição completa do que fazem em português
    const abilitiesCardsHtml = pokemon.abilities.map(a => {
        const abInfo = (typeof ABILITIES_DATABASE !== 'undefined' && ABILITIES_DATABASE[a.raw]) || {};
        const ptName = abInfo.namePt || a.name;
        const enName = abInfo.nameEn || a.raw.replace(/-/g, ' ');
        const desc = abInfo.desc || 'Habilidade oficial registrada na Pokédex.';
        const badgeText = a.is_hidden ? 'Oculta' : 'Comum';
        const badgeClass = a.is_hidden ? 'hidden-ability' : 'common-ability';

        return `
            <div class="modal-ability-item">
                <div class="modal-ability-header">
                    <span class="ability-pt-title">${ptName}</span>
                    <span class="ability-en-sub">(${enName})</span>
                    <span class="ability-type-badge ${badgeClass}">${badgeText}</span>
                </div>
                <p class="modal-ability-desc">${desc}</p>
            </div>
        `;
    }).join('') || '<p class="empty-ability">Nenhuma habilidade registrada.</p>';

    // Estatísticas
    const stats = pokemon.stats;
    const maxStat = 255;

    // Fitas da Aba 2 (sem scroll infinito)
    const strongRibbonHtml = renderMatchupRibbon(matchups.strongAgainst, 'strong', 'ribbon-strong');
    const weakRibbonHtml = renderMatchupRibbon(matchups.weakAgainst, 'weak', 'ribbon-weak');

    // Evolução HTML
    const evolutionHtml = renderEvolutionSection(speciesData?.evolutionChain, pokemon.id);

    // Opções do seletor de geração na Aba 3
    const genOptionsHtml = Object.values(GENERATIONS_CONFIG).map(g => {
        const isSelected = g.id === currentModalMovesGen ? 'selected' : '';
        return `<option value="${g.id}" ${isSelected}>Geração ${g.roman} (${g.mainGames})</option>`;
    }).join('');

    modalBody.innerHTML = `
        <!-- Cabeçalho do Modal com Navegação -->
        <header class="modal-header">
            <div class="modal-nav">
                ${prevPokemon ? `
                    <button type="button" class="btn-nav prev" onclick="navigateModalPokemon(-1)" title="${prevPokemon.name}">
                        <span class="nav-arrow">&larr;</span>
                        <span class="nav-num">${prevPokemon.formattedId}</span>
                        <span class="nav-name">${prevPokemon.displayName || prevPokemon.name}</span>
                    </button>
                ` : `<div class="nav-spacer"></div>`}

                <div class="modal-title-box">
                    <h2 class="pokemon-modal-name">${pokemon.displayName || pokemon.name}</h2>
                    <span class="pokemon-modal-id">${pokemon.formattedId}</span>
                    <span class="pokemon-modal-gen">Geração ${genInfo.roman} • ${genInfo.name}</span>
                </div>

                ${nextPokemon ? `
                    <button type="button" class="btn-nav next" onclick="navigateModalPokemon(1)" title="${nextPokemon.name}">
                        <span class="nav-name">${nextPokemon.displayName || nextPokemon.name}</span>
                        <span class="nav-num">${nextPokemon.formattedId}</span>
                        <span class="nav-arrow">&rarr;</span>
                    </button>
                ` : `<div class="nav-spacer"></div>`}
            </div>

            <button type="button" class="modal-close-btn" onclick="closePokemonModal()" aria-label="Fechar Modal">&times;</button>
        </header>

        <!-- Barra de Navegação por Abas -->
        <nav class="modal-tabs-nav" aria-label="Abas de Informação">
            <button type="button" class="modal-tab-button ${currentActiveTab === 'tab-overview' ? 'active' : ''}" data-tab="tab-overview" onclick="switchModalTab('tab-overview')">
                Visão Geral
            </button>
            <button type="button" class="modal-tab-button ${currentActiveTab === 'tab-matchups' ? 'active' : ''}" data-tab="tab-matchups" onclick="switchModalTab('tab-matchups')">
                Vantagens & Fraquezas
            </button>
            <button type="button" class="modal-tab-button ${currentActiveTab === 'tab-moves' ? 'active' : ''}" data-tab="tab-moves" onclick="switchModalTab('tab-moves')">
                Ataques
            </button>
        </nav>

        <!-- Conteúdo das Abas -->
        <div class="modal-tab-container">
            <!-- ==========================================
                 ABA 1: VISÃO GERAL
                 ========================================== -->
            <div id="tab-overview" class="modal-tab-panel ${currentActiveTab === 'tab-overview' ? 'active' : ''}">
                <div class="modal-grid-layout">
                    <!-- Coluna Esquerda: Imagem, Tipos e Relações de Tipos -->
                    <div class="modal-col-left">
                        <div class="modal-hero-artwork" style="--hero-glow: ${primaryColor}">
                            <img src="${pokemon.image}" alt="${pokemon.displayName || pokemon.name}" class="hero-image" />
                        </div>

                        <div class="modal-types-row">
                            ${typesHtml}
                        </div>

                        <!-- Seção de Fraquezas -->
                        <div class="modal-section-card">
                            <h3 class="section-title">
                                <span>Fraquezas</span>
                            </h3>
                            <div class="relations-grid">
                                ${weaknessesHtml}
                            </div>
                        </div>

                        <!-- Seção de Vantagens -->
                        <div class="modal-section-card">
                            <h3 class="section-title">
                                <span>Vantagens</span>
                            </h3>
                            <div class="relations-grid">
                                ${countersHtml}
                            </div>
                        </div>

                        <!-- Seção de Resistências -->
                        <div class="modal-section-card">
                            <h3 class="section-title">
                                <span>Resistências</span>
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
                            <h3 class="section-title">Descrição da Pokédex</h3>
                            <p class="flavor-text">"${flavorText}"</p>
                        </div>

                        <!-- Características / Perfil -->
                        <div class="modal-section-card profile-card">
                            <h3 class="section-title">Características</h3>
                            <div class="profile-grid">
                                <div class="profile-item">
                                    <span class="profile-label">Altura</span>
                                    <span class="profile-value">${pokemon.height} m</span>
                                </div>
                                <div class="profile-item">
                                    <span class="profile-label">Peso</span>
                                    <span class="profile-value">${pokemon.weight} kg</span>
                                </div>
                                <div class="profile-item">
                                    <span class="profile-label">Categoria</span>
                                    <span class="profile-value">${genus}</span>
                                </div>
                                <div class="profile-item">
                                    <span class="profile-label">Gênero</span>
                                    <span class="profile-value">${genderText}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Habilidades Detalhadas (O que cada uma faz) -->
                        <div class="modal-section-card abilities-card">
                            <h3 class="section-title">Habilidades & Efeitos</h3>
                            <div class="abilities-detail-list">
                                ${abilitiesCardsHtml}
                            </div>
                        </div>

                        <!-- Status Base -->
                        <div class="modal-section-card stats-card">
                            <div class="stats-header">
                                <h3 class="section-title">Status Base</h3>
                                <span class="stats-total">Total: <strong>${stats.total}</strong></span>
                            </div>

                            <div class="stats-list">
                                ${renderStatBar('Pontos de Saúde (PS)', stats.hp, maxStat, primaryColor)}
                                ${renderStatBar('Ataque', stats.attack, maxStat, primaryColor)}
                                ${renderStatBar('Defesa', stats.defense, maxStat, primaryColor)}
                                ${renderStatBar('Atq. Especial', stats.spAttack, maxStat, primaryColor)}
                                ${renderStatBar('Def. Especial', stats.spDefense, maxStat, primaryColor)}
                                ${renderStatBar('Velocidade', stats.speed, maxStat, primaryColor)}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Linha Evolutiva -->
                <div class="modal-evolution-container">
                    <h3 class="section-title evolution-main-title">Linha Evolutiva</h3>
                    ${evolutionHtml}
                </div>
            </div>

            <!-- ==========================================
                 ABA 2: VANTAGENS & FRAQUEZAS (CONFRONTOS)
                 ========================================== -->
            <div id="tab-matchups" class="modal-tab-panel ${currentActiveTab === 'tab-matchups' ? 'active' : ''}">
                <div class="matchup-scope-bar">
                    <span class="scope-label">Comparar confrontos contra:</span>
                    <div class="scope-btn-group">
                        <button type="button" class="matchup-scope-btn ${currentMatchupScope === 'gen' ? 'active' : ''}" data-scope="gen" onclick="setMatchupScope('gen')">
                            Geração ${genInfo.roman} (${genInfo.name})
                        </button>
                        <button type="button" class="matchup-scope-btn ${currentMatchupScope === 'all' ? 'active' : ''}" data-scope="all" onclick="setMatchupScope('all')">
                            Todas as 9 Gerações (1025 Pokémon)
                        </button>
                    </div>
                </div>

                <!-- Vantagens -->
                <div class="modal-section-card matchup-section strong-matchup-section">
                    <div class="matchup-section-header">
                        <div class="matchup-title-group">
                            <h3 class="section-title">Vantagens</h3>
                            <p class="section-desc">Causa dano multiplicado (2× ou 4×) contra estes Pokémon</p>
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
                            <h3 class="section-title">Fraquezas</h3>
                            <p class="section-desc">Recebe dano aumentado (2× ou 4×) contra estes Pokémon</p>
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
                            <h3 class="section-title">Ataques</h3>
                            <p class="section-desc">Movimentos que <strong>${pokemon.displayName || pokemon.name}</strong> pode aprender.</p>
                        </div>
                        <div class="moves-gen-selector">
                            <label for="moves-gen-select" class="gen-select-label">Geração dos Jogos:</label>
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
    if (!movesList || movesList.length === 0) {
        return `
            <div class="empty-moves-state">
                <p>Nenhum movimento registrado nos arquivos desta geração.</p>
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
            desc: 'Ataque oficial registrado na Pokédex.',
            tm: null,
            tutor: null
        };

        const typeInfo = TYPE_INFO[details.type] || { namePt: details.type, color: '#999', textColor: '#fff' };

        let catText = 'Físico';
        let catClass = 'physical';
        if (details.category === 'special') {
            catText = 'Especial';
            catClass = 'special';
        } else if (details.category === 'status') {
            catText = 'Status';
            catClass = 'status';
        }

        let acquireBadge = '';
        let acquireDesc = '';
        if (m.method === 'level-up') {
            acquireBadge = `<span class="acquire-badge level">Nv. ${m.level || 1}</span>`;
            acquireDesc = `Ao atingir o Nível ${m.level || 1}`;
        } else if (m.method === 'machine') {
            const tmCode = details.tm || 'MT/TM';
            const isHm = tmCode.startsWith('MO');
            acquireBadge = `<span class="acquire-badge machine ${isHm ? 'hm' : 'tm'}">${tmCode}</span>`;
            acquireDesc = isHm ? 'Máquina Oculta (MO)' : 'Máquina Técnica (MT / TM / DT)';
        } else if (m.method === 'tutor') {
            acquireBadge = `<span class="acquire-badge tutor">Tutor</span>`;
            acquireDesc = details.tutor ? `Local: ${details.tutor}` : 'Tutor de Golpes';
        } else if (m.method === 'egg') {
            acquireBadge = `<span class="acquire-badge egg">Ovo</span>`;
            acquireDesc = 'Cruzamento / Herança Genética';
        } else {
            acquireBadge = `<span class="acquire-badge special">Especial</span>`;
            acquireDesc = 'Condição especial de aprendizado';
        }

        const powerVal = details.power !== null && details.power !== undefined ? details.power : '—';
        const accVal = details.accuracy !== null && details.accuracy !== undefined ? (typeof details.accuracy === 'number' ? `${details.accuracy}%` : details.accuracy) : '—';
        const ppVal = details.pp || '—';

        return `
            <div class="move-item-row" data-method="${m.method}">
                <div class="move-header-line">
                    <div class="move-acquire-box">
                        ${acquireBadge}
                        <span class="acquire-desc">${acquireDesc}</span>
                    </div>

                    <div class="move-names-group">
                        <h4 class="move-pt-name">${details.namePt || details.name}</h4>
                        <span class="move-en-name">${details.name.replace(/-/g, ' ')}</span>
                    </div>

                    <div class="move-badges-group">
                        <span class="type-badge" style="background-color: ${typeInfo.color}; color: ${typeInfo.textColor}">${typeInfo.namePt}</span>
                        <span class="category-badge ${catClass}">${catText}</span>
                    </div>

                    <div class="move-stats-grid">
                        <div class="stat-spec">
                            <span class="spec-label">Poder</span>
                            <span class="spec-val">${powerVal}</span>
                        </div>
                        <div class="stat-spec">
                            <span class="spec-label">Precisão</span>
                            <span class="spec-val">${accVal}</span>
                        </div>
                        <div class="stat-spec">
                            <span class="spec-label">PP</span>
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
    if (!list || list.length === 0) {
        return `
            <div class="empty-matchup">
                <p>Nenhum Pokémon encontrado nesta categoria para esta tipagem.</p>
            </div>
        `;
    }

    // Limita aos 35 mais relevantes para performance e clareza visual
    const displayList = list.slice(0, 35);

    const cardsHtml = displayList.map(item => {
        const p = item.pokemon;
        const isSuper = type === 'strong' ? item.damageDealt === 4 : item.damageTaken === 4;
        const damageVal = type === 'strong' ? item.damageDealt : item.damageTaken;
        const tagText = type === 'strong' ? `CAUSA ${damageVal}×` : `RECEBE ${damageVal}×`;
        const tagClass = isSuper ? 'super' : 'double';

        const typesBadges = p.types.map(t => {
            const info = TYPE_INFO[t] || { namePt: t, color: '#777', textColor: '#fff' };
            return `<span class="mini-type-badge" style="background-color: ${info.color}; color: ${info.textColor}">${info.namePt}</span>`;
        }).join('');

        return `
            <div class="matchup-card" onclick="openPokemonModal(${p.id})" tabindex="0" role="button" aria-label="Ver ${p.displayName || p.name}">
                <div class="matchup-tag ${tagClass}">${tagText}</div>
                <div class="matchup-img-wrap">
                    <img src="${p.image}" alt="${p.displayName || p.name}" loading="lazy" />
                </div>
                <span class="matchup-id">${p.formattedId}</span>
                <span class="matchup-name">${p.displayName || p.name}</span>
                <div class="matchup-types">
                    ${typesBadges}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="matchup-ribbon-wrapper ribbon-wrapper">
            <button type="button" class="ribbon-arrow-btn left" onclick="scrollRibbon('${containerId}', -320)" aria-label="Rolar para a esquerda">&lsaquo;</button>
            <div class="matchup-ribbon-track ribbon-track" id="${containerId}">
                ${cardsHtml}
            </div>
            <button type="button" class="ribbon-arrow-btn right" onclick="scrollRibbon('${containerId}', 320)" aria-label="Rolar para a direita">&rsaquo;</button>
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
    if (!chain) {
        return `
            <div class="evolution-loading">
                <div class="pokeball-spinner small"></div>
                <p>Carregando linha evolutiva oficial...</p>
            </div>
        `;
    }

    if (!chain.evolvesTo || chain.evolvesTo.length === 0) {
        return `
            <div class="no-evolution-card">
                <p>Este Pokémon não possui evoluções registradas na Pokédex.</p>
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
                    const displayName = pMatch ? (pMatch.displayName || pMatch.name) : (node.name.charAt(0).toUpperCase() + node.name.slice(1).replace(/-/g, ' '));

                    return `
                        <div class="evolution-card ${isCurrent ? 'current-pokemon' : ''} clickable" onclick="openPokemonModal(${node.id})">
                            ${isCurrent ? `<span class="current-badge">Atual</span>` : ''}
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
