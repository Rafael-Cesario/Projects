export const verifyEmptyValues = (values: object) => {
	const entries = Object.entries(values);
	const emptyValues: string[] = [];

	entries.forEach(([key, value]) => {
		if (!value) emptyValues.push(`${key} is empty`);
	});

	return emptyValues.join(", ");
};
