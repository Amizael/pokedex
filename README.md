# 🔴 Pokédex Oficial Completa - Gerações I a IX (1025 Pokémon)

Uma Pokédex moderna, completa e interativa inspirada na interface e experiência oficial da [Pokémon Company](https://www.pokemon.com/br/pokedex), abrangendo todos os **1.025 Pokémon** das **9 Gerações canônicas** (#0001 Bulbasaur a #1025 Pecharunt), desenvolvida em HTML5, CSS3 e JavaScript puro utilizando dados oficiais da [PokéAPI](https://pokeapi.co/), **Veekun**, **Bulbapedia**, **Serebii** e **Project Pokémon**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokéAPI](https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)
![Pokémon](https://img.shields.io/badge/1025%20Pok%C3%A9mon-Gen%20I--IX-green?style=for-the-badge)

---

## 🎮 Cobertura Completa de Gerações e Jogos

A Pokédex organiza os 1.025 Pokémon rigorosamente de acordo com os agrupamentos oficiais de jogos:

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

## ✨ Funcionalidades Principais

### 🔍 Busca e Filtros Inteligentes
- **Seletor de Gerações no Catálogo**: Filtre com um clique entre **Todas as Gerações** (1 a 1025) ou qualquer uma das 9 gerações individualmente.
- **Busca em tempo real**: Pesquise instantaneamente por **nome** (ex: *Lucario*, *Charizard*, *Miraidon*) ou pelo **número** (ex: *448*, *006*, *1008*).
- **Filtro por Tipos**: Os 18 tipos elementais com nomes e cores oficiais.
- **Ordenação Dinâmica**: Menor número primeiro, Maior número primeiro, Nome A-Z e Nome Z-A.
- **Surpreenda-me!**: Sorteia um Pokémon aleatório entre os 1025 e abre sua ficha imediatamente.
- **Carregamento Otimizado (Infinite Scroll / Load More)**: Navegação suave e fluida sem sobrecarregar a memória do navegador.

---

### 📋 Detalhes do Pokémon (Modal com 3 Abas)

Ao clicar em qualquer card, uma central de informações é aberta com navegação completa:

#### 1. Aba: Visão Geral
- **Arte Oficial em Alta Resolução**: Imagens oficiais (*Official Artwork*).
- **Tipagem Primária e Secundária**: Badges estilizados com as cores oficiais.
- **Relações Elementais**: Fraquezas (2× ou 4×), Vantagens e Resistências baseadas na tabela oficial de tipos.
- **Descrição da Pokédex**: Textos oficiais das entradas das ROMs em Português.
- **Características / Perfil**: Altura em metros, peso em kg, categoria/espécie traduzida, gênero (♂ / ♀) e habilidades (com identificação de habilidade oculta).
- **Status Base Animados**: Barras de status (PS, Ataque, Defesa, Atq. Especial, Def. Especial, Velocidade) e BST total.
- **Linha Evolutiva Completa e 100% Interativa**: Todos os estágios evolutivos são clicáveis e abrem a ficha do respectivo Pokémon.

#### 2. Aba: Vantagens & Fraquezas
- **Vantagens**: Fita horizontal deslizante com cards reais de Pokémon contra os quais seus ataques causam dano multiplicado (`CAUSA 2×` ou `CAUSA 4×`).
- **Fraquezas**: Fita horizontal com cards reais dos Pokémon que causam dano super-efetivo contra ele (`RECEBE 2×` ou `RECEBE 4×`).
- **Seletor de Escopo de Confronto**: Alterne instantaneamente entre confrontos da **Mesma Geração** ou de **Todas as 9 Gerações**.
- Clique em qualquer card da fita para abrir a ficha daquele Pokémon.

#### 3. Aba: Ataques (Multi-Geração)
- **Seletor de Geração do Ataque**: Escolha qual era dos jogos deseja inspecionar:
  - *Geração I: Red, Blue, Yellow*
  - *Geração II: Gold, Silver, Crystal*
  - *Geração III: Ruby, Sapphire, Emerald, FireRed, LeafGreen*
  - *Geração IV: Diamond, Pearl, Platinum, HeartGold, SoulSilver*
  - *Geração V: Black, White, Black 2, White 2*
  - *Geração VI: X, Y, Omega Ruby, Alpha Sapphire*
  - *Geração VII: Sun, Moon, Ultra Sun, Ultra Moon, Let's Go Pikachu & Eevee*
  - *Geração VIII: Sword, Shield, Brilliant Diamond, Shining Pearl, Legends: Arceus*
  - *Geração IX: Scarlet, Violet, Legends: Z-A*
- **Tratamento Inteligente de Disponibilidade**: Caso o Pokémon tenha surgido em geração posterior à selecionada, o sistema informa exatamente sua geração de origem e convida o treinador a avançar para a geração correta.
- **Filtros por Método de Aprendizado**: Por Nível, Por MT / MO / TM, Tutor de Golpes e Ovo / Cruzamento.
- **Ficha Completa do Golpe**: Nome em Português e Inglês, Tipo, Categoria (**Físico**, **Especial** ou **Status**), Poder, Precisão, PP e descrição completa do efeito em português.

---

## 🚀 Como Executar Localmente

Como o projeto é estático (Vanilla JS), não é necessária nenhuma etapa de build ou dependência pesada.

### Opção 1: Servidor Local com Python (Recomendado)
No terminal, dentro da pasta do projeto:
```bash
python3 -m http.server 8000
```
Depois acesse: **`http://localhost:8000`**

### Opção 2: Servidor com Node.js
```bash
npx serve
# ou
npx http-server
```

---

## 🌐 Publicação no GitHub Pages

O projeto já está configurado com caminhos relativos e pronto para publicação no GitHub Pages:
1. Acesse o repositório no GitHub: `https://github.com/Amizael/js-developer-pokedex`
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
4. Salve para gerar a URL pública online!

---

## 📚 Fontes e Créditos
- Dados de espécies, imagens e movimentos fornecidos pela [PokéAPI](https://pokeapi.co/) e [Veekun](https://github.com/veekun).
- Documentação, nomes oficiais em PT-BR e mecânicas validadas em [Bulbapedia](https://bulbapedia.bulbagarden.net/), [Serebii.net](https://www.serebii.net/) e [Project Pokémon](https://projectpokemon.org/).
- Projeto desenvolvido para fins educacionais e portfólio na trilha JS Developer.
