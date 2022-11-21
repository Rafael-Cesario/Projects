import { ApolloCache } from "@apollo/client";
import { FavoriteType } from "../../../types/favorite";

export type cacheType = ApolloCache<unknown>;
export type QueryFavorites = { favorites: FavoriteType[] };
export type modifyFavorite = { modifyFavorite: { oldName: string; newFavorite: FavoriteType } };
export type deleteFavorite = { deleteFavorite: FavoriteType };
export type createFavorite = { createFavorite: FavoriteType };
export type deleteAllFavorites = { deleteAllFavorites: { list: string; deletedCount: number } };
