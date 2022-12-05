import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';
import { UserModel } from '../schema/userSchema';

export class UserRepository implements IUserRepository {
	async createUser(user: IUser) {
		try {
			await UserModel.create(user);
			return false;
		} catch (error: any) {
			return error.message;
		}
	}
}
