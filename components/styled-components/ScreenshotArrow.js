import styled from "styled-components"

const ArrowContainer = styled.div`
    position: relative;
    width: 4rem;
    display: ${props => props.game_is_started ? `block` : `none`};
    &:hover {
        cursor: pointer;
    }
    `
const Top = styled.div`
    height: 2px;
    width: 4rem;
    background-color: var(--font-color);
    position: absolute;
    top: 50%;
    ${props => props.left && (`
        transform: translateY(-800%) rotate(-56deg);
        `
    )}
    ${props => props.right && (`
        transform: translateY(-800%) rotate(56deg);
        `
    )}
    `
const Bottom = styled.div`
    height: 2px;
    width: 4rem;
    background-color: var(--font-color);
    position: absolute;
    top: 50%;
    ${props => props.left && (`
        transform: translateY(800%) rotate(56deg);
        `
    )}
    ${props => props.right && (`
        transform: translateY(800%) rotate(-56deg);
        `
    )}
    `

export default function ScreenshotArrow(props) {
    return (
        <ArrowContainer {...props}>
            <Top {...props} />
            <Bottom {...props} />
        </ArrowContainer>
    )
}