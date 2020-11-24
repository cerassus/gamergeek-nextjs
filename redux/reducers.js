import { combineReducers } from "redux"
import * as actions from "./actions"




const game_status = (state = false, action) => action.type === actions.START_GAME ? true : action.type === actions.STOP_GAME ? false : state

const random_game = (state = "", action) => action.type === actions.GET_RANDOM_GAME ? action.game : state

const screenshots_loaded = (state = false, action) => {
    switch(action.type) {
        case actions.FILES_LOADED: {
            console.log('loaded')
            return 'loaded'
        }
        case actions.FILES_ARE_LOADING: {
            console.log('loading')
            return 'loading'
        }
        default: return state
    }
}

// const user_score = (state = [], action) => action.type === actions.NEW_ANSWER ? [...state, action.answer] : state

const user_score = (state = [], action) => {
    if(action.type === actions.NEW_ANSWER) {
        console.log([...state, action.answer])
        return [...state, action.answer]
    } else {
        return state
    }
}

export default combineReducers({
  game_status,
  random_game,
  user_score,
  screenshots_loaded,
})









// const game_database = [...source.results].map((game,i) => game = {
//     id: game.id,
//     title: game.name,
//     screenshots: [
//         ...game.short_screenshots.slice(0, 3).map(screenshot => screenshot.image)
//     ],
//     hints: {
//         genre: game.genres[game.genres.length-1].name,
//         year: game.released,
//     }
// })