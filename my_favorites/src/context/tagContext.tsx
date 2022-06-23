/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation, useQuery } from "@apollo/client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { createNewListCache } from "../utils/dataBase/cache/tags";
import { ALL_TAGS, NEW_TAG } from "../utils/dataBase/querys/tags";
import type { Tag } from "../utils/types/tag";

type createNewListType = { variables: Tag };

interface TagContextProps {
	children: ReactNode;
}

interface TagContextInterface {
	allTagsData: Tag[];
	createNewList: (variables: createNewListType) => void;
}

const initialValue = {
	createNewList: () => {},
	allTagsData: [],
};

const TagContext = createContext<TagContextInterface>(initialValue);

const TagContextProvider = ({ children }: TagContextProps) => {
	const { loading, data } = useQuery(ALL_TAGS);
	const [allTagsData, setAllTagsData] = useState(initialValue.allTagsData);
	const [createNewList] = useMutation(NEW_TAG, createNewListCache);

	useEffect(() => {
		!loading && setAllTagsData(data.tags);
	}, [loading]);

	return (
		<TagContext.Provider
			value={{
				createNewList,
				allTagsData,
			}}
		>
			{children}
		</TagContext.Provider>
	);
};

export { TagContextProvider, TagContext };
