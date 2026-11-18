// Gerenciamento e requisições da PokéAPI
const POKE_API = {
    baseUrl: 'https://pokeapi.co/api/v2',
    totalGen1: 151,
    cacheKey: 'pokedex_kanto_151_v3',
    speciesCache: new Map(),

    /**
     * Carrega todos os 151 Pokémon da 1ª Geração (com cache no localStorage)
     */
    async loadGen1Pokemons(onProgress = null) {
        // Se já temos a base de dados compilada de FireRed & LeafGreen, carrega instantaneamente
        if (typeof KANTO_POKEMONS !== 'undefined' && Array.isArray(KANTO_POKEMONS) && KANTO_POKEMONS.length === this.totalGen1) {
            if (onProgress) onProgress(151, 151);
            return KANTO_POKEMONS;
        }

        // Tenta obter do cache local para carregamento instantâneo
        try {
            const cached = localStorage.getItem(this.cacheKey);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length === this.totalGen1) {
                    if (onProgress) onProgress(151, 151);
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Erro ao ler cache local do Pokédex:', e);
        }

        // Caso não esteja em cache, busca os dados da PokéAPI em lotes paralelos
        const pokemons = [];
        const batchSize = 25;

        for (let i = 1; i <= this.totalGen1; i += batchSize) {
            const batchPromises = [];
            const end = Math.min(i + batchSize - 1, this.totalGen1);

            for (let id = i; id <= end; id++) {
                batchPromises.push(
                    fetch(`${this.baseUrl}/pokemon/${id}`)
                        .then(res => {
                            if (!res.ok) throw new Error(`Falha ao buscar pokemon ${id}`);
                            return res.json();
                        })
                        .then(data => this.formatPokemonData(data))
                );
            }

            const batchResults = await Promise.all(batchPromises);
            pokemons.push(...batchResults);

            if (onProgress) {
                onProgress(pokemons.length, this.totalGen1);
            }
        }

        // Ordena por ID garantindo ordem correta
        pokemons.sort((a, b) => a.id - b.id);

        // Salva no localStorage para carregamento imediato nas próximas vezes
        try {
            localStorage.setItem(this.cacheKey, JSON.stringify(pokemons));
        } catch (e) {
            console.warn('Não foi possível salvar cache no localStorage:', e);
        }

        return pokemons;
    },

    /**
     * Formata os dados essenciais de um Pokémon para uso no catálogo e nos filtros
     */
    formatPokemonData(data) {
        const id = data.id;
        const formattedId = `Nº ${String(id).padStart(4, '0')}`;
        const types = data.types.map(t => t.type.name);

        // Imagem oficial de alta definição (Official Artwork)
        const officialArtwork = data.sprites?.other?.['official-artwork']?.front_default;
        const dreamWorld = data.sprites?.other?.dream_world?.front_default;
        const fallbackSprite = data.sprites?.front_default;
        const image = officialArtwork || dreamWorld || fallbackSprite || '';

        // Habilidades com tradução
        const abilities = data.abilities.map(a => {
            const rawName = a.ability.name;
            const ptName = ABILITY_TRANSLATIONS[rawName] || rawName.replace(/-/g, ' ');
            return {
                raw: rawName,
                name: ptName,
                is_hidden: a.is_hidden
            };
        });

        // Estatísticas base
        const statsMap = {};
        let statsTotal = 0;
        data.stats.forEach(s => {
            statsMap[s.stat.name] = s.base_stat;
            statsTotal += s.base_stat;
        });

        return {
            id,
            name: data.name,
            formattedId,
            types,
            image,
            height: (data.height / 10).toFixed(1), // Em metros
            weight: (data.weight / 10).toFixed(1), // Em kg
            abilities,
            stats: {
                hp: statsMap['hp'] || 0,
                attack: statsMap['attack'] || 0,
                defense: statsMap['defense'] || 0,
                spAttack: statsMap['special-attack'] || 0,
                spDefense: statsMap['special-defense'] || 0,
                speed: statsMap['speed'] || 0,
                total: statsTotal
            }
        };
    },

    /**
     * Busca dados adicionais de espécie (descrição, categoria, cadeia de evolução)
     */
    async getSpeciesAndEvolution(pokemonId) {
        if (this.speciesCache.has(pokemonId)) {
            return this.speciesCache.get(pokemonId);
        }

        try {
            const speciesRes = await fetch(`${this.baseUrl}/pokemon-species/${pokemonId}`);
            if (!speciesRes.ok) throw new Error('Falha ao obter espécie');
            const species = await speciesRes.json();

            // Descrição da Pokédex (preferência: pt/pt-BR > es > en)
            let flavorText = '';
            const ptEntry = species.flavor_text_entries.find(e => e.language.name === 'pt' || e.language.name === 'pt-BR');
            const esEntry = species.flavor_text_entries.find(e => e.language.name === 'es');
            const enEntry = species.flavor_text_entries.find(e => e.language.name === 'en');

            const chosenEntry = ptEntry || esEntry || enEntry;
            if (chosenEntry) {
                // Remove quebras de linha duras comuns das ROMs do Game Boy
                flavorText = chosenEntry.flavor_text.replace(/[\n\f\r]/g, ' ').replace(/\u00ad/g, '').trim();
            } else {
                flavorText = 'Nenhuma descrição encontrada nos arquivos oficiais da Pokédex.';
            }

            // Categoria / Espécie (Gênero)
            let genus = '';
            const ptGenus = species.genera?.find(g => g.language.name === 'pt' || g.language.name === 'pt-BR');
            const enGenus = species.genera?.find(g => g.language.name === 'en');
            if (ptGenus) {
                genus = ptGenus.genus;
            } else if (enGenus) {
                genus = GENUS_TRANSLATIONS[enGenus.genus] || enGenus.genus;
            } else {
                genus = 'Pokémon';
            }

            // Gênero (proporção macho/fêmea)
            let genderRate = species.gender_rate; // -1 = sem gênero, senão oitavos femininos
            let genderText = '50% Macho, 50% Fêmea';
            if (genderRate === -1) {
                genderText = 'Sem Gênero';
            } else {
                const femalePercent = (genderRate / 8) * 100;
                const malePercent = 100 - femalePercent;
                genderText = `${malePercent}% ♂ / ${femalePercent}% ♀`;
            }

            // Cadeia evolutiva
            let evolutionChain = null;
            if (species.evolution_chain?.url) {
                const evoRes = await fetch(species.evolution_chain.url);
                if (evoRes.ok) {
                    const evoData = await evoRes.json();
                    evolutionChain = this.parseEvolutionChain(evoData.chain);
                }
            }

            const result = {
                flavorText,
                genus,
                genderText,
                evolutionChain
            };

            this.speciesCache.set(pokemonId, result);
            return result;
        } catch (error) {
            console.error(`Erro ao buscar detalhes da espécie ${pokemonId}:`, error);
            return {
                flavorText: 'Dados de espécie indisponíveis no momento.',
                genus: 'Pokémon',
                genderText: 'Desconhecido',
                evolutionChain: null
            };
        }
    },

    /**
     * Transforma a árvore aninhada de evolução em nós simplificados
     */
    parseEvolutionChain(node) {
        if (!node) return null;

        const id = parseInt(node.species.url.split('/').filter(Boolean).pop());
        const details = node.evolution_details?.[0] || {};

        let condition = '';
        if (details.min_level) {
            condition = `Nível ${details.min_level}`;
        } else if (details.item) {
            const rawItem = details.item.name;
            condition = EVOLUTION_TRANSLATIONS[rawItem] || rawItem.replace(/-/g, ' ');
        } else if (details.trigger?.name === 'trade') {
            condition = 'Troca';
        } else if (details.trigger?.name) {
            condition = EVOLUTION_TRANSLATIONS[details.trigger.name] || details.trigger.name;
        }

        return {
            id,
            name: node.species.name,
            condition,
            evolvesTo: (node.evolves_to || []).map(child => this.parseEvolutionChain(child))
        };
    }
};
