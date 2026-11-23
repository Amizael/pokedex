// Aplicação Principal da Pokédex (Gerações I a IX • 1025 Pokémon)

// Estado da Aplicação
window.allPokemons = [];
let filteredPokemons = [];
let searchTerm = '';
let selectedGeneration = 'all'; // 'all' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
let selectedType = 'all';
let selectedSort = 'id-asc';
const ITEMS_PER_PAGE = 100; // Visualização a cada 100 Pokémon conforme solicitado
let displayedLimit = ITEMS_PER_PAGE;

// Elementos do DOM
const cardsContainer = document.getElementById('cards-pokemons');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortSelect = document.getElementById('sort-select');
const generationFiltersContainer = document.getElementById('generation-filters');
const genActiveBadge = document.getElementById('gen-active-badge');
const typeFiltersContainer = document.getElementById('type-filters');
const btnSurpriseMe = document.getElementById('btn-surprise');
const btnClearFilters = document.getElementById('btn-clear-filters');
const btnLoadMore = document.getElementById('btnLoadMore');
const resultsCounter = document.getElementById('results-counter');
const loadingScreen = document.getElementById('loading-screen');
const loadingProgress = document.getElementById('loading-progress');

/**
 * Inicialização da Aplicação
 */
document.addEventListener('DOMContentLoaded', async () => {
    renderGenerationFilterButtons();
    renderTypeFilterButtons();
    if (typeof renderTypeWheelSvg === 'function') {
        renderTypeWheelSvg();
    }
    setupEventListeners();
    await loadPokemons();
});

/**
 * Carrega os dados dos 1025 Pokémon das 9 Gerações
 */
async function loadPokemons() {
    try {
        window.allPokemons = await POKE_API.loadAllPokemons((current, total) => {
            if (loadingProgress) {
                const percent = Math.round((current / total) * 100);
                loadingProgress.textContent = `Carregando Pokédex Completa... ${percent}% (${current}/${total})`;
            }
        });

        // Oculta tela de carregamento com transição suave
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 400);
        }

        applyFiltersAndRender();
    } catch (error) {
        console.error('Erro ao inicializar Pokédex:', error);
        if (loadingProgress) {
            loadingProgress.textContent = 'Erro ao inicializar base de dados. Atualize a página para tentar novamente.';
        }
    }
}

/**
 * Renderiza os botões de filtro de geração
 */
function renderGenerationFilterButtons() {
    if (!generationFiltersContainer) return;
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();

    let html = `
        <button type="button" class="gen-filter-btn active" data-gen="all">
            <span class="gen-btn-title">${isEn ? 'All' : 'Todas'}</span>
            <span class="gen-btn-count">1025</span>
        </button>
    `;

    const gens = getAllGenerationsList();
    gens.forEach(g => {
        html += `
            <button type="button" class="gen-filter-btn" data-gen="${g.id}">
                <span class="gen-btn-title">Gen ${g.roman}</span>
                <span class="gen-btn-sub">${g.name}</span>
            </button>
        `;
    });

    generationFiltersContainer.innerHTML = html;
}

/**
 * Renderiza os botões de filtro de tipo no topo
 */
function renderTypeFilterButtons() {
    if (!typeFiltersContainer) return;
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();

    let html = `
        <button type="button" class="type-filter-btn active" data-type="all">
            ${isEn ? 'All Types' : 'Todos os Tipos'}
        </button>
    `;

    ALL_TYPES.forEach(t => {
        const info = TYPE_INFO[t] || { namePt: t, nameEn: t };
        const label = isEn ? (info.nameEn || info.namePt) : info.namePt;
        html += `
            <button type="button" class="type-filter-btn" data-type="${t}" style="--btn-color: ${info.color}; --btn-text: ${info.textColor}">
                ${label}
            </button>
        `;
    });

    typeFiltersContainer.innerHTML = html;
}

/**
 * Configura os ouvintes de evento
 */
