export const START_GAME = "START_GAME";
export const RESUME_GAME = "RESUME_GAME";
export const END_GAME = "END_GAME";
export const SHOW_RANDOM_GAME = "SHOW_RANDOM_GAME";
export const NEW_ANSWER = "NEW_ANSWER";
export const CLEAR_USER_SCORE = "CLEAR_USER_SCORE";
export const START_LOADING = "START_LOADING";
export const COUNTDOWN = "COUNTDOWN";
export const SHOW_HINT = "SHOW_HINT";
export const CLEAR_HINT = "CLEAR_HINT";
export const NEW_GAME_DATABASE = "NEW_GAME_DATABASE";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const startGame = () => ({
    type: START_GAME,
})

export const resumeGame = () => ({
    type: RESUME_GAME,
})

export const endGame = () => ({
    type: END_GAME,
})

export const showRandomGame = (game) => ({
    type: SHOW_RANDOM_GAME,
    game,
})

export const pushNewAnswer = (answer) => ({
    type: NEW_ANSWER,
    answer,
})

export const startLoading = () => ({
    type: START_LOADING,
})

export const showHint = (hint) => ({
    type: SHOW_HINT,
    hint,
})

export const clearHint = () => ({
    type: CLEAR_HINT,
})

export const countdown = () => ({
    type: COUNTDOWN,
})

export const clearUserScore = () => ({
    type: CLEAR_USER_SCORE,
})

export const newGameDatabase = (database) => ({
    type: NEW_GAME_DATABASE,
    database,
})

export const removeItemFromDatabase = (index) => ({
    type: REMOVE_ITEM,
    index,
})