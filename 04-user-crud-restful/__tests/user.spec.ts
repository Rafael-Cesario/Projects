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

	const user = {
		email: 'test@test.com',
		password: '1234',
		name: 'test',
		age: '20',
	};

	it('Create A new User', async () => {
		const { body, status } = await request(app).post('/user').send(user);
		expect(status).toBe(200);
		expect(body).toEqual({ message: 'A new user was created' });
	});

	it(`Can't create user if already exist`, async () => {
		const { body, status } = await request(app).post('/user').send(user);

		expect(status).toBe(400);
		expect(body).toEqual({ error: 'Email already exist' });
	});

	it(`Can't create user if value is missing`, async () => {
		const { email, age } = user;
		const { body, status } = await request(app).post('/user').send({ email, age });

		expect(body).toEqual({ error: 'password, name is required' });
		expect(status).toBe(400);
	});

	it('Return all users', async () => {
		const { body, status } = await request(app).get('/user');

		expect(status).toBe(200);
		expect(body).toHaveProperty('users');
		expect(body.users.length).toBe(1);
	});
});
