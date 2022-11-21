import styled from 'styled-components';
import { palette } from './globalStyle';

export const LevelBarStyle = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  width: 80vw;

  .level {
    background-color: ${palette.mainBlue};
    border-radius: ${palette.borderRadius};
    padding: 1rem 2rem;
    margin-bottom: 5rem;
  }

  .levelbar {
    background-color: ${palette.mainBlack};
    border-radius: ${palette.borderRadius};
    height: 20px;
    width: 100%;
    transition: 0.3ms ease-out;

    ::before {
      content: '';
      background-color: ${palette.mainBlue};
      position: absolute;
      width: calc(${(props) => props.width - 20}%);
      height: 20px;
      max-width: 80vw;
      border-radius: ${palette.borderRadius};
      transition: 0.3ms ease-out;
    }
  }
`;
