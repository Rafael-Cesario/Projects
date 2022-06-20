import { Favorite } from "../models/favorite";

export interface favoriteTypeObj {
	name: String;
	rate: Number;
	imgURL: String;
	category: String[];
}

export const allFavoritesDB = async () => {
	const favorites = await Favorite.find({});
	return favorites;
};

export const deleteFavoriteDB = async (id: String) => {
	const deleted = await Favorite.deleteOne({ _id: id });

	return deleted;
};

export const modifyFavoriteDB = async (args: { id: string; changes: favoriteTypeObj }) => {
	const { id, changes } = args;

	const changesKeys = Object.keys(changes);
	const changeValues = Object.values(changes);

	changesKeys.forEach(async (change: string, index) => {
		const value = changeValues[index];
		await Favorite.updateOne({ _id: id }, { [change]: value });
	});

	const newFavorite = await Favorite.find({ _id: id });

	return newFavorite[0];
};

export const newFavoriteDB = async (obj: favoriteTypeObj) => {
	const { name, rate, imgURL, category } = obj;

	const favorite = new Favorite({ name, rate, imgURL, category });
	const response = await favorite.save();
	return response;
};
