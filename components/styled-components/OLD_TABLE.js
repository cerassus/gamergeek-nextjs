import Table from "../../styled-components/Table";
import Typography from "../../styled-components/Typography";
import { useState, useEffect, Fragment } from "react";
import { getGameDetails, fetchNewGameDatabase  } from "../../../global/fetch";
import moment from 'moment'
import * as SC from "../../styled-components/Popup"

const game_difficulty = ["easy", "medium", "hard"];

export default function TableComponent({
    random_game, startGame, startLoading, endGame, user_score, clearUserScore, newGameDatabase,
    showRandomGame, pushNewAnswer, showHint, clearHint, game_status, game_database, removeItemFromDatabase }) {
  const [answerTimeStart, setAnswerTimeStart] = useState(false)
  const [hintCounter, setHintCounter] = useState(0)
  const [hints, setHints] = useState(false)
  const [difficulty, setDifficulty] = useState(false)
  const [usernamePanel, showUsernamePanel] = useState(true)
  const [warning, setWarning] = useState(false)
  const [popup, switchPopup] = useState(false)
  const [summary, showSummary] = useState(false)
  const [username, setUsername] = useState(false)

  const startNewGame = () => {
    switchPopup(true)
  }
  const loadNewQuestion = async () => {
    const randomIndex = Math.floor(Math.random() * game_database.length)
    !game_status.isLoading && startLoading()
    clearHint()
    setHintCounter(0)
    if(game_database === 0) {
      endGame() 
    } else {
      showRandomGame(await getGameDetails(game_database[randomIndex]))
      removeItemFromDatabase(randomIndex)
    }
  } 
  const getNewDatabase = async () => {
    startLoading()
    newGameDatabase(await fetchNewGameDatabase(difficulty-1))
    await loadNewQuestion()
  }
  const quitGame = () => {
    clearHint()
    setHintCounter(0)
    setHints(false)
    showUsernamePanel(true)
    setDifficulty(false)
    setUsername(false)
    setAnswerTimeStart(false)
    switchPopup(false)
    user_score.length > 0 && showSummary(true)
  }
  const getHint = () => {
    showHint(...hints.splice(Math.floor(Math.random() * hints.length), 1))
    setHintCounter(hintCounter => hintCounter + 1)
  }
  const handleTyping = (e) => {
    (0 < e.target.value.length && e.target.value.length < 3) 
      ? setWarning(true)
      : setWarning(false);   // check if username doesn't match one of usernames in MongoDatabase
    setUsername(e.target.value)
  }
  const validateUserName = () => {
    (warning || !username) ? alert('Wrong username! Try different one!') : showUsernamePanel(false)
  }
  const close_summary = () => {
    showSummary(false)
    clearUserScore()
  }
  const checkAnswer = async (answer) => {
    const answerTimeEnd = moment()
    const user_answer = answer === random_game.name
        ? {
            title: random_game.name,
            time: answerTimeEnd.diff(answerTimeStart),
            score: Number((1000/answerTimeEnd.diff(answerTimeStart)*10000*((10-hintCounter)/10)).toFixed()),
            correct: true,
            hints_used: hintCounter,
          }
        : {
            title: random_game.name,
            time: answerTimeEnd.diff(answerTimeStart),
            score: 0,
            correct: false,
            skip: answer === "player_skipped_game" ? true: false,
            hints_used: hintCounter,
          };
    pushNewAnswer(user_answer)
    loadNewQuestion()
  }

  useEffect(() => {
    !game_status.isLoading && setAnswerTimeStart(moment())
    !game_status.isStarted && quitGame()
  }, [game_status])
  useEffect(() => {
    random_game && setHints(random_game.hints) 
  }, [random_game])
  useEffect(() => {
    if(difficulty) {
      switchPopup(false)
      startGame()
      getNewDatabase()
    }
  },[difficulty])
  useEffect(() => {
    game_database.length === 120 && loadNewQuestion()
  }, [game_database])
    
  useEffect(() => () => {
    console.log('i am')
    clearUserScore()
    endGame()
  }, [])

  return (
    <Fragment>
      <Table top>    
        {!game_status.isStarted ?
          <Typography key={"key0015"} link onClick={() => startNewGame()}>start a new challenge</Typography>
          : game_status.isLoading ?
           <Typography key={'key0016'} link>loading</Typography>
           : (
            <Fragment>
              {hintCounter < 3 && <Typography key={"key0011"} link onClick={() => getHint()}>get a hint</Typography>}
              <Typography key={"key0012"} link onClick={() => checkAnswer("player_skipped_game")}>skip</Typography>
              <Typography key={"key0013"} link onClick={() => endGame()}>quit</Typography>
            </Fragment>
          )}
      </Table>
      <Table bottom>
        {(game_status.isStarted && !game_status.isLoading && random_game.answers) ?
        random_game.answers.map((answer, i) => (
        <Typography key={"key0021"+i} answer onClick={(answer) => checkAnswer(answer.target.innerText)}>{answer}</Typography>))
        : ``}
      </Table>
      <SC.Popup title="Hello gamergeek!" switch_popup={popup} popupIsClosed={() => quitGame()}>
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
      </SC.Popup>
      <SC.Popup title="Summary" switch_popup={summary} popupIsClosed={() => close_summary()}>
        {(user_score.length > 0 && summary) && (
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
                  <SC.TD>{user_score.filter(x => !x.correct).length}</SC.TD>
                </tr>
                <tr>
                  <SC.TD>Skipped answers:</SC.TD>
                  <SC.TD>{user_score.filter(x => x.skip).length}</SC.TD>
                </tr>
                <tr>
                  <SC.TD>Hints used:</SC.TD>
                  <SC.TD>{user_score.map(x => x = x.hints_used).reduce((acc,y) => acc + y)}</SC.TD>
                </tr>
                <tr>
                  <SC.TD>Quickest response:</SC.TD>
                  <SC.TD>{(user_score.map(x => x = x.time).sort((a,b) => a-b)[0])/1000 + " sec" }</SC.TD>
                </tr>                
                <tr>
                  <SC.TD>Slowest response:</SC.TD>
                  <SC.TD>{(user_score.map(x => x = x.time).sort((a,b) => a-b)[user_score.length-1])/1000 + " sec" }</SC.TD>
                </tr>                
                <tr>
                  <SC.TD>Average time response:</SC.TD>
                  <SC.TD>{((user_score.map(x => x = x.time).reduce((acc, x) => acc + x))/user_score.length/1000).toFixed(3) + " sec" }</SC.TD>
                </tr>
              </table>
            </div>
            <div style={{width: "50%", margin: "1rem", position: "relative"}}>
              <SC.WelcomeText>Score:</SC.WelcomeText>
              <SC.ScoreText>{user_score.map(score => score = score.score).reduce((acc,score) => acc + score).toLocaleString()} <span>points</span></SC.ScoreText>
              <SC.PlayButton summary onClick={() => close_summary()}>Close</SC.PlayButton>
            </div>
          </div>
        )}
      </SC.Popup>
    </Fragment>
  )
}
