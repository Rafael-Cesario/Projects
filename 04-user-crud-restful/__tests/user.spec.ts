import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app } from '../src/server';
import { uri } from '../src/database';
import request from 'supertest';
import mongoose from 'mongoose';

describe('User route', () => {
	beforeAll(async () => {
		app.listen(3000);
		await mongoose.connect(uri);
	});

	afterAll(async () => {
		await mongoose.connection.dropDatabase();
		await mongoose.connection.close();
	});

	it(`Can't create user if already exist`, async () => {
		const user = {
			email: 'test@test.com',
			password: '1234',
			name: 'test',
			age: '20',
		};

		await request(app).post('/user').send(user);
		const { body, status } = await request(app).post('/user').send(user);

		expect(status).toBe(400);
		expect(body).toEqual({ error: 'Email already exist' });
	});
});
