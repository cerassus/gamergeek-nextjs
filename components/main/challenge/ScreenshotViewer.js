import Container from "../../styled-components/Container"
import Screenshot from "../../../containers/Screenshot"
import ScreenshotArrow from "../../../containers/ScreenshotArrow"
import { useState } from "react"

export default function ScreenshotViewer() {
  const [screenshotIndex, setIndex] = useState(0);
  const previousClick = () => screenshotIndex === 0 ? setIndex(2) : setIndex(screenshotIndex - 1);
  const nextClick = () => screenshotIndex === 2 ? setIndex(0) : setIndex(screenshotIndex + 1);
  return (
    <Container type="standard" width="min(95rem, 95%)" flex>
        <ScreenshotArrow left onClick={previousClick} />
        <Screenshot index={screenshotIndex} />
        <ScreenshotArrow right onClick={nextClick} />
    </Container>
  )
}