export const changeInputStyle = (inputId: string, message?: string) => {
	const input = document.getElementById(inputId) as HTMLInputElement;
	const label = input.previousSibling as HTMLLabelElement;
	const labelText = label.textContent;

	input.classList.add('border-red-500');
	label.classList.add('text-red-500');
	label.textContent = message ?? 'Este campo não pode ficar vazio';

	setTimeout(() => {
		input.classList.remove('border-red-500');
		label.classList.remove('text-red-500');
		label.textContent = labelText;
	}, 1000 * 5);
};
