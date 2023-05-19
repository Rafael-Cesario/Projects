import styled from 'styled-components';

export interface Theme {
	theme: {
		background: string;
		color: string;
	};
}

export const theme = {
	light: {
		background: '#eee',
		color: '#111',
	},

	dark: {
		background: '#111',
		color: '#eee',
	},
};

export const ThemeProvider = styled.div<Theme>`
	display: flex;
	flex-direction: column;
	align-items: center;

	button {
		outline: none;
		border: 2px solid ${(props) => props.theme.color};
		padding: 1rem 2rem;
		border-radius: 5px;
		box-shadow: 5px 5px 5px #00000020;
		background-color: ${(props) => props.theme.color};
		color: ${(props) => props.theme.background};
		font-size: 1rem;
		font-weight: bold;
		margin: 2rem 0;
		cursor: pointer;
	}
`;
