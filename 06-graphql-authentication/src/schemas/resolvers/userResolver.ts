import { UserType } from '../types/userType';
import { userRepository } from '../../repositories/userRepository';
import { verifyValues } from '../../utils/verifyValues';
import { GraphQLError } from 'graphql';

export const userResolver = {
	Mutation: {
		createUser: async (_: any, args: { user: UserType }) => {
			const { user } = args;

			const errors = verifyValues(user);
			if (errors) throw new GraphQLError(errors);

			const { message, error } = await userRepository.createUser(user);
			if (error) return error;

			return message;
		},
	},
};
