import { Fragment } from "react"
import ScreenshotBrowser from "./containers/ScreenshotBrowser"
import GameNavigatorTop from "../../../redux_containers/GameNavigatorTop"
import GameNavigatorBottom from "../../../redux_containers/GameNavigatorBottom"
import Popup from "../../../redux_containers/Popup"

export default function Challenge({ popup_to_show }) {
  return (
    <Fragment>
      <ScreenshotBrowser />
      <GameNavigatorTop />
      <GameNavigatorBottom />
      {popup_to_show && <Popup />}
    </Fragment>
  )
}
