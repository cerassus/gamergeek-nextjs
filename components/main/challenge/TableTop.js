import Table from "../../styled-components/Table";
import Typography from "../../styled-components/Typography";
import React from "react"
import { pickRandomGame } from "../../../global/fetch"
import { game_database } from "../../../global/const"

const game_difficulty = ['easy', 'medium', 'hard']

export default function TableTop({ game_status, startGame, stopGame, getRandomGame }) {
  const [difficultyChoice, showDifficultyChoice] = React.useState(false)
  const stop = () => {
    showDifficultyChoice(false);
    return stopGame();
  }
  const start = async (difficulty) => {
    const randomik = await pickRandomGame(game_database)
    getRandomGame(randomik)
    difficulty && startGame(difficulty)
  }
  return (
    <Table top>
      {game_status ? (
        <>
          <Typography key={Math.random() * 10000} link href="/">get a hint</Typography>
          <Typography key={Math.random() * 10000} link onClick={start}>skip</Typography>
          <Typography key={Math.random() * 10000} link onClick={stop}>quit</Typography>
        </>
      ) : difficultyChoice ? (
        <>
        <Typography key={Math.random() * 10000} link >set difficulty: </Typography>
        {game_difficulty.map((diff,i) => <Typography key={Math.random() * 10000} link onClick={() => start({i})}>{diff}</Typography>)}
        </>
      ) : <Typography key={Math.random() * 10000} link onClick={() => showDifficultyChoice(true)}>start a new challenge</Typography>}
    </Table>
  );
}



















// export default function TableTop({ game_status, startGame, stopGame }) {
//   const [difficultyChoice, showDifficultyChoice] = React.useState(false)
//   const stop = () => {
//     showDifficultyChoice(false);
//     return stopGame();
//   }
//   return (
//     <Table top>
//       {(!game_status && difficultyChoice) && (
//         <>
//         <Typography link>set difficulty: </Typography>
//         <Typography link onClick={() => startGame(0)}>easy</Typography>
//         <Typography link onClick={() => startGame(1)}>medium</Typography>
//         <Typography link onClick={() => startGame(2)}>hard</Typography>
//         </>
//       )}
//       {(!game_status && !difficultyChoice) && (
//         <Typography link onClick={() => showDifficultyChoice(true)}>start a new challenge</Typography>
//       )}

//       {game_status && (
//         <>
//           <Typography link href="/">get a hint</Typography>
//           <Typography link href="/">skip</Typography>
//           <Typography link onClick={stop}>quit</Typography>
//         </>
//       )}
//     </Table>
//   );
// }


