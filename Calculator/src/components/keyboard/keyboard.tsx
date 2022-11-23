import { CalculatorClass } from '../../utils/calculatorClass';
import { Operator } from '../../utils/types';
import { IKeyboard } from './KeyboardInterface';
import { KeyboardStyle } from './KeyboardStyle';

export const Keyboard = ({ props }: IKeyboard) => {
	const { screen, setScreen, preview, setPreview } = props;
	const Calculator = new CalculatorClass(screen, setScreen, preview, setPreview);

	const keys = [
		['%', '/'],
		[7, 8, 9, 'x'],
		[4, 5, 6, '-'],
		[1, 2, 3, '+'],
		['+/-', 0],
	];

	const addKey = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const text = button.textContent as string;
		const isOperator = !!button.className.match(/operators/);

		if (!isOperator) {
			setScreen(screen + text);
			return;
		}

		Calculator.setOperator(text as Operator);
	};

	return (
		<KeyboardStyle>
			<button onClick={() => Calculator.removeLastDigit()} className='keyboard-keys'>
				c
			</button>

			<button onClick={() => Calculator.clearScreen()} className='keyboard-keys'>
				ca
			</button>

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

			<button className='keyboard-keys operators'>,</button>
			<button className='keyboard-keys operators'>=</button>
		</KeyboardStyle>
	);
};
