import { List } from "../../../types/lists";
import { ListModel } from "../../models/lists";

export const DBallLists = async (): Promise<List[]> => {
	const allLists = await ListModel.find({}).sort({ index: 1 });
	return allLists;
};
