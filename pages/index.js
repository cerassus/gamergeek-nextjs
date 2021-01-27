import { connect } from "react-redux";
import Layout from "../layout/Layout";
import { useState } from "react"
import Container from "../components/styled-components/Container"
import Screenshot from "../redux_containers/Screenshot"
import ScreenshotArrow from "../redux_containers/ScreenshotArrow"
import GameNavigatorTop from "../redux_containers/GameNavigatorTop"
import GameNavigatorBottom from "../redux_containers/GameNavigatorBottom"
import Popup from "../redux_containers/Popup"
import PropTypes from 'prop-types'

const mapState = (state) => ({
  popup_to_show: state.popup_to_show,
});

const HomePage = ({ popup_to_show }) => {
  const [screenshotIndex, setIndex] = useState(0);
  const previousClick = () => screenshotIndex === 0 ? setIndex(2) : setIndex(screenshotIndex - 1);
  const nextClick = () => screenshotIndex === 2 ? setIndex(0) : setIndex(screenshotIndex + 1);
  return (
    <Layout title="Challenge">
      <Container flex>
        <ScreenshotArrow left onClick={previousClick} />
        <Screenshot index={screenshotIndex} />
        <ScreenshotArrow right onClick={nextClick} />
      </Container>
      <GameNavigatorTop />
      <GameNavigatorBottom />
      {popup_to_show && <Popup />}
    </Layout>
  );
};

export default connect(mapState)(HomePage);

HomePage.propTypes = {
  popup_to_show: PropTypes.string,
}