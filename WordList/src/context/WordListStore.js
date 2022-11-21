import { createContext, useEffect, useReducer } from "react";
import wordListReducer from "./reducers/wordListReducer";
import produce from "immer";

export const WordListStore = createContext();

const wordListproduceReducer = produce(wordListReducer);

const WordListStoreProvider = ({ children }) => {
	const [wordListStore, dispatch] = useReducer(wordListproduceReducer, {}, () => {
		const data = localStorage.getItem("wordListStore");
		return data ? JSON.parse(data) : {};
	});

	useEffect(() => {
		localStorage.setItem("wordListStore", JSON.stringify(wordListStore));
	}, [wordListStore]);

	return <WordListStore.Provider value={{ wordListStore, dispatch }}>{children}</WordListStore.Provider>;
};

export default WordListStoreProvider;