function setupEventListeners() {
    // Busca em tempo real
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.trim().toLowerCase();
            displayedLimit = ITEMS_PER_PAGE;
            applyFiltersAndRender();
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyFiltersAndRender();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            applyFiltersAndRender();
        });
    }

    // Ordenação
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            selectedSort = e.target.value;
            applyFiltersAndRender();
        });
    }

    // Filtros de Geração
    if (generationFiltersContainer) {
        generationFiltersContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.gen-filter-btn');
            if (!btn) return;

            document.querySelectorAll('.gen-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            selectedGeneration = btn.dataset.gen;
            displayedLimit = ITEMS_PER_PAGE;

            // Atualiza badge de geração ativa
            if (genActiveBadge) {
                if (selectedGeneration === 'all') {
                    genActiveBadge.textContent = 'Todas as Gerações (1025)';
                } else {
                    const g = GENERATIONS_CONFIG[selectedGeneration];
                    genActiveBadge.textContent = `Geração ${g.roman} (${g.name} • ${g.total} Pokémon)`;
                }
            }

            applyFiltersAndRender();
        });
    }

    // Filtros de Tipo (Botões)
    if (typeFiltersContainer) {
        typeFiltersContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.type-filter-btn');
            if (!btn) return;

            document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            selectedType = btn.dataset.type;
            displayedLimit = ITEMS_PER_PAGE;

            // Sincroniza com a Roda de Tipos
            if (typeof renderTypeWheelSvg === 'function') {
                renderTypeWheelSvg();
            }

            applyFiltersAndRender();
        });
    }

    // Botão Surpreenda-me (Sorteia um Pokémon aleatório de 1 a 1025 e abre)
    if (btnSurpriseMe) {
        btnSurpriseMe.addEventListener('click', () => {
            const total = window.allPokemons?.length || 1025;
            const randomId = Math.floor(Math.random() * total) + 1;
            openPokemonModal(randomId);
        });
    }

    // Botão Limpar Filtros
    if (btnClearFilters) {
        btnClearFilters.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            selectedGeneration = 'all';
            selectedType = 'all';
            selectedSort = 'id-asc';
            if (sortSelect) sortSelect.value = 'id-asc';

            document.querySelectorAll('.gen-filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.gen === 'all');
            });
            if (genActiveBadge) genActiveBadge.textContent = 'Todas as Gerações (1025)';

            document.querySelectorAll('.type-filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.type === 'all');
            });

            // Reseta a roda de tipos
            if (typeof resetTypeWheel === 'function') {
                resetTypeWheel();
            }

            displayedLimit = ITEMS_PER_PAGE;
            applyFiltersAndRender();
        });
    }

    // Botão Carregar Mais
    if (btnLoadMore) {
        btnLoadMore.addEventListener('click', () => {
            displayedLimit += ITEMS_PER_PAGE;
            renderCards();
        });

        // Rolagem infinita automática para o catálogo geral
        if ('IntersectionObserver' in window) {
            const scrollObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const hasActiveFilter = (selectedGeneration && selectedGeneration !== 'all') ||
                                            (selectedType && selectedType !== 'all') ||
                                            Boolean(searchTerm && searchTerm.trim());
                    if (!hasActiveFilter && displayedLimit < filteredPokemons.length) {
                        displayedLimit += ITEMS_PER_PAGE;
                        renderCards();
                    }
                }
            }, { rootMargin: '400px' });
            scrollObserver.observe(btnLoadMore);
        }
    }

    // Clique fora do modal fecha o modal
    const modalElement = document.getElementById('pokemon-modal');
    if (modalElement) {
        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement) {
                closePokemonModal();
            }
        });
    }
}

/**
 * Aplica os filtros de busca, geração, tipo e ordenação e atualiza a interface
 */
