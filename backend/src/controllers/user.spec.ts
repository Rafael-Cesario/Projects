import { connection } from 'mongoose';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mongoDBConnect } from '../database';
import { IUser } from '../models/user';
import { User } from './user';

describe('UserController', () => {
	beforeAll(() => {
		mongoDBConnect();
	});

	afterAll(() => {
		connection.dropDatabase();
		connection.close();
	});

	it('returns a user with encrypted password', async () => {
		const userOBJ = { email: 'teste@teste.com', name: 'teste', password: 'teste123' };
		const user = await User.create(userOBJ);

		expect(user.email).toBe('teste@teste.com');
		expect(user.password).not.toBe('teste123');
	});

	it('throw a error, empty email, name, password', async () => {
		try {
			await User.create({} as IUser);
			expect(true).toBe(false);
		} catch (error: any) {
			expect(error.message).toBe('Email is required, Name is required, Password is required');
		}
	});

	it('throw a error, email is duplicated', async () => {
		try {
			const newUser = { email: 'teste2@teste.com', name: 'Teste', password: 'teste123' };
			await User.create(newUser);
			await User.create(newUser);

			expect(true).toBe(false);
		} catch (error: any) {
			expect(error.message).toBe('A user with this email already exist.');
		}
	});
});
