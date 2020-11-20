import styled from "styled-components"
import React from "react"

const LogoContainer = styled.div`
    width: ${props => props.big ? `min(300px, 20vw)` : `50px`};
    height: ${props => props.big ? `min(300px, 20vw)` : `50px`};
    position: relative;
    `

const BigBall = styled.div`
    width: ${props => props.big ? `min(300px, 20vw)` : `50px`};
    height: ${props => props.big ? `min(300px, 20vw)` : `50px`};
    position: absolute;
    background: rgba(196, 196, 196, 0.5);
    border-radius: 50%;
    top: 8px;
    `
const SmallBall = styled.div`
    width: ${props => props.big ? `min(230px, 15vw)` : `33px`};
    height: ${props => props.big ? `min(230px, 15vw)` : `33px`};
    position: absolute;
    top: 0;
    left: 12.5%;
    background: rgba(230, 63, 63, 0.85);
    border-radius: 50%;

    `

const MiddleBall = styled.div`
    width: 100%;
    height: 100%;
    animation: rolling 1s ease-in-out 0s infinite;
    animation-play-state: ${props => props.status ? `running` : `paused`};
    `

export default function Logo({big}) {
    const [animation, setAnimation] = React.useState(false)
    return (
        <LogoContainer big={big}>
            <BigBall big={big} >
                <MiddleBall onClick={() => setAnimation(!animation)} status={animation}>
                    <SmallBall big={big} />
                </MiddleBall>
            </BigBall>
        </LogoContainer>
    )
}