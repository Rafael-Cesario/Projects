export class Verify {
	empty(entries: [string, string | null][]) {
		const errorMessage = {};

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
}

export const verifyFields = (fields: Record<string, string>) => {
	const verify = new Verify();
	const entries = Object.entries(fields);

	const emptyFields = verify.empty(entries);
	if (Object.keys(emptyFields).length) return emptyFields;

	const isEmailValid = verify.email(fields.email);
	if (isEmailValid.length) return { email: isEmailValid[0] };

	return false;
};
