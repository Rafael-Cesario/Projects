import { GraphQLError } from 'graphql';
import { UserModel } from '../models/userModel';
import { CreateUserArgs } from '../types/userType';

class UserRepository {
	async createUser({ user }: CreateUserArgs) {
		try {
			await UserModel.create(user);
		} catch (error: any) {
			if (error.code === 11000) throw new GraphQLError('email: Este email já existe');
			throw new GraphQLError(error.message);
		}
	}

	async findByEmail(email: string) {
		try {
			const user = await UserModel.findOne({ email });
			if (!user) throw new Error('email: Usuario não encontrado');
			return user;
		} catch (error: any) {
			throw new GraphQLError(error.message);
		}
	}
}

export const userRepository = new UserRepository();
