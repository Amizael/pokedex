// Aplicação Principal da Pokédex (Kanto - 1ª Geração)

// Estado da Aplicação
window.allPokemons = [];
let filteredPokemons = [];
let searchTerm = '';
let selectedType = 'all';
let selectedSort = 'id-asc';
const ITEMS_PER_PAGE = 24;
let displayedLimit = ITEMS_PER_PAGE;

// Elementos do DOM
const cardsContainer = document.getElementById('cards-pokemons');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortSelect = document.getElementById('sort-select');
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
    renderTypeFilterButtons();
    setupEventListeners();
    await loadPokemons();
});

/**
 * Carrega os dados dos 151 Pokémon da 1ª Geração
 */
async function loadPokemons() {
    try {
        window.allPokemons = await POKE_API.loadGen1Pokemons((current, total) => {
            if (loadingProgress) {
                const percent = Math.round((current / total) * 100);
                loadingProgress.textContent = `Carregando Pokédex... ${percent}% (${current}/${total})`;
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
            loadingProgress.textContent = 'Erro ao conectar com a PokéAPI. Atualize a página para tentar novamente.';
        }
    }
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

    // Filtros de Tipo
    if (typeFiltersContainer) {
        typeFiltersContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.type-filter-btn');
            if (!btn) return;

            document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            selectedType = btn.dataset.type;
            displayedLimit = ITEMS_PER_PAGE;
            applyFiltersAndRender();
        });
    }

    // Botão Surpreenda-me (Sorteia um Pokémon de 1 a 151 e abre)
    if (btnSurpriseMe) {
        btnSurpriseMe.addEventListener('click', () => {
            const randomId = Math.floor(Math.random() * 151) + 1;
            openPokemonModal(randomId);
        });
    }

    // Botão Limpar Filtros
    if (btnClearFilters) {
        btnClearFilters.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            selectedType = 'all';
            selectedSort = 'id-asc';
            if (sortSelect) sortSelect.value = 'id-asc';

            document.querySelectorAll('.type-filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.type === 'all');
            });

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
 * Aplica os filtros de busca, tipo e ordenação e atualiza a interface
 */
function applyFiltersAndRender() {
    let result = [...window.allPokemons];

    // Filtro por Texto (Nome ou Número)
    if (searchTerm) {
        result = result.filter(p => {
            const cleanQuery = searchTerm.replace(/[^a-z0-9]/gi, '');
            const matchName = p.name.toLowerCase().includes(searchTerm);
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
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            result.sort((a, b) => b.name.localeCompare(a.name));
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
 * Renderiza os cards no grid de acordo com o limite de exibição atual
 */
function renderCards() {
    if (!cardsContainer) return;

    // Atualiza contador de resultados
    if (resultsCounter) {
        const total = window.allPokemons.length;
        const matching = filteredPokemons.length;
        resultsCounter.textContent = `Exibindo ${Math.min(displayedLimit, matching)} de ${matching} Pokémon ${selectedType !== 'all' || searchTerm ? '(Filtrado)' : '(1ª Geração)'}`;
    }

    if (filteredPokemons.length === 0) {
        cardsContainer.innerHTML = `
            <div class="empty-state">
                <h3>Nenhum Pokémon encontrado</h3>
                <p>Nenhum resultado corresponde aos seus filtros de busca.</p>
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

        return `
            <article class="pokemon-card" onclick="openPokemonModal(${p.id})" tabindex="0" role="button" aria-label="Ver detalhes de ${p.name}">
                <div class="card-img-box" style="--accent-color: ${primaryColor}">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" class="pokemon-card-img" />
                </div>
                <div class="card-info">
                    <span class="pokemon-id">${p.formattedId}</span>
                    <h2 class="pokemon-name">${p.name}</h2>
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
            btnLoadMore.textContent = `Carregar mais Pokémon (+${Math.min(ITEMS_PER_PAGE, filteredPokemons.length - displayedLimit)})`;
        }
    }
}
