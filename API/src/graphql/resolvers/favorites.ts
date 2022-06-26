import { DBallFavorites } from "../../database/methods/favorites/allFavorites";
import { DBcreateFavorite } from "../../database/methods/favorites/createFavorite";
import { DBdeleteAllFavorites } from "../../database/methods/favorites/deleteAllFavorites";
import { DBdeleteFavorite } from "../../database/methods/favorites/deleteFavorite";
import { DBmodifyFavorite } from "../../database/methods/favorites/modifyFavorite";
import { FavoriteType } from "../../types/favorites";

export const resolvers = {
	Query: {
		favorites() {
			const response = DBallFavorites();
			return response;
		},
	},
	Mutation: {
		createFavorite(obj: unknown, args: { favoriteOBJ: FavoriteType }) {
			const { favoriteOBJ } = args;
			const response = DBcreateFavorite(favoriteOBJ);
			return response;
		},

		deleteFavorite(obj: unknown, args: { name: string }) {
			const { name } = args;
			const response = DBdeleteFavorite(name);
			return response;
		},

		modifyFavorite(
			obj: unknown,
			args: { name: string; newFavorite: FavoriteType }
		) {
			const { name, newFavorite } = args;
			const response = DBmodifyFavorite(name, newFavorite);
			return response;
		},

		deleteAllFavorites(obj: unknown, args: { list: string }) {
			const { list } = args;
			const response = DBdeleteAllFavorites(list);
			return response;
		},
	},
};
