import styled from 'styled-components';
import { palette } from './globalStyle';

export const TitleStyle = styled.div`
  margin: 5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    display: block;
    outline: none;
    border: none;
    background-color: transparent;
    color: ${palette.mainWhite};
    text-align: center;
    font-family: ${palette.fontFamily}, 'Courier New', Courier, monospace;
  }

  .name {
    font-size: 1.5rem;
    margin-bottom: -.5rem;
  }

  .skill {
    font-size: 1.1rem;
    font-weight: normal;
    color: ${palette.mainWhite + '70'};
  }
`;
