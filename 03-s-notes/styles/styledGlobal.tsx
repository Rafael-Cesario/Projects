import { createGlobalStyle } from 'styled-components';
import { InterfaceTheme } from './styledTheme';

export const StyledGlobal = createGlobalStyle<InterfaceTheme>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Work Sans", 'Courier New', Courier, monospace ;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        margin: 2rem 5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    
   .title {
    text-align: center;
   } 
`;
