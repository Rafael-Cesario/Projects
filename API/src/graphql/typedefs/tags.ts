import { gql } from "apollo-server";

export const typeDefs = gql`
	type Tag {
		name: String
		tags: [String]
	}

	type Query {
		tags: [Tag]
	}

	type Mutation {
		createNewTag(name: String, tags: [String]): Tag
	}
`;
