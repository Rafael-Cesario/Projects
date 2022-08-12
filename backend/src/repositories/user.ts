import { Model, model, models } from 'mongoose';
import { IUser, UserSchema } from '../models/user';

interface IUserRepository {
	create(user: IUser): Promise<IUser>;
	findByEmail(email: string): Promise<IUser>;
}

export class UserRepository implements IUserRepository {
	constructor(private UserModel: Model<IUser>) {
		this.UserModel = UserModel || models.User || model<IUser>('User', UserSchema);
	}

	async create(user: IUser) {
		const newUser = await this.UserModel.create(user);
		return newUser;
	}

	async findByEmail(email: string): Promise<IUser> {
		const user = await this.UserModel.findOne({ email });
		return user!;
	}
}
