import { ListType } from "../../../types/list";
import { ApolloCache } from "@apollo/client";

export type QueryLists = {
	lists: ListType[];
};

export type cacheType = ApolloCache<unknown>;
export type Lists = ListType[];
export type CreateList = {
	createList: { name: string; tags: string; index: number };
};
