import { Operator, Preview, Screen, SetPreview, SetScreen } from './types';
import { Operations } from './operations';

export class CalculatorClass {
	constructor(
		private screen: Screen,
		private setScreen: SetScreen,
		private preview: Preview,
		private setPreview: SetPreview
	) {}

	private value = 0;
	private operator: Operator = '+';
	private operations = new Operations();

	private operationsOBJ = {
		'+': this.operations.plus,
	};

	setValue(value: number) {
		if (value) {
			value = this.result(this.value, value);
		}

		this.value = value;
	}

	setOperator(operator: Operator) {
		this.operator = operator;
	}

	result(a: number, b: number) {
		return this.operationsOBJ[this.operator](a, b);
	}

	removeLastDigit() {
		this.setScreen(this.screen.substring(0, this.screen.length - 1));
	}

	clearScreen() {
		this.setScreen('');
		this.setPreview('');
	}
}
