import Layout from "../layout/Layout"
import Container from "../components/styled-components/Container"
import ScoresTable from "../components/styled-components/ScoresTable"
import { scores } from "../global/const"

export default function LeaderboardPage({game_results}) {
  return (
    <Layout title="Help"> 

        <Container type="standard" width="min(95rem, 95%)" flex="column" leaderboard>
          <ScoresTable data={scores} />
        </Container>
    </Layout>
  )
}


// export async function getServerSideProps(context) {

//   const game_results = [1,2,3]
//   return  { props: { game_results } }
// }