function applyFiltersAndRender() {
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();
    const rawQuery = (searchTerm || '').trim().toLowerCase();
    const cleanQuery = rawQuery.replace(/[^a-z0-9]/gi, '');

    // Verifica se a busca acionou palavras-chave de formas alternativas ou mecânicas
    const isMegaKeyword = rawQuery === 'mega' || rawQuery === 'mega evolution' || rawQuery === 'mega evolucao' || rawQuery === 'mega-evolucao' || rawQuery.startsWith('mega ') || rawQuery.endsWith(' mega');
    const isGmaxKeyword = rawQuery === 'gmax' || rawQuery === 'g-max' || rawQuery === 'gigantamax' || rawQuery === 'dmax' || rawQuery === 'dynamax' || rawQuery.startsWith('gmax ') || rawQuery.startsWith('gigantamax ') || rawQuery.endsWith(' gmax') || rawQuery.endsWith(' gigantamax');
    const isAlolaKeyword = rawQuery === 'alola' || rawQuery === 'alolan' || rawQuery.startsWith('alola ') || rawQuery.endsWith(' alola');
    const isGalarKeyword = rawQuery === 'galar' || rawQuery === 'galarian' || rawQuery.startsWith('galar ') || rawQuery.endsWith(' galar');
    const isHisuiKeyword = rawQuery === 'hisui' || rawQuery === 'hisuian' || rawQuery.startsWith('hisui ') || rawQuery.endsWith(' hisui');
    const isPaldeaKeyword = rawQuery === 'paldea' || rawQuery === 'paldean' || rawQuery.startsWith('paldea ') || rawQuery.endsWith(' paldea');
    const isPrimalKeyword = rawQuery === 'primal' || rawQuery === 'primitivo' || rawQuery.includes('reversao') || rawQuery.includes('reversion');
    const isOriginKeyword = rawQuery === 'origin' || rawQuery === 'origem';
    const isCrownedKeyword = rawQuery === 'crowned' || rawQuery === 'coroado' || rawQuery === 'coroada';

    const isFormSearch = isMegaKeyword || isGmaxKeyword || isAlolaKeyword || isGalarKeyword || isHisuiKeyword || isPaldeaKeyword || isPrimalKeyword || isOriginKeyword || isCrownedKeyword;

    let result = [];

    if (isFormSearch && typeof getAllAlternativeForms === 'function') {
        const allForms = getAllAlternativeForms();
        // Palavra secundária se o usuário digitou "mega charizard", "gmax pikachu", etc.
        let subTerm = rawQuery
            .replace(/\b(mega|gigantamax|gmax|g-max|dmax|dynamax|alola|alolan|galar|galarian|hisui|hisuian|paldea|paldean|primal|primitivo|origin|origem|crowned|coroado|coroada)\b/gi, '')
            .trim();

        const matchedForms = allForms.filter(f => {
            let matchesCategory = false;
            if (isMegaKeyword && f.formType === 'mega') matchesCategory = true;
            if (isGmaxKeyword && f.formType === 'gmax') matchesCategory = true;
            if (isAlolaKeyword && f.formType === 'alola') matchesCategory = true;
            if (isGalarKeyword && f.formType === 'galar') matchesCategory = true;
            if (isHisuiKeyword && f.formType === 'hisui') matchesCategory = true;
            if (isPaldeaKeyword && f.formType === 'paldea') matchesCategory = true;
            if (isPrimalKeyword && f.formType === 'primal') matchesCategory = true;
            if (isOriginKeyword && f.formType === 'origin') matchesCategory = true;
            if (isCrownedKeyword && f.formType === 'crowned') matchesCategory = true;

            if (!matchesCategory) return false;

            if (subTerm) {
                const subClean = subTerm.toLowerCase();
                const nameMatches = (f.namePt && f.namePt.toLowerCase().includes(subClean)) ||
                                    (f.nameEn && f.nameEn.toLowerCase().includes(subClean)) ||
                                    (f.formId && f.formId.toLowerCase().includes(subClean));
                return nameMatches;
            }

            return true;
        });

        // Mapeia cada forma para a estrutura de card
        result = matchedForms.map(f => {
            const basePokemon = (window.allPokemons || []).find(p => p.id === f.speciesId) || {};
            const badgeInfo = typeof getFormGimmickBadgeInfo === 'function' ? getFormGimmickBadgeInfo(f.formType, isEn) : { label: 'FORMA', bg: '#e02424', color: '#fff' };

            return {
                id: f.speciesId,
                formId: f.formId,
                isAlternativeForm: true,
                formType: f.formType,
                name: f.formId,
                displayName: isEn ? f.nameEn : f.namePt,
                formattedId: basePokemon.formattedId || `Nº ${String(f.speciesId).padStart(4, '0')}`,
                types: f.types,
                image: f.image,
                generation: basePokemon.generation || 1,
                stats: f.stats,
                badgeInfo
            };
        });
    } else {
        // Exibição geral padrão (NÃO inclui versões alternativas no catálogo base)
        result = [...(window.allPokemons || [])];

        // Filtro por Texto normal (Nome ou Número)
        if (rawQuery) {
            result = result.filter(p => {
                const matchName = p.name.toLowerCase().includes(rawQuery) || (p.displayName && p.displayName.toLowerCase().includes(rawQuery));
                const matchId = String(p.id) === cleanQuery || p.formattedId.toLowerCase().includes(rawQuery);
                return matchName || matchId;
            });
        }
    }

    // Filtro por Geração
    if (selectedGeneration && selectedGeneration !== 'all') {
        const genNum = parseInt(selectedGeneration, 10);
        result = result.filter(p => p.generation === genNum);
    }

    // Filtro por Tipo
    if (selectedType && selectedType !== 'all') {
        result = result.filter(p => p.types && p.types.includes(selectedType));
    }

    // Ordenação
    switch (selectedSort) {
        case 'id-desc':
            result.sort((a, b) => b.id - a.id);
            break;
        case 'name-asc':
            result.sort((a, b) => (a.displayName || a.name).localeCompare(b.displayName || b.name));
            break;
        case 'name-desc':
            result.sort((a, b) => (b.displayName || b.name).localeCompare(a.displayName || a.name));
            break;
        case 'id-asc':
        default:
            result.sort((a, b) => a.id - b.id);
            break;
    }

    filteredPokemons = result;

    // Se qualquer filtro estiver ativo (Geração, Tipo, Busca de Texto ou Mecânica/Forma),
    // exibe TODOS os Pokémon correspondentes àquele filtro sem cortar em 100!
    const hasActiveFilter = (selectedGeneration && selectedGeneration !== 'all') ||
                            (selectedType && selectedType !== 'all') ||
                            Boolean(rawQuery) ||
                            isFormSearch;

    if (hasActiveFilter) {
        displayedLimit = filteredPokemons.length;
    } else {
        if (!displayedLimit || displayedLimit < ITEMS_PER_PAGE) {
            displayedLimit = ITEMS_PER_PAGE;
        }
    }

    renderCards(isFormSearch, { isMegaKeyword, isGmaxKeyword, isAlolaKeyword, isGalarKeyword, isHisuiKeyword, isPaldeaKeyword, isPrimalKeyword });
}

