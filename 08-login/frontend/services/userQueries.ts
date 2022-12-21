import gql from 'graphql-tag';
import { Client } from './server';

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

const CREATE_USER = gql`
	mutation CreateUser($user: CreateUser!) {
		createUser(user: $user) {
			response
		}
	}
`;
