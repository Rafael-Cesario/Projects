import { UserModel } from '../models/userModel';
import { TypeUser } from '../schemas/types/userType';

class UserRepository {
	constructor(private userModel = UserModel) {}

	async createUser(userData: TypeUser) {
		try {
			await this.userModel.create(userData);
			return false;
		} catch (error: any) {
			return error.message;
		}
	}
}

export const userRepository = new UserRepository();
