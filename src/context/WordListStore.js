import { createContext, useEffect } from "react";
import { wordListReducer } from "./reducers/wordListReducer";
import { useImmerReducer } from "use-immer";

export const WordListStore = createContext();

const WordListStoreProvider = ({ children }) => {
	const [wordListStore, dispatch] = useImmerReducer(wordListReducer, {}, () => {
		const data = localStorage.getItem("wordListStore");
		return data ? JSON.parse(data) : {};
	});

	useEffect(() => {
		localStorage.setItem("wordListStore", JSON.stringify(wordListStore));
	}, [wordListStore]);

	return <WordListStore.Provider value={{ wordListStore, dispatch }}>{children}</WordListStore.Provider>;
};

export default WordListStoreProvider;
