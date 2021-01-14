import { useState, useEffect, Fragment } from "react"
import * as SC from "../../../styled-components/Popups"

export default function PopupUserData({ gameIsReadyToStart, user }) {
  const game_difficulty = ["easy", "medium", "hard"]
  const [username, setUsername] = useState(false)
  const [warning, setWarning] = useState(false)
  const [difficulty, setDifficulty] = useState(false)
  const [usernamePanel, showUsernamePanel] = useState(true)
  const handleTyping = (e) => {
    (0 < e.target.value.length && e.target.value.length < 3) 
      ? setWarning(true)
      : setWarning(false);   // check if username doesn't match one of usernames in MongoDatabase
    setUsername(e.target.value)
  }
  const validateUserName = () => {
    (warning || !username) 
      ? alert('Wrong username! Try different one!') 
      : showUsernamePanel(false)
  }
  useEffect(() => {
    if(difficulty) {
      gameIsReadyToStart(difficulty)
    }
  },[difficulty])
  useEffect(() => {
    !usernamePanel && user(username)
  }, [usernamePanel])
  return (
    <Fragment>
    {usernamePanel ? (
      <Fragment>
        <SC.WelcomeText>Let’s see how good you are! Starting from your name...</SC.WelcomeText>
        <SC.TextInput type="text" onChange={(e) => handleTyping(e)} />
        <SC.TextInputHint visible={warning}>Wrong nickname</SC.TextInputHint>
        <SC.PlayButton onClick={() => validateUserName()}>Let's Play!</SC.PlayButton>
      </Fragment>
    ) : (
      <Fragment>
        <SC.WelcomeText center>Set game difficulty...</SC.WelcomeText>
        {game_difficulty.map((diff_lvl, i) => (
          <SC.PlayButton key={"key0011" + i} onClick={() => setDifficulty(i+1)}>
            {diff_lvl}
          </SC.PlayButton>
        ))}
      </Fragment>
    )}
    </Fragment>
  )
}
