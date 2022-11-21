import styled, { createGlobalStyle } from 'styled-components';

export const styles = {
  fontFamily: 'Ibarra Real Nova',
  MainFont: '#dddddd',
  sideBackground: '#151515',
  BodyBackground: '#101010',
  MainBlue: '#2c619e',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   
  body {
    color: ${styles.MainFont};
    background-color: ${styles.BodyBackground};
    font-family: ${styles.fontFamily},'Courier New', Courier, monospace;       
  } 
`;

export const AppStyle = styled.div`
  display: grid;
  min-height: 100vh;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
`;

export default GlobalStyle;
