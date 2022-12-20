import { CreateUserArgs } from '../types/userType';

export const userResolver = {
	Query: {
		hello: () => 'Hello World',
	},

	Mutation: {
		createUser(parent: any, args: CreateUserArgs) {
			console.log({ args: args.user });
			return { response: 'New User created' };
		},
	},
};
