import styled from 'styled-components';
import { colors } from '../../../styles/globalStyle';

const DaysStyle = styled.div`
  background-color: #b9b9b924;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  margin: 1px;
  border-radius: 1px;
  position: relative;

  :hover span {
    visibility: visible;
  }

  span {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    text-align: center;
    z-index: 1;
    padding: 0.5rem 1rem;
    background-color: ${colors.background_blue};
    border-radius: 5px;
    visibility: hidden;
    pointer-events: none;
    user-select: none;
    transform: rotateY(180deg) rotate(90deg) translate(-10px, -75px);

    ::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${colors.background_blue} transparent transparent transparent;
    }
  }
`;

export { DaysStyle };
