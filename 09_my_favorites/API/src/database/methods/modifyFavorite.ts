import { Favorite } from "../models/favorite";
import { favoriteTypeObj } from "./newFavorite";

const changeOne = async (id: string, change: string, value: string | number) => {
	await Favorite.updateOne({ _id: id }, { [change]: value });
};

export const modifyFavoriteDB = async (args: { id: string; changes: favoriteTypeObj }) => {
	const { id, changes } = args;

	const changesKeys = Object.keys(changes);
	const changeValues = Object.values(changes);

	changesKeys.forEach((change: string, index) => {
		const value = changeValues[index];
		changeOne(id, change, value);
	});

	const newFavorite = await Favorite.find({ _id: id });

	return newFavorite[0];
};
