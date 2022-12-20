import { GraphQLError } from 'graphql';
import { UserModel } from '../models/userModel';
import { CreateUserArgs } from '../types/userType';

class UserRepository {
	async createUser({ user }: CreateUserArgs) {
		try {
			await UserModel.create(user);
		} catch (error: any) {
			if (error.code === 11000) throw new GraphQLError('This email already exist');
			throw new GraphQLError(error.message);
		}
	}
}

export const userRepository = new UserRepository();
