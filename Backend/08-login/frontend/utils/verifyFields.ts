export const verifyFields = (values: { [operationName: string]: { [field: string]: string } }, active: string) => {
	const emptyFields: string[] = [];
	const userInputs = Object.entries(values[active]);

	userInputs.forEach(([key, value]) => {
		value || emptyFields.push(key);
	});

	return emptyFields;
};
