import { UserModel } from '../models/userModel';
import { TypeUser } from '../schemas/types/userType';

interface InterfaceUserRepository {
	createUser: (userData: TypeUser) => Promise<Boolean | string>;
	getUser: (email: string) => Promise<TypeUser>;
}

const handleError = (error: any) => {
	if (error.code === 11000) return 'This email is already in use';
	return error.message;
};

class UserRepository implements InterfaceUserRepository {
	constructor(private userModel = UserModel) {}

	async createUser(userData: TypeUser) {
		const user = await this.userModel.create(userData).catch(error => handleError(error));
		return false;
	}

	async getUser(email: string) {
		const user = await this.userModel.findOne({ email }).catch(error => handleError(error));
		return user;
	}
}

export const userRepository = new UserRepository();
