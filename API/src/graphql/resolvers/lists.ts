import { DBcreateNewList } from "../../database/methods/lists/createList";
import { DBdeleteList } from "../../database/methods/lists/deleteList";
import { DBallLists } from "../../database/methods/lists/lists";
import { DBmodifyList } from "../../database/methods/lists/modifyList";
import { DBreorderLists } from "../../database/methods/lists/reorderLists";

export const resolvers = {
	Query: {
		lists() {
			const allLists = DBallLists();
			return allLists;
		},
	},

	Mutation: {
		createList(obj: unknown, args: { name: string }) {
			const { name } = args;
			const newList = DBcreateNewList(name);
			return newList;
		},

		deleteList(obj: unknown, args: { name: string }) {
			const { name } = args;
			const response = DBdeleteList(name);
			return response;
		},

		modifyList(obj: unknown, args: { name: string; newName: string }) {
			const { name, newName } = args;
			const response = DBmodifyList(name, newName);
			return response;
		},

		reorderLists(obj: unknown, args: { listIndex: number; newListIndex: number }) {
			const { listIndex, newListIndex } = args;
			const response = DBreorderLists(listIndex, newListIndex);
			return response;
		},
	},
};
