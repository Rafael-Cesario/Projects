export const changeInputStyle = (emptyFields: string[]) => {
	emptyFields.forEach(inputId => {
		const input = document.getElementById(inputId) as HTMLInputElement;

		input.classList.toggle('border-red-500');

		setTimeout(() => {
			input.classList.toggle('border-red-500');
		}, 5000);
	});
};
