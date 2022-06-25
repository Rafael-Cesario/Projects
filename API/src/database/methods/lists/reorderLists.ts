import { List } from "../../../types/lists";
import { ListModel } from "../../models/lists";

export const DBreorderLists = async (listIndex: number, newListIndex: number): Promise<List[]> => {
	try {
		await ListModel.updateOne({ index: listIndex }, { index: newListIndex });
		await ListModel.updateOne({ index: newListIndex }, { index: listIndex });

		return await ListModel.find({}).sort({ index: 1 });
	} catch (error: any) {
		throw new Error(error.message);
	}
};
