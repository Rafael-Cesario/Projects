export type TypeThemeName = 'light' | 'dark';

export interface InterfaceTheme {
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
