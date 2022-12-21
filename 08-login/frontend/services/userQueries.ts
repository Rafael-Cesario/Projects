import { Client } from './server';
import { CREATE_USER } from './mutations';

type TypeUser = {
	email: string;
	name: string;
	password: string;
};

class UserQueries {
	async createUser(user: TypeUser) {
		const response = await Client.mutate({
			variables: { user },
			mutation: CREATE_USER,
		});

		return response.data?.createUser;
	}
}

export const userQueries = new UserQueries();
