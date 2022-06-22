import {
	allFavoritesDB,
	deleteFavoriteDB,
	modifyFavoriteDB,
	newFavoriteDB,
	favoriteTypeObj,
} from "../../database/methods/favorites";
import { FavoriteType } from "../../types/favorites";

export const resolvers = {
	Query: {
		favorites() {
			const favorites = allFavoritesDB();
			return favorites;
		},
	},

	Mutation: {
		createFavorite(obj: unknown, args: { favoriteData: FavoriteType }) {
			const { favoriteData } = args;
			const newFavorite = newFavoriteDB(favoriteData);
			return newFavorite;
		},

		deleteFavorite(obj: unknown, args: { name: string }) {
			const { name } = args;
			const deleted = deleteFavoriteDB(name);

			return { deleted, name };
		},

		async modifyFavorite(_: {}, args: { id: string; changes: favoriteTypeObj }) {
			const newFavorite = await modifyFavoriteDB(args);

			return newFavorite;
		},
	},
};
