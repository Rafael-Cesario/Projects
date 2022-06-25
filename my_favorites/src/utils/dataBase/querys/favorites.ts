import { gql } from "@apollo/client";

export const ALL_FAVORITES = gql`
	query AllFavorites {
		favorites {
			list
			name
			tags
			note
			genre
			imgURL
		}
	}
`;

export const CREATE_FAVORITE = gql`
	mutation CreateFavorite($favoriteOBJ: FavoriteInput) {
		createFavorite(favoriteOBJ: $favoriteOBJ) {
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
			list
			name
			note
			genre
			imgURL
			tags
		}
	}
`;

export const MODIFY_FAVORITE = gql`
	mutation ModifyFavorite($name: String, $newFavorite: FavoriteInput) {
		modifyFavorite(name: $name, newFavorite: $newFavorite) {
			list
			name
			note
			genre
			imgURL
			tags
		}
	}
`;
