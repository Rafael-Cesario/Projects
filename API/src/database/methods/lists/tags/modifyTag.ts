import { List } from "../../../../types/lists";
import { findList } from "../../../utils/findList";

export const DBmodifyTag = async (
	listName: string,
	tagName: string,
	newTagName: string
): Promise<List> => {
	try {
		const list = await findList(listName);


		const tagIndex = list.tags.indexOf(tagName);
		list.tags.splice(tagIndex, 1, newTagName);
		list.save();

		return { name: list.name, tags: list.tags, index: list.index };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
