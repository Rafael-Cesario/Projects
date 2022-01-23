import { createContext, useReducer, useEffect } from "react";
import { wordListReducer } from "./reducers/wordListReducer";
import produce from "immer";

export const WordListStore = createContext();

const myWordReducer = produce(wordListReducer);

const WordListStoreProvider = ({ children }) => {
  const [wordListStore, dispatch] = useReducer(myWordReducer, {}, () => {
    const data = localStorage.getItem("wordListStore");
    return data ? JSON.parse(data) : {};
  });

  useEffect(() => {
    localStorage.setItem("wordListStore", JSON.stringify(wordListStore));
  }, [wordListStore]);

  return (
    <WordListStore.Provider value={{ wordListStore, dispatch }}>
      {children}
    </WordListStore.Provider>
  );
};

export default WordListStoreProvider;
