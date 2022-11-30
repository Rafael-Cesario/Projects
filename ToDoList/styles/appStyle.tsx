import styled, { createGlobalStyle } from 'styled-components';

export const global = {
	red: '#8f2828',
	blue: '#245195',
	fontFamily: 'Work Sans',
};

export const GlobalStyle = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family:"Work Sans" ;
	  font-weight: bold;
	  

	::-webkit-scrollbar {
		background-color: #222
	}

	::-webkit-scrollbar-thumb {
		background-color: #333;
	}

	::-webkit-scrollbar-button {
		background-color: #222;
	}

  }

body {
	background-color: #111;
	color: #ddd;
} 
`;

export const AppStyle = styled.div`
	margin: 4rem 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	button {
		outline: none;
		border: none;
		background-color: transparent;
		color: #dddddd;
		font-weight: bold;
		font-family: ${global.fontFamily};
		cursor: pointer;
	}

	.title {
		margin: 2rem 0;
		text-align: center;

		h1 {
			margin: 0;
		}

		p {
			margin: 0;
			opacity: 60%;
		}
	}
`;
