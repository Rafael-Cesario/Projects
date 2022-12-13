import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { startServer } from '../server';
import { startDatabase } from '../database';
import { ApolloServer } from '@apollo/server';
import { connection } from 'mongoose';
import { TypeUser } from '../schemas/types/userType';

describe('User Resolvers', () => {
	let url: string, server: ApolloServer;

	beforeAll(async () => {
		await startDatabase();
		({ url, server } = await startServer(3000));
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
		await server.stop();
	});

	const user = {
		name: 'Name',
		email: 'Email@email.com',
		password: 'password',
	};

	describe('Create user', () => {
		const createUserQuery = async (user: TypeUser) => {
			const queryData = {
				variables: { user },
				query: `#graphql
                mutation CreateUser ($user:userInput!) {
                    createUser (user: $user) {
                        message
                    }
                }`,
			};

			const response = await request(url).post('/').send(queryData);
			return response.body;
		};

		it('Creates a new user', async () => {
			const queryResponse = await createUserQuery(user);
			expect(queryResponse.data.createUser.message).toBe('A new User was created');
		});

		it('Throw a error when a value is empty', async () => {
			const queryResponse = await createUserQuery({ name: '', email: '', password: '' });
			const message = 'Error: email is missing, password is missing, name is missing';
			expect(queryResponse.errors[0].message).toBe(message);
		});

		it(`Can't create duplicate user`, async () => {
			const queryResponse = await createUserQuery(user);
			expect(queryResponse.errors[0].message).toBe('Error: This email is already in use');
		});
	});
});
