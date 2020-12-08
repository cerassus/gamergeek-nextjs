import styled from "styled-components";
import { useEffect, useState } from "react";
import Typography from "./Typography";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
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
export const TextInput = styled.input`
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
export const TextInputHint = styled.p`
  color: var(--light-red);
  font-size: 1.4rem;
  padding: 1rem 1rem 5rem;
  opacity: ${(props) => (props.visible ? `1` : `0`)};
`;
export const WelcomeText = styled.div`
  color: var(--white);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  text-align: ${(props) => (props.center ? `center` : `left`)};
  width: 100%;
  padding-bottom: 3rem;
`;
export const PlayButton = styled.a`
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
  ${props => props.summary && `
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
  `}
`;
export const TD = styled.td`
  padding: 0 1rem;
  &:last-child {
    font-weight: 800;
    color: var(--white);
  }
`
export const ScoreText = styled.div`
  padding: 0 1rem 1rem;
  font-weight: 400;
  font-size: 4.5rem;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
  color: var(--white);
  border-bottom: 2px solid var(--white);
  border-right: 2px solid var(--white);
  box-shadow: 5px 5px 0 var(--dark-grey);
  & span {
    font-size: 2rem;
  }
`


export function Popup({title, children, switch_popup, popupIsClosed}) {
  const [visibility, setVisibility] = useState(false);
  const handleClose = () => {
    setVisibility(false)
    popupIsClosed()
  }
  useEffect(() => {
    setVisibility(switch_popup)
  },[switch_popup])
  return (
    <Background visibility={visibility}>
      <PopupContainer>
        <TopBar>
          <Close onClick={handleClose}>&times;</Close>
          <Typography hint uppercase gamefont>
            {title}
          </Typography>
        </TopBar>
        <Content>
          {children}
        </Content>
      </PopupContainer>
    </Background>
  );
}





// {askUsername ? (
//   <>
//     <WelcomeText>
//       Let’s see how good you are! Starting from your name...
//     </WelcomeText>
//     <TextInput type="text" onChange={handleTyping} />
//     <TextInputHint visible={warning}>Wrong nickname</TextInputHint>
//     <PlayButton onClick={() => setAskUsername(false)}>
//       Let's Play!
//     </PlayButton>
//   </>
// ) : (
//   <>
//     <WelcomeText center>Set game difficulty...</WelcomeText>
//     {game_difficulty.map((diffe, i) => (
//       <PlayButton
//         key={"key0011" + i}
//         onClick={() => setDifficulty(diffe)}
//       >
//         {diffe}
//       </PlayButton>
//     ))}
//   </>
// )}