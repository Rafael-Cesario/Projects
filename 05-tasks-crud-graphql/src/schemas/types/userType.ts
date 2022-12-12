import { gql } from 'graphql-tag';

export type TypeUser = {
	email: string;
	password: string;
	name: string;
};

export const userType = gql`
	type user {
		email: String!
		password: String!
		name: String!
	}

	type Query {
		getUsers: [user]!
	}

	input userInput {
		email: String!
		password: String!
		name: String!
	}

	type response {
		message: String!
	}

	type Mutation {
		createUser(user: userInput!): response!
	}
`;
