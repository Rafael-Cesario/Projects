import { connection, model, models } from 'mongoose';
import { afterAll, beforeAll, expect, describe, it, afterEach } from 'vitest';
import { mongoDBConnect } from '../../database';
import { IUser, UserSchema } from '../../models/user';
import { userRepository } from '../user';

describe('UserRepository', () => {
	const UserModel = models.User || model<IUser>('User', UserSchema);
	const newUser = { email: 'teste@teste.com', name: 'Teste', password: 'teste123' };
	beforeAll(() => {
		mongoDBConnect();
	});

	afterAll(() => {
		connection.dropDatabase();
	});

	afterEach(async () => {
		await UserModel.deleteMany({});
	});

	it('Create a new user', async () => {
		const user = await userRepository.create(newUser);
		expect(user._id).toBeDefined();
		expect(user.password).not.toBe(newUser.password);
	});

	it('Find a user by email', async () => {
		await userRepository.create(newUser);
		const user = await userRepository.findByEmail(newUser.email);
		expect(user.email).toBe(newUser.email);
	});
});
