import { FavoriteModel } from "../../models/favorite";

type DeleteResult = {
	list: string;
	deletedCount: number;
};

export const DBdeleteAllFavorites = async (
	list: string
): Promise<DeleteResult> => {
	try {
		const { deletedCount } = await FavoriteModel.deleteMany({ list });
		return { list, deletedCount };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
