import styled from "styled-components"

const NavigationContainer = styled.ul`
    display: inline-block;
    justify-content: space-around;
    list-style: none;
    @media (max-width: 1000px) {
        margin: 2vh auto;
    }
    `

const Navlink = styled.li`
    display: inline-block;
    font-weight: normal;
    font-size: clamp(1.5rem, 2.5vw, 2rem); 
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    margin: auto 0 auto 6.5vw;
    &:hover {
        color: var(--white);
        border-bottom: 2px solid var(--font-color);
    }
    `

export default function Navigation(props) {
    return (
        <NavigationContainer>
            {props.children.map((child,i) => <Navlink key={i}>{child}</Navlink>)}
        </NavigationContainer>
    )
}