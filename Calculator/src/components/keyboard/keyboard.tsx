import { CalculatorClass, TOperator } from '../../utils/calculatorClass';
import { IKeyboard } from './KeyboardInterface';
import { KeyboardStyle } from './KeyboardStyle';

export const Keyboard = ({ props }: IKeyboard) => {
	const { screen, setScreen, preview, setPreview } = props;

	const keys = [
		['c', 'ca', '%', '/'],
		[7, 8, 9, 'x'],
		[4, 5, 6, '-'],
		[1, 2, 3, '+'],
		['+/-', 0, ',', '='],
	];

	const Calculator = new CalculatorClass();

	const addKey = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const text = button.textContent as string;
		const isOperator = !!button.className.match(/operators/);

		if (!isOperator) {
			setScreen(screen + text);
			return;
		}

		handleOperator(text);
	};

	const handleOperator = (operator: string) => {
		const removeLastDigit = () => {
			setScreen(screen.substring(0, screen.length - 1));
		};

		const clearScreen = () => {
			setScreen('');
			setPreview('');
		};

		if (operator === 'c') return removeLastDigit();
		if (operator === 'ca') return clearScreen();

		Calculator.setOperator(operator as TOperator);
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
