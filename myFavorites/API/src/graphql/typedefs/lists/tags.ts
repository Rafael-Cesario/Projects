import { gql } from "apollo-server";

export const typeDefs = gql`
	type Mutation {
		createTag(listName: String, tagName: String): List
		deleteTag(listName: String, tagName: String): List
		modifyTag(listName: String, tagName: String, newTagName: String): List
		reorderTags(listName: String, tags: [String]): List
	}
`;
