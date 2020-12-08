import styled from "styled-components"
import Logo from "./Logo"
import React from "react"

const ScreenshotContainer = styled.div`
    background-color: var(--black);
    width: calc(85% - 4rem);
    //height: 0;
    //padding-bottom: calc(47.75% - (0.5 * 4rem));
    padding-bottom: 2vw;
    border-radius: 5px;
    box-shadow: 0 0 25px #FFF;
    margin: 0 auto;
    display: flex;
    position: relative;
    & > div {
        margin: 8% auto;
    }
    `

const SingleScreenshot = styled.img`
        display: ${props => !props.status ? `block`: `none`};
        width: 97%;
        transform: translate(1.5%, 2%);
        margin: auto;
        position: relative;
        border-radius: 3px;
        transition: all .3s;
        z-index: 0;
        opacity: 0;
        min-width: 97%;
        max-height: 420px;
        &:first-child {
            left: 0%;
        }
        &:nth-child(2) {
            left: -97%;
        }
        &:nth-child(3) {
            left: -194%;
        }
        ${props => (
            !props.status && (
              props.index === 0 ? `
                &:first-child {
                    z-index: 10;
                    opacity: 1;
                }
                &:not(:first-child) {
                    z-index: 0;
                    opacity: 0;
                }
                ` : props.index === 1 ? `
                &:nth-child(2) {
                    z-index: 10;
                    opacity: 1;
                }
                &:not(:nth-child(2)) {
                    z-index: 0;
                    opacity: 0;
                }
                ` : `
                &:nth-child(3) {
                    z-index: 10;
                    opacity: 1;
                }
                &:not(:nth-child(3)) {
                    z-index: 0;
                    opacity: 0;
                }
                `  
            )
        )}
    `


export default function Screenshot({src, index, game_status, resumeGame, user_score}) { 
    const [loading, setLoading] = React.useState(0)
    React.useEffect(() => {
        if(loading >= 3) {
            setLoading(0)
            resumeGame()
       }   
    }, [loading])
    return (
        <ScreenshotContainer >
            {(game_status.isStarted && src) ? 
            <>
              {  src.map((img, i) => <SingleScreenshot key={i} src={img} alt="screenshot_img" onLoad={() => setLoading(loading+1)} status={game_status.isLoading} index={index}/>)   }
              {  game_status.isLoading && <Logo big status={game_status.isLoading} color={user_score.length !== 0 ? user_score[user_score.length-1].correct : false} user_score={user_score.length >0 ? user_score[user_score.length-1].score : ``} /> }
            </>
            : <Logo big status={game_status.isLoading} /> }
        </ScreenshotContainer>
    )
}