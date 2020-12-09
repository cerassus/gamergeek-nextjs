import { connect } from "react-redux"
import Screenshot from "../components/styled-components/Screenshot"
import { resumeGame } from "../redux/actions"

const mapState = state => ({
    game_status: state.game_status,
    random_game: state.random_game,
})

const mapDispatch  = dispatch => ({
    resumeGame: () => dispatch(resumeGame()),
})

export default connect(mapState, mapDispatch)(Screenshot)
