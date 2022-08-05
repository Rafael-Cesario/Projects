import request from 'supertest';
import { it, expect, afterAll, describe } from 'vitest';
import { app } from '../server';
import { connection } from 'mongoose';

describe('User Route', () => {
	afterAll(() => {
		connection.dropDatabase();
	});

	describe('Returns a user', async () => {
		const { status, body } = await request(app).post('/').send({
			name: 'rafael',
			email: 'rafael@rafael.com',
			password: '123',
		});

		it('send a 201 status', () => {
			expect(status).toBe(201);
		});

		it('have properties', () => {
			expect(body).toHaveProperty(['user', '_id']);
			expect(body).toHaveProperty(['user', 'email']);
			expect(body).toHaveProperty(['user', 'name']);
			expect(body).toHaveProperty(['user', 'password']);
		});

		it('encrypted the password', () => {
			expect(body.user.password).not.toBe('123');
		});
	});

	it('throw a error, empty email, name, password', async () => {
		const { text } = await request(app).post('/').send({});
		expect(text).toBe('Email is required, Name is required, Password is required');

		const { text: text02 } = await request(app).post('/').send({ email: '', name: 'Rafael', password: '123' });
		expect(text02).toBe('Email is required');
	});

	it('throw a error, email is duplicated', async () => {
		const user = { email: 'duplicated@double.com', name: 'duo', password: '22' };

		await request(app).post('/').send(user);
		const { text } = await request(app).post('/').send(user);

		expect(text).toBe('A user with this email already exist.');
	});
});
