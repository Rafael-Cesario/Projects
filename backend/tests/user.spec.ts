import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import axios from 'axios';
import { mongoDBConnect } from '../src/database';
import { connection } from 'mongoose';
import { app } from '../src/server';

describe('create user', () => {
	beforeAll(() => {
		mongoDBConnect();
		app.listen(5000);
	});

	afterAll(() => {
		connection.close();
		connection.dropDatabase();
	});

	it('Returns a user with id, name, email, password', async () => {
		const { status, data } = await axios.post('http://localhost:4000', { email: 'Rafael@rafael.com', name: 'Rafael', password: '123' });

		expect(status).toBe(201);
		expect(data).toHaveProperty('user');

		expect(data.user).toHaveProperty('_id');
		expect(data.user).toHaveProperty('name');
		expect(data.user).toHaveProperty('email');
		expect(data.user).toHaveProperty('password');
	});

	it('throws a error because email is empty', async () => {
		try {
			const { data } = await axios.post('http://localhost:4000', { email: '', name: 'Rafael', password: '123' });
			expect(data.user).toBeUndefined();
		} catch (error: any) {
			const { status, data } = error.response;
			expect(status).toBe(400);
			expect(data).toMatch(/Email is required/);
		}
	});

	it.todo('throws a error because email is not valid', async () => {});
});
