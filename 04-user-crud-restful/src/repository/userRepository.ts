import { Model } from 'mongoose';
import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';
import { UserModel } from '../schema/userSchema';

export class UserRepository implements IUserRepository {
	constructor(private userModel: Model<IUser> = UserModel) {}

	async createUser(user: IUser) {
		try {
			await this.userModel.create(user);
			return false;
		} catch (error: any) {
			return error.message;
		}
	}

	async findByEmail(email: string) {
		try {
			const user = await this.userModel.findOne({ email });
			return user;
		} catch (error: any) {
			return error.message;
		}
	}
}
