import Table from "../../../styled-components/Table";
import Typography from "../../../styled-components/Typography";
import { useState, useEffect, Fragment } from "react";

export default function GameNavigatorTop({ 
  game_is_started, 
  game_is_loading,
  showPopup,
  endGame, 
  showHint, 
  loadNewQuestion,
  startLoading,
  random_game,
  setHintCounter,
  hintCounter,
  pushNewAnswer,
 }) {
  const [hints, setHints] = useState(false)
  const handleClickHint = () => {
    showHint(...hints.splice(Math.floor(Math.random() * hints.length), 1))
    setHintCounter()
  }
  const handleClickSkip = () => {
    pushNewAnswer({
      score: 0,
      hints_used: hintCounter,
      skip: true,
    })
    startLoading()
    loadNewQuestion()
  }
  useEffect(() => {
    random_game && setHints(random_game.hints)
  }, [random_game])
  useEffect(() => {
    if(random_game && !game_is_started) {
      pushNewAnswer({
        score: 0,
        hints_used: hintCounter,
      })
      showPopup('summary')
    }
  }, [game_is_started])
  return (
      <Table top>    
        {
        !game_is_started 
          ? <Typography link onClick={() => showPopup('userdata')}>start a new challenge</Typography>
          : game_is_loading 
            ? <Typography link>loading</Typography>
            : (
              <Fragment>
                {hintCounter < 3 && 
                <Typography link onClick={() => handleClickHint()}>get a hint</Typography>}
                <Typography link onClick={() => handleClickSkip()}>skip</Typography>
                <Typography link onClick={() => endGame()}>quit</Typography>
              </Fragment>
            )
        }
      </Table>
  )
}
