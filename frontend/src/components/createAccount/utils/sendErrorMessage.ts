export const sendErrorMessage = (invalidFields: Record<string, string>) => {
	Object.entries(invalidFields).forEach(([field, errorMessage]) => {
		const input = document.getElementById(field) as HTMLInputElement;
		const [span] = input.labels;
		const spanValue = span.textContent;

		span.textContent = errorMessage;
		input.classList.toggle('error');

		setTimeout(() => {
			input.classList.toggle('error');
			span.textContent = spanValue;
		}, 5000);
	});

	return;
};
