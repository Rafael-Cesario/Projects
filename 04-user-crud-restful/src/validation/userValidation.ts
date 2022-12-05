import { IUser } from '../interface/userSchemaInterface';
import { IUserValidation } from '../interface/userValidationInterface';
import { UserModel } from '../schema/userSchema';

export class UserValidation implements IUserValidation {
	data(userData: IUser) {
		let error = [];
		let message = '';

		for (const [key, value] of Object.entries(userData)) {
			value || error.push(key);
		}

		if (error.length > 0) message = error.join(', ') + ' is required';

		const hasError = message ? false : true;
		return [hasError, message];
	}

	async duplicate(email: string) {
		const user = await UserModel.findOne({ email });
		if (user) return true;
		return false;
	}
}
