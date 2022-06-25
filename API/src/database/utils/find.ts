import { ListModel } from "../models/lists";

export const findList = async (name: string) => {
	const listNameRegEx = new RegExp(name, "i");
	const list = await ListModel.findOne({ name: listNameRegEx });

	if (!list) throw new Error("list not found ");

	return list;
};
