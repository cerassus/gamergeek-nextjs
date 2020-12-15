import { getGameDetails } from "../global/fetchGameDetails"
import store  from "./store"

const START_GAME = "START_GAME";
const RESUME_GAME = "RESUME_GAME";
const END_GAME = "END_GAME";
const SHOW_RANDOM_GAME = "SHOW_RANDOM_GAME";
const NEW_ANSWER = "NEW_ANSWER";
const CLEAR_USER_SCORE = "CLEAR_USER_SCORE";
const START_LOADING = "START_LOADING";
const SHOW_HINT = "SHOW_HINT";
const NEW_GAME_DATABASE = "NEW_GAME_DATABASE";
const REMOVE_ITEM = "REMOVE_ITEM";
const SHOW_POPUP = "SHOW_POPUP";
const SET_HINT_COUNTER = "SET_HINT_COUNTER";

const TEST = "TEST";

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

const showRandomGame = (game = "") => ({
    type: SHOW_RANDOM_GAME,
    game,
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

const test = (payload) => ({
    type: TEST,
    payload,
})

function loadNewQuestion(difficulty = 0) {
    return async function(dispatch) {
        const game_database = store.getState().game_database
        const randomIndex = Math.floor(Math.random() * game_database.length)
        if(game_database.length === 0) {
            difficulty
                ? fetchNewGameDatabase(difficulty-1)
                : dispatch(endGame()) 
        } else {
          dispatch(showRandomGame(await getGameDetails(game_database[randomIndex]) || 'error')|| 'error')
          dispatch(removeItemFromDatabase(randomIndex))
        }
        async function fetchNewGameDatabase(difficulty) {
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
                await dispatch(newGameDatabase(database_array.flat()))
                return dispatch(loadNewQuestion())
            }
    }
}

export {
     START_GAME, RESUME_GAME, END_GAME,SHOW_RANDOM_GAME, NEW_ANSWER, CLEAR_USER_SCORE ,
     START_LOADING, SHOW_HINT, NEW_GAME_DATABASE, REMOVE_ITEM, SHOW_POPUP , SET_HINT_COUNTER ,TEST,
     startGame, resumeGame, endGame ,pushNewAnswer, showRandomGame, startLoading,showHint ,
     clearUserScore, newGameDatabase , removeItemFromDatabase , showPopup , setHintCounter,
     test , loadNewQuestion }






// export function loadNewQuestion() {
//     return async function(dispatch) {
//         const game_database = store.getState().game_database
//         const randomIndex = Math.floor(Math.random() * game_database.length)
//         if(game_database === 0) {
//           dispatch(endGame()) 
//         } else {
//             dispatch(showRandomGame(await getGameDetails(game_database[randomIndex])))
//             dispatch(removeItemFromDatabase(randomIndex))
//         }
//     }
// }

// function fetchNewGameDatabase(difficulty) {
//     return async function(dispatch) {
//         const database_array = []
//         let page = 0
//         switch(difficulty) {
//             case 0: {page = 1; break;}
//             case 1: {page = 4; break;}
//             case 2: {page = 7; break;}
//             default: return []
//         }
//         for(let i=0; i<3; i++) {
//             try {
//                 const apishot = await fetch(`https://api.rawg.io/api/games?page=${page+i}&page_size=40`)
//                 const data = await apishot.json()
//                 database_array.push(data.results.map(game => game = game.id))
//             }
//             catch(error) {
//                 console.log(error)
//                 return []
//             }
//         }
//         console.log('rgfg2')
//          await dispatch(newGameDatabase(database_array.flat()))
//         return dispatch(loadNewQuestion())
//     }
// }


///////////// COMBINE LOAD QUESTION AND FETCHNEWGAME DB

