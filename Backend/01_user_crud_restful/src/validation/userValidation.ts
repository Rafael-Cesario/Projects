import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';
import { IUserValidation } from '../interface/userValidationInterface';
import { UserRepository } from '../repository/userRepository';

export class UserValidation implements IUserValidation {
	constructor(private userRepository: IUserRepository = new UserRepository()) {}

	data(userData: IUser) {
		const error = [];
		const data = Object.entries(userData);

		for (const [key, value] of data) value || error.push(key);

		const hasError = error.length > 0;
		const message = hasError ? error.join(', ') + ' are required' : '';

		return [hasError, message];
	}

	async duplicate(email: string) {
		const user = await this.userRepository.findByEmail(email);
		return user ? true : false;
	}
}
