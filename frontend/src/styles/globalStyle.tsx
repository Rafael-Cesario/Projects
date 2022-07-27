import { createGlobalStyle } from 'styled-components';

export const palette = {
  fontFamily: 'Cairo',
  mainWhite: '#eeeeee',
  mainBlue: '#2e5a92',
  borderRadius: '5px',
  mainBlack: '#202020',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #101010;
    color: #eeeeee;
    font-family: ${palette.fontFamily};

    display: flex;
    justify-content: center;
  }
`;
