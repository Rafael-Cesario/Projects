export class Sum {
	private value: number = 0;

	plus(a: number, b: number) {
		return a + b;
	}

	minus(a: number, b: number) {
		return a - b;
	}

	divided(a: number, b: number) {
		return a / b;
	}

	times(a: number, b: number) {
		return a * b;
	}

	invert(a: number) {
		return a * -1;
	}

	percent(a: number, b: number) {
		return (a * b) / 100;
	}
}
