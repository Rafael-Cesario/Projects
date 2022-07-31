import mongoose from 'mongoose';
import { IUser, User } from '../models/user';

export interface IUserRepository {
	createNew(userData: IUser): Promise<IUser>;
	findByEmail(email: string): Promise<IUser | null>;
	findAll(): Promise<IUser[]>;
	findOne(query: {}): Promise<IUser | null>;
	updateOne(
		user: mongoose.Document<unknown, IUser> & IUser & { _id: mongoose.Types.ObjectId },
		update: { email?: string; name?: string; password?: string }
	): Promise<void>;
	deleteOne(id: string): Promise<boolean>;
}

export class UserRepository implements IUserRepository {
	async findByEmail(email: string) {
		return await User.findOne({ email });
	}

	async createNew(userData: IUser) {
		const user = new User({ ...userData });
		await user.save();
		return user;
	}

	async findAll() {
		return await User.find({});
	}

	async findOne(query: {}) {
		return await User.findOne(query);
	}

	async updateOne(
		user: mongoose.Document<unknown, IUser> &
			IUser & {
				_id: mongoose.Types.ObjectId;
			},
		update: { email?: string; name?: string; password?: string }
	) {
		Object.entries(update).forEach((property) => {
			const [key, value] = property as ['name' | 'email' | 'password', string];
			user[key] = value;
		});

		await user.save();
	}

	async deleteOne(id: string) {
		const isDeleted = await User.deleteOne({ _id: id });
		if (!isDeleted.deletedCount) throw new Error('User not found');
		return true;
	}
}
