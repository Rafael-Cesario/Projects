import { gql } from 'graphql-tag';

export const CREATE_USER = gql`
	mutation CreateUser($user: CreateUser!) {
		createUser(user: $user) {
			response
		}
	}
`;

export const LOGIN = gql`
	mutation Login($user: Login!) {
		login(user: $user) {
			response
		}
	}
`;
