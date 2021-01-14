import styled from "styled-components";

const ScoreRow = styled.tr`
  font-family: Montserrat;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: 0.05em;
  line-height: clamp(2rem, 2.5vw, 3rem);
  &:first-of-type {
    font-weight: 700;
  }
  & > *:nth-child(3) {
    @media (max-width: 350px) {
      display: none;
    }
  }
`;

const ScoreColumn = styled.td`
  text-align: center;
  & span {
    font-weight: 700;
  }
`;

export default function ScoresTable({ data }) {
  const scores = data || []
  return (
    <table>
      <thead>
        <ScoreRow>
          <th>No.</th>
          <th>Name</th>
          <th>Date</th>
          <th>Score</th>
        </ScoreRow>
      </thead>
      <tbody>
        {scores.sort((a,b) => b.Score - a.Score).map((score, i) => (
          <ScoreRow key={i}>
            <ScoreColumn>{i + 1}</ScoreColumn>
            <ScoreColumn>{score.Name}</ScoreColumn>
            <ScoreColumn>{score.Date}</ScoreColumn>
            <ScoreColumn><span>{score.Score}</span> points</ScoreColumn>
          </ScoreRow>
        )).slice(0, 15)}
      </tbody>
    </table>
  );
}
