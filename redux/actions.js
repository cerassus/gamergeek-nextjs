import store  from "./store"
import { START_GAME, RESUME_GAME, END_GAME,SHOW_RANDOM_GAME, 
    NEW_ANSWER, CLEAR_USER_SCORE, START_LOADING, SHOW_HINT, 
    NEW_GAME_DATABASE, REMOVE_ITEM, SHOW_POPUP, SET_HINT_COUNTER,
    NEW_USER_NAME } from "./const"


const startGame = () => ({
    type: START_GAME,
})

const resumeGame = () => ({
    type: RESUME_GAME,
})

const endGame = () => ({
    type: END_GAME,
})

const pushNewAnswer = (answer) => ({
    type: NEW_ANSWER,
    answer,
})

const showRandomGame = (game) => ({
    type: SHOW_RANDOM_GAME,
    game,
})

const newUserName = (name) => ({
    type: NEW_USER_NAME,
    name,
})

const startLoading = () => ({
    type: START_LOADING,
})

const showHint = (hint) => ({
    type: SHOW_HINT,
    hint,
})

const clearUserScore = () => ({
    type: CLEAR_USER_SCORE,
})

const newGameDatabase = (database) => ({
    type: NEW_GAME_DATABASE,
    database,
})

const removeItemFromDatabase = (index) => ({
    type: REMOVE_ITEM,
    index,
})

const showPopup = (popup) => ({
    type: SHOW_POPUP,
    popup,
})

const setHintCounter = () => ({
    type: SET_HINT_COUNTER,
})

function loadNewQuestion(difficulty = 0) {
    return async function(dispatch) {
        const game_database = await store.getState().game_database
        if(game_database.length === 0) {
            difficulty
                ? fetchNewGameDatabase(difficulty)
                : dispatch(endGame()) 
        } else {
          const randomIndex = Math.floor(Math.random() * game_database.length)
          dispatch(showRandomGame(game_database[randomIndex]))
          dispatch(removeItemFromDatabase(randomIndex))
        }
        async function fetchNewGameDatabase(difficulty) {
                const database_array = []
                    try {
                        const apishot = await fetch(`https://geek.cerassus.usermd.net/database/${difficulty}`)
                        const response = await apishot.json()
                        database_array.push(...response)
                    }
                    catch(error) {
                        console.log(error)
                        return []
                    }
                await dispatch(newGameDatabase(database_array))
                return dispatch(loadNewQuestion())
            }
    }
}

export { startGame, resumeGame, endGame ,pushNewAnswer, showRandomGame, startLoading,showHint,
     clearUserScore, newGameDatabase, removeItemFromDatabase, showPopup, setHintCounter,
     loadNewQuestion, newUserName }


