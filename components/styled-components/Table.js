import styled from "styled-components";

const TableContainer = styled.div`
position: relative;
  ${(props) =>
    props.top &&
    `
        background: linear-gradient(0deg, rgba(80, 80, 80, 0.25) 15%, rgba(196, 196, 196, 0) 88%);
        height: 10rem;
        clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
        `}
  ${(props) =>
    props.bottom &&
    `
        background: linear-gradient(180deg, rgba(80, 80, 80, 0.25) 15%, rgba(196, 196, 196, 0) 88%);
        height: 12.5rem;
        `}
    ${(props) =>
    props.hint &&
    `
        position: absolute;
        bottom: 0;
        background: linear-gradient(0deg, rgba(94, 90, 0, 0.25) 15%, rgba(255, 255, 255, 0) 88%);
        height: 12.5rem;
        width: 100%;
        `}
    border-radius: 5px;
`

const TableNav = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    ${props => props.top && `bottom: 0`};
    ${props => props.bottom && `top: 25%; align-items: center;`};
    ${props => props.hint && `bottom: 33%`};
    `

export default function Table({ ...props }) {
  return (
    <TableContainer {...props}>
      <TableNav {...props}>
          {props.children}
      </TableNav>
    </TableContainer>
  );
}
