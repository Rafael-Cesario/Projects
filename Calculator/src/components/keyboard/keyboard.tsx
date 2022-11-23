import { changeDisplay, cleanScreen, removeLastNumber } from '../../utils/operations';
import { SumClass } from '../../utils/sumClass';
import { IKeyboard } from './KeyboardInterface';
import { KeyboardStyle } from './KeyboardStyle';

export const Keyboard = ({ props }: IKeyboard) => {
	const { screen, setScreen, preview, setPreview } = props;

	const Sum = new SumClass();
	const keys = [
		['c', 'ca', '%', '/'],
		[7, 8, 9, 'x'],
		[4, 5, 6, '-'],
		[1, 2, 3, '+'],
		['+/-', 0, ',', '='],
	];

	const addKey = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const text = button.textContent as string;

		switch (text) {
			case 'c':
				removeLastNumber({ screen, setScreen });
				break;

			case 'ca':
				cleanScreen(setScreen);
				break;

			case '+':
				const math = Sum.plus(Number(screen), 0);
				if (typeof math === 'string') changeDisplay(setScreen, setPreview, math);
				break;

			default:
				setScreen(screen + text);
		}
	};

	return (
		<KeyboardStyle>
			{keys.map((row) =>
				row.map((key, index) => {
					let newClass = 'keyboard-keys';
					if (typeof key === 'string') newClass += ' operators';

					return (
						<button onClick={(e) => addKey(e)} className={newClass} key={index}>
							{key}
						</button>
					);
				})
			)}
		</KeyboardStyle>
	);
};
