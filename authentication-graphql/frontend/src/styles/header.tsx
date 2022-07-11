import styled from 'styled-components';
import { styles } from './global';

const HeaderStyle = styled.div`
  grid-area: 1 / 2;
  justify-self: end;
  margin: 1rem;
  z-index: 2;

  .header-button {
    cursor: pointer;
    background-color: transparent;
    color: ${styles.MainFont};
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 0.1s;

    font-family: ${styles.fontFamily}, 'Courier New', Courier, monospace;
    font-weight: lighter;
    font-size: 1rem;

    margin-left: 1rem;
    padding: 5px 10px;

    :active {
      transform: scale(0.95);
    }

    :hover {
      border: 1px solid ${styles.MainBlue};
    }
  }
`;

export { HeaderStyle };
