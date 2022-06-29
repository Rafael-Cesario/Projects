export const inputError = (input: HTMLInputElement, errorMessage: string, value?: string) => {
	const oldValue = value || input.value;

	input.classList.add("error");
	input.value = errorMessage;

	setTimeout(() => {
		input.classList.remove("error");
		input.value = oldValue;
	}, 5000);
};
