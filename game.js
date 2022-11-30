const baseURL = "https://api.rawg.io/api"
const authKey = "?key=6c8912da911d4c70a065a3fb17cdc671"

function getId() {
  let query = window.location.search
  const [_, id] = query.split("=")
  return id;
}

let id = getId()

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
  let id = getId()
  let game = await fetchGame(id)

  let gameInfo = document.getElementById("game-info")
  gameInfo.innerHTML = `
  <div class="col-10 col-sm-8 col-lg-6">
    <img src="${game.background_image}" id="gamebackground" class="d-block mx-lg-auto img-fluid"
    alt="Bootstrap Themes" width="700" height="500" loading="lazy">
  </div>
  <div class="col-lg-6">
    <h1 class="display-5 fw-bold lh-1 mb-3" id="main-title">${game.name}</h1>
    <p class="lead">${game.description_raw}</p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
    </div>
  </div>
`
}

async function renderCarousel() {
  let gamesList = await fetchGames()
  let game = gamesList.find(item => item.id == id)
  console.log("linha49", game.short_screenshots)
  let carousel = document.getElementById("carousel-inner-div")
  let screenshots = `
    < div class="carousel-item active" data - bs - interval="2000" >
      <img src="${game.short_screenshots[0].image}" class="d-block w-100" alt="...">
    </div>`

  for (let i = 1; i < game.short_screenshots.length; i++) {
    screenshots = `
      <div class="carousel-item" data-bs-interval="2000">
        <img src="${game.short_screenshots[i].image}" class="d-block w-100" alt="...">
      </div>`
  }

  carousel.innerHTML = screenshots
}


onload = () => {
  renderGameInfo()
  renderCarousel()
}