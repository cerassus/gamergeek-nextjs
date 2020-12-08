
export const fetchNewGameDatabase = async (difficulty) => {
    const database_array = []
    let page = 0
    switch(difficulty) {
        case 0: {page = 1; break;}
        case 1: {page = 4; break;}
        case 2: {page = 7; break;}
        default: return []
    }
    for(let i=0; i<3; i++) {
        try {
            const apishot = await fetch(`https://api.rawg.io/api/games?page=${page+i}&page_size=40`)
            const data = await apishot.json()
            database_array.push(data.results.map(game => game = game.id))
        }
        catch(error) {
            console.log(error)
            return []
        }
    }
    console.log(database_array.flat())
    return database_array.flat()
}

export const getGameDetails = async (game) => {
    console.log(game)
    try {
        const apishot = await fetch(`https://api.rawg.io/api/games/${game}`)
        const game_details = await apishot.json()
        return getGameScreenshots(game_details)
    }
    catch(error) {
        console.log(' getGameDetails')
        console.log(error)
        return {}
    }
}
  
const getGameScreenshots = async (game) => {
        try {
            const apishot = await fetch(`https://api.rawg.io/api/games/${game.id}/screenshots`)
            const screenshots = await apishot.json()
            const game_screenshots = pick3randomsFromArray(screenshots.results).map(screen => screen = screen.image)
            const game_with_screenshots = {
                id: game.id,
                name: game.name,
                altname: game.alternative_names,
                screenshots: [...game_screenshots],
                hints: [
                    {developer: game.developers[0].name},
                    {released: game.released},
                    {genre: game.genres[game.genres.length-1].name},
                ],
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