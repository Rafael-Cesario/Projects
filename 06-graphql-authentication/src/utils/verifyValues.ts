export const verifyValues = (OBJ: {}) => {
	const entries = Object.entries(OBJ);
	const errors: string[] = [];

	entries.forEach(([key, value]) => {
		value || errors.push(key + ' is empty');
	});

	return errors.join(', ');
};
