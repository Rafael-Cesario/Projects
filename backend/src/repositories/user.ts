import { IUser, UserModel } from '../models/user';

interface IUserRepository {
	create(user: IUser): Promise<IUser>;
}

export class UserRepository implements IUserRepository {
	async create(user: IUser) {
		try {
			const newUser = new UserModel(user);
			await newUser.save();
			return newUser;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}
