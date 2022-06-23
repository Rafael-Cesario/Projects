import { ApolloCache } from "@apollo/client";
import { Tag } from "../../types/tag";
import { ALL_TAGS } from "../querys/tags";

type cacheType = ApolloCache<unknown>;
type Tags = Tag[];

type createNewList = { createNewTag: { name: string; tags: string[] } };

export const createNewListCache = {
	update(cache: cacheType, { data }: { data: createNewList }) {
		const createListResponse = [data?.createNewTag];
		const existingLists: { tags: Tags } = cache.readQuery({ query: ALL_TAGS });

		const tags = [...existingLists.tags, ...createListResponse];

		cache.writeQuery({
			query: ALL_TAGS,
			data: { tags },
		});
	},
};
