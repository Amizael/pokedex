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

### 📋 Detalhes Completos do Pokémon (Modal Oficial)
Ao clicar em qualquer Pokémon, uma ficha detalhada é aberta contendo:

1. **Arte Oficial**: Imagem de alta resolução (*Official Artwork*).
2. **Tipagem Oficial**: Badges estilizados com as cores oficiais.
3. **Matriz de Combate & Fraquezas**:
   - **Fraquezas por Elemento**: Tipos contra os quais o Pokémon recebe dano aumentado (`2×` ou `4×`).
   - **Tipos que Countera**: Tipos contra os quais os ataques deste Pokémon causam dano super-efetivo (`2×`).
   - **Resistências & Imunidades**: Tipos que causam dano reduzido (`½×`, `¼×`) ou nulo (`0×`).
4. **⚔️ Listagem de Pokémons que é Bom Contra (Vantagem)**:
   - Exibe cards reais com a **imagem**, **nome**, **número**, **tipos** e multiplicador de dano (`Causa 2×` ou `Causa 4×`) de todos os Pokémon da 1ª Geração que este monstrinho vence em combate.
   - Navegação por botões horizontais deslizantes e clique direto para abrir a ficha de qualquer Pokémon listado.
5. **🛡️ Listagem de Pokémons que é Fraco Contra (Desvantagem)**:
   - Exibe cards reais com a **imagem**, **nome**, **número**, **tipos** e multiplicador de dano sofrido (`Recebe 2×` ou `Recebe 4×`) dos Pokémon da 1ª Geração que representam perigo para ele.
   - Totalmente interativo com navegação instantânea por clique.
6. **Descrição da Pokédex**: Textos oficiais das entradas da Pokédex.
7. **Características / Perfil**:
   - Altura (metros)
   - Peso (kg)
   - Categoria / Espécie (ex: *Pokémon Semente*, *Pokémon Lagarto*)
   - Habilidades traduzidas (com indicação de habilidade oculta)
   - Proporção de Gênero (♂ / ♀)
8. **Status Base Animados**: Barras de status (PS, Ataque, Defesa, Atq. Especial, Def. Especial, Velocidade) e pontuação total (BST).
9. **Linha Evolutiva Interativa**:
   - Visualização de toda a cadeia de evolução (estágios e ramificações como a do *Eevee*).
   - Requisitos e condições de evolução (ex: *Nível 16*, *Pedra da Água*, *Troca*).
   - Destaque no Pokémon visualizado atualmente.
   - Navegação direta: clique em qualquer evolução da linha para abrir seus dados instantaneamente.
10. **Navegação Rápida**: Botões de Pokémon anterior e próximo, e suporte a atalhos do teclado (`←`, `→` e `Esc` para fechar).

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
