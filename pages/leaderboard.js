import Layout from "../layout/Layout"
import Container from "../components/styled-components/Container"
import ScoresTable from "../components/styled-components/ScoresTable"
import { useState, useEffect } from "react"

const LeaderboardPage = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch("https://gamergeek-nextjs.vercel.app/api/database");
    const json = await res.json();
    setData(json)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Layout title="Help"> 
        <Container type="standard" width="min(95rem, 95%)" flex="column" leaderboard>
          <ScoresTable data={data} />
        </Container>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/database");
//   const json = await res.json();
//   return {
//     props: {
//       data: json,
//     },
//   };
// }

export default LeaderboardPage