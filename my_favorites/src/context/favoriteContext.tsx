/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation, useQuery } from "@apollo/client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { createNewFavoriteCache, deleteFavoriteCache } from "../utils/dataBase/cache/favorites";
import { ALL_FAVORITES, DELETE_FAVORITE, NEW_FAVORITE } from "../utils/dataBase/querys/favorites";
import { FavoriteType } from "../utils/types/favorite";

type deleteFavoriteType = { variables: { name: string } };
type newFavoriteType = { variables: { favoriteData: FavoriteType } };

interface favoriteProps {
	children: ReactNode;
}

interface FavoriteContext {
	allFavoritesData: FavoriteType[];
	createNewFavoriteOnDB: (variables: newFavoriteType) => void;
	deleteFavoriteOnDB: (variables: deleteFavoriteType) => void;
}

const initialValue = {
	allFavoritesData: [],
	createNewFavoriteOnDB: () => {},
	deleteFavoriteOnDB: () => {},
};

const favoriteContext = createContext<FavoriteContext>(initialValue);

const FavoriteContextProvider = ({ children }: favoriteProps) => {
	const { loading, data } = useQuery(ALL_FAVORITES);
	const [allFavoritesData, setAllfavoritesData] = useState(initialValue.allFavoritesData);
	const [createNewFavoriteOnDB] = useMutation(NEW_FAVORITE, createNewFavoriteCache);
	const [deleteFavoriteOnDB] = useMutation(DELETE_FAVORITE, deleteFavoriteCache);

	useEffect(() => {
		!loading && setAllfavoritesData(data.favorites);
	}, [loading, data]);

	return (
		<favoriteContext.Provider
			value={{
				deleteFavoriteOnDB,
				createNewFavoriteOnDB,
				allFavoritesData,
			}}
		>
			{children}
		</favoriteContext.Provider>
	);
};

export { favoriteContext, FavoriteContextProvider };
