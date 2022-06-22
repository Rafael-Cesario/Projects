import { gql } from "@apollo/client";

export const allFavoritesOnDB = gql`
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

export const SaveNewFavoriteOnDB = gql`
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

export const DeleteFavoriteOnDB = gql`
	mutation DeleteFavorite($name: String) {
		deleteFavorite(name: $name) {
			name
			deleted
		}
	}
`;
