import Layout from "../layout/Layout"
import ScreenshotViewer from "../containers/ScreenshotViewer"
import TableTop from "../containers/TableTop"
import TableBottom from "../containers/TableBottom"




export default function HomePage() {
  return (
    <>
    <Layout title="Challenge">
        <ScreenshotViewer />
        <TableTop />
        <TableBottom />
    </Layout>
    </>
  )
}


// Dodać Spinner albo ZIELONY EKRAN = YES/ CZERWONY = WRONG w zależności od odpowiedzi, pomiędzy ładowaniem screenshotów na ScreenhotViewer
// Dodać counter czasu gry
// Dodać counter czasu odpowiedzi
// Zliczanie punktacji
// Dodanie POPUPa z podsumowaniem gry, który pojawia się po upływie czasu lub po kliknięciu QUIT