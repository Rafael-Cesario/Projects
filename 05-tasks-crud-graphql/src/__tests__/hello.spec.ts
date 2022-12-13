import request from 'supertest';
import { describe, it, beforeAll, afterAll, expect } from 'vitest';
import { startServer } from '../server';
import { startDatabase } from '../database';
import { ApolloServer } from '@apollo/server';

describe('Hello Resolvers', () => {
	let url: string, server: ApolloServer;

	beforeAll(async () => {
		await startDatabase();
		({ url, server } = await startServer());
	});

	afterAll(async () => {
		await server?.stop();
	});

	it('Returns a string Hello World!', async () => {
		const queryData = {
			query: `#graphql
				query Hello {
					hello
				}
			`,
		};

		const response = await request(url).post('/').send(queryData);
		const hello = response.body.data?.hello;

		expect(hello).toBe('Hello world!');
	});
});
