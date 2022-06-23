/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation, useQuery } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { createNewListCache } from "../utils/dataBase/cache/tags";
import { ALL_TAGS, NEW_TAG } from "../utils/dataBase/querys/tags";
import type { Tag } from "../utils/types/tag";

type createNewListType = { variables: Tag };

interface TagContextProps {
	children: ReactNode;
}

interface TagContextInterface {
	activeTag: string[];
	setActiveTag: React.Dispatch<React.SetStateAction<string[]>>;
	loading: boolean;
	error: unknown;
	data: { tags: { name: string; tags: string[] }[] };
	createNewList: (variables: createNewListType) => void;
}

const initialValue = {
	activeTag: [],
	setActiveTag: () => {},
	loading: true,
	error: false,
	data: { tags: [] },
	createNewList: () => {},
};

const TagContext = createContext<TagContextInterface>(initialValue);

const TagContextProvider = ({ children }: TagContextProps) => {
	const [activeTag, setActiveTag] = useState(initialValue.activeTag);
	const { loading, error, data } = useQuery(ALL_TAGS);

	const [createNewList] = useMutation(NEW_TAG, createNewListCache);

	return (
		<TagContext.Provider
			value={{
				activeTag,
				setActiveTag,
				loading,
				error,
				data,
				createNewList,
			}}
		>
			{children}
		</TagContext.Provider>
	);
};

export { TagContextProvider, TagContext };
