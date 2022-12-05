import { Model } from 'mongoose';
import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';

export class UserRepository implements IUserRepository {
	constructor(private userModel: Model<IUser>) {}

	async createUser(user: IUser) {
		try {
			await this.userModel.create(user);
			return false;
		} catch (error: any) {
			return error.message;
		}
	}
}
