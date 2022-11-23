import { KeyboardStyle } from './KeyboardStyle';

interface IKeyboard {
	screen: string;
	setScreen: (value: string) => void;
}

export const Keyboard = ({ screen, setScreen }: IKeyboard) => {
	const keys = [
		['c', '()', '%', '/'],
		[7, 8, 9, 'x'],
		[4, 5, 6, '-'],
		[1, 2, 3, '+'],
		['+/-', 0, ',', '='],
	];

	const addKey = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const text = button.textContent as string;

		setScreen(screen + text);
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
