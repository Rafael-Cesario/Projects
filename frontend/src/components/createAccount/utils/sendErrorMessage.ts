export const sendErrorMessage = (invalidFields: string[]) => {
	invalidFields.forEach((field) => {
		const input = document.getElementById(field) as HTMLInputElement;
		const [span] = input.labels;
		const spanValue = span.textContent;

		span.textContent = 'Este campo é obrigatorio.';
		input.classList.toggle('error');

		setTimeout(() => {
			input.classList.toggle('error');
			span.textContent = spanValue;
		}, 2000);
	});

	return;
};
