const verify = (entries: [string, string | null][]) => {
	const errorMessage = [];
	entries.forEach(([key, value]) => value || errorMessage.push(key));
	return errorMessage;
};

export const verifyFields = (fields: Record<string, string>) => {
	const entries = Object.entries(fields);
	const emptyFields = verify(entries);

	return emptyFields.length > 0 ? emptyFields : false;
};
