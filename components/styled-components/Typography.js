import styled from "styled-components";

const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(3.8rem, 2.5vw, 4.8rem);
  margin: 0 4vw;
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: var(--white);
`;

const P = styled.p`
  color: var(--white);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  text-align: justify;
  padding: 3vw;
`;

const HintText = styled.div`
  font-family: Montserrat;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: 0.05em;
`;

const SiteLink = styled.a`
  &,
  &:link,
  &:active,
  &:visited {
    position: relative;
    bottom: 0;
    transition: all .2s;
    /* ${(props) => !props.answer && `animation: fromAbove .2s 1;`} */
    animation: fromAbove .2s 1;
    font-weight: normal;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    letter-spacing: 0.05em;
    text-align: center;
    line-height: clamp(1.7rem, 2.5vw, 2.2rem);
    max-width: 20%;
    ${(props) => props.link && `text-transform: uppercase`};
    border-bottom: 2px solid transparent;
    ${(props) =>
      props.answer &&
      `
            font-family: Montserrat; 
            font-size: clamp(1.2rem, 2.5vw, 1.6rem); 
            `};
  }
  &:hover {
    color: var(--white);
    border-bottom: 2px solid var(--font-color);
    cursor: pointer;
  }
`;

export default function Typography(props) {
  return (
    (props.h1 && <H1>{props.children}</H1>) ||
    (props.h2 && <H2>{props.children}</H2>) ||
    (props.p && <P>{props.children}</P>) ||
    (props.hint && <HintText>{props.children}</HintText>) ||
    (props.answer && <SiteLink {...props}>{props.children}</SiteLink>) ||
    (props.link ? <SiteLink {...props}>{props.children}</SiteLink> : <div />)
  );
}
