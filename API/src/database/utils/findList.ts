import { ListModel } from "../models/lists";

export const findList = async (listName: string) => {
	const listNameRegEx = new RegExp(listName, "i");
	const list = await ListModel.findOne({ name: listNameRegEx });

	if (!list) throw new Error("list not found ");

	return list;
};
