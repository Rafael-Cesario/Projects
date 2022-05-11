import React, { createContext, ReactNode, useState } from "react";

interface NotesContextProps {
	children: ReactNode;
}

interface contextType {
	pages: {};
	currentPage: number;
	setPages: React.Dispatch<React.SetStateAction<{}>>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const initialValue = {
	pages: {},
	currentPage: 0,
	setPages: () => {},
	setCurrentPage: () => {},
};

const NotesContext = createContext<contextType>(initialValue);

const NotesContextProvider: React.FC<NotesContextProps> = ({ children }) => {
	const [pages, setPages] = useState(initialValue.pages);
	const [currentPage, setCurrentPage] = useState(initialValue.currentPage);

	return <NotesContext.Provider value={{ pages, setPages, currentPage, setCurrentPage: setCurrentPage }}>{children}</NotesContext.Provider>;
};

export { NotesContext, NotesContextProvider };
