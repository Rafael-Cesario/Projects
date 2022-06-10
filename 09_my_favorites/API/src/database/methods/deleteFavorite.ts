import { Favorite } from "../models/favorite";

export const deleteFavoriteDB = async (filter: String) => {
	const deleted = await Favorite.deleteOne({ _id: filter });

	return deleted;
};
