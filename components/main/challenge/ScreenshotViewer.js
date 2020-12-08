import Container from "../../styled-components/Container"
import Screenshot from "../../../containers/Screenshot"
import ScreenshotArrow from "../../styled-components/ScreenshotArrow"
import React from "react"

export default function ScreenshotViewer({ random_game, game_status }) {
  const [screenshotIndex, setIndex] = React.useState(0);
  const previousClick = () => screenshotIndex === 0 ? setIndex(2) : setIndex(screenshotIndex - 1);
  const nextClick = () => screenshotIndex === 2 ? setIndex(0) : setIndex(screenshotIndex + 1);
  return (
    <Container type="standard" width="min(95rem, 95%)" flex>
        {game_status.isStarted && <ScreenshotArrow left onClick={previousClick} />}
        <Screenshot src={random_game && random_game.screenshots} index={screenshotIndex} />
        {game_status.isStarted && <ScreenshotArrow right onClick={nextClick} />}
    </Container>
  )
}