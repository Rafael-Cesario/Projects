import { FavoriteType } from "../../../types/favorites";
import { FavoriteModel } from "../../models/favorite";

export const DBdeleteFavorite = async (name: string): Promise<FavoriteType> => {
	try {
		const nameRegEx = new RegExp(name, "i");
		const favorite = await FavoriteModel.findOneAndDelete({ name: nameRegEx }, { new: true });
		if (!favorite) throw new Error("Favorite not found");
		return favorite;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
