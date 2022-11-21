import produce from "immer";
import { ListType } from "../../types/list";
import { client } from "../apolloClient";
import { LISTS } from "../querys/tags";
import { QueryLists } from "./cacheTypes.ts/tags";

const readQuery = () => {
	return client.readQuery({ query: LISTS }) as QueryLists;
};

const writeQuery = (lists: ListType[]) => {
	client.writeQuery({
		query: LISTS,
		data: { lists },
	});
};

export const Cache_createTag = (listName: string, tagName: string) => {
	const queryLists = readQuery();
	const lists = [...queryLists.lists];
	const listIndex = lists.findIndex((list) => list.name === listName);

	const newLists = produce(lists, (draft) => {
		draft[listIndex].tags = [...draft[listIndex].tags, tagName];
	});

	writeQuery(newLists);
};

export const Cache_deleteTag = (listName: string, tagName: string) => {
	const queryLists = readQuery();
	const lists = [...queryLists.lists];
	const listIndex = lists.findIndex((list) => list.name === listName);
	const list = { ...lists[listIndex] };
	const newTags = lists[listIndex].tags.filter((tag) => tag != tagName);

	list.tags = newTags;
	lists[listIndex] = list;

	writeQuery(lists);
};

export const Cache_modifyTag = (listName: string, tagName: string, newTagName: string) => {
	const queryLists = readQuery();
	const newLists = queryLists.lists.map((list) => {
		const listDraft = { ...list };
		const tagsDraft = [...listDraft.tags];
		const tagIndex = listDraft.tags.indexOf(tagName);

		if (listDraft.name === listName) tagsDraft[tagIndex] = newTagName;

		listDraft.tags = tagsDraft;

		return listDraft;
	});

	writeQuery(newLists);
};
