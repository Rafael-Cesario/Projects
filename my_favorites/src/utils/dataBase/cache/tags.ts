import { ListType } from "../../types/list";
import { client } from "../apolloClient";
import { LISTS } from "../querys/tags";
import { QueryLists } from "./cacheTypes.ts/tags";

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

const writeQuery = (lists: ListType[]) => {
	client.writeQuery({
		query: LISTS,
		data: { lists },
	});
};

const readQuery = () => {
	return client.readQuery({ query: LISTS }) as QueryLists;
};
