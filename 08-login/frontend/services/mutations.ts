import { gql } from 'graphql-tag';

export const CREATE_USER = gql`
	mutation CreateUser($user: CreateUser!) {
		createUser(user: $user) {
			response
		}
	}
`;
