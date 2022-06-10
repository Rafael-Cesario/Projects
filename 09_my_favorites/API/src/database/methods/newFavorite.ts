import { Favorite } from "../models/favorite";

export interface favoriteTypeObj {
	name: String;
	rate: Number;
	imgURL: String;
	category: String[];
}

export const newFavoriteDB = async (obj: favoriteTypeObj) => {
	const { name, rate, imgURL, category } = obj;

	const favorite = new Favorite({ name, rate, imgURL, category });
	const response = await favorite.save();
	return response;
};
