const baseURL = "https://api.rawg.io/api"
const authKey = "?key=6c8912da911d4c70a065a3fb17cdc671"

function getId() {
  let query = window.location.search
  const [_, id] = query.split("=")
  return id;
}

let id = getId()

async function getData(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

async function fetchGame(id) {
  let response = await fetch(`${baseURL}/games/${id}${authKey}`)
  let game = await response.json()
  return game
}

async function fetchGames() {
  let response = await fetch(`${baseURL}/games${authKey}`)
  let data = await response.json()
  let games = await data.results
  return games
}

async function renderGameInfo() {
  let gameId = getId()
  let game = await getData(`${baseURL}/games/${gameId}${authKey}`)

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

  let gameInfo = document.getElementById("game-info")
  gameInfo.innerHTML = `
  <h1 class="display-5 fw-bold lh-1 mb-3" id="main-title">${game.name}</h1>
  <div class="col-12">
    <img src="${game.background_image}" id="gamebackground" class="d-block mx-lg-auto img-fluid"
    alt="Bootstrap Themes" loading="lazy">
  </div>
  <div class="row mt-4">
    <div class="col-6">
      <ul class="destaque-info lead">
        <li><span>Publisher</span>: ${strPublishers}</li>
        <li><span>Lançamento</span>: ${formatedDate}</li >
        <li><span>Plataformas</span>: ${strPlatforms}</li>
        <li><span>Gêneros</span>: ${strGenres}</li>
        <li><span>Avaliação</span>: ${game.rating}</li>
      </ul >
    </div>
    <div class="col-6">
      <p>${game.description_raw}</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      </div>
    </div>
  </div>
`
}

async function renderScheenshots() {
  let gamesList = await fetchGames()
  let game = gamesList.find(item => item.id == id)
  document.getElementById("carousel-img-01").innerHTML = `<img src="${game.short_screenshots[1].image}" class="d-block w-100 carousel-imgs">`
  document.getElementById("carousel-img-02").innerHTML = `<img src="${game.short_screenshots[2].image}" class="d-block w-100 carousel-imgs">`
  document.getElementById("carousel-img-03").innerHTML = `<img src="${game.short_screenshots[3].image}" class="d-block w-100 carousel-imgs">`
  document.getElementById("carousel-img-04").innerHTML = `<img src="${game.short_screenshots[4].image}" class="d-block w-100 carousel-imgs">`
  document.getElementById("carousel-img-05").innerHTML = `<img src="${game.short_screenshots[5].image}" class="d-block w-100 carousel-imgs">`
  document.getElementById("carousel-img-06").innerHTML = `<img src="${game.short_screenshots[6].image}" class="d-block w-100 carousel-imgs">`
}


onload = () => {
  renderGameInfo()
  renderScheenshots()
}