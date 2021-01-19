import Layout from "../layout/Layout";
import Container from "../components/styled-components/Container";
import Typography from "../components/styled-components/Typography";

export default function HelpPage() {
  return (
    <Layout title="Leaderboard">
      <Container
        type="standard"
        width="min(95rem, 95%)"
        flex="column"
        leaderboard
        help
      >
        <Typography h2>The Game</Typography>
        <Typography p padding="3vw">
          To start a new game press START A NEW CHALLENGE button. Set difficulty
          to EASY, MEDIUM or HARD. For each question Application will show 3
          screenshots from certain video game and four possible answers at the
          bottom of the screen. You have 60 seconds to get as much correct
          answers as you can. If you don’t have idea what the correct answer is,
          you can press SKIP button or get a hint by pressing GET A HINT button.
          You can get maximum of 3 hints per one question.
        </Typography>
        <Typography h2>Thanks to</Typography>
        <Typography p padding="3vw">
          Thanks to RAWG Video Games Database - https://rawg.io for sharing
          their API for free to use.
        </Typography>
        <Typography h2>Author</Typography>
        <Typography p padding="3vw">
          This webpage is made for my Portfolio. Technologies used: Next.js,
          Styled Components, Redux, Moment, MongoDB and ServerSide
          Rendering. I also created simple REST/API in node.js with express and mongoose.
        </Typography>
      </Container>
    </Layout>
  );
}
