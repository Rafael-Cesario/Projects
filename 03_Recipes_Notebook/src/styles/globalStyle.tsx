import { createGlobalStyle } from "styled-components";

export const global = {
  fontfamily: "sans-serif",
  colors: {
    font: "#dddddd",
    background01: " #303030",
    yellow: "#ffd000",
  },
};

export default createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

  body {
    background-color: #181818;
    color: white;
  }
`;
