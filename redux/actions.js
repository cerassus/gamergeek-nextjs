import { getGameDetails } from "../global/fetchGameDetails"
import store  from "./store"

export const START_GAME = "START_GAME";
export const RESUME_GAME = "RESUME_GAME";
export const END_GAME = "END_GAME";
export const SHOW_RANDOM_GAME = "SHOW_RANDOM_GAME";
export const NEW_ANSWER = "NEW_ANSWER";
export const CLEAR_USER_SCORE = "CLEAR_USER_SCORE";
export const START_LOADING = "START_LOADING";
export const SHOW_HINT = "SHOW_HINT";
export const NEW_GAME_DATABASE = "NEW_GAME_DATABASE";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SHOW_POPUP = "SHOW_POPUP";
export const SET_HINT_COUNTER = "SET_HINT_COUNTER";

export const TEST = "TEST";

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

export const showPopup = (popup) => ({
    type: SHOW_POPUP,
    popup,
})

export const setHintCounter = () => ({
    type: SET_HINT_COUNTER,
})

export const test = (payload) => ({
    type: TEST,
    payload,
})

export function loadNewQuestion(difficulty) {
    return async function(dispatch) {
        const game_database = store.getState().game_database
        const randomIndex = Math.floor(Math.random() * game_database.length)
        if(game_database.length === 0) {
            difficulty
                ? fetchNewGameDatabase(difficulty-1)
                : dispatch(endGame()) 
        } else {
          dispatch(showRandomGame(await getGameDetails(game_database[randomIndex])))
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

// export function fetchNewGameDatabase(difficulty) {
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

