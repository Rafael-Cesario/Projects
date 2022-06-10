import { gql } from "apollo-server";

export const typeDefs = gql`
	type Favorite {
		name: String
		rate: Int
		imgURL: String
		category: [String]
	}

	input ChangeInput {
		name: String
		rate: Int
		imgURL: String
		category: [String]
	}

	type Query {
		favorites: [Favorite]
	}

	type Mutation {
		createFavorite(name: String, rate: Int): Favorite
		deleteFavorite(id: String, name: String): Favorite
		modifyFavorite(id: String!, changes: ChangeInput): Favorite
	}
`;
