import { userRepository } from '../../repositories/userRepository';
import { TypeUser } from '../types/userType';
import { GraphQLError } from 'graphql';

const verifyValues = (OBJ: {}) => {
	const values: string[] = [];
	const entries = Object.entries(OBJ);

	entries.forEach(([key, value]) => {
		value || values.push(`${key} is missing`);
	});

	return values.join(', ');
};

export const userResolver = {
	Query: {
		getUser: async (_: any, args: { email: string }) => {
			const { email } = args;

			const hasError = verifyValues(args);
			if (hasError) throw new GraphQLError(hasError);

			const user = await userRepository.getUser(email);
			if (!user) return { message: 'User not found' };

			return { user, message: '' };
		},
	},

	Mutation: {
		createUser: async (_: any, args: { user: TypeUser }) => {
			const { name, email, password } = args.user;

			const hasError = verifyValues(args.user);
			if (hasError) throw new GraphQLError(hasError);

			const error = await userRepository.createUser({ name, email, password });
			if (error) throw new GraphQLError(error);

			return { message: 'A new User was created' };
		},
	},
};
