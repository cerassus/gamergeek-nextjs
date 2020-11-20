import { connect } from "react-redux";
import TableTop from "../components/main/challenge/TableTop"
import { startGame, stopGame, getRandomGame } from "../redux/actions"

const mapState = state => ({
    game_status: state.game_status,
})

const mapDispatch  = dispatch => ({
  startGame: (difficulty) => dispatch(startGame(difficulty)),
  stopGame: () => dispatch(stopGame()),
  getRandomGame: (obj) => dispatch(getRandomGame(obj)),
})

export default connect(mapState, mapDispatch)(TableTop);
