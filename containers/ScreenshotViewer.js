import { connect } from "react-redux";
import ScreenshotViewer from "../components/main/challenge/ScreenshotViewer"

const mapState = state => ({
    random_game: state.random_game,
    game_status: state.game_status,
})


export default connect(mapState)(ScreenshotViewer);
