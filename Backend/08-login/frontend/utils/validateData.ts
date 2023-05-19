import { changeInputStyle } from './changeInputStyle';
import { validateFields } from './validateFields';
import { verifyFields } from './verifyFields';

export type TypeValues = { [operationName: string]: { [field: string]: string } };

export const validateData = (values: TypeValues, active: string) => {
	const emptyFields = verifyFields(values, active);

	if (emptyFields.length) {
		emptyFields.forEach(field => changeInputStyle(field));
		return true;
	}

	if (active === 'Criar conta') {
		const notValidFields = validateFields(values, active);

		if (notValidFields.length) {
			notValidFields.forEach(([inputId, message]) => changeInputStyle(inputId, message));
			return true;
		}
	}
};
