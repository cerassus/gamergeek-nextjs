import { connect } from "react-redux";
import Table from "../components/main/challenge/Table"
import { newAnswer, startGame, stopGame, getRandomGame, screenshotsAreLoading } from "../redux/actions"

const mapState = state => ({
    game_status: state.game_status,
    random_game: state.random_game,
    screenshots_loaded: state.screenshots_loaded,
})

const mapDispatch  = dispatch => ({
  newAnswer: (answer) => dispatch(newAnswer(answer)),
  getRandomGame: (obj) => dispatch(getRandomGame(obj)),
  startGame: (difficulty) => dispatch(startGame(difficulty)),
  stopGame: () => dispatch(stopGame()),
  screenshotsAreLoading: () => dispatch(screenshotsAreLoading()),
})

export default connect(mapState, mapDispatch)(Table);
