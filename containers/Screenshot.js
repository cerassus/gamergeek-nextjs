import { connect } from "react-redux";
import Screenshot from "../components/styled-components/Screenshot"
import { screenshotsLoaded, screenshotsAreLoading } from "../redux/actions"

const mapState = state => ({
    game_status: state.game_status,
    screenshots_loaded: state.screenshots_loaded,
})

const mapDispatch  = dispatch => ({
    screenshotsLoaded: () => dispatch(screenshotsLoaded()),
    screenshotsAreLoading: () => dispatch(screenshotsAreLoading()),
})

  
export default connect(mapState, mapDispatch)(Screenshot);
