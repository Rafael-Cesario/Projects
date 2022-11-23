import { IKeyboard } from '../components/keyboard/interface';

export const removeLastNumber = ({ screen, setScreen }: IKeyboard) => {
	setScreen(screen.substring(0, screen.length - 1));
};

export const cleanScreen = ({ setScreen }: Partial<IKeyboard>) => {};
