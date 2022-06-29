/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from "@apollo/client";
import { createContext } from "react";
import { CACHE_createList } from "../utils/dataBase/cache/lists";
import { ALL_LISTS, CREATE_LIST, DELETE_LIST, MODIFY_LIST } from "../utils/dataBase/querys/lists";
import { DELETE_TAG, MODIFY_TAG } from "../utils/dataBase/querys/tags";
import { useQueryData } from "../utils/hooks/useQueryData";
import type { ListType } from "../utils/types/list";
import { ListContextProps, ListInterface } from "./contextTypes/listContext";

const initialValue = {
	listsData: [],
	createNewList: () => {},
	DBdeleteList: () => {},
	DBmodifyList: () => {},

	DBdeleteTag: () => {},
	DBmodifyTag: () => {},
};

const ListContext = createContext<ListInterface>(initialValue);

const ListContextProvider = ({ children }: ListContextProps) => {
	const listsData = useQueryData(ALL_LISTS, "lists") as ListType[];

	const [createNewList] = useMutation(CREATE_LIST, CACHE_createList);
	const [DBmodifyList] = useMutation(MODIFY_LIST);
	const [DBdeleteList] = useMutation(DELETE_LIST);

	const [DBmodifyTag] = useMutation(MODIFY_TAG);
	const [DBdeleteTag] = useMutation(DELETE_TAG);

	return (
		<ListContext.Provider
			value={{
				listsData,
				createNewList,
				DBmodifyList,
				DBdeleteList,

				DBdeleteTag,
				DBmodifyTag,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

export { ListContextProvider, ListContext };
