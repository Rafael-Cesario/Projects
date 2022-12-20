import { CreateUserArgs } from '../types/userType';

class UserService {
	createUser({ user }: CreateUserArgs) {
		console.log({ user });
		return { response: 'teste' };
	}
}

export const userService = new UserService();
