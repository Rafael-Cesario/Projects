import { Favorite } from "../models/favorite";

export const deleteFavoriteDB = async (id: String) => {
	const deleted = await Favorite.deleteOne({ _id: id });

	return deleted;
};
