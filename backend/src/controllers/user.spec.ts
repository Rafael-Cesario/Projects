import { connection, Model, model, models } from 'mongoose';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mongoDBConnect } from '../database';
import { IUser, UserSchema } from '../models/user';

describe('UserController', () => {
	const UserModel = models.User || model<IUser>('User', UserSchema);

	beforeAll(() => {
		mongoDBConnect();
	});

	afterAll(() => {
		connection.dropDatabase();
	});

	it('returns a user with encrypted password', async () => {
		const userOBJ = { email: 'teste@teste.com', name: 'teste', password: 'teste123' };
		const newUser = new UserModel(userOBJ);
		const user = await newUser.save();

		expect(user.email).toBe('teste@teste.com');
		expect(user.password).not.toBe('teste123');
	});

	it.todo('throw a error, empty email, name, password');
	it.todo('throw a error, email is duplicated');
});
