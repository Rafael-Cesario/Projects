import styled from 'styled-components';
import { palette } from './globalStyle';

export const TitleStyle = styled.div`
  margin: 5rem;
  margin-bottom: 2rem;
  text-align: center;

  .name {
    font-size: 1.5rem;
    margin-bottom: -1rem;
  }

  .role {
    font-size: 1.1rem;
    font-weight: normal;
    color: ${palette.mainWhite + '70'};
  }
`;
