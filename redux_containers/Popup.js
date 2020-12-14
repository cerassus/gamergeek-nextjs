import { connect } from "react-redux";
import Popup from "../components/main/challenge/containers/Popup"
import { 
    showPopup, 
    loadNewQuestion, 
    startGame,
    clearUserScore,
    startLoading,
 } from "../redux/actions"

const mapState = state => ({
    popup_to_show: state.popup_to_show,
  })

const mapDispatch = dispatch => ({
    showPopup: (popup_name) => dispatch(showPopup(popup_name)),
    startGame: () => dispatch(startGame()),
    startLoading: () => dispatch(startLoading()),
    loadNewQuestion: (db) => dispatch(loadNewQuestion(db)),
    clearUserScore: () => dispatch(clearUserScore()),
})

export default connect(mapState, mapDispatch)(Popup);
