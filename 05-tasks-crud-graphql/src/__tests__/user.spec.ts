import { describe, expect, beforeAll, afterAll, test, afterEach } from 'vitest';
import { startServer } from '../server';
import { startDatabase } from '../database';
import { ApolloServer } from '@apollo/server';
import { connection } from 'mongoose';
import { UserQueries } from './utils/userQueries';
import { TypeUser } from '../schemas/types/userType';
import { UserModel } from '../models/userModel';

const user = {
	name: 'Name',
	email: 'Email@email.com',
	password: 'password',
};

describe('User Resolvers', () => {
	let url: string, server: ApolloServer, userQuery: UserQueries;

	beforeAll(async () => {
		await startDatabase();
		({ url, server } = await startServer(3000));
		userQuery = new UserQueries(url);
	});

	afterEach(async () => {
		await UserModel.deleteMany({});
	});

	afterAll(async () => {
		await connection.close();
		await server.stop();
	});

	describe('Create user', () => {
		test('Creates a new user', async () => {
			const queryResponse = await userQuery.createUser(user);
			expect(queryResponse.data.createUser.message).toBe('A new User was created');
		});

		test('Throw a error when a value is empty', async () => {
			const queryResponse = await userQuery.createUser({ name: '', email: '', password: '' });
			const message = 'Error: email is missing, password is missing, name is missing';
			expect(queryResponse.errors[0].message).toBe(message);
		});

		test(`Can't create duplicate user`, async () => {
			await userQuery.createUser(user);
			const queryResponse = await userQuery.createUser(user);
			expect(queryResponse.errors[0].message).toBe('Error: This email is already in use');
		});
	});

	describe('Get User', () => {
		test('Returns a user', async () => {
			await userQuery.createUser(user);
			const queryResponse = await userQuery.getUser(user.email);
			expect(queryResponse.data.getUser.message).toBe('');
			expect(queryResponse.data.getUser.user).toEqual({ ...user, email: user.email.toLowerCase() });
		});

		test('User not found', async () => {
			const queryResponse = await userQuery.getUser(`this email doesn't exist`);
			expect(queryResponse.data.getUser.message).toBe('User not found');
		});

		test('Throw a error', async () => {
			const queryResponse = await userQuery.getUser('');
			expect(queryResponse.errors[0].message).toBe('Error: email is missing');
		});
	});

	describe('Update User', () => {
		test('Returns the new User', async () => {
			await userQuery.createUser(user);
			const name = 'this is a new name';
			const queryResponse = await userQuery.updateUser(user.email, { name } as TypeUser);
			expect(queryResponse.data.updateUser.message).toBe('User updated');
			expect(queryResponse.data.updateUser.user).toEqual({ ...user, name, email: user.email.toLowerCase() });
		});

		test('Email is empty', async () => {
			const queryResponse = await userQuery.updateUser('', {} as TypeUser);
			const error = queryResponse.errors[0].message;
			expect(error).toBe('Error: A email is required to find an user');
		});

		test('OBJ newUser has no values', async () => {
			const queryResponse = await userQuery.updateUser(user.email, {} as TypeUser);
			const error = queryResponse.errors[0].message;
			expect(error).toBe(`Error: The newUser OBJ can't be empty`);
		});

		test('try to change email to an existed email', async () => {
			await userQuery.createUser(user);
			await userQuery.createUser({ ...user, email: 'test2@test.com' });
			const queryResponse = await userQuery.updateUser('test2@test.com', { email: user.email } as TypeUser);
			const error = queryResponse.errors[0].message;
			expect(error).toBe('Error: This email is already in use');
		});

		test('Try to change name to a big name', async () => {
			await userQuery.createUser(user);
			const name = 'this is a big name and it should not be permitted to use';
			const queryResponse = await userQuery.updateUser(user.email, { name } as TypeUser);
			const error = queryResponse.errors[0].message;
			expect(error).toBe('Error: Name can have in most 20 characters');
		});
	});

	describe('Delete User', () => {
		test('Delete a user', async () => {
			await userQuery.createUser(user);
			const email = user.email;
			const queryResponse = await userQuery.deleteUser(email);
			const message = queryResponse.data.deleteUser.message;
			expect(message).toBe(`${email} was deleted`);
		});

		test('Email is empty', async () => {
			const queryResponse = await userQuery.deleteUser('');
			const error = queryResponse.errors[0].message;
			expect(error).toBe('Error: A email is required to delete an user');
		});

		test('User not found', async () => {
			const queryResponse = await userQuery.deleteUser('test@test.com');
			const error = queryResponse.errors[0].message;
			expect(error).toBe('Error: User not found');
		});
	});
});
