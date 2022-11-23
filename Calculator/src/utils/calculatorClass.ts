import { Operations } from './operations';

export type TOperator = '+';

export class CalculatorClass {
	private value = 0;
	private operator: TOperator = '+';
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

	setOperator(operator: TOperator) {
		this.operator = operator;
	}

	result(a: number, b: number) {
		return this.operationsOBJ[this.operator](a, b);
	}
}
