import { UserModel } from '../models/userModel';
import { CreateUserArgs } from '../types/userType';

class UserService {
	async createUser({ user }: CreateUserArgs) {
		await UserModel.create(user);
		return { response: 'teste' };
	}
}

export const userService = new UserService();