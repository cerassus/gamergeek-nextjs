import Head from "next/head"
import Logo from "../styled-components/Logo"
import Typography from "../styled-components/Typography"
import Container from "../styled-components/Container"
import Navigation from "../styled-components/Navigation"
import Link from 'next/link'
import { connect } from "react-redux";


const mapState = state => ({
    game_status: state.game_status,
    screenshots_loaded: state.screenshots_loaded,
})

function Header({ title, game_status, screenshots_loaded }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Container type="header">
          <Container type="inline">
              <Logo loading={screenshots_loaded}/>
              <Link href="/"><a><Typography h1>gamergeek</Typography></a></Link>
          </Container>
          <Navigation>
              <Link href={game_status ? `` : `/leaderboard`}><a>score leaderboard</a></Link>
              <Link href={game_status ? `` : `/help`}><a>help</a></Link>
          </Navigation>
      </Container>
    </>
  )
}

export default connect(mapState)(Header);
