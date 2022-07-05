import { createGlobalStyle } from 'styled-components';

export const colors = {
  body: {
    background: '#101010',
    font: '#e9e9e9',
  },
  background_blue: '#2775b4ae',
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
    margin: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: auto;
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
