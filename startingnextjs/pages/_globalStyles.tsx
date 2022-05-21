import styled, { createGlobalStyle } from "styled-components";

// Just some test.

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    background-color: #181818;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    width: 100vw;
  }
`;

export const Title = styled.h1`
	color: #ffffff;
	font-weight: bold;
	padding: 20px 0;
	border: 2px solid #303030;
	border-radius: 4px;
	padding: 10px;
	text-align: center;
	box-shadow: 5px 5px 5px #00000020;
`;

export const Paragraph = styled.p`
	color: #dbdbdb;
	padding: 10px 0;
`;
export const Ps = styled.p`
	color: #636363;
	padding: 10px 0;
`;
