// Controle e Renderização do Modal de Detalhes da Pokédex (Estilo Oficial)

let currentModalPokemonId = null;

/**
 * Abre o modal de detalhes do Pokémon
 */
async function openPokemonModal(pokemonId) {
    if (!pokemonId || pokemonId < 1 || pokemonId > 151) return;

    currentModalPokemonId = pokemonId;
    const modalElement = document.getElementById('pokemon-modal');
    const modalBody = document.getElementById('modal-body-content');

    if (!modalElement || !modalBody) return;

    // Exibe o modal com indicador de carregamento
    modalElement.classList.add('open');
    document.body.style.overflow = 'hidden'; // Evita rolagem da página ao fundo

    // Busca o Pokémon do catálogo geral (já carregado)
    const pokemon = window.allPokemons?.find(p => p.id === pokemonId);
    if (!pokemon) {
        modalBody.innerHTML = `
            <div class="modal-loading">
                <div class="pokeball-spinner"></div>
                <p>Carregando informações do Pokémon...</p>
            </div>
        `;
        return;
    }

    // Renderiza a estrutura básica imediatamente
    renderModalContent(pokemon, null);

    // Carrega dados adicionais de espécie e evolução
    try {
        const speciesData = await POKE_API.getSpeciesAndEvolution(pokemonId);
        // Atualiza apenas se o usuário ainda estiver visualizando este mesmo Pokémon
        if (currentModalPokemonId === pokemonId) {
            renderModalContent(pokemon, speciesData);
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
}

/**
 * Navega para o Pokémon anterior ou próximo
 */
function navigateModalPokemon(direction) {
    if (!currentModalPokemonId) return;
    const nextId = currentModalPokemonId + direction;
    if (nextId >= 1 && nextId <= 151) {
        openPokemonModal(nextId);
    }
}

/**
 * Rola a fita horizontal de Pokémon
 */
function scrollMatchupRibbon(containerId, direction) {
    const el = document.getElementById(containerId);
    if (el) {
        el.scrollBy({ left: direction * 320, behavior: 'smooth' });
    }
}

/**
 * Constrói o HTML completo do modal
 */
function renderModalContent(pokemon, speciesData) {
    const modalBody = document.getElementById('modal-body-content');
    if (!modalBody) return;

    // Cálculo das relações de tipo (Fraquezas, Vantagens/Countera, Resistências)
    const relations = calculateTypeRelations(pokemon.types);

    // Cálculo dos confrontos com outros Pokémon reais da 1ª Geração
    const matchups = calculatePokemonMatchups(pokemon, window.allPokemons || []);

    // Tipagens do Pokémon
    const primaryType = pokemon.types[0];
    const primaryColor = TYPE_INFO[primaryType]?.color || '#30a7d7';

    // Navegação anterior / próximo
    const prevId = pokemon.id > 1 ? pokemon.id - 1 : null;
    const nextId = pokemon.id < 151 ? pokemon.id + 1 : null;

    const prevPokemon = prevId ? window.allPokemons?.find(p => p.id === prevId) : null;
    const nextPokemon = nextId ? window.allPokemons?.find(p => p.id === nextId) : null;

    // Dados de espécie
    const flavorText = speciesData ? speciesData.flavorText : 'Carregando descrição oficial da Pokédex...';
    const genus = speciesData ? speciesData.genus : 'Carregando...';
    const genderText = speciesData ? speciesData.genderText : 'Carregando...';

    // HTML dos tipos do Pokémon
    const typesHtml = pokemon.types.map(t => {
        const info = TYPE_INFO[t] || { namePt: t, color: '#777', textColor: '#fff' };
        return `<span class="type-badge large" style="background-color: ${info.color}; color: ${info.textColor}">${info.namePt}</span>`;
    }).join('');

    // HTML de Fraquezas por Tipo (dano 2x ou 4x)
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
        : '<span class="empty-relation">Nenhuma fraqueza conhecida</span>';

    // HTML de Forte contra por Tipo
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

    // HTML de Resistências
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

    // Habilidades em texto
    const abilitiesText = pokemon.abilities.map(a => `${a.name}${a.is_hidden ? ' (Oculta)' : ''}`).join(', ') || 'Nenhuma';

    // Estatísticas Base
    const stats = pokemon.stats;
    const maxStat = 255;

    // Fitas com lista real de Pokémon (Bom contra e Fraco contra)
    const strongRibbonHtml = renderMatchupRibbon(matchups.strongAgainst, 'strong', 'ribbon-strong');
    const weakRibbonHtml = renderMatchupRibbon(matchups.weakAgainst, 'weak', 'ribbon-weak');

    // Evolução HTML
    const evolutionHtml = renderEvolutionSection(speciesData?.evolutionChain, pokemon.id);

    modalBody.innerHTML = `
        <!-- Cabeçalho do Modal com Navegação -->
        <header class="modal-header">
            <div class="modal-nav">
                ${prevPokemon ? `
                    <button type="button" class="btn-nav prev" onclick="navigateModalPokemon(-1)" title="${prevPokemon.name}">
                        <span class="nav-arrow">&larr;</span>
                        <span class="nav-num">${prevPokemon.formattedId}</span>
                        <span class="nav-name">${prevPokemon.name}</span>
                    </button>
                ` : `<div class="nav-spacer"></div>`}

                <div class="modal-title-box">
                    <h2 class="pokemon-modal-name">${pokemon.name}</h2>
                    <span class="pokemon-modal-id">${pokemon.formattedId}</span>
                </div>

                ${nextPokemon ? `
                    <button type="button" class="btn-nav next" onclick="navigateModalPokemon(1)" title="${nextPokemon.name}">
                        <span class="nav-name">${nextPokemon.name}</span>
                        <span class="nav-num">${nextPokemon.formattedId}</span>
                        <span class="nav-arrow">&rarr;</span>
                    </button>
                ` : `<div class="nav-spacer"></div>`}
            </div>

            <button type="button" class="modal-close-btn" onclick="closePokemonModal()" aria-label="Fechar">&times;</button>
        </header>

        <!-- Corpo Principal em Duas Colunas -->
        <div class="modal-grid">
            <!-- Coluna Esquerda: Imagem, Tipos e Combate Elemental -->
            <div class="modal-col-left">
                <div class="modal-image-card" style="--pokemon-color: ${primaryColor}">
                    <img src="${pokemon.image}" alt="${pokemon.name}" class="modal-pokemon-img" />
                </div>

                <div class="modal-section-card">
                    <h3 class="section-title">Tipo</h3>
                    <div class="types-row">
                        ${typesHtml}
                    </div>
                </div>

                <!-- Fraquezas por Tipo -->
                <div class="modal-section-card">
                    <h3 class="section-title">
                        <span>Tipos que Causa Dano Aumentado</span>
                        <small class="section-subtitle">(Recebe 2× ou 4× dano)</small>
                    </h3>
                    <div class="relations-grid">
                        ${weaknessesHtml}
                    </div>
                </div>

                <!-- Tipos que Countera -->
                <div class="modal-section-card">
                    <h3 class="section-title">
                        <span>Tipos que Sofrem Dano Dobrado</span>
                        <small class="section-subtitle">(Causa 2× dano)</small>
                    </h3>
                    <div class="relations-grid">
                        ${countersHtml}
                    </div>
                </div>

                <!-- Resistências -->
                <div class="modal-section-card">
                    <h3 class="section-title">
                        <span>Resistências & Imunidades</span>
                        <small class="section-subtitle">(Dano reduzido)</small>
                    </h3>
                    <div class="relations-grid">
                        ${resistancesHtml}
                    </div>
                </div>
            </div>

            <!-- Coluna Direita: Descrição, Características e Status -->
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
                        <div class="profile-item full-width">
                            <span class="profile-label">Habilidades</span>
                            <span class="profile-value">${abilitiesText}</span>
                        </div>
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

        <!-- SEÇÃO: POKÉMONS QUE É BOM CONTRA (COM NOME, IMAGEM E DANO) -->
        <div class="modal-section-card full-width-section matchup-section strong-matchup-section">
            <div class="matchup-section-header">
                <div class="matchup-title-group">
                    <h3 class="section-title">
                        <span class="matchup-header-icon">&#9876;</span> Pokémons que é Bom Contra (Vantagem)
                    </h3>
                    <p class="section-desc">Seus ataques causam dano dobrado (2×) ou quádruplo (4×) contra estes Pokémon da 1ª Geração</p>
                </div>
                <span class="matchup-count-badge strong">${matchups.strongAgainst.length} Pokémon</span>
            </div>
            ${strongRibbonHtml}
        </div>

        <!-- SEÇÃO: POKÉMONS QUE É FRACO CONTRA (COM NOME, IMAGEM E DANO) -->
        <div class="modal-section-card full-width-section matchup-section weak-matchup-section">
            <div class="matchup-section-header">
                <div class="matchup-title-group">
                    <h3 class="section-title">
                        <span class="matchup-header-icon">&#128737;</span> Pokémons que é Fraco Contra (Desvantagem)
                    </h3>
                    <p class="section-desc">Estes Pokémon causam dano aumentado (2× ou 4×) contra seus tipos</p>
                </div>
                <span class="matchup-count-badge weak">${matchups.weakAgainst.length} Pokémon</span>
            </div>
            ${weakRibbonHtml}
        </div>

        <!-- Seção Inferior: Linha Evolutiva -->
        <div class="modal-evolution-container">
            <h3 class="section-title evolution-main-title">Linha Evolutiva</h3>
            ${evolutionHtml}
        </div>
    `;
}

/**
 * Renderiza uma fita horizontal de Pokémon para os confrontos (Bom contra / Fraco contra)
 */
function renderMatchupRibbon(list, type, containerId) {
    if (!list || list.length === 0) {
        return `
            <div class="empty-matchup">
                <p>Nenhum Pokémon da 1ª Geração se enquadra nesta categoria para esta tipagem.</p>
            </div>
        `;
    }

    const cardsHtml = list.map(item => {
        const p = item.pokemon;
        const isSuper = type === 'strong' ? item.damageDealt === 4 : item.damageTaken === 4;
        const damageVal = type === 'strong' ? item.damageDealt : item.damageTaken;
        const pillText = type === 'strong' ? `Causa ${damageVal}×` : `Recebe ${damageVal}×`;
        const pillClass = isSuper ? 'pill-super' : 'pill-standard';

        const typesMini = p.types.map(t => {
            const info = TYPE_INFO[t] || { namePt: t, color: '#777', textColor: '#fff' };
            return `<span class="type-mini-pill" style="background-color: ${info.color}; color: ${info.textColor}">${info.namePt}</span>`;
        }).join('');

        return `
            <div class="matchup-poke-card ${type}" onclick="openPokemonModal(${p.id})" title="${p.name} (${p.formattedId}) - Clique para ver detalhes">
                <span class="matchup-mult-badge ${pillClass}">${pillText}</span>
                <div class="matchup-thumb-box">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" />
                </div>
                <span class="matchup-poke-id">${p.formattedId}</span>
                <span class="matchup-poke-name">${p.name}</span>
                <div class="matchup-poke-types">
                    ${typesMini}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="matchup-ribbon-wrapper">
            <button type="button" class="ribbon-arrow-btn prev" onclick="scrollMatchupRibbon('${containerId}', -1)" aria-label="Rolar para esquerda">&#10094;</button>
            <div id="${containerId}" class="matchup-ribbon-track">
                ${cardsHtml}
            </div>
            <button type="button" class="ribbon-arrow-btn next" onclick="scrollMatchupRibbon('${containerId}', 1)" aria-label="Rolar para direita">&#10095;</button>
        </div>
    `;
}

/**
 * Renderiza uma barra de status individual
 */
function renderStatBar(name, value, max, color) {
    const percent = Math.min(100, Math.round((value / 180) * 100));
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
 * Renderiza a linha de evolução com cards visuais e condições
 */
function renderEvolutionSection(chain, currentId) {
    if (!chain) {
        return `
            <div class="evolution-loading">
                <div class="pokeball-spinner small"></div>
                <p>Carregando linha evolutiva...</p>
            </div>
        `;
    }

    // Se o Pokémon não possui evoluções
    if (!chain.evolvesTo || chain.evolvesTo.length === 0) {
        return `
            <div class="no-evolution-card">
                <p>Este Pokémon não possui evoluções conhecidas na 1ª Geração.</p>
            </div>
        `;
    }

    // Achata a árvore em estágios: [ [estágio 1], [estágio 2], [estágio 3] ]
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

                    // Verifica se o Pokémon pertence à 1ª Geração
                    const isGen1 = node.id <= 151;
                    const clickAction = isGen1 ? `onclick="openPokemonModal(${node.id})"` : '';
                    const cursorClass = isGen1 ? 'clickable' : 'non-clickable';

                    return `
                        <div class="evolution-card ${isCurrent ? 'current-pokemon' : ''} ${cursorClass}" ${clickAction}>
                            ${isCurrent ? `<span class="current-badge">Atual</span>` : ''}
                            ${!isGen1 ? `<span class="gen-badge">Gen Posterior</span>` : ''}
                            <div class="evo-img-box">
                                <img src="${artworkUrl}" onerror="this.onerror=null; this.src='${fallbackUrl}'" alt="${node.name}" />
                            </div>
                            <span class="evo-id">${formattedId}</span>
                            <span class="evo-name">${node.name}</span>
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
