import { UserType } from '../schemas/types/userType';

type Response = Promise<{ message: string; error: string }>;

interface UserRepositoryInterface {
	createUser: (user: UserType) => Response;
}

class UserRepository implements UserRepositoryInterface {
	async createUser(user: UserType) {
		return { message: 'New User created', error: '' };
	}
}

export const userRepository = new UserRepository();
