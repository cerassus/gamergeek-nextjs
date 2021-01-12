import Header from "../redux_containers/Header"
import Head from "../components/header/Head"
import Container from "../components/styled-components/Container"
import Hints from "../redux_containers/Hints"
import { Fragment } from "react"

export default function Layout({ children, title }) {
    return (
      <Fragment>
        <Head title={title} />
        <Header />
        <Container type="main">
            {children}
        </Container>
        <Hints />
      </Fragment>
    )
  }