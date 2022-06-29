import { gql } from "@apollo/client";

export const LISTS = gql`
	query Lists {
		lists {
			index
			name
			tags
		}
	}
`;

export const CREATE_TAG = gql`
	mutation CreateTag($listName: String, $tagName: String) {
		createTag(listName: $listName, tagName: $tagName) {
			name
			index
			tags
		}
	}
`;

export const DELETE_TAG = gql`
	mutation DeleteTag($listName: String, $tagName: String) {
		deleteTag(listName: $listName, tagName: $tagName) {
			name
			tags
			index
		}
	}
`;
