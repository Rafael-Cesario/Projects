import { IUser } from '../../models/user';
import crypto from 'crypto';
import { Model } from 'mongoose';

export class UserModelMock {
	private users: IUser[] = [];

	create(user: IUser) {
		user._id = crypto.randomUUID();
		this.users.push(user);
		return user;
	}

	findOne({ email }: { email: string }) {
		return this.users.find((user) => user.email === email);
	}

	deleteMany() {
		this.users = [];
	}
}
