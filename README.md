# 🔴 Pokédex Oficial - 1ª Geração (Kanto)

Uma Pokédex moderna, completa e interativa inspirada na interface e experiência oficial da [Pokémon Company](https://www.pokemon.com/br/pokedex), desenvolvida em HTML5, CSS3 e JavaScript puro utilizando a [PokéAPI](https://pokeapi.co/).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokéAPI](https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)

---

## ✨ Funcionalidades Principais

### 🔍 Busca e Filtros
- **151 Pokémon da 1ª Geração**: Carregamento rápido em lotes com cache no `localStorage` para resposta imediata.
- **Busca em tempo real**: Pesquise instantaneamente por **nome** (ex: *Charizard*) ou pelo **número** (ex: *006* ou *6*).
- **Filtro por Tipos**: Botões com as cores e nomes oficiais de todos os tipos Pokémon.
- **Ordenação Flexível**:
  - Menor número primeiro (Padrão)
  - Maior número primeiro
  - Nome de A a Z
  - Nome de Z a A
- **Surpreenda-me! 🎲**: Sorteia um Pokémon aleatório e abre sua ficha imediatamente.
- **Limpar Filtros**: Restaura a exibição completa com um clique.

---

### 📋 Detalhes Completos do Pokémon (Modal Oficial com 3 Abas)
Ao clicar em qualquer Pokémon, uma ficha detalhada é aberta organizada em 3 abas temáticas:

#### 📊 Aba 1: Visão Geral & Perfil
- **Arte Oficial**: Imagem de alta resolução (*Official Artwork*).
- **Tipagem Oficial**: Badges estilizados com as cores oficiais.
- **Resumo Elemental**: Tipos contra os quais recebe dano multiplicado, tipos que countera e resistências.
- **Descrição da Pokédex**: Textos oficiais das entradas da Pokédex.
- **Características / Perfil**: Altura, peso, categoria/espécie, habilidades traduzidas e proporção de gênero (♂ / ♀).
- **Status Base Animados**: Barras de status proporcionais (PS, Ataque, Defesa, Atq. Especial, Def. Especial, Velocidade) e pontuação total (BST).
- **Linha Evolutiva Interativa**: Cadeia evolutiva completa com requisitos (Nível, Pedras, Troca) e navegação direta por clique.

#### ⚔️ Aba 2: Vantagens & Fraquezas (Confrontos)
- **⚔️ Pokémons que é Bom Contra (Vantagem)**:
  - Fita horizontal deslizante com cards contendo **imagem**, **nome**, **número**, **tipos** e badge de dano (`CAUSA 2×` ou `CAUSA 4×`) de todos os Pokémon da 1ª Geração que ele vence com facilidade.
- **🛡️ Pokémons que é Fraco Contra (Desvantagem)**:
  - Fita horizontal deslizante com cards contendo **imagem**, **nome**, **número**, **tipos** e badge de dano (`RECEBE 2×` ou `RECEBE 4×`) dos Pokémon da 1ª Geração que representam perigo.
- **Navegação direta**: Clique em qualquer card de confronto para abrir imediatamente a ficha do Pokémon correspondente!

#### ⚡ Aba 3: Ataques & Movimentos (Pokémon FireRed & LeafGreen)
- **Moveset Fiel à 3ª Geração (FRLG / Kanto)** para todos os 151 Pokémon.
- **Filtros Rápidos por Método de Aprendizado**:
  - 📈 **Por Nível**: Nível exato em que o golpe é desbloqueado (ex: *Nv. 10*, *Nv. 20*).
  - 💿 **Por MT / MO**: Códigos oficiais das Máquinas Técnicas e Ocultas de FireRed/LeafGreen (ex: *MT26 Terremoto*, *MO03 Surf*, *MT35 Lança-chamas*, *MT13 Raio de Gelo*).
  - 🎓 **Por Tutor de Golpes**: Localização exata do Tutor em Kanto (ex: *Pewter City*, *Celadon*, *Silph Co.*, *Ilha 7*).
  - 🥚 **Por Cruzamento (Ovo)**: Golpes herdados através de cruzamento na Ilha 4.
- **Ficha do Golpe**:
  - Nome em Português e em Inglês.
  - Tipo Elemental com badge oficial.
  - Categoria (**Físico**, **Especial** ou **Status**) de acordo com a mecânica oficial da 3ª Geração.
  - Poder (Power), Precisão (Accuracy) e PP (Pontos de Poder).
  - Descrição oficial do efeito do golpe em FireRed e LeafGreen.

---

## 🚀 Como Executar Localmente

Como o projeto é estático (Vanilla JS), você não precisa de npm install nem compilação.

### Opção 1: Servidor Local com Python (Recomendado)
No terminal, dentro da pasta do projeto:
```bash
python3 -m http.server 8000
```
Depois abra no seu navegador: **`http://localhost:8000`**

### Opção 2: Servidor com Node.js
```bash
npx serve
# ou
npx http-server
```

### Opção 3: Abrir direto no navegador
Você pode abrir o arquivo `index.html` com seu navegador preferido ou pelo terminal Linux:
```bash
xdg-open index.html
```

---

## 🌐 Como Publicar no GitHub Pages (Visualização Online Gratuita)

Para que qualquer pessoa possa acessar sua Pokédex online diretamente pelo GitHub, siga estes passos:

### 1. Salvar e enviar as alterações para o GitHub
No seu terminal:
```bash
git add .
git commit -m "feat: interface oficial da pokedex com filtros, fraquezas, status e evoluções"
git push origin main
```

### 2. Ativar o GitHub Pages no repositório
1. Acesse o seu repositório no GitHub: `https://github.com/<seu-usuario>/js-developer-pokedex`
2. Clique na aba **Settings** (Configurações) no topo do repositório.
3. No menu lateral esquerdo, clique em **Pages** (na seção *Code and automation*).
4. Em **Build and deployment**:
   - **Source**: Escolha `Deploy from a branch`.
   - **Branch**: Selecione a branch `main` e a pasta `/(root)`.
   - Clique em **Save** (Salvar).

### 3. Acessar seu link publicado
Em cerca de 1 a 2 minutos, o GitHub irá gerar sua URL pública, que terá o formato:
👉 **`https://<seu-usuario>.github.io/js-developer-pokedex/`**

---

## 🛠️ Tecnologias Utilizadas
- **HTML5 Semântico**
- **CSS3 Moderno** (Grid, Flexbox, Gradientes, Animações e Variáveis CSS)
- **JavaScript ES6+** (Async/Await, Fetch API, LocalStorage Cache)
- **PokéAPI RESTful**

---

Desenvolvido para fins de estudo e aprimoramento no ecossistema JavaScript!
