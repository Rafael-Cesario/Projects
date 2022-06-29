import { FavoriteType } from "../../types/favorite";
import { ALL_FAVORITES } from "../querys/favorites";
import { client } from "../apolloClient";
import { QueryFavorites } from "./cacheTypes.ts/favorites";

export const Cache_createFavorite = (favoriteOBJ: FavoriteType) => {
	const queryFavorites = readQuery();
	const favorites = [...queryFavorites.favorites, ...[favoriteOBJ]];
	writeQuery(favorites);
};

export const Cache_deleteFavorite = (deletedName: string) => {
	const queryFavorites = readQuery();
	const favorites = queryFavorites.favorites.filter((favorite) => favorite.name != deletedName);
	writeQuery(favorites);
};

export const Cache_modifyFavorite = (name: string, favoriteOBJ: FavoriteType) => {
	const queryFavorites = readQuery();
	const favoritesOnCache = [...queryFavorites.favorites];
	const favoriteIndex = favoritesOnCache.findIndex((favorite) => favorite.name === name);

	favoritesOnCache[favoriteIndex] = favoriteOBJ;

	writeQuery(favoritesOnCache);
};

export const Cache_deleteAllFavorites = (listName: string) => {
	const queryFavorites = readQuery();
	const favoritesOnCache = [...queryFavorites.favorites];
	const favorites = favoritesOnCache.filter((favorite) => favorite.list != listName);

	writeQuery(favorites);
};

const writeQuery = (favorites: FavoriteType[]) => {
	client.writeQuery({
		query: ALL_FAVORITES,
		data: { favorites },
	});
};

const readQuery = () => {
	return client.readQuery({ query: ALL_FAVORITES }) as QueryFavorites;
};
