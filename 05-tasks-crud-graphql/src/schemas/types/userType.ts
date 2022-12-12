import { gql } from 'graphql-tag';

export const userType = gql`
	type user {
		email: String!
		password: String!
		name: String!
	}

	type Query {
		getUsers: [user]!
	}
`;
