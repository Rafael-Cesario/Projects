import { useState } from 'react';
import { CalculatorClass } from '../../utils/calculatorClass';
import { Operator } from '../../utils/types';
import { IKeyboard } from './KeyboardInterface';
import { KeyboardStyle } from './KeyboardStyle';

export const Keyboard = ({ props }: IKeyboard) => {
	const { screen, setScreen, preview, setPreview } = props;
	const [operator, setOperator] = useState<Operator>('+');
	const [value, setValue] = useState(0);

	const Calculator = new CalculatorClass(screen, setScreen, preview, setPreview, operator, setOperator, value, setValue);

	const addKey = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const text = button.textContent as string;
		const isOperator = !!button.className.match(/operators/);

		if (!isOperator) return setScreen(screen + text);

		Calculator.next(text as Operator, Number(screen));
	};

	return (
		<KeyboardStyle>
			<button onClick={() => Calculator.removeLastDigit()} className='keyboard-keys'>
				c
			</button>
			<button onClick={() => Calculator.clearScreen()} className='keyboard-keys'>
				ca
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys operators'>
				%
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys operators'>
				/
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				7
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				8
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				9
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys operators'>
				x
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				4
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				5
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				6
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys operators'>
				-
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				1
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				2
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				3
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys operators'>
				+
			</button>
			<button onClick={() => Calculator.invert(Number(screen))} className='keyboard-keys operators'>
				+/-
			</button>
			<button onClick={(e) => addKey(e)} className='keyboard-keys'>
				0
			</button>
			<button onClick={() => Calculator.dot(Number(screen))} className='keyboard-keys operators'>
				,
			</button>
			<button onClick={() => Calculator.result(Number(screen))} className='keyboard-keys operators'>
				=
			</button>
		</KeyboardStyle>
	);
};
