import { connection, model, models } from 'mongoose';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { mongoDBConnect } from '../database';
import { IUser, UserSchema } from '../models/user';
import { Auth } from './auth';
import { User } from './user';

describe('Auth Controller', () => {
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

	it('login a user', async () => {
		await UserModel.create(newUser);

		const { token, user } = await Auth.login(newUser.email, newUser.password);

		expect(token.length).toBeGreaterThan(0);
		expect(user).toBeDefined();
	});

	it('Throw a error because email is invalid', async () => {
		try {
			await User.create(newUser);
			await Auth.login('', newUser.password);
			expect(true).toBe(false);
		} catch (error: any) {
			expect(error.message).toBe('Email Or Password Is Wrong!');
		}
	});
	it('Throw a error because password is invalid', async () => {
		try {
			await User.create(newUser);
			await Auth.login(newUser.email, '');
			expect(true).toBe(false);
		} catch (error: any) {
			expect(error.message).toBe('Email Or Password Is Wrong!');
		}
	});
});
