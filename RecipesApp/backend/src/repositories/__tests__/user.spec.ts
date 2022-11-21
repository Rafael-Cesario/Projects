import { Model } from 'mongoose';
import { expect, describe, it, afterEach } from 'vitest';
import { IUser } from '../../models/user';
import { UserRepository } from '../user';
import { UserModelMock } from './userModelMock';

describe('User Repository can...', () => {
	const UserModel = new UserModelMock();
	const userRepository = new UserRepository(UserModel as unknown as Model<IUser>);
	const userOBJ = { email: 'teste@teste.com', name: 'Teste', password: 'teste123' };

	afterEach(() => {
		UserModel.deleteMany();
	});

	it('Create a new user', async () => {
		const user = await userRepository.create(userOBJ);
		expect(user._id).toBeDefined();
	});

	it('Find a user by email', async () => {
		userRepository.create(userOBJ);
		const user = await userRepository.findByEmail(userOBJ.email);
		expect(user.email).toBe(userOBJ.email);
	});
});
