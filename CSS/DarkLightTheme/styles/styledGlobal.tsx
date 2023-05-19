import { createGlobalStyle } from 'styled-components';
import { Theme } from './themeProvider';

export const StyledGlobal = createGlobalStyle<Theme>`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Courier New', Courier, monospace;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

`;
