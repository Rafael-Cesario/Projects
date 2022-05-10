import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useImmerReducer } from "use-immer";
import { fetchNotebooks } from "../shared/request";
import { colorReducer } from "../reducer/colorReducer";

type action = { type: "CHANGECOLOR"; payload: { colorIndex: number; newColor: string } } | { type: "ATTCOLORS"; payload: { colors: { color: string[] } } };

interface NotebookContextProps {
	children: ReactNode;
}

interface ContextType {
	notebooks: { name: string; id: number }[];
	colors: { color: string[] };
	setNotebooks: React.Dispatch<React.SetStateAction<never[]>>;
	dispatchColors: React.Dispatch<action>;
}

const initialValue = {
	notebooks: [],
	colors: { color: ["#ffffff", "#3c5b96", "#883b3b", "#e7c21f", "#ffffff"] },
	setNotebooks: () => {},
	dispatchColors: () => {},
};

const NotebookContext = createContext<ContextType>(initialValue);

const NotebookContextProvider: React.FC<NotebookContextProps> = ({ children }) => {
	const [colors, dispatchColors] = useImmerReducer(colorReducer, { color: ["#e2e2e2", "#d8d8d8", "#307eac", "#dfba16", "#b13838"] });
	const [notebooks, setNotebooks] = useState(initialValue.notebooks);

	useEffect(() => {
		fetchNotebooks(setNotebooks);
	}, [setNotebooks]);

	return <NotebookContext.Provider value={{ notebooks, setNotebooks, colors, dispatchColors }}>{children}</NotebookContext.Provider>;
};

export { NotebookContext, NotebookContextProvider };
