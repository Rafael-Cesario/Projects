import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';
import { IUserValidation } from '../interface/userValidationInterface';
import { UserRepository } from '../repository/userRepository';

export class UserValidation implements IUserValidation {
	constructor(private userRepository: IUserRepository = new UserRepository()) {}

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
		const user = await this.userRepository.findByEmail(email);
		return user ? true : false;
	}
}
