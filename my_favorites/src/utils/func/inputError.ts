const inputError = (input: HTMLInputElement, errorMessage: string, value: string) => {
	input.classList.add("error");
	input.value = errorMessage;

	setTimeout(() => {
		input.classList.remove("error");
		input.value = value;
	}, 5000);
};

export { inputError };
