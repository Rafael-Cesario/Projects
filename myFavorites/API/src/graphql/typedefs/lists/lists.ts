import { gql } from "apollo-server";

export const typeDefs = gql`
	type Query {
		lists: [List]
	}

	type Mutation {
		createList(name: String): List
		deleteList(name: String): DeleteList
		modifyList(name: String, newName: String): List
		reorderLists(listIndex:Int, newListIndex:Int): [List]
	}
`;
