const URI = "http://localhost:3000/api"

async function loadGames (){
    const response = await fetch(`${URI}/games`)
    const games = await response.json()
    return games
}

export {loadGames}