import { connect } from "react-redux";
import TableBottom from "../components/main/challenge/TableBottom"
import { newAnswer, getRandomGame } from "../redux/actions"

const mapState = state => ({
    game_status: state.game_status,
    random_game: state.random_game,
})

const mapDispatch  = dispatch => ({
  newAnswer: (answer) => dispatch(newAnswer(answer)),
  getRandomGame: (obj) => dispatch(getRandomGame(obj)),
})

export default connect(mapState, mapDispatch)(TableBottom);
