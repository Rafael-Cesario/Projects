export const changeInputStyle = (inputId: string, message?: string) => {
	const input = document.getElementById(inputId) as HTMLInputElement;
	const label = input.previousSibling as HTMLLabelElement;
	const labelText = label.textContent;

	input.style.borderColor = 'crimson';
	label.style.color = 'crimson';

	label.textContent = message ?? 'Este campo não pode ficar vazio';

	setTimeout(() => {
		input.style.borderColor = 'transparent';
		label.style.color = '';
		label.textContent = labelText;
	}, 2000);
};
