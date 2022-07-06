import styled from 'styled-components';
import { colors } from '../../styles/globalStyle';

const ProgressStyle = styled.div`
  position: absolute;
  border-radius: 5px;
  padding: 3rem;
  display: grid;
  margin: 0 2rem;
  grid-template-columns: repeat(7, 1fr);
  transform: rotateY(180deg) rotate(90deg) translate(-200%, -5%);

  .previous {
    visibility: hidden;
    pointer-events: none;
  }

  .active {
    background-color: ${colors.background_blue};
    opacity: 1;
  }
`;

export { ProgressStyle };
