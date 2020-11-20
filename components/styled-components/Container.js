import styled from "styled-components"

const HeaderContainer = styled.header`
    display: flex;
    align-items: baseline;
    padding: 3vw;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
    `
const MainContainer = styled.main`
    width: min(120rem, 100%);
    margin: 0 auto;
    `

const StandardContainer = styled.div`
    ${props => props.type === "inline" && `
        &, & > * {
            display: inline-block;
        }
    `};
    ${props => props.width && `
        width: ${props.width}
    `};
    ${props => props.height && `
        height: ${props.height}
    `};
    ${props => props.flex && `
        display: flex;
        flex-direction: ${props.flex};
    `};
    ${props => props.leaderboard && `
        background: rgba(39, 39, 39, 0.67);
        box-shadow: 4px 4px 10px rgba(255,255,255,0.25);
        border-radius: 3px;
        border-bottom: 2px solid rgb(255 255 255 / 34%);
        border-right: 2px solid rgb(255 255 255 / 34%);
        border-left: 2px solid rgb(255 255 255 / 20%);
        border-top: 2px solid rgb(255 255 255 / 20%);
        padding: 3vw;
    `};
    ${props => props.help && `
        background: rgba(39, 39, 39, 0.55);
    `};
    ${props => props.type !== "inline" && `
        margin: 0 auto;
    `};
    `



export default function Container({type, ...rest}) {
    return (
        (type === "header" && <HeaderContainer {...rest} />) ||
        (type === "main" ? <MainContainer {...rest}/> : <StandardContainer type={type} {...rest}/>)
    )
}