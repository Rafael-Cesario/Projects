import { List } from "../../../types/lists";
import { Lists } from "../../models/lists";

export const DBreorderLists = async (listIndex: number, newListIndex: number): Promise<List[]> => {
	try {
		await Lists.updateOne({ index: listIndex }, { index: newListIndex });
		await Lists.updateOne({ index: newListIndex }, { index: listIndex });

		return await Lists.find({}).sort({ index: 1 });
	} catch (error: any) {
		throw new Error(error.message);
	}
};
