import { Fragment } from "react"
import * as SC from "../../../styled-components/Popups"

export default function PopupSummary({ close_summary_popup, user_score }) {
  return (
  <Fragment>
    {user_score && user_score.length > 0 && (
    <div style={{display: "flex", width: "95%", padding: "2rem 0", justifyContent: "space-between"}}>
      <div style={{width: "50%", margin: "1rem"}}>
        <SC.WelcomeText>The Game</SC.WelcomeText>
        <table>
          <tr>
            <SC.TD>Correct answers:</SC.TD>
            <SC.TD>{user_score.filter(x => x.correct).length}</SC.TD>
          </tr>
          <tr>
            <SC.TD>Wrong answers:</SC.TD>
            <SC.TD>{user_score.filter(x => !x.correct && x.time).length}</SC.TD>
          </tr>
          <tr>
            <SC.TD>Skipped answers:</SC.TD>
            <SC.TD>{user_score.filter(x => x.skip).length}</SC.TD>
          </tr>
          <tr>
            <SC.TD>Hints used:</SC.TD>
            <SC.TD>{user_score.map(x => x = x.hints_used).reduce((acc,y) => acc + y, 0)}</SC.TD>
          </tr>
          <tr>
            <SC.TD>Quickest response:</SC.TD>
            <SC.TD>{((user_score.map(x => x = x.time).sort((a,b) => a-b)[0])/1000 || 0) + " sec" }</SC.TD>
          </tr>                
          <tr>
            <SC.TD>Slowest response:</SC.TD>
            <SC.TD>{((user_score.filter(x => x.time).map(x => x = x.time).sort((a,b) => a-b))[user_score.filter(x => x.time).length-1]/1000 || 0) + " sec" }</SC.TD>
          </tr>                
          <tr>
            <SC.TD>Average time response:</SC.TD>
            <SC.TD>{((user_score.filter(x => x.time).map(x => x = x.time).reduce((acc, x) => acc + x, 0))/user_score.length/1000).toFixed(3) + " sec" }</SC.TD>
          </tr>
        </table>
      </div>
      <div style={{width: "50%", margin: "1rem", position: "relative"}}>
        <SC.WelcomeText>Score:</SC.WelcomeText>
        <SC.ScoreText>{user_score.map(score => score = score.score).reduce((acc,score) => acc + score).toLocaleString()} <span>points</span></SC.ScoreText>
        <SC.PlayButton summary onClick={() => close_summary_popup()}>Close</SC.PlayButton>
      </div>
    </div>
    )}
  </Fragment>
)
}