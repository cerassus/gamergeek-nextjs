import Table from "../../styled-components/Table";
import Typography from "../../styled-components/Typography";
import { pickRandomGame } from "../../../global/fetch"
import { game_database } from "../../../global/const"

export default function TableBottom({random_game, game_status, newAnswer, getRandomGame, screenshots_loaded}) {
  const checkAnswer = async (answer) => {
    const user_answer = answer.target.innerText === random_game.name ? {
      title: random_game.name,
      time: 3,
      score: 2000,
      correct: true,
    } : {
      title: random_game.name,
      time: 3,
      score: 0,
      correct: false,
    }
    newAnswer(user_answer)
    const randomik = await pickRandomGame(game_database)
    getRandomGame(randomik)
  }
  return (
    <Table bottom>
      {(game_status && random_game.answers && screenshots_loaded === 'loaded') ? (
        random_game.answers.map((answer, i) => <Typography key={i} answer onClick={answer => checkAnswer(answer)}>{answer}</Typography>)
      ) : ``}
    </Table>
  );
}
