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

	input userInput {
		email: String!
		password: String!
		name: String!
	}

	input newUserInput {
		email: String
		password: String
		name: String
	}

	type Query {
		getUser(email: String!): response!
	}

	type Mutation {
		createUser(user: userInput!): response!
		updateUser(email: String!, newUser: newUserInput!): response!
		deleteUser(email: String!): response!
	}
`;
