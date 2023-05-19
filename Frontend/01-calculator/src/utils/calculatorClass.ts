import { SetOperator, SetValue, Preview, Screen, SetPreview, SetScreen, Operator } from './types';
import { Operations } from './operations';

export class CalculatorClass {
	constructor(
		private screen: Screen,
		private setScreen: SetScreen,
		private preview: Preview,
		private setPreview: SetPreview,
		private operator: Operator,
		private setOperator: SetOperator,
		private value: number,
		private setValue: SetValue
	) {}

	private operations = new Operations();
	private operationsOBJ = {
		'+': this.operations.plus,
		'-': this.operations.minus,
		'/': this.operations.divided,
		'x': this.operations.times,
		'%': this.operations.percent,
		'+/-': this.operations.invert,
	};

	removeLastDigit() {
		this.setScreen(this.screen.substring(0, this.screen.length - 1));
	}

	clearScreen() {
		this.setScreen('');
		this.setPreview('');
	}

	next(operator: Operator, screenValue: number) {
		let result = screenValue;

		if (!screenValue) return;
		if (this.value) result = this.calculateSum(this.value, screenValue);

		this.setScreen('');
		this.setValue(result);
		this.setOperator(operator);
		this.setPreview(`${result} ${operator}`);
	}

	result(screenValue: number) {
		const result = this.calculateSum(this.value, screenValue);

		this.setScreen(String(result));
		this.setPreview('');
		this.setValue(0);
	}

	invert(screenValue: number) {
		const result = this.operationsOBJ['+/-'](screenValue);
		this.setScreen(String(result));
	}

	dot(screenValue: number) {
		this.setScreen(String(screenValue + '.'));
	}

	calculateSum(a: number, b: number) {
		return this.operationsOBJ[this.operator](a, b);
	}
}
