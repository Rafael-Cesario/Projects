import { FavoriteType } from "../../types/favorite";
import { ALL_FAVORITES } from "../querys/favorites";
import { ApolloCache } from "@apollo/client";

type cacheType = ApolloCache<unknown>;

type deleteFavorite = { deleteFavorite: { name: string; deleted: boolean } };
type createNewFavorite = { createFavorite: FavoriteType };

export const deleteFavoriteCache = {
	update(cache: cacheType, { data }: { data: deleteFavorite }) {
		const name = data.deleteFavorite.name;
		const existingFavorites: { favorites: FavoriteType[] } = cache.readQuery({
			query: ALL_FAVORITES,
		});
		const favorites = existingFavorites.favorites.filter((favorite) => favorite.name != name);

		cache.writeQuery({
			query: ALL_FAVORITES,
			data: { favorites },
		});
	},
};

export const createNewFavoriteCache = {
	update(cache: cacheType, { data }: { data: createNewFavorite }) {
		const createFavoriteResponse = [data?.createFavorite];
		const existingFavorites: { favorites: FavoriteType[] } = cache.readQuery({
			query: ALL_FAVORITES,
		});

		const favorites = [...existingFavorites.favorites, ...createFavoriteResponse];

		cache.writeQuery({
			query: ALL_FAVORITES,
			data: { favorites },
		});
	},
};
