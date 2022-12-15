import { UserModel } from '../models/userModel';
import { UserType } from '../schemas/types/userType';

type Response = Promise<{ message: string; error: any }>;

interface UserRepositoryInterface {
	createUser: (user: UserType) => Response;
}

class UserRepository implements UserRepositoryInterface {
	async createUser(user: UserType) {
		try {
			await UserModel.create({ ...user });
			return { message: 'New User created', error: '' };
		} catch (error) {
			return { message: '', error: error };
		}
	}
}

export const userRepository = new UserRepository();
