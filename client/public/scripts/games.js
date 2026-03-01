document.addEventListener('DOMContentLoaded', () => {

  const path = window.location.pathname
  const lastSegment = path.split('/').pop()

  // =========================
  // RENDER ALL GAMES (HOME)
  // =========================
  const renderGames = async (searchTerm = '') => {
    const response = await fetch(`/games?search=${searchTerm}`)
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (!mainContent) return

    mainContent.innerHTML = ''

    if (!data || data.length === 0) {
      mainContent.innerHTML = `<h2>No Games Available 😞</h2>`
      return
    }

    data.forEach(game => {
      const card = document.createElement('article')

      card.innerHTML = `
        <img src="${game.image}" alt="${game.gameName}" />
        <h3>${game.gameName}</h3>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Visits:</strong> ${game.visits}</p>
        <a href="/games/${game.id}" role="button">Read More</a>
      `

      mainContent.appendChild(card)
    })
  }

  // =========================
  // RENDER SINGLE GAME
  // =========================
  const renderGame = async () => {
    const requestedID = parseInt(lastSegment)

    const response = await fetch('/games')
    const data = await response.json()

    const gameContent = document.getElementById('game-content')
    if (!gameContent) return

    const game = data.find(g => g.id === requestedID)

    if (game) {
      document.getElementById('image').src = game.image
      document.getElementById('name').textContent = game.gameName
      document.getElementById('gameDescription').textContent = game.gameDescription
      document.getElementById('genre').textContent = 'Genre: ' + game.genre
      document.getElementById('subGenre').textContent = 'Sub-Genre: ' + game.subGenre
      document.getElementById('serverSize').textContent = 'Server Size: ' + game.serverSize
      document.getElementById('created').textContent = 'Created: ' + game.created
      document.getElementById('visits').textContent = 'Visits: ' + game.visits
      document.title = `Roblox - ${game.gameName}`
    } else {
      gameContent.innerHTML = `<h2>No Games Available 😞</h2>`
    }
  }

  // =========================
  // PAGE TYPE CHECK
  // =========================
  if (!isNaN(parseInt(lastSegment))) {
    renderGame()
  } else {
    renderGames()

    // SEARCH LISTENER
    const form = document.getElementById('search-form')

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.getElementById('search-input').value.trim()
        renderGames(input)
      })
    }
  }

})