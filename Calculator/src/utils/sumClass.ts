export class SumClass {
	private value: number = 0;

	plus(a: number, b: number) {
		if (!this.value) {
			this.value = a;
			return `${a} +`;
		}

		const sum = a + b;

		this.value = sum;
		return sum;
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
