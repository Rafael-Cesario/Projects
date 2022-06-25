import { List } from "../../../../types/lists";
import { findList } from "../../../utils/findList";

export const DBdeleteTag = async (listName: string, tagName: string): Promise<List> => {
	try {
		const list = await findList(listName);

		const tagIndex = list.tags.indexOf(tagName);

		list.tags.splice(tagIndex, 1);
		list.save();

		return { name: list.name, tags: list.tags, index: list.index };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
