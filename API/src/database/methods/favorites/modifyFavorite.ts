import { FavoriteType } from "../../../types/favorites";
import { FavoriteModel } from "../../models/favorite";

export const DBmodifyFavorite = async (
	favoriteName: string,
	newFavorite: FavoriteType
): Promise<FavoriteType> => {
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
				genre: genre || ["Sem Genero"],
				tags: tags || ["Sem Tags"],
			},
			{ new: true }
		);

		if (!favorite) throw new Error("Favorite not found");

		return favorite;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
