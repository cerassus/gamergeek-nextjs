export const pickRandomGame = (database) => {
    const randomIndex = Math.floor(Math.random() * database.length)
    const game = database[randomIndex]
    database.splice(randomIndex, 1)
    console.log(database.length)
    return getGameDetails(game)
}

const getGameDetails = async (game) => {
    try {
        const apishot = await fetch(`https://api.rawg.io/api/games/${game.id}`)
        const game_details = await apishot.json()
        return getGameScreenshots(game_details)
    }
    catch(error) {
        console.log(error)
        return {}
    }
}
  
const getGameScreenshots = async (game) => {
        try {
            const apishot = await fetch(`https://api.rawg.io/api/games/${game.id}/screenshots`)
            const screenshots = await apishot.json()
            // const game_screenshots = screenshots.results.splice(0,3).map(screen => screen = screen.image)
            const game_screenshots = pick3randomsFromArray(screenshots.results).map(screen => screen = screen.image)
            const game_with_screenshots = {
                id: game.id,
                name: game.name,
                altname: game.alternative_names,
                screenshots: [...game_screenshots],
                hints: {
                    developer: game.developers[0].name,
                    released: game.released,
                    genre: game.genres[game.genres.length-1].name,
                },
            }
            return getSimilarGames(game_with_screenshots)
        }
        catch(error) {
            console.log(error)
            return {}
        }
}

const pick3randomsFromArray = (array) => {
    const source = [...array]
    const resultArray = []
    for (let i=0; i<3; i++) {
        const randomIndex = Math.floor(Math.random() * source.length)
        resultArray.push(source.splice(randomIndex, 1)[0])
    }
    return resultArray
}

const getSimilarGames = async (game) => {
    try {
        const apishot = await fetch(`https://api.rawg.io/api/games/${game.id}/suggested`)
        const suggested = await apishot.json()
        const answers = [...pick3randomsFromArray(suggested.results.map(game => game = game.name)), game.name]
        return {
            ...game,
            answers: [ ...answers]
        }
    }
    catch(error) {
        console.log(error)
        return ["Error", "Error", "Error"]
    }
}