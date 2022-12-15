import { UserModel } from '../models/userModel';
import { UserType } from '../schemas/types/userType';
import { decryptPassword } from '../utils/encrypt';

type Response = Promise<{ message: string; error: any }>;

interface UserRepositoryInterface {
	createUser: (user: UserType) => Response;
	findByEmail: (email: string) => Promise<UserType>;
}

class UserRepository implements UserRepositoryInterface {
	async createUser(user: UserType) {
		try {
			await UserModel.create({ ...user });
			return { message: 'New User created', error: '' };
		} catch (error: any) {
			return { message: '', error: error.message };
		}
	}

	async findByEmail(email: string) {
		try {
			const user = UserModel.findOne({ email });
			return user;
		} catch (error: any) {
			return error.message;
		}
	}
}

export const userRepository = new UserRepository();
