export const START_GAME = "START_GAME";
export const STOP_GAME = "STOP_GAME";
export const GET_RANDOM_GAME = "GET_RANDOM_GAME";
export const GET_SIMILAR_GAMES = "GET_SIMILAR_GAMES";
export const NEW_ANSWER = "NEW_ANSWER";


export const startGame = (difficulty) => ({
    type: START_GAME,
    difficulty,
})

export const stopGame = () => ({
    type: STOP_GAME,
})

export const getRandomGame = (game) => ({
    type: GET_RANDOM_GAME,
    game,
})

export const getSimilarGames = (game) => ({
    type: GET_SIMILAR_GAMES,
    game,
})

export const newAnswer = (answer) => ({
    type: NEW_ANSWER,
    answer,
})