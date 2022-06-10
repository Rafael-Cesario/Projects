import { Favorite } from "../models/favorite";

export const allFavoritesDB = async () => {
	const favorites = await Favorite.find({});
	return favorites;
};
