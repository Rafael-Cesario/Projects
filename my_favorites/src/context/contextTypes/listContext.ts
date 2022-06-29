import { ReactNode } from "react";
import { ListType } from "../../utils/types/list";

export interface ListContextProps {
	children: ReactNode;
}

export type MutationVariables = { variables: { name: string } } | { variables: { listName: string; tagName: string } };

export interface TagContextInterface {
	listsData: ListType[];
	createNewList(variables: MutationVariables): void;
	DBdeleteTag(variables: MutationVariables): void;
	DBdeleteList(variables: MutationVariables): void;
}
