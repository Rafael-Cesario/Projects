import { gql } from "apollo-server";

export const typeDefs = gql`
	type Favorite {
		list: String
		name: String
		note: String
		genre: [String]
		imgURL: String
		tags: [String]
	}

	input FavoriteInput {
		list: String
		name: String
		note: String
		genre: [String]
		imgURL: String
		tags: [String]
	}
`;
