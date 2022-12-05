import mongoose from 'mongoose';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { uri } from '../database';
import { IUser } from '../interface/userSchemaInterface';
import { UserRepository } from './userRepository';

const userRepository = new UserRepository();

describe('User Repository', () => {
	beforeAll(async () => {
		await mongoose.connect(uri);
	});

	afterAll(async () => {
		await mongoose.connection.dropDatabase();
		await mongoose.connection.close();
	});

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
