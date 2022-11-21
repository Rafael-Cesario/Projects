import { List } from "../../../types/lists";
import { ListModel } from "../../models/lists";
import { DBallLists } from "./lists";

export const DBcreateNewList = async (name: string): Promise<List> => {
	try {
		const allLists = await DBallLists();
		const listAlreadyExist = allLists.some((list) => list.name === name);

		if (listAlreadyExist) throw new Error(`List already exist.`);

		const index = allLists.length;
		const newList = new ListModel({ name, tags: ["Todos"], index });

		await newList.save();
		return newList;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
