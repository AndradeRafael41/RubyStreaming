# RubyStreaming 🎬

RubyStreaming é uma plataforma digital de entretenimento que oferece uma experiência de streaming de filmes de alta qualidade aos usuários. A plataforma permite que os usuários descubram, explorem e acompanhem uma diversidade de filmes populares, sem a funcionalidade de assistir trailers ou filmes diretamente. Os usuários podem explorar os filmes mais bem avaliados, adicionar filmes à lista de preferências pessoais e visualizar os filmes mais assistidos no momento.

## Descrição do Projeto💡

### Visão Geral

RubyStreaming foi desenvolvido para atender à crescente demanda por entretenimento acessível e diversificado. Com uma interface intuitiva e funcionalidades robustas, a plataforma facilita a descoberta e o acesso a uma vasta biblioteca de filmes, proporcionando uma experiência personalizada aos usuários.

### Funcionalidades Principais

- **Exploração de Filmes:** Os usuários podem navegar por uma ampla seleção de filmes, categorizados por gênero, popularidade e lançamento.
- **Avaliações e Recomendações:** Visualização dos filmes mais bem avaliados e recomendações personalizadas com base nos interesses do usuário.
- **Lista de Preferências:** Capacidade de criar uma lista personalizada de filmes favoritos para fácil acesso posterior.

## Problema Resolvido✅

O RubyStreaming aborda a necessidade de uma plataforma centralizada onde os entusiastas de filmes possam descobrir e acompanhar os filmes mais relevantes e populares do momento. Em um cenário onde a escolha de entretenimento pode ser esmagadora, a plataforma simplifica a busca por conteúdo de qualidade e oferece uma experiência de usuário intuitiva e personalizada.

### Importância do Problema

- **Facilidade de Acesso:** Oferecer uma solução digital conveniente para o consumo de entretenimento, acessível a qualquer hora e lugar.
- **Relevância Cultural:** Filmes não são apenas uma forma de entretenimento, mas também uma maneira de explorar diferentes culturas, ideias e histórias.
- **Personalização:** Permitir que os usuários personalizem suas experiências de visualização aumenta o engajamento e a satisfação do usuário.

## Tecnologias Utilizadas⚙️

### Front-end👨‍💻

- **React:** Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.
- **Axios:** Biblioteca para realizar requisições HTTP assíncronas.
- **React Router:** Gerenciamento de navegação entre páginas na aplicação React.
- **CSS Modules:** Metodologia para modularização de estilos CSS.

### Back-end🔙
O back-end se encontra no seguinte repositório: https://github.com/AndradeRafael41/web-dev-project-api
- **Node.js:** Ambiente de execução JavaScript server-side.
- **Express.js:** Framework web para Node.js que simplifica a criação de aplicações web e APIs.
- **MongoDB:** Banco de dados NoSQL utilizado para armazenar dados da aplicação.
- **Mongoose:** Biblioteca de modelagem de dados para MongoDB e Node.js, que fornece uma solução baseada em esquemas para modelar os dados da aplicação.

### API Externa🎦

- **The Movie Database (TMDb):** API utilizada para obter informações detalhadas sobre filmes, como sinopses, elenco, classificações e trailers.

## Configuração e Execução⬇️

git clone https://github.com/seu-usuario/seu-repositorio-api.git e posteriormente
cd seu-repositorio-api
npm install
npm run dev

### Pré-requisitos💻

- Node.js (versão 14 ou superior)
- MongoDB (instalado localmente ou serviço de hospedagem)
- Chave de API do TMDb: Obtenha uma chave de API gratuita em [TMDb API](https://www.themoviedb.org/).

### Estrutura e Pastas do Front-end 🚧

A estrutura do projeto está organizada da seguinte maneira para o front-end:

```
root/
├── src/
│   ├── assets/
│   │   └── ... (recursos estáticos, como imagens, fontes, etc.)
│   │
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetail.jsx
│   │   ├── MoviesCards.jsx
│   │   ├── Navbar.jsx
│   │   └── ... (outros componentes reutilizáveis)
│   │
│   ├── pages/
│   │   ├── favMovies/
│   │   │   ├── FavMovies.jsx
│   │   │   ├── favMovies.css
│   │   │   └── ... (outros arquivos relacionados à página de filmes favoritos)
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── home.css
│   │   │   └── ... (outros arquivos relacionados à página inicial)
│   │   │
│   │   ├── LandingPage/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── landingPage.css
│   │   │   └── ... (outros arquivos relacionados à página de entrada)
│   │   │
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   ├── login.css
│   │   │   └── ... (outros arquivos relacionados à página de login)
│   │   │
│   │   ├── Movie/
│   │   │   └── ... (arquivos relacionados à página de detalhes do filme)
│   │   │
│   │   ├── Register/
│   │   │   ├── Register.jsx
│   │   │   ├── register.css
│   │   │   └── ... (outros arquivos relacionados à página de registro)
│   │   │
│   │   ├── Search/
│   │   │   ├── Search.jsx
│   │   │   └── ... (outros arquivos relacionados à página de pesquisa)
│   │   │
│   │   ├── NotFound/
│   │   │   └── ... (arquivos relacionados à página de erro 404)
│   │   │
│   │   └── ... (outras páginas da aplicação)
│   │
│   ├── utils/
│   │   └── ... (funções utilitárias, helpers, etc.)
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ... (outros arquivos principais da aplicação)
│
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── ... (outros arquivos de configuração e metadados)
```



