# 🔴 Pokédex Oficial Completa - Gerações I a IX (1.025 Pokémon)

Uma central e enciclopédia Pokémon definitiva, moderna e interativa desenvolvida como projeto pessoal por **Amizael**, abrangendo todos os **1.025 Pokémon** das **9 Gerações canônicas** (#0001 Bulbasaur a #1025 Pecharunt), com dados oficiais da **PokéAPI**, **Veekun**, **Bulbapedia**, **Serebii** e **Project Pokémon**.

O projeto conta com interface moderna inspirada na estética oficial da Pokémon Company, incluindo uma **Roda Interativa de Tipagens**, painel avançado de cálculo de relações de combate com suporte a dano quádruplo (**4×**), enciclopédia com **Gimmicks de Batalha** (Mega Evolução, Z-Moves, Dynamax e Terastal), catálogo de **Golpes**, **Itens**, **Habilidades** traduzidas e modais completos de 3 abas para cada Pokémon.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokéAPI](https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)
![Pokémon](https://img.shields.io/badge/1025%20Pok%C3%A9mon-Gen%20I--IX-green?style=for-the-badge)
![Projeto Pessoal](https://img.shields.io/badge/Projeto%20Pessoal-Amizael-blue?style=for-the-badge)

---

## 📌 Sumário
- [Destaques do Projeto](#-destaques-do-projeto)
- [Cobertura Completa das 9 Gerações](#-cobertura-completa-das-9-gerações)
- [Funcionalidades Principais](#-funcionalidades-principais)
  - [Roda Interativa de Tipagens e Painel de Combate](#-roda-interativa-de-tipagens-e-painel-de-combate)
  - [Catálogo e Filtros de Pokémon (100 por lote)](#-catálogo-e-filtros-de-pokémon-100-por-lote)
  - [Modal Completo do Pokémon (3 Abas)](#-modal-completo-do-pokémon-3-abas)
  - [Enciclopédia de Batalha (Golpes, Itens e Gimmicks)](#-enciclopédia-de-batalha-golpes-itens-e-gimmicks)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar Localmente](#-como-executar-localmente)
- [Publicação no GitHub Pages](#-publicação-no-github-pages)
- [Créditos e Bases Oficiais](#-créditos-e-bases-oficiais)
- [Autor](#-autor)

---

## 🌟 Destaques do Projeto

- **100% dos 1.025 Pokémon**: Do Bulbasaur ao Pecharunt, abrangendo Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar/Hisui e Paldea.
- **Roda Interativa de Tipagens 3D**: Interface inspirada no conceito minimalista de orbs elementais conectadas em SVG com conexões dinâmicas de vantagem (verde), fraqueza (vermelho) e imunidade (roxo).
- **Cálculo Avançado de Combate e Dano Quádruplo (4×)**: Identifica fraquezas e vantagens diretas (2×) e todas as combinações duplas que sofrem ou causam dano super-efetivo 4×.
- **Pokébola Elemental Customizada**: A Pokébola central reage à tipagem selecionada, colorindo a metade superior dinamicamente com o tom do elemento e exibindo o ícone e nome oficiais.
- **Layout Estável (Zero Layout Shift)**: Altura travada em 520px com organização inteligente em 2 colunas para eliminar variações de tamanho ao alternar entre tipos.
- **Enciclopédia Histórica de Gimmicks**: Documentação profunda de Mega Evolução, Movimentos Z, Dynamax/Gigantamax e Terastalização.
- **100% em Português Brasileiro (PT-BR)**: Nomes, categorias, descrições da Pokédex, habilidades e efeitos de golpes totalmente adaptados.

---

## 🎮 Cobertura Completa das 9 Gerações

| Geração | Região | Dex Nacional | Total | Jogos Canônicos de Referência |
| :---: | :---: | :---: | :---: | :--- |
| **I** | Kanto | Nº 0001 a Nº 0151 | 151 | *Red, Blue, Yellow* |
| **II** | Johto | Nº 0152 a Nº 0251 | 100 | *Gold, Silver, Crystal* |
| **III** | Hoenn | Nº 0252 a Nº 0386 | 135 | *Ruby, Sapphire, Emerald, FireRed, LeafGreen* |
| **IV** | Sinnoh | Nº 0387 a Nº 0493 | 107 | *Diamond, Pearl, Platinum, HeartGold, SoulSilver* |
| **V** | Unova | Nº 0494 a Nº 0649 | 156 | *Black, White, Black 2, White 2* |
| **VI** | Kalos | Nº 0650 a Nº 0721 | 72 | *X, Y, Omega Ruby, Alpha Sapphire* |
| **VII** | Alola | Nº 0722 a Nº 0809 | 88 | *Sun, Moon, Ultra Sun, Ultra Moon, Let's Go Pikachu & Eevee* |
| **VIII** | Galar / Hisui | Nº 0810 a Nº 0905 | 96 | *Sword, Shield, Brilliant Diamond, Shining Pearl, Legends: Arceus* |
| **IX** | Paldea | Nº 0906 a Nº 1025 | 120 | *Scarlet, Violet, Legends: Z-A* |

---

## ⚔️ Funcionalidades Principais

### 🎡 Roda Interativa de Tipagens e Painel de Combate
- **Esferas 3D de Vidro**: 18 esferas posicionadas na circunferência com brilho translúcido e ícones oficiais.
- **Linhas de Relações de Combate**:
  - *Linhas Verdes*: Vantagens ofensivas diretas.
  - *Linhas Vermelhas*: Fraquezas defensivas diretas.
  - *Linhas Roxas Tracejadas*: Imunidades elementais totais (0×).
- **Pokébola Elemental Central**: O domo superior adota a cor exata da tipagem ativa, com o botão central exibindo o brasão do elemento.
- **Painel em 2 Colunas Balanceadas (Altura Fixa de 520px)**:
  - **Coluna 1**: Vantagens Ofensivas (com 2× e combinações de dano 4×) + Resistências (½×).
  - **Coluna 2**: Fraquezas Defensivas (com 2× e combinações de dano 4×) + Imunidades (0×).
  - Multiplicadores explícitos ao lado de cada tag de tipo (`2×`, `4×`, `½×`, `0×`).

### 🔍 Catálogo e Filtros de Pokémon (100 por lote)
- **Visualização Otimizada**: Exibição a cada 100 Pokémon com botão de carregamento progressivo para máxima fluidez.
- **Filtro por Geração**: Botões dedicados com contadores e numeração romana (Gen I a Gen IX).
- **Busca em Tempo Real**: Filtre simultaneamente por nome e número da Pokédex Nacional.
- **Ordenação Inteligente**: Menor Número, Maior Número, Nome A-Z e Nome Z-A.
- **Surpreenda-me!**: Sorteia e abre instantaneamente um Pokémon aleatório entre os 1.025 disponíveis.

### 📋 Modal Completo do Pokémon (3 Abas)

Ao clicar em qualquer Pokémon, uma central aprofundada é aberta com 3 abas:

1. **Aba 1 - Visão Geral**:
   - Ilustração oficial em alta resolução (*Official Artwork*).
   - Tipagens primária e secundária.
   - Fraquezas, vantagens e resistências elementais.
   - Descrição oficial da Pokédex e características (altura, peso, categoria, gênero).
   - Habilidades explicadas detalhadamente com identificação de Habilidade Oculta.
   - Status base com barras animadas proporcionais e BST (Base Stats Total).
   - Linha evolutiva interativa completa (cada estágio é clicável e abre o respectivo Pokémon).

2. **Aba 2 - Vantagens & Fraquezas (Confrontos Reais)**:
   - Fitas horizontais deslizantes com cards reais de Pokémon contra os quais tem vantagem (`CAUSA 2×` ou `CAUSA 4×`) ou desvantagem (`RECEBE 2×` ou `RECEBE 4×`).
   - Seletor de escopo para comparar confrontos apenas da mesma geração ou contra todas as 9 gerações.

3. **Aba 3 - Ataques (Multi-Geração)**:
   - Seletor de geração histórica dos jogos (Gerações I a IX).
   - Separação por método de aprendizado: Nível, MT/MO/TM, Tutor e Ovo/Cruzamento.
   - Informações completas de cada movimento: Categoria (Físico, Especial, Status), Poder, Precisão, PP e descrição do efeito em português.

### 📖 Enciclopédia de Batalha (Golpes, Itens e Gimmicks)
- **Aba de Golpes**: Consulta geral dos mais de 900 ataques Pokémon com busca e filtros por tipo e categoria.
- **Aba de Itens**: Guia completo de itens de batalha, pedras evolutivas, bagas e itens competitivos.
- **Aba de Gimmicks de Batalha**:
  - *Mega Evolução* (Geração VI): Mecânica da Mega Stone, Keystone e Pokémon emblemáticos (Mega Rayquaza, Mega Charizard X/Y, Mega Mewtwo X/Y).
  - *Movimentos Z* (Geração VII): Cristais Z, Z-Ring e lista de Z-Moves universais e exclusivos.
  - *Dynamax & Gigantamax* (Geração VIII): Fenômeno de Galar, Max Moves e lista de formas Gigantamax com G-Max Moves próprios.
  - *Terastalização* (Geração IX): Mecânica de Tera Types, Tera Blast e bônus de STAB adaptativo.

---

## 📁 Estrutura do Projeto

```
js-developer-pokedex/
├── index.html                   # Estrutura principal da Pokédex e Enciclopédia
├── README.md                    # Documentação do projeto
├── assets/
│   ├── css/
│   │   ├── reset.css            # Normalização de estilos
│   │   └── style.css            # Estilos gerais, tema dark, roda SVG e responsividade
│   └── js/
│       ├── abilities-database.js# Banco de habilidades em português
│       ├── all-moves-data.js    # Catálogo geral de movimentos (Gen I a IX)
│       ├── encyclopedia.js      # Controlador das abas da Enciclopédia
│       ├── frlg-moves-data.js   # Base de golpes clássicos FRLG
│       ├── generations-config.js# Metadados e configurações das 9 Gerações
│       ├── gimmicks-data.js     # Banco de mecânicas históricas (Mega, Z, DMax, Tera)
│       ├── items-data.js        # Catálogo de itens e descrições
│       ├── main.js              # Inicialização, catálogo (100/pág), busca e filtros
│       ├── modal.js             # Gerenciador do modal de 3 abas
│       ├── poke-api.js          # Consumo otimizado e cache dos 1025 Pokémon
│       ├── pokemons-data.js     # Base local completa dos 1025 Pokémon
│       ├── type-data.js         # Tabela oficial de tipos e relações elementais
│       └── type-wheel.js        # Roda de tipos interativa, cálculos 4x e Pokébola SVG
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em Vanilla JavaScript (estático puro), não há dependências pesadas nem necessidade de compilação:

### Opção 1: Servidor Local com Python (Recomendado)
No terminal, dentro da pasta do repositório:
```bash
python3 -m http.server 8000
```
Em seguida, acesse no navegador: **`http://localhost:8000`**

### Opção 2: Servidor com Node.js
```bash
npx serve
# ou
npx http-server
```

---

## 🌐 Publicação no GitHub Pages

O projeto está configurado com caminhos relativos e pronto para publicação no GitHub Pages:
1. Acesse as configurações do repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)`.
4. Salve para gerar o link público da Pokédex online.

---

## 📚 Créditos e Bases Oficiais

- **[PokéAPI](https://pokeapi.co/)**: Dados fundamentais de espécies, estatísticas e artworks oficiais.
- **[Veekun](https://github.com/veekun)**: Dados históricos e compatibilidade de movimentos por versão.
- **[Bulbapedia](https://bulbapedia.bulbagarden.net/) & [Serebii.net](https://www.serebii.net/)**: Validação de relações de tipo, mecânicas de batalha e genealogia das 9 gerações.
- **[Project Pokémon](https://projectpokemon.org/)**: Documentação técnica e arquivos de dados.
- Pokémon e nomes de personagens são marcas registradas da **Nintendo**, **Game Freak** e **The Pokémon Company**.

---

## 👤 Autor

Desenvolvido por **Amizael** como projeto pessoal de engenharia de software e tributo ao universo Pokémon.

- **GitHub**: [@Amizael](https://github.com/Amizael)
- **Repositório**: [https://github.com/Amizael/pokedex](https://github.com/Amizael/pokedex)
