const baseURL = "https://api.rawg.io/api"
const authKey = "?key=6c8912da911d4c70a065a3fb17cdc671"
const gamesURL = `${baseURL}/games?key=6c8912da911d4c70a065a3fb17cdc671`
const creatorsURL = `${baseURL}/creators?key=6c8912da911d4c70a065a3fb17cdc671`
const developersURL = `${baseURL}/developers?key=6c8912da911d4c70a065a3fb17cdc671`
const platformsURL = `${baseURL}/platforms?key=6c8912da911d4c70a065a3fb17cdc671`
const storesURL = `${baseURL}/stores?key=6c8912da911d4c70a065a3fb17cdc671`

// function fetchGames() {
//   fetch(gamesURL)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.results)
//     })
// }

// fetchGames()

async function fetchGames() {
  let response = await fetch(gamesURL)
  let data = await response.json()
  let games = await data.results
  return games
}

async function renderHighlightGame() {
  let hightlight = await fetchGames()
  let game = hightlight[0]
  document.getElementById("destaque").innerHTML = `
  <div class="col-md-7">
  <img class="main-image" src="${game.background_image}">
</div>
<div class="col-md-5">
  <ul>
    <li>Sobre:</li>
    <li>Publisher:</li>
    <li>Lançamento:</li>
    <li>Plataforma:</li>
    <li>Gênero:</li>
    <li>Avaliação:</li>
  </ul>
</div>`
}

async function renderGamesCards() {
  let games = await fetchGames()
  let cards = ''
  for (let i = 1; i < games.length; i++) {
    let game = games[i]
    cards += `
    <div class="col-md-3">
    <div class="card" style="width: 15rem;">
      <img src="${game.background_image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${game.name} [${game.rating}]</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" class="btn btn-primary">Saiba mais</a>
      </div>
    </div>
  </div>`
  }
  document.getElementById("games-cards").innerHTML = cards
}

renderHighlightGame()
renderGamesCards()