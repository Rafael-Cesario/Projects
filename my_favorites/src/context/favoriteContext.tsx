/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext, ReactNode } from "react";
import {
	allFavoritesOnDB,
	DeleteFavoriteOnDB,
	SaveNewFavoriteOnDB,
} from "../utils/dataBase/querys/favorites";
import { FavoriteType } from "../utils/types/favorite";

type deleteFavoriteType = { variables: { name: string } };
type newFavoriteType = { variables: { favoriteData: FavoriteType } };

interface favoriteProps {
	children: ReactNode;
}

interface FavoriteContext {
	createNewFavorite: (variables: newFavoriteType) => void;
	deleteFavoriteOnDB: (variables: deleteFavoriteType) => void;
}

const initialValue = {
	createNewFavorite: () => {},
	deleteFavoriteOnDB: () => {},
};

const favoriteContext = createContext<FavoriteContext>(initialValue);

const FavoriteContextProvider = ({ children }: favoriteProps) => {
	const [deleteFavoriteOnDB] = useMutation(DeleteFavoriteOnDB, {
		update(cache, { data }) {
			const name = data?.deleteFavorite?.name;
			const existingFavorites: { favorites: FavoriteType[] } = cache.readQuery({
				query: allFavoritesOnDB,
			});
			const favorites = existingFavorites.favorites.filter((favorite) => favorite.name != name);

			cache.writeQuery({
				query: allFavoritesOnDB,
				data: { favorites },
			});
		},
	});

	const [createNewFavorite] = useMutation(SaveNewFavoriteOnDB, {
		update(cache, { data }) {
			const createFavoriteResponse = [data?.createFavorite];
			const existingFavorites: { favorites: FavoriteType[] } = cache.readQuery({
				query: allFavoritesOnDB,
			});

			const favorites = [...existingFavorites.favorites, ...createFavoriteResponse];

			cache.writeQuery({
				query: allFavoritesOnDB,
				data: { favorites },
			});
		},
	});

	return (
		<favoriteContext.Provider value={{ deleteFavoriteOnDB, createNewFavorite }}>
			{children}
		</favoriteContext.Provider>
	);
};

export { favoriteContext, FavoriteContextProvider };
