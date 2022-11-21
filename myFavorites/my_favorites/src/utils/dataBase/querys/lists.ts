import { gql } from "@apollo/client";

export const ALL_LISTS = gql`
	query Lists {
		lists {
			index
			name
			tags
		}
	}
`;

export const CREATE_LIST = gql`
	mutation CreateList($name: String) {
		createList(name: $name) {
			name
			tags
			index
		}
	}
`;

export const DELETE_LIST = gql`
	mutation DeleteList($name: String) {
		deleteList(name: $name) {
			name
			deletedCount
		}
	}
`;

export const MODIFY_LIST = gql`
	mutation ModifyList($name: String, $newName: String) {
		modifyList(name: $name, newName: $newName) {
			name
			tags
			index
		}
	}
`;

export const REORDER_LISTS = gql`
	mutation ReorderLists($listIndex: Int, $newListIndex: Int) {
		reorderLists(listIndex: $listIndex, newListIndex: $newListIndex) {
			name
			tags
			index
		}
	}
`;
