import { Client } from './server';
import { CREATE_USER } from './mutations';
import { changeInputStyle } from '../utils/changeInputStyle';

type TypeUser = {
	email: string;
	name: string;
	password: string;
};

class UserQueries {
	async createUser(user: TypeUser) {
		try {
			const response = await Client.mutate({
				variables: { user },
				mutation: CREATE_USER,
			});

			return response.data?.createUser.response;
		} catch (error: any) {
			console.log('Create User Error: ', error.message);
			const [inputId, message] = error.message.split(': ');

			changeInputStyle(inputId, message);
			return false;
		}
	}
}

export const userQueries = new UserQueries();
