import { FavoriteType } from "../../../types/favorites";
import { FavoriteModel } from "../../models/favorite";

export const DBcreateFavorite = async (favoriteOBJ: FavoriteType): Promise<FavoriteType> => {
	try {
		const { list, name, note, genre, tags, imgURL } = favoriteOBJ;
		const nameRegEx = new RegExp(name, "i");
		const alreadyExist = await FavoriteModel.findOne({ name: nameRegEx });

		if (alreadyExist) throw new Error("This favorite already exists");

		const favorite = new FavoriteModel({
			list: list,
			name: name,
			imgURL: imgURL,
			note: note || "Sem Nota",
			genre: genre || ["Sem Genero"],
			tags: tags || ["Sem Tags"],
		});

		await favorite.save();

		return favorite;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
