import gql from 'graphql-tag';
import { describe, it, expect } from 'vitest';
import { server } from '../../server';

describe('Hello Resolvers', () => {
	it('Returns a string Hello World', async () => {
		type Response = { body: { singleResult: { data: { hello: string } } } };

		const query = gql`
			query Hello {
				hello
			}
		`;

		const variables = {};
		const response = (await server.executeOperation({ query, variables })) as Response;
		const hello = response.body.singleResult.data.hello;

		expect(hello).toBe('Hello world!');
	});
});
