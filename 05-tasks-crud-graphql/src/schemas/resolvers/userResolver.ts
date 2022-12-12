import { TypeUser } from '../types/userType';

const tempUsers = [
	{
		name: 'teste',
		email: 'test@test.com',
		password: '123456',
	},
];

const verifyValues = (OBJ: {}) => {
	const values: string[] = [];
	const entries = Object.entries(OBJ);

	entries.forEach(([key, value]) => {
		value || values.push(`${key} is missing`);
	});

	return values;
};

export const userResolver = {
	Query: {
		getUsers: () => tempUsers,
	},

	Mutation: {
		createUser: (_: any, args: { user: TypeUser }) => {
			const { name, email, password } = args.user;

			const hasError = verifyValues(args.user).join(', ');
			if (hasError) return { message: hasError };

			return { message: 'A new User was created' };
		},
	},
};
