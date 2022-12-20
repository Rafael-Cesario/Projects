export interface CreateUserArgs {
	user: { email: string; name: string; password: string };
}

export const userTypeDef = `#graphql
	type User {
		email: String!
		name: String!
		password:String!
	}

	type Response {
		user: User
		response: String!
	}

	input CreateUser {
		email: String!
		name: String!
		password: String!
	}

	type Query {
		hello: String!
	}

	type Mutation {
		createUser(user:CreateUser!): Response!
	}
`;
