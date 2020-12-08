import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";

const CounterContainer = styled.div`
  text-transform: lowercase;
  font-weight: 900;
  font-size: 3rem;
  display: inline-block;
  ${(props) => props.counter < 10 && `color: var(--red)`};
  & span {
    font-size: 2rem;
  }
`;

export default function MainCounter({ game_status, endGame }) {
  const [counter, setCounter] = useState(15);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    !game_status.isStarted && setCounter(15);
    const startCounting =
      didMount &&
      game_status.isStarted &&
      !game_status.isLoading &&
      setInterval(() => {
        setCounter((counter) => counter - 0.2);
      }, 200);
    return () => clearInterval(startCounting);
  }, [game_status]);

  useEffect(() => counter <= 0 && endGame(), [counter]);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <CounterContainer counter={counter}>
      {game_status.isStarted && counter > 0 && (
        <Fragment>
          {counter > 9.8 ? `00:${counter}` : `00:0${counter}`}
          <span>
            {counter.replace(/\d+\./, ".") + " s"}
          </span>
        </Fragment>
      )}
    </CounterContainer>
  );
}