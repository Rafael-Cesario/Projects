import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #202020;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
  }
`;

const Calculator = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 2px #00000020;

  .zero {
    grid-area: 5 / 1 / span 2 / span 2;
  }

  .func {
    background-color: #2c5483;
    color: white;
  }

  .c {
    background-color: #3d5c35;
  }

  .screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 200px;
    padding: 50px;
    background-color: #303030;
    text-align: right;

    span {
      opacity: 0.6;
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.5rem;
      height: 30px;
    }
  }

  .keyboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    button {
      height: 60px;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      padding: 10px;

      :hover {
        background-color: #151515;
        color: white;
      }
    }
  }
`;

export { Calculator, GlobalStyle };
