const baseURL = "https://api.rawg.io/api"
const authKey = "?key=6c8912da911d4c70a065a3fb17cdc671"

async function fetchGames() {
  let response = await fetch(`${baseURL}/games${authKey}`)
  let data = await response.json()
  let games = await data.results
  return games
}

async function fetchGame(id) {
  let response = await fetch(`${baseURL}/games/${id}${authKey}`)
  let game = await response.json()
  return game
}

async function fetchPlatforms() {
  let response = await fetch(`${baseURL}/platforms${authKey}`)
  let data = await response.json()
  let platforms = await data.results
  return platforms
}

async function searchGames() {
  let search = document.getElementById("pesquisa").value
  let data = await fetchGames()
  let results = data.filter(item => {
    if (item.name == search) {
      return item
    }
  })
  console.log("linha 33", results)
}

async function renderHighlightGame() {
  let data = await fetchGames()
  let game = await fetchGame(data[0].id)

  let strGenres = `${game.genres[0].name}`
  for (let i = 1; i < game.genres.length; i++) {
    strGenres += `, ${game.genres[i].name}`
  }

  let strPlatforms = `${game.platforms[0].platform.name}`
  for (let i = 1; i < game.platforms.length; i++) {
    strPlatforms += `, ${game.platforms[i].platform.name}`
  }

  let strPublishers = `${game.publishers[0].name}`
  for (let i = 1; i < game.publishers.length; i++) {
    strPublishers += `, ${game.publishers[i].name}`;
  }

  let releaseDate = game.released
  const [year, month, day] = releaseDate.split("-")
  let formatedDate = `${day}/${month}/${year}`

  let destaque = document.getElementById("destaque")

  if (destaque) {
    destaque.innerHTML = `
      <div class="col-md-7">
      <img class="main-image" src="${game.background_image}">
    </div>
    <div class="col-md-5">
      <h3>${game.name}</h3>
      <ul class="destaque-info">
        <li><span>Sobre</span>: ${game.description_raw}</li>
        <li><span>Publisher</span>: ${strPublishers}</li>
        <li><span>Lançamento</span>: ${formatedDate}</li >
        <li><span>Plataformas</span>: ${strPlatforms}</li>
        <li><span>Gêneros</span>: ${strGenres}</li>
        <li><span>Avaliação</span>: ${game.rating}</li>
      </ul >
    </div > `
  }
}

async function renderGamesCards() {
  let games = await fetchGames()
  let cards = ''
  for (let i = 1; i < games.length; i++) {
    let game = games[i]
    cards += `
    <div class="col-md-3">
      <div class="card" style="width: 15rem;">
        <img src="${game.background_image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <p class="rating"><img id="icon-rating" src="./img/icon-star-empty.png" class="card-img-top"> ${game.rating}</p>
            <p><em>Gênero:</em> Aventura</p>
            <p><em>Plataformas:</em> PC, PlayStation 4, XBOX</p>
            <a href="./game.html?id=${game.id}" id="${game.id}" class="btn btn-primary">Saiba mais &raquo</a>
          </div>
      </div>
    </div> `
  }

  let gameCards = document.getElementById("games-cards")
  if (gameCards) gameCards.innerHTML = cards
}

async function renderPlatforms() {
  let platforms = await fetchPlatforms()
  let cards = ""
  for (let i = 1; i < 4; i++) {
    let platform = platforms[i];

    let games = ''
    for (let j = 0; j < 6; j++) {
      games += `<li><a href="#" class="gamelink">${platform.games[j].name}</a></li>`
    }
    cards += `
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <h4>${platform.name}</h4>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Principais jogos:</strong>
            <ul>
              ${games}
            </ul>
          </div>
        </div>
      </div>
  `
  }

  let accordion = document.getElementById("accordionExample")
  if (accordion) accordion.innerHTML = cards

}

onload = () => {
  renderHighlightGame()
  renderGamesCards()
  renderPlatforms()
  searchGames()
}