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
		const length = password.length >= 10 ? true : 'Sua senha é curta, mínimo 10 caracteres';
		const hasUpperLetter = password.search(/[A-Z]/) > -1 ? true : 'Sua senha deve conter ao menos 1 letra maiúscula';
		const hasLowerLetter = password.search(/[a-z]/) > -1 ? true : 'Sua senha deve conter ao menos 1 letra minúscula';
		const hasNumberOrSign = password.search(/[0-9]/) > -1 ? true : 'Sua senha deve conter ao menos um número';
		const hasSign = password.search(/[!@#$%&*_+=-]/) > -1 ? true : 'Sua senha deve conter ao menos um símbolo';

		const errors = [length, hasLowerLetter, hasUpperLetter, hasNumberOrSign, hasSign].filter(
			(value) => typeof value === 'string'
		);

		return errors;
	}

	confirmPassword(password: string, confirmPassword: string) {
		return password === confirmPassword;
	}
}

export const verifyFields = (fields: Record<string, string>) => {
	const verify = new Verify();

	const hasEmptyFields = verify.empty(fields);
	if (Object.keys(hasEmptyFields).length) return hasEmptyFields;

	const isEmailValid = verify.email(fields.email);
	if (isEmailValid.length) return { email: isEmailValid[0] };

	const isPasswordValid = verify.password(fields.password);
	if (isPasswordValid.length) return { password: isPasswordValid[0] };

	const isConfirmPasswordRight = verify.confirmPassword(fields.password, fields.confirmPassword);
	if (!isConfirmPasswordRight) return { confirmPassword: 'Suas Senhas não estão iguais' };

	return false;
};
