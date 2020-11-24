import Layout from "../layout/Layout"
import ScreenshotViewer from "../containers/ScreenshotViewer"
import Table from "../containers/Table"




export default function HomePage() {
  return (
    <>
    <Layout title="Challenge">
        <ScreenshotViewer />
        <Table />
        {/* <TableTop />
        <TableBottom /> */}
    </Layout>
    </>
  )
}

// Linki z TableTop niewidoczne w trakcie ładowania
// Dodać Spinner albo ZIELONY EKRAN = YES/ CZERWONY = WRONG / ŻÓŁTY = SKIP w zależności od odpowiedzi, pomiędzy ładowaniem screenshotów na ScreenhotViewer
// Dodać counter czasu gry
// Dodać counter czasu odpowiedzi
// Zliczanie punktacji
// Dodanie POPUPa z podsumowaniem gry, który pojawia się po upływie czasu lub po kliknięciu QUIT
// HINTS