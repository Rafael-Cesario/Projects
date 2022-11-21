import { List } from "../../../types/lists";
import { ListModel } from "../../models/lists";

export const DBmodifyList = async (name: string, newName: string): Promise<List> => {
	try {
		const regExName = new RegExp(name, "i");
		const updateList = await ListModel.findOneAndUpdate(
			{ name: regExName },
			{ name: newName },
			{ new: true }
		);

		if (!updateList) throw new Error("List not found.");

		return { name: updateList.name, tags: updateList.tags, index: updateList.index };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
