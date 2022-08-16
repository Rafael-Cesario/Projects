import { createGlobalStyle } from 'styled-components';

export const palette = {
	titleFont: 'Oswald',
	bodyFont: 'Inconsolata',
	boxShadow: '5px 5px 10px #6b6b6b22',

	colors: {
		bodyColor: '#101010',
		mainWhite: '#EEEEEE',
		blueBG: '#1779C0',
		mainBG: '#1B1F24',
	},
};

export const GlobalStyle = createGlobalStyle`
	* { margin : 0; padding : 0; box-sizing: border-box;}

	body {
		background-color: ${palette.colors.bodyColor};
		color: ${palette.colors.mainWhite};
		font-family:${palette.bodyFont};
		font-weight: lighter;
	}
`;
