import { connection } from 'mongoose';
import request from 'supertest';
import { afterAll, describe, expect, it } from 'vitest';
import { app } from '../server';

describe('User Route', () => {
	afterAll(() => {
		connection.dropDatabase();
	});

	describe('Create User', () => {
		it('returns a 200 status', async () => {
			const newUser = { email: 'teste@teste.com', name: 'teste', password: 'teste123' };
			const { status } = await request(app).post('/').send(newUser);

			expect(status).toBe(201);
		});

		it('returns a 400 status', async () => {
			const newUser = { email: '', name: 'teste', password: 'teste123' };
			const { status } = await request(app).post('/').send(newUser);

			expect(status).toBe(400);
		});
	});
});
