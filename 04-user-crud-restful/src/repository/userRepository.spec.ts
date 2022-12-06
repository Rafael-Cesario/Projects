import { connect, connection } from 'mongoose';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { uri } from '../database';
import { IUser } from '../interface/userSchemaInterface';
import { UserModel } from '../schema/userSchema';
import { UserRepository } from './userRepository';

const userRepository = new UserRepository(UserModel);

describe('User Repository', () => {
	beforeAll(async () => {
		await connect(uri);
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
	});

	const user = {
		email: 'test@test.com',
		password: '1234',
		name: 'test',
		age: '20',
	};

	describe('Create user', () => {
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

	describe('Find by email', () => {
		it('Returns a user', async () => {
			const response = await userRepository.findByEmail(user.email);

			expect(response).toHaveProperty('email', user.email);
		});

		it('Returns null', async () => {
			const response = await userRepository.findByEmail('There is a email here');

			expect(response).toBeNull();
		});
	});
});
