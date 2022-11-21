import { ReactNode } from "react";
import { FavoriteType } from "../../utils/types/favorite";

export interface favoriteProps {
	children: ReactNode;
}

export type MutationVariables =
	| { variables: { name: string } }
	| { variables: { favoriteOBJ: FavoriteType } }
	| { variables: { name: string; newFavorite: FavoriteType } }
	| { variables: { list: string } };

export interface FavoriteContext {
	favoritesData: FavoriteType[];
	DBcreateFavorite: (variables: MutationVariables) => void;
	DBdeleteFavorite: (variables: MutationVariables) => void;
	DBmodifyFavorite: (variables: MutationVariables) => void;
	DBdeleteAllFavorites: (variables: MutationVariables) => void;
}
