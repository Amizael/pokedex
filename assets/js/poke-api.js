// Gerenciamento e requisições da PokéAPI (Gerações I a IX)
const POKE_API = {
    baseUrl: 'https://pokeapi.co/api/v2',
    cdnUrl: 'https://raw.githubusercontent.com/PokeAPI/api-data/master/data/api/v2',
    totalPokemons: 1025,
    totalGen1: 151,
    speciesCache: new Map(),
    pokemonDetailsCache: new Map(),

    /**
     * Carrega todos os 1025 Pokémon (Gerações I a IX) instantaneamente da base estática
     */
    async loadAllPokemons(onProgress = null) {
        if (typeof ALL_POKEMONS !== 'undefined' && Array.isArray(ALL_POKEMONS) && ALL_POKEMONS.length >= 1025) {
            if (onProgress) onProgress(1025, 1025);
            return ALL_POKEMONS;
        }

        // Se por ventura ALL_POKEMONS não estiver disponível, tenta KANTO_POKEMONS
        if (typeof KANTO_POKEMONS !== 'undefined' && Array.isArray(KANTO_POKEMONS)) {
            if (onProgress) onProgress(KANTO_POKEMONS.length, KANTO_POKEMONS.length);
            return KANTO_POKEMONS;
        }

        return [];
    },

    /**
     * Carrega Pokémon da 1ª Geração (compatibilidade retroativa)
     */
    async loadGen1Pokemons(onProgress = null) {
        const all = await this.loadAllPokemons(onProgress);
        return all.filter(p => p.generation === 1 || p.id <= 151);
    },

    /**
     * Busca os movimentos de um Pokémon para uma determinada geração
     */
    async getPokemonMoves(pokemonId, generationId = 1) {
        const genConfig = GENERATIONS_CONFIG[generationId] || GENERATIONS_CONFIG[1];
        const numId = parseInt(pokemonId, 10);
        const pokemon = (window.allPokemons || []).find(p => p.id === numId) || 
                        (typeof ALL_POKEMONS !== 'undefined' ? ALL_POKEMONS.find(p => p.id === numId) : null);

        // Se o Pokémon foi introduzido em uma geração POSTERIOR à solicitada
        if (pokemon && pokemon.generation > genConfig.id) {
            return {
                notAvailable: true,
                introducedGen: pokemon.generation,
                generationName: GENERATIONS_CONFIG[pokemon.generation]?.name || `Geração ${pokemon.generation}`,
                moves: []
            };
        }

        // Se for Gen 1 ou Gen 3 (FRLG) e já temos moves compilados em pokemon.frlgMoves
        if ((generationId === 1 || generationId === 3) && pokemon?.frlgMoves && pokemon.frlgMoves.length > 0) {
            const mappedMoves = pokemon.frlgMoves.map(m => {
                const info = (typeof ALL_MOVES_DATA !== 'undefined' && ALL_MOVES_DATA[m.name]) || 
                             (typeof FRLG_MOVES !== 'undefined' && FRLG_MOVES[m.name]) || {};
                return {
                    name: m.name,
                    method: m.method || 'level-up',
                    level: m.level || 0,
                    details: {
                        name: m.name,
                        namePt: info.namePt || m.name,
                        type: info.type || 'normal',
                        category: info.category || 'physical',
                        power: info.power ?? '—',
                        accuracy: info.accuracy ?? '—',
                        pp: info.pp || 20,
                        desc: info.desc || 'Ataque oficial registrado na Pokédex.',
                        tm: info.tm || null,
                        tutor: info.tutor || null
                    }
                };
            });
            return { notAvailable: false, moves: mappedMoves };
        }

        // Busca os dados completos do Pokémon do cache ou via CDN/PokeAPI
        let rawData = this.pokemonDetailsCache.get(numId);
        if (!rawData) {
            try {
                // Tenta primeiro o CDN do api-data (sem limite de taxa)
                const res = await fetch(`${this.cdnUrl}/pokemon/${numId}/index.json`);
                if (res.ok) {
                    rawData = await res.json();
                    this.pokemonDetailsCache.set(numId, rawData);
                } else {
                    // Fallback para pokeapi.co
                    const apiRes = await fetch(`${this.baseUrl}/pokemon/${numId}`);
                    if (apiRes.ok) {
                        rawData = await apiRes.json();
                        this.pokemonDetailsCache.set(numId, rawData);
                    }
                }
            } catch (err) {
                console.warn(`Erro ao buscar moves do Pokémon #${numId}:`, err);
            }
        }

        if (!rawData || !rawData.moves) {
            return { notAvailable: false, moves: [] };
        }

        // Filtra os movimentos para os grupos de versões da geração selecionada
        const targetVGs = genConfig.versionGroups || [];
        const resultMoves = [];
        const seenMoveMethods = new Set();

        rawData.moves.forEach(m => {
            const moveName = m.move.name;
            // Procura se tem detalhes para a versão alvo
            const matchingDetails = m.version_group_details.filter(vg => targetVGs.includes(vg.version_group.name));
            
            if (matchingDetails.length > 0) {
                // Pega a versão mais representativa dentro do grupo
                const detail = matchingDetails[matchingDetails.length - 1];
                const method = detail.move_learn_method.name;
                const level = detail.level_learned_at || 0;
                const uniqueKey = `${moveName}-${method}-${level}`;

                if (!seenMoveMethods.has(uniqueKey)) {
                    seenMoveMethods.add(uniqueKey);
                    const info = (typeof ALL_MOVES_DATA !== 'undefined' && ALL_MOVES_DATA[moveName]) || 
                                 (typeof FRLG_MOVES !== 'undefined' && FRLG_MOVES[moveName]) || {};

                    resultMoves.push({
                        name: moveName,
                        method: method,
                        level: level,
                        details: {
                            name: moveName,
                            namePt: info.namePt || moveName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                            type: info.type || 'normal',
                            category: info.category || 'physical',
                            power: info.power !== null && info.power !== undefined ? info.power : '—',
                            accuracy: info.accuracy !== null && info.accuracy !== undefined ? info.accuracy : '—',
                            pp: info.pp || 20,
                            desc: info.desc || 'Movimento registrado nos dados oficiais da Pokédex.',
                            tm: null,
                            tutor: null
                        }
                    });
                }
            }
        });

        return { notAvailable: false, moves: resultMoves };
    },

    /**
     * Busca dados adicionais de espécie (descrição, categoria, cadeia de evolução)
     */
    async getSpeciesAndEvolution(pokemonId) {
        const numId = parseInt(pokemonId, 10);
        if (this.speciesCache.has(numId)) {
            return this.speciesCache.get(numId);
        }

        // Dados base do Pokémon
        const pokemon = (window.allPokemons || []).find(p => p.id === numId) || 
                        (typeof ALL_POKEMONS !== 'undefined' ? ALL_POKEMONS.find(p => p.id === numId) : null);

        let defaultDesc = pokemon?.description || 'Um Pokémon extraordinário registrado nos arquivos oficiais da Pokédex.';
        let defaultGenus = pokemon?.genus || 'Pokémon';
        let defaultGender = '50% Macho, 50% Fêmea';

        try {
            // Tenta obter do CDN da PokéAPI ou da API principal
            let species = null;
            try {
                const cdnRes = await fetch(`${this.cdnUrl}/pokemon-species/${numId}/index.json`);
                if (cdnRes.ok) species = await cdnRes.json();
            } catch (_) {}

            if (!species) {
                const speciesRes = await fetch(`${this.baseUrl}/pokemon-species/${numId}`);
                if (speciesRes.ok) species = await speciesRes.json();
            }

            if (!species) {
                return {
                    flavorText: defaultDesc,
                    genus: defaultGenus,
                    genderText: defaultGender,
                    evolutionChain: null
                };
            }

            // Descrição da Pokédex (preferência: pt/pt-BR > es > en)
            let flavorText = defaultDesc;
            if (species.flavor_text_entries && species.flavor_text_entries.length > 0) {
                const ptEntry = species.flavor_text_entries.find(e => e.language.name === 'pt' || e.language.name === 'pt-BR');
                const esEntry = species.flavor_text_entries.find(e => e.language.name === 'es');
                const enEntry = species.flavor_text_entries.find(e => e.language.name === 'en');
                const chosen = ptEntry || esEntry || enEntry;
                if (chosen) {
                    flavorText = chosen.flavor_text.replace(/[\n\f\r]/g, ' ').replace(/\u00ad/g, '').trim();
                }
            }

            // Categoria / Espécie (Gênero)
            let genus = defaultGenus;
            const ptGenus = species.genera?.find(g => g.language.name === 'pt' || g.language.name === 'pt-BR');
            const enGenus = species.genera?.find(g => g.language.name === 'en');
            if (ptGenus) {
                genus = ptGenus.genus;
            } else if (enGenus && typeof GENUS_TRANSLATIONS !== 'undefined' && GENUS_TRANSLATIONS[enGenus.genus]) {
                genus = GENUS_TRANSLATIONS[enGenus.genus];
            }

            // Gênero
            let genderRate = species.gender_rate;
            let genderText = '50% Macho, 50% Fêmea';
            if (genderRate === -1) {
                genderText = 'Sem Gênero';
            } else if (genderRate !== undefined && genderRate !== null) {
                const femalePercent = (genderRate / 8) * 100;
                const malePercent = 100 - femalePercent;
                genderText = `${malePercent}% ♂ / ${femalePercent}% ♀`;
            }

            // Cadeia evolutiva
            let evolutionChain = null;
            if (species.evolution_chain?.url) {
                let evoUrl = species.evolution_chain.url;
                const chainId = evoUrl.split('/').filter(Boolean).pop();
                
                // Tenta carregar primeiro pelo CDN do api-data
                try {
                    const cdnEvoRes = await fetch(`${this.cdnUrl}/evolution-chain/${chainId}/index.json`);
                    if (cdnEvoRes.ok) {
                        const evoData = await cdnEvoRes.json();
                        evolutionChain = this.parseEvolutionChain(evoData.chain);
                    }
                } catch (_) {}

                // Fallback para pokeapi.co
                if (!evolutionChain) {
                    const fullEvoUrl = evoUrl.startsWith('http') ? evoUrl : `https://pokeapi.co${evoUrl.startsWith('/') ? '' : '/'}${evoUrl}`;
                    const evoRes = await fetch(fullEvoUrl);
                    if (evoRes.ok) {
                        const evoData = await evoRes.json();
                        evolutionChain = this.parseEvolutionChain(evoData.chain);
                    }
                }
            }

            const result = {
                flavorText,
                genus,
                genderText,
                evolutionChain
            };

            this.speciesCache.set(numId, result);
            return result;
        } catch (error) {
            console.warn(`Erro ao buscar dados complementares de #${numId}:`, error);
            return {
                flavorText: defaultDesc,
                genus: defaultGenus,
                genderText: defaultGender,
                evolutionChain: null
            };
        }
    },

    /**
     * Transforma a árvore aninhada de evolução em nós simplificados
     */
    parseEvolutionChain(node) {
        if (!node) return null;

        const id = parseInt(node.species.url.split('/').filter(Boolean).pop(), 10);
        const details = node.evolution_details?.[0] || {};

        let condition = '';
        if (details.min_level) {
            condition = `Nível ${details.min_level}`;
        } else if (details.item) {
            const rawItem = details.item.name;
            condition = (typeof EVOLUTION_TRANSLATIONS !== 'undefined' && EVOLUTION_TRANSLATIONS[rawItem]) || rawItem.replace(/-/g, ' ');
        } else if (details.trigger?.name === 'trade') {
            condition = 'Troca';
        } else if (details.trigger?.name) {
            condition = (typeof EVOLUTION_TRANSLATIONS !== 'undefined' && EVOLUTION_TRANSLATIONS[details.trigger.name]) || details.trigger.name;
        }

        return {
            id,
            name: node.species.name,
            condition,
            evolvesTo: (node.evolves_to || []).map(child => this.parseEvolutionChain(child))
        };
    }
};

if (typeof module !== 'undefined') {
    module.exports = { POKE_API };
}
