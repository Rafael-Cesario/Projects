import { KeyboardStyle } from './KeyboardStyle';

export const Keyboard = () => {
	const keys = [
		['c', '()', '%', '/'],
		[7, 8, 9, 'x'],
		[4, 5, 6, '-'],
		[1, 2, 3, '+'],
		['+/-', 0, ',', '='],
	];

	return (
		<KeyboardStyle>
			{keys.map((row) =>
				row.map((key, index) => {
					let newClass = 'keyboard-keys';
					if (typeof key === 'string') newClass += ' operators';

					return (
						<button className={newClass} key={index}>
							{key}
						</button>
					);
				})
			)}
		</KeyboardStyle>
	);
};
