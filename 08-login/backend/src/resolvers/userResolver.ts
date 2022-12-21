import { userService } from '../services/userService';
import { CreateUserArgs, LoginArgs } from '../types/userType';

export const userResolver = {
	Query: {
		hello: () => 'Hello World',
	},

	Mutation: {
		createUser: (parent: any, args: CreateUserArgs) => userService.createUser(args),
		login: (parent: any, args: LoginArgs) => userService.login(args),
	},
};
