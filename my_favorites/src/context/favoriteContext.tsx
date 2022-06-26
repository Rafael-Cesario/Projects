/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext, ReactNode } from "react";
import {
	CACHE_createFavorite,
	CACHE_deleteAllFavorites,
	CACHE_deleteFavorite,
	CACHE_modifyFavorite,
} from "../utils/dataBase/cache/favorites";
import {
	ALL_FAVORITES,
	CREATE_FAVORITE,
	DELETE_ALL_FAVORITES,
	DELETE_FAVORITE,
	MODIFY_FAVORITE,
} from "../utils/dataBase/querys/favorites";
import { useQueryData } from "../utils/hooks/useQueryData";
import { FavoriteType } from "../utils/types/favorite";

interface favoriteProps {
	children: ReactNode;
}

type MutationVariables =
	| { variables: { name: string } }
	| { variables: { favoriteOBJ: FavoriteType } }
	| { variables: { name: string; newFavorite: FavoriteType } }
	| { variables: { list: string } };

interface FavoriteContext {
	favoritesData: FavoriteType[];
	DBcreateFavorite: (variables: MutationVariables) => void;
	DBdeleteFavorite: (variables: MutationVariables) => void;
	DBmodifyFavorite: (variables: MutationVariables) => void;
	DBdeleteAllFavorites: (variables: MutationVariables) => void;
}

const initialValue = {
	favoritesData: [],
	DBcreateFavorite: () => {},
	DBdeleteFavorite: () => {},
	DBmodifyFavorite: () => {},
	DBdeleteAllFavorites: () => {},
};

const favoriteContext = createContext<FavoriteContext>(initialValue);

const FavoriteContextProvider = ({ children }: favoriteProps) => {
	const favoritesData = useQueryData(
		ALL_FAVORITES,
		"favorites"
	) as FavoriteType[];

	const [DBcreateFavorite] = useMutation(CREATE_FAVORITE, CACHE_createFavorite);
	const [DBdeleteFavorite] = useMutation(DELETE_FAVORITE, CACHE_deleteFavorite);
	const [DBmodifyFavorite] = useMutation(MODIFY_FAVORITE, CACHE_modifyFavorite);
	const [DBdeleteAllFavorites] = useMutation(DELETE_ALL_FAVORITES,CACHE_deleteAllFavorites);

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

export { favoriteContext, FavoriteContextProvider };
