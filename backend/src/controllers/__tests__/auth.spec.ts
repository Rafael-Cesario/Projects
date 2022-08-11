import { connection, model, models } from 'mongoose';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { IUser, UserSchema } from '../../models/user';
import { app } from '../../app';
import { mongoDBConnect } from '../../database';
import request from 'supertest';

describe('Auth Controller', () => {
	const UserModel = models.User || model<IUser>('User', UserSchema);
	const newUser = { email: 'teste@teste.com', name: 'Teste', password: 'teste123' };

	const createUser = async () => {
		await request(app).post('/').send(newUser);
	};

	const tryToMakeLogin = async (email: string, password: string) => {
		return await request(app).post('/auth/login').send({ email, password });
	};

	beforeAll(() => {
		mongoDBConnect();
	});

	afterAll(() => {
		connection.dropDatabase();
	});

	afterEach(async () => {
		await UserModel.deleteMany({});
	});

	it('login a user', async () => {
		await createUser();
		const { status, body } = await tryToMakeLogin(newUser.email, newUser.password);

		expect(status).toBe(200);
		expect(body.token.length).toBeGreaterThan(0);
		expect(body.user).toBeDefined();
	});

	it('Throw a error because email is invalid', async () => {
		await createUser();
		const { status, text } = await tryToMakeLogin('', newUser.password);

		expect(status).toBe(400);
		expect(text).toBe('Email Or Password Is Wrong!');
	});

	it('Throw a error because password is invalid', async () => {
		await createUser();
		const { status, text } = await tryToMakeLogin(newUser.email, '');

		expect(status).toBe(400);
		expect(text).toBe('Email Or Password Is Wrong!');
	});
});
