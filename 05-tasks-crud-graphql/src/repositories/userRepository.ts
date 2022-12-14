import { UserModel } from '../models/userModel';
import { TypeUser } from '../schemas/types/userType';

interface InterfaceUserRepository {
	createUser: (userData: TypeUser) => Promise<Boolean | string>;
	getUser: (email: string) => Promise<TypeUser | string>;
	updateUser: (email: string, newUser: TypeUser) => Promise<{ user: TypeUser } | { error: string }>;
	deleteUser: (email: string) => Promise<undefined | string>;
}

const handleError = (error: any) => {
	if (error.code === 11000) return 'This email is already in use';
	return error.message;
};

class UserRepository implements InterfaceUserRepository {
	constructor(private userModel = UserModel) {}

	async createUser(userData: TypeUser) {
		try {
			const user = await this.userModel.create(userData);
			return false;
		} catch (error) {
			return handleError(error);
		}
	}

	async getUser(email: string) {
		try {
			const user = await this.userModel.findOne({ email });
			return user;
		} catch (error) {
			return handleError(error);
		}
	}

	async updateUser(email: string, newUser: TypeUser) {
		try {
			const user = (await this.userModel.findOneAndUpdate({ email }, { ...newUser }, { new: true })) as TypeUser;
			return { user };
		} catch (error) {
			return { error: handleError(error) };
		}
	}

	async deleteUser(email: string) {
		try {
			const user = await this.userModel.findOneAndDelete({ email });
			if (!user) throw new Error('User not found');
		} catch (error) {
			return handleError(error);
		}
	}
}

export const userRepository = new UserRepository();
