import { GraphQLError } from 'graphql';
import { userRepository } from '../repositories/userRepository';
import { LoginType, UserType } from '../schemas/types/userType';
import { decryptPassword } from '../utils/encrypt';
import { generateToken } from '../utils/generateToken';
import { verifyValues } from '../utils/verifyValues';

interface UserServiceInterface {
	secretHere: (user?: string) => string;
}

class UserService implements UserServiceInterface {
	secretHere(user?: string) {
		if (!user) throw new GraphQLError('You are not authorized to see the secret');
		return 'Actually there is no secret';
	}

	async createUser(user: UserType) {
		const errors = verifyValues(user);
		if (errors) throw new GraphQLError(errors);

		const { message, error } = await userRepository.createUser(user);
		if (error) return error;

		return message;
	}

	async login(loginInfo: LoginType) {
		const { email, password } = loginInfo;

		const emptyValues = verifyValues(loginInfo);
		if (emptyValues) throw new GraphQLError(emptyValues);

		const user = await userRepository.findByEmail(email);
		if (!user) throw new GraphQLError("Email/Password is wrong or doesn't exist.");

		const isSamePassword = decryptPassword(user.password, password);
		if (!isSamePassword) throw new GraphQLError("Email/Password is wrong or doesn't exist.");

		const message = 'Successful login';
		const token = generateToken(user.email);

		return { message, token };
	}
}

export const userService = new UserService();
