import { LoginType, UserType } from '../types/userType';
import { userService } from '../../services/userService';

export const userResolver = {
	Query: {
		secretHere: (parent: any, args: null, ctx: { user: string }) => userService.secretHere(ctx.user),
	},

	Mutation: {
		createUser: async (_: any, args: { user: UserType }) => userService.createUser(args.user),
		login: async (_: any, args: { userLogin: LoginType }) => userService.login(args.userLogin),
	},
};
