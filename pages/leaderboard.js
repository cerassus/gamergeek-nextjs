import Layout from "../layout/Layout"
import Container from "../components/styled-components/Container"
import ScoresTable from "../components/styled-components/ScoresTable"

const LeaderboardPage = ({data}) => {
  return (
    <Layout title="Help"> 
        <Container type="standard" width="min(95rem, 95%)" flex="column" leaderboard>
          <ScoresTable data={data} />
        </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://geek.cerassus.usermd.net/");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default LeaderboardPage