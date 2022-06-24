import { List } from "../../../types/lists";
import { Lists } from "../../models/lists";

export const DBallLists = async (): Promise<List[]> => {
	const allLists = await Lists.find({}).sort({ index: 1 });
	return allLists;
};
