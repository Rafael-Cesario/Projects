import { gql } from "apollo-server";

export const typeDefs = gql`
	type Confirmation {
		name: String
		deleted: Boolean
	}

	type Favorite {
		list: String
		name: String
		note: String
		genre: [String]
		imgURL: String
		tags: [String]
	}

	input FavoriteData {
		list: String
		name: String
		note: String
		genre: [String]
		imgURL: String
		tags: [String]
	}

	type Query {
		favorites: [Favorite]
	}

	type Mutation {
		createFavorite(favoriteData: FavoriteData): Favorite
		deleteFavorite(name: String): Confirmation
		modifyFavorite(id: String!, changes: FavoriteData): Favorite
	}
`;
