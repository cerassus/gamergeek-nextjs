import { combineReducers } from "redux"
import * as actions from "./actions"

const test = (state = [], action) => {
    switch(action.type) {
        case actions.TEST: {
            console.log(action.payload)
            return action.payload
        }
        default: return state
    } 
}

const game_database = (state = [], action) => {
    switch(action.type) {
        case actions.NEW_GAME_DATABASE: return action.database 
        case actions.REMOVE_ITEM: return ([
            ...state.filter((x,i) => i !== action.index && x)
          ])
        case actions.END_GAME: return []
        default: return state
    } 
}

const random_game = (state = "", action) => {
    switch(action.type) {
        case actions.SHOW_RANDOM_GAME: return action.game 
       // case actions.START_LOADING: return ""
        case actions.CLEAR_USER_SCORE: return ""
        default: return state
    }
}
    
const user_score = (state = [], action) => {
    switch(action.type) {
        case actions.NEW_ANSWER: {
            console.log([...state, action.answer])
            return [...state, action.answer]
        } 
        case actions.CLEAR_USER_SCORE: return []
        default: return state
    }
}

const hints_array = (state = [], action) => {
    switch(action.type) {
        case actions.SHOW_HINT: {
            console.log([...state, action.hint])
            return [...state, action.hint]
        }
        case actions.START_LOADING:
        case actions.END_GAME: return []
        default: return state
    }
}

const popup_to_show = (state = false, action) => action.type === actions.SHOW_POPUP 
    ? action.popup 
    : state

const hint_counter = (state = false, action) => {
    switch(action.type) {
        case actions.SET_HINT_COUNTER: return state + 1
        case actions.START_LOADING: 
        case actions.CLEAR_USER_SCORE: return 0
        default: return state
    }
}

const game_status = (state = { isStarted: false, isLoading: false }, action) => {
    switch(action.type) {
        case actions.START_GAME: return {
            ...state,
            isStarted: true,
        }
        case actions.START_LOADING: return {
            ...state,
            isLoading: true,
        }
        case actions.RESUME_GAME: return {
            ...state,
            isLoading: false,
        }
        case actions.END_GAME: return {
            isLoading: false,
            isStarted: false,
        }
        default: return state
    }
}


export default combineReducers({
  random_game,
  user_score,
  hints_array,
  game_status,
  game_database,
  popup_to_show,
  hint_counter, 
  test,
})