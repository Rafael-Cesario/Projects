import { LoginType, UserType } from '../types/userType';
import { userRepository } from '../../repositories/userRepository';
import { verifyValues } from '../../utils/verifyValues';
import { GraphQLError } from 'graphql';
import { decryptPassword } from '../../utils/encrypt';
import { generateToken } from '../../utils/generateToken';

export const userResolver = {
	Query: {
		secretHere: (parent: any, args: null, ctx: { user: string }) => {
			if (!ctx.user) throw new GraphQLError('You are not authorized to see the secret');
			return 'Actually there is no secret here';
		},
	},

	Mutation: {
		createUser: async (_: any, args: { user: UserType }) => {
			const { user } = args;

			const errors = verifyValues(user);
			if (errors) throw new GraphQLError(errors);

			const { message, error } = await userRepository.createUser(user);
			if (error) return error;

			return message;
		},

		login: async (_: any, args: { userLogin: LoginType }) => {
			const { email, password } = args.userLogin;

			const emptyValues = verifyValues(args.userLogin);
			if (emptyValues) throw new GraphQLError(emptyValues);

			const user = await userRepository.findByEmail(email);
			if (!user) throw new GraphQLError("Email/Password is wrong or doesn't exist.");

			const isSamePassword = decryptPassword(user.password, password);
			if (!isSamePassword) throw new GraphQLError("Email/Password is wrong or doesn't exist.");

			const message = 'Successful login';
			const token = generateToken(user.email);

			return { message, token };
		},
	},
};
