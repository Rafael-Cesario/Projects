import { List } from "../../../../types/lists";
import { findList } from "../../../utils/find";

export const DBcreateTag = async (listName: string, tagName: string): Promise<List> => {
	try {
		const list = await findList(listName);

		list.tags.push(tagName);
		list.save();

		return { name: list.name, tags: list.tags, index: list.index };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
