import {
	allFavoritesDB,
	deleteFavoriteDB,
	modifyFavoriteDB,
	newFavoriteDB,
	favoriteTypeObj,
} from "../../database/methods/favorites";

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

		async deleteFavorite(_: {}, args: { id: String }) {
			const { id } = args;
			const deleted = await deleteFavoriteDB(id);

			if (deleted.deletedCount === 0) throw new Error("Id not found");

			return { id: id };
		},

		async modifyFavorite(_: {}, args: { id: string; changes: favoriteTypeObj }) {
			const newFavorite = await modifyFavoriteDB(args);

			return newFavorite;
		},
	},
};
