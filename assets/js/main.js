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

    let html = `
        <button type="button" class="gen-filter-btn active" data-gen="all">
            <span class="gen-btn-title">Todas</span>
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

    let html = `
        <button type="button" class="type-filter-btn active" data-type="all">
            Todos os Tipos
        </button>
    `;

    ALL_TYPES.forEach(t => {
        const info = TYPE_INFO[t];
        html += `
            <button type="button" class="type-filter-btn" data-type="${t}" style="--btn-color: ${info.color}; --btn-text: ${info.textColor}">
                ${info.namePt}
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
    let result = [...(window.allPokemons || [])];

    // Filtro por Geração
    if (selectedGeneration && selectedGeneration !== 'all') {
        const genNum = parseInt(selectedGeneration, 10);
        result = result.filter(p => p.generation === genNum);
    }

    // Filtro por Texto (Nome ou Número)
    if (searchTerm) {
        result = result.filter(p => {
            const cleanQuery = searchTerm.replace(/[^a-z0-9]/gi, '');
            const matchName = p.name.toLowerCase().includes(searchTerm) || (p.displayName && p.displayName.toLowerCase().includes(searchTerm));
            const matchId = String(p.id) === cleanQuery || p.formattedId.toLowerCase().includes(searchTerm);
            return matchName || matchId;
        });
    }

    // Filtro por Tipo
    if (selectedType && selectedType !== 'all') {
        result = result.filter(p => p.types.includes(selectedType));
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
    renderCards();
}

/**
 * Renderiza os cards no grid de acordo com o limite de exibição atual (100 por página)
 */
function renderCards() {
    if (!cardsContainer) return;

    // Atualiza contador de resultados
    if (resultsCounter) {
        const matching = filteredPokemons.length;
        let contextLabel = 'todas as 9 Gerações';
        if (selectedGeneration !== 'all') {
            const g = GENERATIONS_CONFIG[selectedGeneration];
            contextLabel = `${g.roman}ª Geração (${g.name} • ${g.mainGames})`;
        }
        if (selectedType !== 'all') {
            const tInfo = TYPE_INFO[selectedType] || { namePt: selectedType };
            contextLabel += ` • Tipo ${tInfo.namePt}`;
        }
        if (searchTerm) {
            contextLabel += ' (Busca personalizada)';
        }
        resultsCounter.textContent = `Exibindo ${Math.min(displayedLimit, matching)} de ${matching} Pokémon • ${contextLabel}`;
    }

    if (filteredPokemons.length === 0) {
        cardsContainer.innerHTML = `
            <div class="empty-state">
                <h3>Nenhum Pokémon encontrado</h3>
                <p>Nenhum resultado corresponde aos filtros selecionados.</p>
                <button type="button" class="btn-clear" onclick="document.getElementById('btn-clear-filters').click()">
                    Limpar Filtros
                </button>
            </div>
        `;
        if (btnLoadMore) btnLoadMore.parentElement.style.display = 'none';
        return;
    }

    const visibleItems = filteredPokemons.slice(0, displayedLimit);

    const cardsHtml = visibleItems.map(p => {
        const typesHtml = p.types.map(t => {
            const info = TYPE_INFO[t] || { namePt: t, color: '#777', textColor: '#fff' };
            return `
                <span class="type-badge" style="background-color: ${info.color}; color: ${info.textColor}">
                    ${info.namePt}
                </span>
            `;
        }).join('');

        const primaryType = p.types[0];
        const primaryColor = TYPE_INFO[primaryType]?.color || '#999';
        const displayName = p.displayName || p.name.charAt(0).toUpperCase() + p.name.slice(1);
        const gen = GENERATIONS_CONFIG[p.generation];

        return `
            <article class="pokemon-card" onclick="openPokemonModal(${p.id})" tabindex="0" role="button" aria-label="Ver detalhes de ${displayName}">
                <div class="card-img-box" style="--accent-color: ${primaryColor}">
                    <img src="${p.image}" alt="${displayName}" loading="lazy" class="pokemon-card-img" />
                    <span class="card-gen-pill">Gen ${gen ? gen.roman : p.generation}</span>
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
            btnLoadMore.textContent = `Carregar mais Pokémon (+${Math.min(ITEMS_PER_PAGE, remaining)})`;
        }
    }
}
