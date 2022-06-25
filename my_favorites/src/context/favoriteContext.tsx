/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext, ReactNode } from "react";
import { CACHE_createFavorite, CACHE_deleteFavorite } from "../utils/dataBase/cache/favorites";
import {
	ALL_FAVORITES,
	CREATE_FAVORITE,
	DELETE_FAVORITE,
} from "../utils/dataBase/querys/favorites";
import { useQueryData } from "../utils/hooks/useQueryData";
import { FavoriteType } from "../utils/types/favorite";

interface favoriteProps {
	children: ReactNode;
}

type MutationVariables =
	| { variables: { name: string } }
	| { variables: { favoriteOBJ: FavoriteType } };

interface FavoriteContext {
	favoritesData: FavoriteType[];
	DBcreateFavorite: (variables: MutationVariables) => void;
	DBdeleteFavorite: (variables: MutationVariables) => void;
}

const initialValue = {
	favoritesData: [],
	DBcreateFavorite: () => {},
	DBdeleteFavorite: () => {},
};

const favoriteContext = createContext<FavoriteContext>(initialValue);

const FavoriteContextProvider = ({ children }: favoriteProps) => {
	const favoritesData = useQueryData(ALL_FAVORITES, "favorites") as FavoriteType[];

	const [DBcreateFavorite] = useMutation(CREATE_FAVORITE, CACHE_createFavorite);
	const [DBdeleteFavorite] = useMutation(DELETE_FAVORITE, CACHE_deleteFavorite);

	return (
		<favoriteContext.Provider
			value={{
				DBdeleteFavorite,
				DBcreateFavorite,
				favoritesData,
			}}
		>
			{children}
		</favoriteContext.Provider>
	);
};

export { favoriteContext, FavoriteContextProvider };
