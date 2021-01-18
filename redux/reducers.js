import { combineReducers } from "redux"
import { START_GAME, RESUME_GAME, END_GAME,SHOW_RANDOM_GAME, 
    NEW_ANSWER, CLEAR_USER_SCORE, START_LOADING, SHOW_HINT, 
    NEW_GAME_DATABASE, REMOVE_ITEM, SHOW_POPUP, SET_HINT_COUNTER,
    NEW_USER_NAME } from "./const"


const game_database = (state = [], action) => {
    switch(action.type) {
        case NEW_GAME_DATABASE: return action.database 
        case REMOVE_ITEM: return ([
            ...state.filter((x,i) => i !== action.index && x)
          ])
        case END_GAME: return []
        default: return state
    } 
}

const random_game = (state = "", action) => {
    switch(action.type) {
        case SHOW_RANDOM_GAME: return action.game
        case CLEAR_USER_SCORE: return ""
        default: return state
    }
}
    
const user_score = (state = [], action) => {
    switch(action.type) {
        case NEW_ANSWER: return [...state, action.answer]
        case CLEAR_USER_SCORE: return []
        default: return state
    }
}

const user_name = (state = "", action) => action.type === NEW_USER_NAME 
    ? action.name
    : state

const hints_array = (state = [], action) => {
    switch(action.type) {
        case SHOW_HINT: return [...state, action.hint]
        case START_LOADING:
        case END_GAME: return []
        default: return state
    }
}

const popup_to_show = (state = false, action) => action.type === SHOW_POPUP 
    ? action.popup 
    : state

const hint_counter = (state = false, action) => {
    switch(action.type) {
        case SET_HINT_COUNTER: return state + 1
        case START_LOADING: 
        case CLEAR_USER_SCORE: return 0
        default: return state
    }
}

const game_status = (state = { isStarted: false, isLoading: false }, action) => {
    switch(action.type) {
        case START_GAME: return {
            ...state,
            isStarted: true,
        }
        case START_LOADING: return {
            ...state,
            isLoading: true,
        }
        case RESUME_GAME: return {
            ...state,
            isLoading: false,
        }
        case END_GAME: return {
            isLoading: false,
            isStarted: false,
        }
        default: return state
    }
}

export default combineReducers({
  user_score,
  hints_array,
  game_status,
  game_database,
  popup_to_show,
  hint_counter, 
  random_game,
  user_name,
})