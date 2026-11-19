// assets/js/i18n-controller.js
// Controlador Central de Internacionalização (PT-BR / EN)

const UI_TRANSLATIONS = {
    pt: {
        siteTitle: 'Poké<span>dex</span>',
        genSubtitle: 'Gerações I a IX • 1025 Pokémon',
        navPokedex: 'Pokédex',
        navMoves: 'Golpes',
        navItems: 'Itens',
        navGimmicks: 'Mecânicas Especiais',
        searchPlaceholder: 'Pesquisar por nome ou número (ex: Pikachu, Lucario ou 25)...',
        searchBtn: 'Buscar',
        surpriseBtn: 'Surpreenda-me!',
        sortLowest: 'Menor número primeiro',
        sortHighest: 'Maior número primeiro',
        sortNameAsc: 'Nome (A - Z)',
        sortNameDesc: 'Nome (Z - A)',
        allGens: 'Todas as Gerações (1025)',
        allTypes: 'Todos os Tipos',
        loadMore: 'Carregar mais Pokémon',
        statHp: 'Pontos de Saúde (PS)',
        statAtk: 'Ataque',
        statDef: 'Defesa',
        statSpAtk: 'Atq. Especial',
        statSpDef: 'Def. Especial',
        statSpeed: 'Velocidade',
        statTotal: 'Total de Status Base',
        weaknessesTab: 'Vantagens & Fraquezas',
        movesTab: 'Ataques',
        overviewTab: 'Visão Geral',
        formsSectionTitle: 'Formas & Variantes Alternativas',
        standardFormLabel: 'Forma Padrão',
        requiredItemLabel: 'Item de Ativação Obrigatório:',
        noFormsRecorded: 'Esta espécie não possui formas alternativas registradas.',
        heightLabel: 'Altura',
        weightLabel: 'Peso',
        categoryLabel: 'Categoria',
        genderLabel: 'Gênero',
        abilitiesTitle: 'Habilidades',
        baseStatsTitle: 'Estatísticas Básicas',
        weaknessesTitle: 'Fraquezas',
        countersTitle: 'Vantagens',
        resistancesTitle: 'Resistências',
        pokedexDescTitle: 'Descrição da Pokédex',
        characteristicsTitle: 'Características',
        clearFilters: 'Limpar Filtros',
        noResults: 'Nenhum Pokémon encontrado',
        noResultsDesc: 'Nenhum resultado corresponde aos filtros selecionados.',
        showingLabel: 'Exibindo',
        ofLabel: 'de',
        allGenerationsLabel: 'todas as 9 Gerações',
        interactiveFilterTitle: 'FILTRO INTERATIVO (RELAÇÕES DE COMBATE)',
        clearTypeBtn: 'Limpar Tipagem',
        legendGreen: 'Verde: Vantagem (2×)',
        legendRed: 'Vermelho: Fraqueza (2×)',
        legendPurple: 'Roxo: Imunidade (0×)',
        offensiveAdvantages: 'Vantagens Ofensivas (Causa 2×)',
        defensiveWeaknesses: 'Fraquezas Defensivas (Recebe 2×)',
        resistancesSec: 'Resistências (Recebe 0.5×)',
        immunitiesSec: 'Imunidades (Recebe 0× - Sem Dano)'
    },
    en: {
        siteTitle: 'Poké<span>dex</span>',
        genSubtitle: 'Generations I to IX • 1025 Pokémon',
        navPokedex: 'Pokédex',
        navMoves: 'Moves',
        navItems: 'Items',
        navGimmicks: 'Special Mechanics',
        searchPlaceholder: 'Search by name or number (e.g. Pikachu, Lucario or 25)...',
        searchBtn: 'Search',
        surpriseBtn: 'Surprise Me!',
        sortLowest: 'Lowest number first',
        sortHighest: 'Highest number first',
        sortNameAsc: 'Name (A - Z)',
        sortNameDesc: 'Name (Z - A)',
        allGens: 'All Generations (1025)',
        allTypes: 'All Types',
        loadMore: 'Load more Pokémon',
        statHp: 'Hit Points (HP)',
        statAtk: 'Attack',
        statDef: 'Defense',
        statSpAtk: 'Sp. Atk',
        statSpDef: 'Sp. Def',
        statSpeed: 'Speed',
        statTotal: 'Base Stat Total',
        weaknessesTab: 'Matchups & Weaknesses',
        movesTab: 'Learnset & Moves',
        overviewTab: 'Overview',
        formsSectionTitle: 'Alternative Forms & Variants',
        standardFormLabel: 'Standard Form',
        requiredItemLabel: 'Required Activation Item:',
        noFormsRecorded: 'This species has no recorded alternate forms.',
        heightLabel: 'Height',
        weightLabel: 'Weight',
        categoryLabel: 'Category',
        genderLabel: 'Gender',
        abilitiesTitle: 'Abilities',
        baseStatsTitle: 'Base Stats',
        weaknessesTitle: 'Weaknesses',
        countersTitle: 'Advantages',
        resistancesTitle: 'Resistances',
        pokedexDescTitle: 'Pokédex Entry',
        characteristicsTitle: 'Characteristics',
        clearFilters: 'Clear Filters',
        noResults: 'No Pokémon found',
        noResultsDesc: 'No results match the selected filters.',
        showingLabel: 'Showing',
        ofLabel: 'of',
        allGenerationsLabel: 'all 9 Generations',
        interactiveFilterTitle: 'INTERACTIVE FILTER (TYPE MATCHUPS)',
        clearTypeBtn: 'Clear Type',
        legendGreen: 'Green: Advantage (2×)',
        legendRed: 'Red: Weakness (2×)',
        legendPurple: 'Purple: Immunity (0×)',
        offensiveAdvantages: 'Offensive Advantages (Deals 2×)',
        defensiveWeaknesses: 'Defensive Weaknesses (Takes 2×)',
        resistancesSec: 'Resistances (Takes 0.5×)',
        immunitiesSec: 'Immunities (Takes 0× - No Damage)'
    }
};

