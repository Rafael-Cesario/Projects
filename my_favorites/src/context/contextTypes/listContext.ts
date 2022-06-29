import { ReactNode } from "react";
import { ListType } from "../../utils/types/list";

export interface ListContextProps {
	children: ReactNode;
}

export type MutationVariables =
	| { variables: { name: string } }
	| { variables: { listName: string; tagName: string } }
	| { variables: { name: string; newName: string } }
	| { variables: { listName: string; tagName: string; newTagName: string } };

export interface ListInterface {
	listsData: ListType[];
	createNewList(variables: MutationVariables): void;
	DBdeleteTag(variables: MutationVariables): void;
	DBdeleteList(variables: MutationVariables): void;
	DBmodifyList(variables: MutationVariables): void;
	DBmodifyTag(variables: MutationVariables): void;
}
