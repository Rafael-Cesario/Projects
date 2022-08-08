import request from 'supertest';
import { it, expect, afterAll, describe } from 'vitest';
import { app } from '../server';
import { connection } from 'mongoose';
import { IUser } from '../models/user';

describe('User Route', () => {
	afterAll(() => {
		connection.dropDatabase();
	});

	describe('Create A User', () => {
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
});

describe('Auth Route', () => {
	afterAll(() => {
		connection.dropDatabase();
	});

	const createUser = async (user: IUser) => {
		await request(app).post('/').send(user);
	};

	it('Returns a token and a user', async () => {
		const user = { email: 'teste@teste.com', name: 'Teste', password: 'teste123' };
		await createUser(user);

		const { status, body, text } = await request(app).post('/auth/login').send({
			email: 'teste@teste.com',
			password: 'teste123',
		});

		expect(status).toBe(200);
		expect(body.login.token).toBeDefined();
		expect(body.login.user).toBeDefined();
	});

	it.todo('throw a error because email is invalid');
	it.todo('throw a error because the password is invalid');
});
