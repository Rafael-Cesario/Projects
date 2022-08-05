import { IUser, UserModel } from '../models/user';

interface IUserRepository {
	create(user: IUser): Promise<IUser>;
	findByEmail(email: string): Promise<IUser>;
}

export class UserRepository implements IUserRepository {
	async create(user: IUser) {
		const newUser = new UserModel(user);
		await newUser.save();
		return newUser;
	}

	async findByEmail(email: string): Promise<IUser> {
		const user = await UserModel.findOne({ email });
		return user!;
	}
}
