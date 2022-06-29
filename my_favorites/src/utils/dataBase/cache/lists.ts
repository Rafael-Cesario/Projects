import { ListType } from "../../types/list";
import { client } from "../apolloClient";
import { ALL_LISTS } from "../querys/lists";
import { CreateList, Lists } from "./cacheTypes.ts/lists";
import { cacheType, QueryLists } from "./cacheTypes.ts/tags";

export const CACHE_createList = {
	update(cache: cacheType, { data }: { data: CreateList }) {
		const newList = [data.createList];
		const listsOnCache = cache.readQuery({ query: ALL_LISTS }) as { lists: Lists };

		const lists = [...listsOnCache.lists, ...newList];

		cache.writeQuery({
			query: ALL_LISTS,
			data: { lists },
		});
	},
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
