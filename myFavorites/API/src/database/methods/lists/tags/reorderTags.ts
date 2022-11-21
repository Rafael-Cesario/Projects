import { List } from "../../../../types/lists";
import { ListModel } from "../../../models/lists";
import { findList } from "../../../utils/find";

export const DBreorderTags = async (listName: string, tags: string[]): Promise<List> => {
	try {
		const list = await findList(listName);

		list.tags = tags;
		list.save();

		return {
			name: list.name,
			tags: list.tags,
			index: list.index,
		};
	} catch (error: any) {
		throw new Error(error.message);
	}
};
