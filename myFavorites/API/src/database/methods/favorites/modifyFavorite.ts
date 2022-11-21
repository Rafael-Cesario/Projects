import { FavoriteType } from "../../../types/favorites";
import { FavoriteModel } from "../../models/favorite";

export const DBmodifyFavorite = async (
	favoriteName: string,
	newFavorite: FavoriteType
): Promise<{ oldName: string; newFavorite: FavoriteType }> => {
	try {
		const { list, name, imgURL, note, genre, tags } = newFavorite;
		const nameRegEx = new RegExp(favoriteName, "i");
		const favorite = await FavoriteModel.findOneAndUpdate(
			{ name: nameRegEx },
			{
				list: list,
				name: name,
				imgURL: imgURL,
				note: note || "Sem Nota",
				genre: genre?.length > 0 ? genre : ["Sem Genero"],
				tags: tags?.length > 0 ? tags : ["Sem Tags"],
			},
			{ new: true }
		);

		if (!favorite) throw new Error("Favorite not found");

		return { oldName: favoriteName, newFavorite: favorite };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
