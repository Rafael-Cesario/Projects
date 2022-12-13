import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { startServer } from '../server';
import { startDatabase } from '../database';
import { ApolloServer } from '@apollo/server';
import { connection } from 'mongoose';
import { UserQueries } from './utils/userQueries';

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

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
		await server.stop();
	});

	describe('Create user', () => {
		it('Creates a new user', async () => {
			const queryResponse = await userQuery.createUser(user);
			expect(queryResponse.data.createUser.message).toBe('A new User was created');
		});

		it('Throw a error when a value is empty', async () => {
			const queryResponse = await userQuery.createUser({ name: '', email: '', password: '' });
			const message = 'Error: email is missing, password is missing, name is missing';
			expect(queryResponse.errors[0].message).toBe(message);
		});

		it(`Can't create duplicate user`, async () => {
			await userQuery.createUser(user);
			const queryResponse = await userQuery.createUser(user);
			expect(queryResponse.errors[0].message).toBe('Error: This email is already in use');
		});
	});

	describe('Get User', () => {
		it('Returns a user', async () => {
			const queryResponse = await userQuery.getUser(user.email);
			expect(queryResponse.data.getUser.message).toBe('');
			expect(queryResponse.data.getUser.user).toEqual({ ...user, email: user.email.toLowerCase() });
		});

		it('User not found', async () => {
			const queryResponse = await userQuery.getUser(`this email doesn't exist`);
			expect(queryResponse.data.getUser.message).toBe('User not found');
		});

		it('Throw a error', async () => {
			const queryResponse = await userQuery.getUser('');
			expect(queryResponse.errors[0].message).toBe('Error: email is missing');
		});
	});
});
