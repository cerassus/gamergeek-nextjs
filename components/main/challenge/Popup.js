import styled from "styled-components";
import React from "react";
import Typography from "./Typography";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  ${(props) =>
    props.visibility
      ? `opacity: 1; visibility: visible;`
      : `opacity: 0; visibility: hidden;`}
`;
const PopupContainer = styled.div`
  width: min(75rem, 95%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--light-black);
  border-radius: 3px;
  font-family: "Ruda";
  font-weight: bold;
`;
const TopBar = styled.div`
  position: relative;
  padding: 2rem;
  text-align: center;
  background: var(--dark-grey);
  border-radius: 3px 3px 0 0;
`;
const Close = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 3rem;
  &:hover {
    transform: translate(0, -50%) rotate(90deg);
  }
`;
const Content = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: opacityAnim 0.3s;
`;
const TextInput = styled.input`
  background: black;
  color: white;
  width: 55%;
  font-size: 3rem;
  padding: 1rem;
  border: none;
  text-align: center;
  border-radius: 3px;
  font-family: "Ruda";
  font-weight: bold;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px black;
  }
`;
const TextInputHint = styled.p`
  color: var(--light-red);
  font-size: 1.4rem;
  padding: 1rem 1rem 5rem;
  opacity: ${(props) => (props.visible ? `1` : `0`)};
`;
const WelcomeText = styled.div`
  color: var(--white);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  text-align: ${(props) => (props.center ? `center` : `left`)};
  width: 100%;
  padding-bottom: 3rem;
`;
const PlayButton = styled.a`
  color: var(--black);
  background-color: var(--light-grey);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  text-transform: uppercase;
  text-align: center;
  width: 33%;
  padding: 1rem;
  border: 0;
  &:hover {
    background-color: var(--dark-grey);
    color: var(--white);
    cursor: pointer;
  }
`;
const game_difficulty = ["easy", "medium", "hard"];

export default function Eks({ game_prepare, game_summary, setDifficulty }) {
  const [visibility, setVisibility] = React.useState(false);
  const [askUsername, setAskUsername] = React.useState(true);
  const [warning, setWarning] = React.useState(false);
  const handleTyping = (e) => {
    0 < e.target.value.length && e.target.value.length < 3
      ? setWarning(true)
      : setWarning(false);
    // check if username doesn't match one of usernames in MongoDatabase
  };
  React.useEffect(() => {
    game_prepare &&
      setVisibility(true);
      (!game_prepare && !game_summary) && setVisibility(false);
  }, [game_prepare]);
  React.useEffect(() => {
    game_summary &&
      setVisibility(true);
      (!game_prepare && !game_summary) && setVisibility(false);
  }, [game_summary]);

  return (
    <Background visibility={visibility}>
      <PopupContainer>
        <TopBar>
          <Close onClick={() => setVisibility(false)}>&times;</Close>
          <Typography hint uppercase gamefont>
            hello, gamergeek
          </Typography>
        </TopBar>
        <Content key={askUsername}>
          {game_prepare ? (
            askUsername ? (
              <>
                <WelcomeText>
                  Let’s see how good you are! Starting from your name...
                </WelcomeText>
                <TextInput type="text" onChange={handleTyping} />
                <TextInputHint visible={warning}>Wrong nickname</TextInputHint>
                <PlayButton onClick={() => setAskUsername(false)}>
                  Let's Play!
                </PlayButton>
              </>
            ) : (
              <>
                <WelcomeText center>Set game difficulty...</WelcomeText>
                {game_difficulty.map((diffe, i) => (
                  <PlayButton
                    key={"key0011" + i}
                    onClick={() => setDifficulty(diffe)}
                  >
                    {diffe}
                  </PlayButton>
                ))}
              </>
            )
          ) : (
            game_summary && <WelcomeText>Summary...</WelcomeText>
          )}
        </Content>
      </PopupContainer>
    </Background>
  );
}
