import { connect } from "react-redux";
import MainCounter from "../components/main/challenge/containers/MainCounter"
import { endGame } from "../redux/actions"

const mapState = state => ({
    game_status: state.game_status,
})

const mapDispatch  = dispatch => ({
    endGame: () => dispatch(endGame()),
  })

export default connect(mapState, mapDispatch)(MainCounter);
