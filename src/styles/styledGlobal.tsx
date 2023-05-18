import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inconsolata", 'Courier New', Courier, monospace;
    }

    body {
        background-color: #202020;
        color: #eee;
    }
`;
