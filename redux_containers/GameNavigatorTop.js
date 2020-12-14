import { connect } from "react-redux";
import GameNavigatorTop from "../components/main/challenge/containers/GameNavigatorTop"
import { pushNewAnswer, setHintCounter, startLoading, loadNewQuestion, showPopup, showHint, endGame } from "../redux/actions"

const mapState = state => ({
  game_is_started: state.game_status.isStarted,
  game_is_loading: state.game_status.isLoading,
  random_game: state.random_game,
  hintCounter: state.hint_counter,
  test: state.test,
})

const mapDispatch  = dispatch => ({
  showPopup: (popup) => dispatch(showPopup(popup)),
  endGame: () => dispatch(endGame()),
  loadNewQuestion: (db) => dispatch(loadNewQuestion(db)),
  startLoading: () => dispatch(startLoading()),
  showHint: (hint) => dispatch(showHint(hint)),
  setHintCounter: () => dispatch(setHintCounter()),
  pushNewAnswer: (answer) => dispatch(pushNewAnswer(answer)),
})

export default connect(mapState, mapDispatch)(GameNavigatorTop);
