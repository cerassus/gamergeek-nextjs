import { connect } from "react-redux";
import ScreenshotArrow from "../components/styled-components/ScreenshotArrow"

const mapState = state => ({
    game_status: state.game_status,
})
  
export default connect(mapState)(ScreenshotArrow);
