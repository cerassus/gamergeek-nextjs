import { connect } from "react-redux";
import Table from "../components/main/challenge/Table"
import { showHint, removeItemFromDatabase, newGameDatabase, clearUserScore, clearHint, pushNewAnswer, startGame, endGame, showRandomGame, startLoading } from "../redux/actions"

const mapState = state => ({
  game_status: state.game_status,
  random_game: state.random_game,
  user_score: state.user_score,
  game_database: state.game_database,
})

const mapDispatch  = dispatch => ({
  pushNewAnswer: (answer) => dispatch(pushNewAnswer(answer)),
  showRandomGame: (game) => dispatch(showRandomGame(game)),
  startGame: () => dispatch(startGame()),
  endGame: () => dispatch(endGame()),
  startLoading: () => dispatch(startLoading()),
  showHint: (hint) => dispatch(showHint(hint)),
  clearHint: () => dispatch(clearHint()),
  clearUserScore: () => dispatch(clearUserScore()),
  newGameDatabase: (db) => dispatch(newGameDatabase(db)),
  removeItemFromDatabase: (index) => dispatch(removeItemFromDatabase(index)),
})

export default connect(mapState, mapDispatch)(Table);
