/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext, ReactNode } from "react";
import { CACHE_createList } from "../utils/dataBase/cache/lists";
import { ALL_LISTS, CREATE_LIST } from "../utils/dataBase/querys/lists";
import { useQueryData } from "../utils/hooks/useQueryData";
import type { ListType } from "../utils/types/list";

interface ListContextProps {
	children: ReactNode;
}

type MutationVariables = { variables: { name: string } };

interface TagContextInterface {
	listsData: ListType[];
	createNewList(variables: MutationVariables);
}

const initialValue = {
	listsData: [],
	createNewList: () => {},
};

const ListContext = createContext<TagContextInterface>(initialValue);

const ListContextProvider = ({ children }: ListContextProps) => {
	const listsData = useQueryData(ALL_LISTS, "lists") as ListType[];

	const [createNewList] = useMutation(CREATE_LIST, CACHE_createList);

	return (
		<ListContext.Provider
			value={{
				listsData,
				createNewList,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

export { ListContextProvider, ListContext };
