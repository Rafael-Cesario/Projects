import { userRepository } from '../repositories/userRepository';
import { CreateUserArgs } from '../types/userType';

class UserService {
	async createUser({ user }: CreateUserArgs) {
		await userRepository.createUser({ user });
		return { response: 'New User created' };
	}
}

export const userService = new UserService();
