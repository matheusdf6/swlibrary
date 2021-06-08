# Star Wars Library

[Link para o projeto](https://matheusdf6.github.io/swlibrary/)

Biblioteca de personagens de Star Wars, construído em React. Ele está separado em duas páginas: listagem de personagens com pesquisa por nome, e detalhes do personagem

## Funcionalidade

Para a realização desse projeto, foram usados em maior parte a APi do próprio React. Em vez de usar um gerenciamento de estado com Context API ou Redux, o estado foi compartilhado através de composição de componentes. A única dependencia externa usada foi a biblioteca react-router-dom para as rotas da aplicação.

## Observações
- A estratégia adotada é network-only
- A resposta da API para os personagens retorna uma lista de filmes, com a URL para cada filme. Assumindo um banco de dados onde o volume de dados é desconhecido, foi optado por fazer as requisições sem guardar em memória.
- A URL contém '/swlibrary' para possibilitar o deploy no Github Pages
