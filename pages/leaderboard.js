import Layout from "../layout/Layout"
import Container from "../components/styled-components/Container"
import ScoresTable from "../components/styled-components/ScoresTable"

const LeaderboardPage = ({data}) => {
  return (
    <Layout title="Help"> 
        <Container type="standard" width="min(95rem, 95%)" flex="column" leaderboard>
          <ScoresTable key={Math.random() * 12300770} data={data} />
        </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://geek.cerassus.usermd.net/scores');
  const jason = await res.json();
  return Array.isArray(jason) && {
    props: {
      data: jason.sort((a,b) => b.Score - a.Score).slice(0, 15)
    },
  };
}

export default LeaderboardPage