/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext, ReactNode } from "react";
import { createNewFavoriteCache, deleteFavoriteCache } from "../utils/dataBase/cache/favorites";
import { DELETE_FAVORITE, NEW_FAVORITE } from "../utils/dataBase/querys/favorites";
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
	const [createNewFavoriteOnDB] = useMutation(NEW_FAVORITE, createNewFavoriteCache);
	const [deleteFavoriteOnDB] = useMutation(DELETE_FAVORITE, deleteFavoriteCache);

	return (
		<favoriteContext.Provider
			value={{ deleteFavoriteOnDB, createNewFavorite: createNewFavoriteOnDB }}
		>
			{children}
		</favoriteContext.Provider>
	);
};

export { favoriteContext, FavoriteContextProvider };
