export class Verify {
	empty(fields: Record<string, string>) {
		const errorMessage = {};
		const entries = Object.entries(fields);

		entries.forEach(([key, value]) => {
			if (value) return;
			errorMessage[key] = 'Campo Obrigatorio';
		});

		return errorMessage;
	}

	email(email: string) {
		const hasSign = email.includes('@') ? true : '"@" Não encontrado';
		const endsWith = email.endsWith('.com') ? true : 'Seu email precisa terminar com ".com"';
		const startsWithText = email.search(/^[a-z]/) > -1 ? true : 'Seu email precisa iniciar com letras';
		const hasTextAfterSign = email.search(/@[a-z]/) > -1 ? true : 'Seu email precisa ter algo depois do @';

		const isValid = [hasSign, endsWith, startsWithText, hasTextAfterSign].filter((value) => typeof value === 'string');
		return isValid;
	}

	password(password: string) {
		return;
	}
}

export const verifyFields = (fields: Record<string, string>) => {
	const verify = new Verify();

	const emptyFields = verify.empty(fields);
	if (Object.keys(emptyFields).length) return emptyFields;

	const isEmailValid = verify.email(fields.email);
	if (isEmailValid.length) return { email: isEmailValid[0] };

	const isPasswordValid = verify.password(fields.password);
	if (!isEmailValid) return { password: 'Sua senha não é forte o suficiente' };

	return false;
};
