import styled from 'styled-components';
import { colors } from '../../styles/globalStyle';

const YearStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;

  h1 {
    margin: 0 1rem;
    font-weight: bold;
    font-size: 1rem;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
    position: relative;
    transition: 0.3s ease;

    :hover .tooltip {
      visibility: visible;
    }

    .icon {
      font-size: 1rem;
      transform: translateY(3px);
      color: ${colors.background_blue};
    }

    .tooltip {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: absolute;
      text-align: center;
      z-index: 1;
      bottom: 120%;
      width: 8rem;
      left: -3.5rem;
      margin-right: 5rem;
      padding: 0.5rem 1rem;
      background-color: ${colors.background_blue};
      border-radius: 5px;
      visibility: hidden;

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
  }
`;

export { YearStyle };
