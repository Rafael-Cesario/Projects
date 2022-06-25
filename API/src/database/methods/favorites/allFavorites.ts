import { FavoriteType } from "../../../types/favorites";
import { FavoriteModel } from "../../models/favorite";

export const DBallFavorites = async (): Promise<FavoriteType[]> => {
	try {
		const favorites = await FavoriteModel.find({});
		return favorites;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
