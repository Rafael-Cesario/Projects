import { connect, connection } from 'mongoose';
import { IUserRepository } from '../interface/userRepositoryInterface';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { uri } from '../database';
import { UserValidation } from './userValidation';

class dummyRepository {
	private users = ['duplicate@teste.com'];

	findByEmail(email: string) {
		const hasUser = this.users.includes(email);
		return hasUser;
	}
}

describe('User Validation', () => {
	const userValidation = new UserValidation(new dummyRepository() as unknown as IUserRepository);

	beforeAll(async () => {
		await connect(uri);
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
	});

	describe('Data validation', () => {
		it('Returns an error and a message', () => {
			const userData = { email: 'rafael@teste.com', name: '', age: '', password: '' };
			const [hasError, message] = userValidation.data(userData);

			expect(hasError).toBe(true);
			expect(message).toBe('name, age, password are required');
		});

		it('Returns false for hasError', () => {
			const userData = { email: 'rafael@teste.com', name: 'rafael', age: '22', password: '1234' };
			const [hasError, message] = userValidation.data(userData);

			expect(hasError).toBe(false);
			expect(message).toBe('');
		});
	});

	describe('Duplicated User', () => {
		it('Returns false, user do not exist', async () => {
			const email = 'teste@teste.com';
			const hasUser = await userValidation.duplicate(email);

			expect(hasUser).toBe(false);
		});

		it('Returns true, user exist', async () => {
			const email = 'duplicate@teste.com';
			const hasUser = await userValidation.duplicate(email);

			expect(hasUser).toBe(true);
		});
	});
});
