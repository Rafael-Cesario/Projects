import { IKeyboard } from '../components/keyboard/KeyboardInterface';

type TScreen = string;
type TSetScreen = (value: string) => void;
type TSetPreview = (value: string) => void;

export const removeLastNumber = ({ screen, setScreen }: { screen: TScreen; setScreen: TSetScreen }) => {
	setScreen(screen.substring(0, screen.length - 1));
};

export const cleanScreen = (setScreen: (value: string) => void) => {
	setScreen('');
};

export const changeDisplay = (setScreen: TSetScreen, setPreview: TSetPreview, math: string) => {
	setScreen('');
	setPreview(math);
};
