import { IUser } from '../interface/userInterface';

export class UserValidation {
	create(userData: IUser) {
		let error = [];
		let message = '';

		for (const [key, value] of Object.entries(userData)) {
			value || error.push(key);
		}

		if (error.length > 0) message = error.join(', ') + ' is required';
		return [message ? false : true, message];
	}
}
