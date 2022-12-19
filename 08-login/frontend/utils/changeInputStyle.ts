export const changeInputStyle = (emptyFields: string[]) => {
	emptyFields.forEach(inputId => {
		const input = document.getElementById(inputId) as HTMLInputElement;
		const label = input.previousSibling as HTMLLabelElement;
		const labelText = label.textContent;

		input.classList.toggle('border-red-500');
		label.textContent = 'Este campo não pode ficar vazio';
		label.classList.add('text-red-500');

		setTimeout(() => {
			input.classList.toggle('border-red-500');
			label.classList.remove('text-red-500');
			label.textContent = labelText;
		}, 5000);
	});
};
