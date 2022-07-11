import styled from 'styled-components';
import { styles } from './global';

export const LoginFormStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000067;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    background-color: transparent;
    color: ${styles.MainFont};
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 0.1s;
    padding: 10px 20px;

    font-family: ${styles.fontFamily}, 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 1rem;

    :active {
      transform: scale(0.95);
    }
  }

  .container {
    background-color: ${styles.sideBackground};
    box-shadow: 5px 5px 5px #00000067;
    padding: 1rem;
    border-radius: 5px;

    .header {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
    }

    form {
      margin: 1rem;

      .fields {
        margin: 2rem 0;

        .field {
          display: flex;
          flex-direction: column;
          margin: 1rem 0;

          span {
            font-weight: lighter;
            margin: 5px;
          }

          input {
            background-color: ${styles.MainBlue + '40'};
            color: ${styles.MainFont};
            border-radius: 5px;
            outline: none;
            border: 1px solid transparent;
            padding: 5px 10px;
            transition: 0.5s;

            :focus {
              background-color: ${styles.MainBlue + 'aa'};
            }
          }

          .error {
            background-color: crimson;
          }
        }
      }

      .login-button {
        width: 100%;
        border: 1px solid white;
        margin: 1rem 0;
      }
    }
  }
`;
