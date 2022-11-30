# Trabalho Prático 2 - Portal de Games integrado com a API RAWG

Endpoints que PODEM ser utilizados no seu projeto:  
- Games (OBRIGATÓRIO)
- Creators
- Developers
- Plataformas
- Lojas
 

## Requisitos do Projeto
O site que você fará deve atender aos seguintes requisitos: 

- publicado em um ambiente da Internet (Repl.it, GitHub Pages, Netlify etc)
- seu nome completo, curso e número de matrícula, OBRIGATORIAMENTE visíveis na Home-Page
- responsivo para celular
- ter uma Home-Page (index.html)
   - duas (2) seções com dados dinâmicos obtidos via RAWG API.
   - Uma seção deve, OBRIGATORIAMENTE, trazer uma lista de jogos digitais utilizando o endpoint GAMES

- Primeira seção da home:
  - para cada game deve ser exibidos um mínimo de três (3) dados textuais obtidos por meio da API que descrevam sucintamente o referido item (Ex: nome, data de liberação, rating, etc);
  - para cada game, deve ser exibida uma imagem ilustrativa (background);
  - para cada game, deve haver um link que leve o usuário para uma Página de Detalhes (detalhes.html) que exibirá mais informações sobre o game. O id do game, obtido via API deve ser passado como parâmetro na URL  da página de detalhes conforme mostrado nas aulas síncronas realizadas na Semana 11.

- Na segunda seção da Home-Page
  - lista de outras informações fornecida pela API como: creators, plataformas, publishers, lojas, gêneros, etc.

- funcionalidade de pesquisa integrada no cabeçalho da home-page, que permita ao usuário informar um texto e obter, como resultado da pesquisa, a lista de games associados a partir da RAWG API. 

- Na página de resultados da pesquisa, devem ser obedecidos os seguintes requisitos:
  - o resultado da pesquisa poderá ser paginado ou não;
  - o resultado deve mostrar uma lista de games tal qual a home-page com imagem e textos que descrevam os games retornado;
  - na apresentação de cada game do resultado da pesquisa deve ter um link que, ao ser acionado, leve o usuário para a Página de Detalhes (detalhes.html) onde são exibidas mais informações sobre o game.
 

## ENVIO
- enviar um arquivo compactado no formato ZIP com os arquivos necessários para a exibição do site.
- opcional: enviar um link para o site publicado em algum servidor na Internet.
