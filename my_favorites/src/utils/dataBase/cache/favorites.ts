import { FavoriteType } from "../../types/favorite";
import { ALL_FAVORITES } from "../querys/favorites";
import { ApolloCache } from "@apollo/client";

type cacheType = ApolloCache<unknown>;

type deleteFavorite = { deleteFavorite: { name: string; deleted: boolean } };
type createFavorite = { createFavorite: FavoriteType };

export const CACHE_deleteFavorite = {
	update(cache: cacheType, { data }: { data: deleteFavorite }) {
		const name = data.deleteFavorite.name;
		const favoritesOnCache = cache.readQuery({ query: ALL_FAVORITES }) as {
			favorites: FavoriteType[];
		};
		const favorites = favoritesOnCache.favorites.filter((favorite) => favorite.name != name);

		cache.writeQuery({
			query: ALL_FAVORITES,
			data: { favorites },
		});
	},
};

export const CACHE_createFavorite = {
	update(cache: cacheType, { data }: { data: createFavorite }) {
		const newFavorite = [data?.createFavorite];
		const favoritesOnCache = cache.readQuery({ query: ALL_FAVORITES }) as {
			favorites: FavoriteType[];
		};

		const favorites = [...favoritesOnCache.favorites, ...newFavorite];

		cache.writeQuery({
			query: ALL_FAVORITES,
			data: { favorites },
		});
	},
};
