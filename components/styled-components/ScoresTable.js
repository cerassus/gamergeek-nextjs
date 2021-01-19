import styled from "styled-components"
import { useState, useEffect } from "react"

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

function ScoresTable({ data }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (!data || data.length === 0) && setLoading(true)
    Array.isArray(data) && setLoading(false)
  }, [data])
  return !loading ? (
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
        {data.map((score, i) => {
          return (
          <ScoreRow key={i}>
            <ScoreColumn>{i + 1}</ScoreColumn>
            <ScoreColumn>{score.Name}</ScoreColumn>
            <ScoreColumn>{new Date(Number(score.Date)).toLocaleDateString()}</ScoreColumn>
            <ScoreColumn><span>{score.Score}</span> points</ScoreColumn>
          </ScoreRow>
        )})}
      </tbody>
    </table>
  )
  : (
    <div>
      Loading
    </div>
  )
}

export default ScoresTable