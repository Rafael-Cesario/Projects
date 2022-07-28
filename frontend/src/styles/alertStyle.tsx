import styled from 'styled-components';
import { palette } from './globalStyle';

export const AlertStyle = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: ${palette.mainBlue};
  padding: 5px 25px;
  font-size: 0.7rem;
  border-radius: ${palette.borderRadius};
  box-shadow: 5px 5px 20px #20202050;
`;