const I18nController = {
    currentLang: (typeof localStorage !== 'undefined' && localStorage.getItem('pokedex_lang')) || 'pt',

    init() {
        this.applyLanguage(this.currentLang, false);
    },

    toggleLanguage() {
        const nextLang = this.currentLang === 'pt' ? 'en' : 'pt';
        this.setLanguage(nextLang);
    },

    setLanguage(lang) {
        if (lang !== 'pt' && lang !== 'en') return;
        this.currentLang = lang;
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('pokedex_lang', lang);
        }
        this.applyLanguage(lang, true);
    },

    applyLanguage(lang, shouldReRender = true) {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';

            const isEnglish = lang === 'en';
            document.querySelectorAll('.lang-pill-switch').forEach(btn => {
                btn.setAttribute('aria-checked', String(isEnglish));
            });

            // Atualiza elementos com data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang][key]) {
                    el.innerHTML = UI_TRANSLATIONS[lang][key];
                }
            });

            // Atualiza placeholders com data-i18n-placeholder
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang][key]) {
                    el.setAttribute('placeholder', UI_TRANSLATIONS[lang][key]);
                }
            });
        }

        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
        }

        if (shouldReRender) {
            if (typeof renderCards === 'function') {
                renderCards();
            }
            if (typeof refreshActiveModalContent === 'function') {
                refreshActiveModalContent();
            }
            if (typeof updateWheelDashboard === 'function' && typeof selectedWheelType !== 'undefined' && selectedWheelType) {
                updateWheelDashboard(selectedWheelType);
            }
        }
    },

    t(key) {
        return (UI_TRANSLATIONS[this.currentLang] && UI_TRANSLATIONS[this.currentLang][key]) || key;
    },

    isEnglish() {
        return this.currentLang === 'en';
    }
};

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => I18nController.init());
}

if (typeof module !== 'undefined') {
    module.exports = { UI_TRANSLATIONS, I18nController };
}
