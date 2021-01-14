import { combineReducers } from "redux"

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
const NEW_USER_NAME = "NEW_USER_NAME";


const test = (state = [], action) => {
    switch(action.type) {
        case TEST: return action.payload
        default: return state
    } 
}

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
  test,
  random_game,
  user_name,
})