import { gql } from 'graphql-tag';

export type TypeUser = {
	email: string;
	password: string;
	name: string;
};

export const userType = gql`
	type response {
		user: user
		message: String!
	}

	type user {
		email: String!
		password: String!
		name: String!
	}

	type Query {
		getUser(email: String!): response!
	}

	input userInput {
		email: String!
		password: String!
		name: String!
	}

	type Mutation {
		createUser(user: userInput!): response!
	}
`;
