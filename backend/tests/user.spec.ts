import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import axios from 'axios';
import { connection } from 'mongoose';
import { app } from '../src/server';

const PORT = 5000;
const URL = `http://localhost:${PORT}`;

describe('create user', () => {
	beforeAll(() => {
		app.listen(PORT);
	});

	afterAll(() => {
		connection.close();
		connection.dropDatabase();
	});

	it('Returns a user', async () => {
		const { status, data } = await axios.post(URL, { email: 'Rafael@rafael.com', name: 'Rafael', password: '123' });

		expect(status).toBe(201);
		expect(data).toHaveProperty('user');
	});

	it('throws a error because values are empty', async () => {
		try {
			const { data } = await axios.post(URL, { email: '', name: '', password: '123' });
			expect(data.user).toBeUndefined();
		} catch (error: any) {
			const { status, data } = error.response;
			expect(status).toBe(400);
			expect(data).toBe('Email is required, Name is required');
		}
	});

	it('throws a error because user with the same email already exist', async () => {
		try {
			await axios.post(URL, { email: 'rafael@rafael.com', name: 'Rafael', password: '123' });
			await axios.post(URL, { email: 'rafael@rafael.com', name: 'Rafael', password: '123' });
		} catch (error: any) {
			const { status, data } = error.response;

			expect(status).toBe(400);
			expect(data).toBe('A user with this email already exist.');
		}
	});

	it('returns a encrypted password', async () => {
		const user = { email: 'strong@strong.com', name: 'strong', password: 'strongPassword' };
		const { data, status } = await axios.post(URL, user);

		expect(status).toBe(201);
		expect(data.user.password).not.toBe(user.password);
	});
});
