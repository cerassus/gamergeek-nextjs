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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 12.5%;
    background: ${props => !props.color ? `rgba(230, 63, 63, 0.85)` : `rgba(40, 170, 50, 0.85)`};
    border-radius: 50%;
    ${props => (props.status && props.big) && `
        animation: resizeBall 1s linear 0s infinite;
        animation-play-state: running;
    `};
    `

const MiddleBall = styled.div`
    width: 100%;
    height: 100%;
    animation: rolling 1s ease-in-out 0s infinite;
    animation-play-state: ${props => props.status ? `running` : `paused`};
    `
const Icon = styled.div`
    font-size: 3rem;
    font-weight: 600;
    &:last-child {
        font-size: 2rem;
    }
    `

export default function Logo({big, status = false, color = false, user_score}) {
    return (
        <LogoContainer big={big} >
            <BigBall big={big} >
                <MiddleBall status={status}>
                    <SmallBall big={big} color={color} status={status}>
                        <Icon>{big && user_score === 0 ? `Wrong` : user_score}</Icon>
                        <Icon>{big && user_score > 0 ? `points` : ``}</Icon>
                    </SmallBall>
                </MiddleBall>
            </BigBall>
        </LogoContainer>
    )
}