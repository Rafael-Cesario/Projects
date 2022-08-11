import { connection, model, models } from 'mongoose';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { IUser, UserSchema } from '../../models/user';
import request from 'supertest';
import { app } from '../../app';
import { mongoDBConnect } from '../../database';

describe('UserController', () => {
	const userModel = models.User || model<IUser>('User', UserSchema);

	beforeAll(() => {
		mongoDBConnect();
	});

	afterAll(() => {
		connection.dropDatabase();
	});

	afterEach(async () => {
		await userModel.deleteMany({});
	});

	it('returns a user with encrypted password', async () => {
		const newUser = { email: 'teste@teste.com', name: 'teste', password: 'teste123' };
		const { status, body } = await request(app).post('/').send(newUser);

		expect(status).toBe(201);
		expect(body.user.password).not.toBe('teste123');
	});

	it('throw a error, empty email, name, password', async () => {
		const { status, text } = await request(app).post('/').send({});

		expect(status).toBe(400);
		expect(text).toBe('Email is required, Name is required, Password is required');
	});

	it('throw a error, email is duplicated', async () => {
		const newUser = { email: 'teste@teste.com', name: 'teste', password: 'teste123' };

		await request(app).post('/').send(newUser);
		const { status, text } = await request(app).post('/').send(newUser);

		expect(status).toBe(400);
		expect(text).toBe('A user with this email already exist.');
	});
});
