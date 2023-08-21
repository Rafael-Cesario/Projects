import * as styled from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = styled.createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Roboto Slab", "Courier New", Courier, monospace;
	}

	body {
		background-color: ${Theme.background};
		color: ${Theme.text};
	}
`;
