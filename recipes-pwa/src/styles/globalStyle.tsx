import { createGlobalStyle } from "styled-components";

export const global = {
  fontfamily: "sans-serif",
  colors: {
    font: "#c7c7c7",
    background01: " #161515",
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
    background-color: #cfcfcf;
    color: #cacaca;
  }
`;
