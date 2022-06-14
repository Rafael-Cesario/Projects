import { createGlobalStyle } from "styled-components";

export const colors = {
	background: "#202020",
	black: "#101010",
	fontBlue: "#1780e1",
};

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {


    background-color: #202020;
		background: linear-gradient(180deg, #151515 0%, #101010 100%);
    color: #dddddd;


    font-family: "Roboto", 'Courier New', Courier, monospace;
  }

  .app {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  button {
		border: none;
		outline: none;

		font-family: "Roboto", sans-serif, "Courier New", Courier, monospace;
		font-weight: bold;
		font-style: italic;
		cursor: pointer;
		transition: 0.1s;
		border-radius: 5px;
		background-color: ${colors.background};
		color: ${colors.fontBlue};
		overflow: hidden;
		height: 2rem;
		display: flex;
		align-items: center;
		user-select: none;

		:active {
			transform: scale(0.95);
		}

		:hover {
			background-color: white;
		}

		.txt {
			padding: 20px;
			pointer-events: none;
		}

		.icon {
			background-color: ${colors.fontBlue};
			font-size: 1.2rem;
			color: white;
			padding: 10px;
			pointer-events: none;
		}
	}
`;
