import { ApolloCache } from "@apollo/client";
import { ListType } from "../../types/list";
import { ALL_LISTS } from "../querys/lists";

type cacheType = ApolloCache<unknown>;
type Lists = ListType[];
type CreateList = {
	createList: { name: string; tags: string; index: number };
};

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
