const tempUsers = [
	{
		name: 'teste',
		email: 'test@test.com',
		password: '123456',
	},
];

export const userResolver = {
	Query: {
		getUsers: () => tempUsers,
	},
};
