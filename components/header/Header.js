import Logo from "../../redux_containers/Logo"
import Typography from "../styled-components/Typography"
import Container from "../styled-components/Container"
import Navigation from "../styled-components/Navigation"
import Link from "next/link"
import MainCounter from "../../redux_containers/MainCounter"

export default function Header() {
  return (
    <Container type="header">
      <Container type="inline">
        <Logo />
        <Link href="/">
          <a><Typography h1>gamergeek</Typography></a>
        </Link>
      </Container>
      <Navigation>
        <Link href={`/leaderboard`}>
          <a>score leaderboard</a>
        </Link>
        <Link href={`/help`}>
          <a>help</a>
        </Link>
        <MainCounter />
      </Navigation>
    </Container>
  );
}
