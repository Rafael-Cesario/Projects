import { gql } from "@apollo/client";

export const ALL_FAVORITES = gql`
	query allFavorites {
		favorites {
			list
			name
			note
			genre
			imgURL
			tags
		}
	}
`;

export const NEW_FAVORITE = gql`
	mutation NewFavorite($favoriteData: FavoriteData) {
		createFavorite(favoriteData: $favoriteData) {
			list
			name
			note
			genre
			imgURL
			tags
		}
	}
`;

export const DELETE_FAVORITE = gql`
	mutation DeleteFavorite($name: String) {
		deleteFavorite(name: $name) {
			name
			deleted
		}
	}
`;
