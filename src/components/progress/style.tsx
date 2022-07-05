import styled from 'styled-components';
import { colors } from '../../pages/globalStyle';

const ProgressStyle = styled.div`
  border-radius: 5px;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 2rem;

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
