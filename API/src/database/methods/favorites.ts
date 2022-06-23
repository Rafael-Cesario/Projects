import { FavoriteType } from "../../types/favorites";
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

export const deleteFavoriteDB = async (name: String) => {
	const deleted = await Favorite.deleteOne({ name });

	if (deleted.deletedCount === 0) throw new Error("Name not found");

	return true;
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

export const newFavoriteDB = async (favoriteData: FavoriteType) => {
	const newFavoriteData = {
		list: favoriteData.list,
		name: favoriteData.name,
		note: favoriteData.note || "Sem Nota",
		genre: favoriteData.genre[0] ? favoriteData.genre : ["Sem Genero"],
		imgURL: favoriteData.imgURL,
		tags: favoriteData.tags[0] ? favoriteData.tags : ["Sem Tags"],
	};

	const favorite = new Favorite(newFavoriteData);
	const response = await favorite.save();
	return response;
};
