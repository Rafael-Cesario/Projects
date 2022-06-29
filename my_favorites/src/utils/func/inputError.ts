export const inputError = (input: HTMLInputElement, errorMessage: string) => {
	const oldValue = input.value;

	input.classList.add("error");
	input.value = errorMessage;

	setTimeout(() => {
		input.classList.remove("error");
		input.value = oldValue;
	}, 5000);
};
