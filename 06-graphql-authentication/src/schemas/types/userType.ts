export type UserType = {
	name: string;
	email: string;
	password: string;
};

export const userType = `#graphql
    type user {
        name: String!
        email: String!
        password: String!
    }

    input createUserInput {
        name: String!
        email: String!
        password: String!
    }

    type Query {
        hello: String!
    }

    type Mutation {
        createUser (user: createUserInput!): String!
    }
`;
