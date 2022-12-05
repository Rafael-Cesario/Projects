import { Model } from 'mongoose';
import { describe, it, expect } from 'vitest';
import { IUser } from '../interface/userSchemaInterface';
import { UserRepository } from './userRepository';

class DummyModel {
	async create(user: IUser) {
		if (!user.email) throw new Error('User validation failed: email: Path `email` is required.');
		return false;
	}
}

const dummyModel = new DummyModel();
const userRepository = new UserRepository(dummyModel as unknown as Model<IUser>);

describe('User Repository', () => {
	const user = {
		email: 'test@test.com',
		password: '1234',
		name: 'test',
		age: '20',
	};

	it(`Can't create user without email`, async () => {
		const { password, name, age } = user;
		const newUser = await userRepository.createUser({ password, name, age } as IUser);

		expect(newUser).toEqual('User validation failed: email: Path `email` is required.');
	});

	it('create a new user', async () => {
		const hasError = await userRepository.createUser(user);

		expect(hasError).toBe(false);
	});
});
