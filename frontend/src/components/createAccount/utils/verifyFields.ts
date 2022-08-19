class Verify {
	empty(entries: [string, string | null][]) {
		const errorMessage = [];
		entries.forEach(([key, value]) => value || errorMessage.push(key));
		return errorMessage;
	}

	email(email: string) {
		const hasSign = email.includes('@'); // verify if the email includes @
		const endsWith = email.endsWith('.com'); // verify if ends with .com
		const startsWithText = email.search(/^[a-z]/) > -1 ? true : false; // verify if starts with letters
		const hasTextAfterSign = email.search(/@[a-z]/) > -1 ? true : false; // verify if has text afeter the sign

		const isValid = [hasSign, endsWith, startsWithText, hasTextAfterSign].includes(false);
		return !isValid;
	}
}

export const verifyFields = (fields: Record<string, string>) => {
	const verify = new Verify();
	const entries = Object.entries(fields);

	const emptyFields = verify.empty(entries);
	const isEmailValid = verify.email(fields.email);

	if (emptyFields.length > 0) return emptyFields;
	if (!isEmailValid) return isEmailValid;

	return false;
};
