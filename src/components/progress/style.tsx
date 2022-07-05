import styled from 'styled-components';
import { colors } from '../../pages/globalStyle';

const ProgressStyle = styled.div`
  height: 16rem;
  width: 80vw;
  border: 1px solid #ffffff29;
  border-radius: 5px;
  padding: 3rem;

  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: auto;

  .previous {
    visibility: hidden;
    pointer-events: none;
  }

  .active {
    background-color: ${colors.background_blue};
    opacity: 1;
  }

  ::-webkit-scrollbar {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.background_blue};
    border-radius: 5px;
    height: 1rem;
  }
`;

export { ProgressStyle };
