import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";

const CounterContainer = styled.div`
  text-transform: lowercase;
  font-weight: 900;
  font-size: 3rem;
  display: inline-block;
  ${(props) => props.counter < 10 && `color: var(--red)`};
  max-width: 9ch;
`;

export default function MainCounter({ game_status, endGame }) {
  const [counter, setCounter] = useState((15).toPrecision(5));
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    !game_status.isStarted && 
      setCounter((15).toPrecision(5));
    const startCounting =
      didMount &&
      game_status.isStarted &&
        !game_status.isLoading &&
          setInterval(() => {
            setCounter((counter) => 
              counter >= 10 
              ? (counter - 0.1).toPrecision(5) 
              : counter >= 1
              ? (counter - 0.1).toPrecision(4)
              : (counter - 0.1).toPrecision(3))
      }, 100);
    return () => clearInterval(startCounting);
  }, [game_status]);

  useEffect(() => counter <= 0 && endGame(), [counter]);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <CounterContainer counter={counter}>
      {game_status.isStarted && 
        counter > 0 && (
          counter >= 10 ?
          `00:${counter}` :
          `00:0${counter}`
        )}
    </CounterContainer>
  );
}