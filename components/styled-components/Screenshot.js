import styled from "styled-components"
import Logo from "./Logo"

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
    & > img {
        width: 97%;
        transform: translate(1.5%, 2%);
        margin: auto;
        //position: absolute;
        position: relative;
        border-radius: 3px;
        transition: all .3s;
        z-index: 0;
        min-width: 97%;
        max-height: 420px;
        &:first-child {
            left: 0%;
        }
        &:nth-child(2) {
            left: -97%;
        }
        &:last-child {
            left: -194%;
        }
        ${props => (
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
            &:last-child {
                z-index: 10;
                opacity: 1;
            }
            &:not(:last-child) {
                z-index: 0;
                opacity: 0;
            }
            `
        )}
    }
    `

export default function Screenshot({src, index, game_status}) { 
    return (
        <ScreenshotContainer index={index}>
            {(game_status && src) ? 
            src.map((img,i) => <img key={i} src={img} alt="screenshot_img" /> ) : 
            <Logo big />   
            }
        </ScreenshotContainer>
    )
}