type TypeValidade = 'email' | 'name' | 'password' | 'confirmPassword';

export const validateFields = (values: { [operationName: string]: { [field: string]: string } }, active: string) => {
	const validate = {
		email: () => {},
		name: () => {
			const { name } = values[active];
			const nameTooBig = name.length > 20;

			if (nameTooBig) return ['name', 'Escolha um nome menor, maximo 20 dígitos'];
		},
		password: () => {},
		confirmPassword: () => {},
	};

	const invalidFields: string[][] = [];
	const userInputs = Object.keys(values[active]);

	userInputs.forEach(inputKey => {
		const hasInvalidField = validate[inputKey as TypeValidade]();
		if (hasInvalidField) invalidFields.push(hasInvalidField);
	});

	return invalidFields;
};
