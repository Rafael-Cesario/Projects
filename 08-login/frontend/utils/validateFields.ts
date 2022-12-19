type TypeValidade = 'email' | 'name' | 'password' | 'confirmPassword';

export const validateFields = (values: { [operationName: string]: { [field: string]: string } }, active: string) => {
	const validate = {
		email: () => {},

		name: () => {
			const { name } = values[active];
			const nameTooBig = name.length > 20;

			if (nameTooBig) return ['name', 'Escolha um nome menor, maximo 20 dígitos'];
		},

		password: () => {
			const { password } = values[active];

			const hasUpperCaseLetter = password.match(/[A-Z]/);
			const hasLowerCaseLetter = password.match(/[a-z]/);

			if (!hasLowerCaseLetter || !hasUpperCaseLetter) {
				return ['password', 'Sua senha precisa ter no mínimo 1 letra maiuscula e 1 letra minuscula'];
			}

			const tooShort = password.length < 10;
			if (tooShort) return ['password', 'Sua senha é muito curta, mínimo de 10 dígitos'];
		},

		confirmPassword: () => {},
	};

	const invalidFields: string[][] = [];
	const userInputs = Object.keys(values[active]);

	userInputs.forEach(inputKey => {
		const hasInvalidField = validate[inputKey as TypeValidade]();
		if (hasInvalidField) invalidFields.push(hasInvalidField);
	});

	console.log({ invalidFields });
	return invalidFields;
};
