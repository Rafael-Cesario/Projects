import { ApolloCache } from "@apollo/client";
import { ListType } from "../../../types/list";

export type cacheType = ApolloCache<unknown>;
export type QueryLists = { lists: ListType[] };
