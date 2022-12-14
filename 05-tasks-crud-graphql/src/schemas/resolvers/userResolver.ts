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

		updateUser: async (_: any, args: { email: string; newUser: TypeUser }) => {
			const { email, newUser } = args;

			if (!email) throw new GraphQLError('A email is required to find an user');
			if (Object.values(newUser).length === 0) throw new GraphQLError("The newUser OBJ can't be empty");
			if (newUser.name?.length > 20) throw new GraphQLError('Name can have in most 20 characters');

			const { user, error } = await userRepository.updateUser(email, newUser);
			if (error) throw new GraphQLError(error);

			return { message: 'User updated', user };
		},

		deleteUser: async (_: any, args: { email: string }) => {
			const { email } = args;

			if (!email) throw new GraphQLError('A email is required to delete an user');

			const error = await userRepository.deleteUser(email);
			if (error) throw new GraphQLError(error);

			return { message: `${email} was deleted` };
		},
	},
};
