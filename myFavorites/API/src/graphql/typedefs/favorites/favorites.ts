import { gql } from "apollo-server";

export const typeDefs = gql`
	type Query {
		favorites: [Favorite]
	}

	type Mutation {
		createFavorite(favoriteOBJ: FavoriteInput): Favorite
		deleteFavorite(name: String): Favorite
		modifyFavorite(name: String, newFavorite: FavoriteInput): ModifyFavorite
		deleteAllFavorites(list: String): DeleteStatus
	}
`;
