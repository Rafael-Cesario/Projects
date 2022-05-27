import { createGlobalStyle } from "styled-components";

const Style = {
	fontFamily: "Roboto",
	blue: "#293c4e",
	plannerBackground: "#202020",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #101010;
    color: #dddddd;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 2rem;
  }
`;

export { GlobalStyle, Style };
