import { GraphQLError } from 'graphql';
import { userRepository } from '../repositories/userRepository';
import { CreateUserArgs, LoginArgs } from '../types/userType';
import { decryptPassword } from '../utils/encrypt';
import { genToken } from '../utils/genToken';

class UserService {
	async createUser({ user }: CreateUserArgs) {
		await userRepository.createUser({ user });
		return { response: 'New User created' };
	}

	async login({ user }: LoginArgs) {
		const { email, password } = user;
		const userDB = await userRepository.findByEmail(email);
		if (!userDB) throw new GraphQLError('Email/password is wrong');

		const isSamePassword = decryptPassword(userDB.password, password);
		if (!isSamePassword) throw new GraphQLError('Email/Password is wrong');

		const token = genToken(email);
		return { response: token };
	}
}

export const userService = new UserService();
