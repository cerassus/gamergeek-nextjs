import { connect } from "react-redux";
import Challenge from "../components/main/challenge/Challenge"

const mapState = state => ({
    popup_to_show: state.popup_to_show,
})

export default connect(mapState)(Challenge);
