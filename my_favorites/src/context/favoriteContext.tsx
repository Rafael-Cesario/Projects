/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext } from "react";
import { useQueryData } from "../utils/hooks/useQueryData";
import { FavoriteType } from "../utils/types/favorite";
import { FavoriteContext, favoriteProps } from "./contextTypes/favoriteContext";
import { ALL_FAVORITES, CREATE_FAVORITE, MODIFY_FAVORITE, DELETE_FAVORITE, DELETE_ALL_FAVORITES } from "../utils/dataBase/querys/favorites";

const initialValue = {
	favoritesData: [],
	DBcreateFavorite: () => {},
	DBdeleteFavorite: () => {},
	DBmodifyFavorite: () => {},
	DBdeleteAllFavorites: () => {},
};

export const favoriteContext = createContext<FavoriteContext>(initialValue);

export const FavoriteContextProvider = ({ children }: favoriteProps) => {
	const favoritesData = useQueryData(ALL_FAVORITES, "favorites") as FavoriteType[];

	const [DBcreateFavorite] = useMutation(CREATE_FAVORITE);
	const [DBdeleteFavorite] = useMutation(DELETE_FAVORITE);
	const [DBmodifyFavorite] = useMutation(MODIFY_FAVORITE);
	const [DBdeleteAllFavorites] = useMutation(DELETE_ALL_FAVORITES);

	return (
		<favoriteContext.Provider
			value={{
				favoritesData,
				DBcreateFavorite,
				DBmodifyFavorite,
				DBdeleteFavorite,
				DBdeleteAllFavorites,
			}}
		>
			{children}
		</favoriteContext.Provider>
	);
};
