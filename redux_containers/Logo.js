import { connect } from "react-redux";
import Logo from "../components/styled-components/Logo"

const mapState = state => ({
    last_users_answer: state.user_score.length > 0 
        ? state.user_score[state.user_score.length-1] 
        : "",
    game_status: state.game_status,
})

  
export default connect(mapState)(Logo);
