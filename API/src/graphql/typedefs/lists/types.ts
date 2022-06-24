import { gql } from "apollo-server";

export const typeDefs = gql`
	type DeleteList {
		name: String
		deletedCount: Int
	}

	type List {
		name: String
		tags: [String]
		index: Int
	}
`;
