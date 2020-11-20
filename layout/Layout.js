import Header from "../components/header/Header"
import Container from "../components/styled-components/Container"
import Hints from "../components/main/challenge/Hints"

export default function Layout({ children, title }) {
    return (
      <>
        <Header title={title} />
        <Container type="main">
            {children}
        </Container>
        <Hints />
      </>
    )
  }