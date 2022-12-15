export type UserType = {
	name: string;
	email: string;
	password: string;
};

export type LoginType = {
	email: string;
	password: string;
};

export const userType = `#graphql
    type user {
        name: String!
        email: String!
        password: String!
    }

    type loginResponse {
        token: String
        message: String!
    }

    input createUserInput {
        name: String!
        email: String!
        password: String!
    }

    input loginInput {
        email: String!
        password: String!
    }

    type Query {
        hello: String!
    }

    type Mutation {
        createUser (user: createUserInput!): String!
        login(userLogin: loginInput!): loginResponse!
    }
`;