/**
 * Renderiza os cards no grid de acordo com o limite de exibição atual (100 por página)
 */
function renderCards(isFormSearch = false, formFlags = {}) {
    if (!cardsContainer) return;

    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();

    // Atualiza contador de resultados
    if (resultsCounter) {
        const matching = filteredPokemons.length;
        if (isFormSearch) {
            let formLabel = isEn ? 'Special Forms' : 'Formas Especiais';
            if (formFlags.isMegaKeyword) formLabel = isEn ? 'Mega Evolution forms' : 'formas de Mega Evolução';
            else if (formFlags.isGmaxKeyword) formLabel = isEn ? 'Gigantamax forms' : 'formas Gigantamax';
            else if (formFlags.isAlolaKeyword) formLabel = isEn ? 'Alolan regional variants' : 'variantes regionais de Alola';
            else if (formFlags.isGalarKeyword) formLabel = isEn ? 'Galarian regional variants' : 'variantes regionais de Galar';
            else if (formFlags.isHisuiKeyword) formLabel = isEn ? 'Hisuian regional variants' : 'variantes regionais de Hisui';
            else if (formFlags.isPaldeaKeyword) formLabel = isEn ? 'Paldean regional variants' : 'variantes regionais de Paldea';
            else if (formFlags.isPrimalKeyword) formLabel = isEn ? 'Primal Reversions' : 'Reversões Primitivas';

            resultsCounter.textContent = isEn 
                ? `Showing ${Math.min(displayedLimit, matching)} of ${matching} ${formLabel} • (Gimmick search)`
                : `Exibindo ${Math.min(displayedLimit, matching)} de ${matching} ${formLabel} • (Busca por Mecânica)`;
        } else {
            let contextLabel = isEn ? 'all 9 Generations' : 'todas as 9 Gerações';
            if (selectedGeneration !== 'all') {
                const g = GENERATIONS_CONFIG[selectedGeneration];
                contextLabel = isEn ? `Generation ${g.roman} (${g.name} • ${g.mainGames})` : `${g.roman}ª Geração (${g.name} • ${g.mainGames})`;
            }
            if (selectedType !== 'all') {
                const tInfo = TYPE_INFO[selectedType] || { namePt: selectedType, nameEn: selectedType };
                contextLabel += isEn ? ` • ${tInfo.nameEn || tInfo.namePt} Type` : ` • Tipo ${tInfo.namePt}`;
            }
            if (searchTerm) {
                contextLabel += isEn ? ' (Custom search)' : ' (Busca personalizada)';
            }
            resultsCounter.textContent = isEn 
                ? `Showing ${Math.min(displayedLimit, matching)} of ${matching} Pokémon • ${contextLabel}`
                : `Exibindo ${Math.min(displayedLimit, matching)} de ${matching} Pokémon • ${contextLabel}`;
        }
    }

    if (filteredPokemons.length === 0) {
        cardsContainer.innerHTML = `
            <div class="empty-state">
                <h3>${isEn ? 'No Pokémon found' : 'Nenhum Pokémon encontrado'}</h3>
                <p>${isEn ? 'No results match the selected filters.' : 'Nenhum resultado corresponde aos filtros selecionados.'}</p>
                <button type="button" class="btn-clear" onclick="document.getElementById('btn-clear-filters').click()">
                    ${isEn ? 'Clear Filters' : 'Limpar Filtros'}
                </button>
            </div>
        `;
        if (btnLoadMore) btnLoadMore.parentElement.style.display = 'none';
        return;
    }

    const visibleItems = filteredPokemons.slice(0, displayedLimit);

    const cardsHtml = visibleItems.map(p => {
        const typesHtml = p.types.map(t => {
            const info = TYPE_INFO[t] || { namePt: t, nameEn: t, color: '#777', textColor: '#fff' };
            const typeLabel = isEn ? (info.nameEn || info.namePt) : info.namePt;
            return `
                <span class="type-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                    ${typeLabel}
                </span>
            `;
        }).join('');

        const primaryType = p.types[0];
        const primaryColor = TYPE_INFO[primaryType]?.color || '#999';
        const isAlt = p.isAlternativeForm;
        const displayName = isAlt
            ? p.displayName
            : (isEn 
                ? p.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
                : (p.displayName || p.name.charAt(0).toUpperCase() + p.name.slice(1)));

        const gen = GENERATIONS_CONFIG[p.generation];
        const clickHandler = isAlt 
            ? `openPokemonModal(${p.id}, '${p.formId}')`
            : `openPokemonModal(${p.id})`;

        const badgeHtml = isAlt && p.badgeInfo 
            ? `<span class="card-gimmick-tag" style="background-color: ${p.badgeInfo.bg}; color: ${p.badgeInfo.color}" title="${p.badgeInfo.title}">${p.badgeInfo.label}</span>`
            : `<span class="card-gen-pill">Gen ${gen ? gen.roman : p.generation}</span>`;

        return `
            <article class="pokemon-card ${isAlt ? 'alt-form-card' : ''}" onclick="${clickHandler}" tabindex="0" role="button" aria-label="${isEn ? 'View details of' : 'Ver detalhes de'} ${displayName}">
                <div class="card-img-box" style="--accent-color: ${primaryColor}">
                    <img src="${p.image}" alt="${displayName}" loading="lazy" class="pokemon-card-img" />
                    ${badgeHtml}
                </div>
                <div class="card-info">
                    <span class="pokemon-id">${p.formattedId}</span>
                    <h2 class="pokemon-name">${displayName}</h2>
                    <div class="pokemon-types">
                        ${typesHtml}
                    </div>
                </div>
            </article>
        `;
    }).join('');

    cardsContainer.innerHTML = cardsHtml;

    // Controla visibilidade do botão Carregar Mais
    if (btnLoadMore) {
        if (displayedLimit >= filteredPokemons.length) {
            btnLoadMore.parentElement.style.display = 'none';
        } else {
            btnLoadMore.parentElement.style.display = 'flex';
            const remaining = filteredPokemons.length - displayedLimit;
            btnLoadMore.textContent = isEn 
                ? `Load more Pokémon (+${Math.min(ITEMS_PER_PAGE, remaining)})`
                : `Carregar mais Pokémon (+${Math.min(ITEMS_PER_PAGE, remaining)})`;
        }
    }
}

// Sincroniza filtros e visual ao receber evento de troca de idioma
window.addEventListener('languagechange', () => {
    const isEn = typeof I18nController !== 'undefined' && I18nController.isEnglish();
    if (genActiveBadge) {
        if (selectedGeneration === 'all') {
            genActiveBadge.textContent = isEn ? 'All Generations (1025)' : 'Todas as Gerações (1025)';
        } else {
            const g = GENERATIONS_CONFIG[selectedGeneration];
            genActiveBadge.textContent = isEn ? `Generation ${g.roman} (${g.name} • ${g.total} Pokémon)` : `Geração ${g.roman} (${g.name} • ${g.total} Pokémon)`;
        }
    }
    const currentGen = selectedGeneration;
    const currentType = selectedType;
    renderGenerationFilterButtons();
    renderTypeFilterButtons();
    if (currentGen) {
        document.querySelectorAll('.gen-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.gen === currentGen));
    }
    if (currentType) {
        document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.type === currentType));
    }
    renderCards();
});
