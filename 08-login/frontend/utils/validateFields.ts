type TypeValidade = 'email' | 'name' | 'password' | 'confirmPassword';

export const validateFields = (values: { [operationName: string]: { [field: string]: string } }, active: string) => {
	const validate = {
		email: () => {
			const { email } = values[active];

			if (!email.includes('@')) return ['email', 'Seu email não é valido. @ não encontrado'];

			const [user, domain] = email.split('@');
			if (!user) return ['email', 'A primeira parte do seu email esta vazia'];
			if (!domain) return ['email', 'A segunda parte do seu email esta vaiza'];
		},

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

		confirmPassword: () => {
			const { password, confirmPassword } = values[active];
			const areEqual = password === confirmPassword;
			if (!areEqual) return ['confirmPassword', 'Sua senha de confirmação precisa ser igual sua senha'];
		},
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
