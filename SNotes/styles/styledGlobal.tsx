import { createGlobalStyle } from 'styled-components';
import { InterfaceTheme } from './styledTheme';


export const StyledGlobal = createGlobalStyle<InterfaceTheme>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color}
    }
`;
