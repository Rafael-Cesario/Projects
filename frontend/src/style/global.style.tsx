import { createGlobalStyle } from 'styled-components';

export const palette = {
	bodyColor: '#101010',
	mainWhite: '#EEEEEE',
	mainBlue: '#293341',
	titleFont: 'Oswald',
	bodyFont: 'Inconsolata',
	boxShadow: '5px 5px 10px #6b6b6b22',
};

export const GlobalStyle = createGlobalStyle`
	* { margin : 0; padding : 0; box-sizing: border-box;}

	body {
		background-color: ${palette.bodyColor};
		color: ${palette.mainWhite};
		font-family:${palette.bodyFont};
		font-weight: lighter;

	}
`;
