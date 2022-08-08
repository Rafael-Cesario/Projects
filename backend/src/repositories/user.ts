import UserModel, { IUser } from '../models/user';

interface IUserRepository {
	create(user: IUser): Promise<IUser>;
	findByEmail(email: string): Promise<IUser>;
}

class UserRepository implements IUserRepository {
	async create(user: IUser) {
		const newUser = await UserModel.create(user);
		return newUser;
	}

	async findByEmail(email: string): Promise<IUser> {
		const user = await UserModel.findOne({ email });
		return user!;
	}
}

export const userRepository = new UserRepository();
