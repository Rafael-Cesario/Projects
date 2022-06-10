import { newFavoriteDB } from "../../database/methods/newFavorite";

import type { favoriteTypeObj } from "../../database/methods/newFavorite";
import { allFavoritesDB } from "../../database/methods/allFavorites";
import { deleteFavoriteDB } from "../../database/methods/deleteFavorite";
import { modifyFavoriteDB } from "../../database/methods/modifyFavorite";

export const resolvers = {
	Query: {
		favorites() {
			const favorites = allFavoritesDB();
			return favorites;
		},
	},

	Mutation: {
		async createFavorite(_: {}, args: favoriteTypeObj) {
			const newFavorite = await newFavoriteDB(args);
			return newFavorite;
		},

		async deleteFavorite(_: {}, args: { id: String; name: String }) {
			const { id, name } = args;
			const filter = id ? id : name;
			const deleted = await deleteFavoriteDB(filter);

			if (deleted.deletedCount === 0) throw new Error("Favorite Not Found");

			return { id: filter };
		},

		async modifyFavorite(_: {}, args: { id: string; changes: favoriteTypeObj }) {
			const newFavorite = await modifyFavoriteDB(args);

			return newFavorite;
		},
	},
};
