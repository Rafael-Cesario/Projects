import { createContext, useReducer, useEffect } from "react";
import { wordListReducer } from "./reducers/wordListReducer";

export const WordListStore = createContext();

const WordListStoreProvider = ({ children }) => {
  const [wordListStore, dispatch] = useReducer(wordListReducer, {}, () => {
    const data = localStorage.getItem("wordListStore");
    return data ? JSON.parse(data) : {};
  });

  useEffect(() => {
    localStorage.setItem("wordListStore", JSON.stringify(wordListStore));
  }, [wordListStore]);

  return (
    <WordListStore.Provider value={{wordListStore, dispatch}}>
      {children}
    </WordListStore.Provider>
  );
};

export default WordListStoreProvider;
