export interface IKeyboard {
	props: {
		screen: string;
		setScreen: (value: string) => void;

		preview: string;
		setPreview: (value: string) => void;
	};
}
