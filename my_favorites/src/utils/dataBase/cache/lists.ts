import produce from "immer";
import { ListType } from "../../types/list";
import { client } from "../apolloClient";
import { ALL_LISTS } from "../querys/lists";
import { QueryLists } from "./cacheTypes.ts/tags";

export const Cache_createList = (listName: string, tags, index) => {
	const queryLists = readQuery();

	const newLists = produce(queryLists.lists, (draft) => {
		draft.push({
			name: listName,
			tags: tags,
			index: index,
		});
	});

	writeQuery(newLists);
};

export const Cache_modifyList = (name: string, newName: string) => {
	const queryLists = readQuery();
	const lists = [...queryLists.lists];

	const newLists = lists.map((list) => {
		const draft = { ...list };
		if (draft.name === name) draft.name = newName;
		return draft;
	});

	writeQuery(newLists);
};

export const Cache_deleteList = (name: string) => {
	const querylists = readQuery();
	const lists = querylists.lists.filter((list) => list.name != name);

	console.log(lists);

	writeQuery(lists);
};

const readQuery = () => {
	return client.readQuery({ query: ALL_LISTS }) as QueryLists;
};

const writeQuery = (lists: ListType[]) => {
	client.writeQuery({
		query: ALL_LISTS,
		data: { lists },
	});
};
