export type TypeThemeName = 'light' | 'dark';

export interface InterfaceTheme {
	theme: {
		background: string;
		color: string;
		secondary: string;
	};
}

export const theme = {
	light: {
		background: '#eee',
		secondary: '#ddd',
		color: '#111',
	},

	dark: {
		background: '#111',
		secondary: '#222',
		color: '#eee',
	},
};
