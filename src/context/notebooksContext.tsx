import React, { createContext, ReactNode, useEffect, useState } from "react";

import { fetchNotebooks } from "../shared/request";


interface NotebookContextProps {
	children: ReactNode;
}

interface ContextType {
	notebooks: { name: string; id: number }[];
	setNotebooks: React.Dispatch<React.SetStateAction<never[]>>;
}

const initialValue = {
	notebooks: [],
	setNotebooks: () => {},
};

const NotebookContext = createContext<ContextType>(initialValue);

const NotebookContextProvider: React.FC<NotebookContextProps> = ({ children }) => {
	const [notebooks, setNotebooks] = useState(initialValue.notebooks);

	useEffect(() => {
		fetchNotebooks(setNotebooks);
	}, [setNotebooks]);

	return <NotebookContext.Provider value={{ notebooks, setNotebooks }}>{children}</NotebookContext.Provider>;
};

export { NotebookContext, NotebookContextProvider };
