import { connect } from "react-redux";
import Screenshot from "../components/styled-components/Screenshot"
import { resumeGame } from "../redux/actions"

const mapState = state => ({
    user_score: state.user_score,
    game_status: state.game_status,
})

const mapDispatch  = dispatch => ({
    resumeGame: () => dispatch(resumeGame()),
})

  
export default connect(mapState, mapDispatch)(Screenshot);
