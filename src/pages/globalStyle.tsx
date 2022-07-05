import { createGlobalStyle } from 'styled-components';

export const colors = {
  body: {
    background: '#101010',
    font: '#e9e9e9',
  },
  background_blue: '#205e91b0',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.body.background};
    color: ${colors.body.font};
    display: flex;
    justify-content: center;
    margin: 5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }


`;
