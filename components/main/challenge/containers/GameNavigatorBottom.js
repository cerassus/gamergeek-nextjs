import Table from "../../../styled-components/Table";
import Typography from "../../../styled-components/Typography";
import { useState, useEffect } from "react";
import moment from 'moment'

export default function GameNavigatorBottom({
  game_is_started, 
  game_is_loading, 
  hintCounter, 
  random_game, 
  pushNewAnswer,
  loadNewQuestion,
  startLoading }) {
  const [answerTimeStart, setAnswerTimeStart] = useState(false)
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
            hints_used: hintCounter,
          };
    startLoading()
    pushNewAnswer(user_answer)
    loadNewQuestion()
  }
  useEffect(() => {
    !game_is_loading && setAnswerTimeStart(moment())
  }, [game_is_loading])
  return (
    <Table bottom>
      {(game_is_started && !game_is_loading && random_game.answers) 
        ? random_game.answers.map((answer, i) => (
          <Typography 
            key={"key0021"+i} 
            answer 
            onClick={(answer) => checkAnswer(answer.target.innerText)}>{answer}
          </Typography>))
        : ``}
    </Table>
  )
}