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
			{keys.map((row, index) => (
				<div key={index}>
					{row.map((key, index) => (
						<button key={index} className='keyboard-keys'>
							{key}
						</button>
					))}
				</div>
			))}
		</KeyboardStyle>
	);
};
