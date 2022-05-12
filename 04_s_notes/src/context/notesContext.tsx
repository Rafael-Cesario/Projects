import React, { createContext, ReactNode, useEffect, useState } from "react";
import { fetchNotes } from "../shared/request";

interface NotesContextProps {
	children: ReactNode;
}

interface contextType {
	pages: {};
	currentPage: number;
	pageName: string;
	favColors: string[]
	configs: boolean;
	setPages: React.Dispatch<React.SetStateAction<{}>>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	setPageName: React.Dispatch<React.SetStateAction<string>>;
	setFavColors: React.Dispatch<React.SetStateAction<string[]>>;
	setConfigs: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValue = {
	pages: {},
	currentPage: 0,
	pageName: "",
	favColors: ["#d8d8d8", "#307eac", "#dfba16", "#b13838"],
	configs: false,
	setPages: () => { },
	setCurrentPage: () => { },
	setPageName: () => { },
	setFavColors: () => { },
	setConfigs: () => { },
};

const NotesContext = createContext<contextType>(initialValue);

const NotesContextProvider: React.FC<NotesContextProps> = ({ children }) => {
	const [pages, setPages] = useState(initialValue.pages);
	const [currentPage, setCurrentPage] = useState(initialValue.currentPage);
	const [pageName, setPageName] = useState(initialValue.pageName);
	const [favColors, setFavColors] = useState(initialValue.favColors)
	const [configs, setConfigs] = useState(initialValue.configs);

	return (
		<NotesContext.Provider
			value={{
				pages,
				setPages,
				currentPage,
				setCurrentPage,
				pageName,
				setPageName,
				favColors,
				setFavColors,
				configs,
				setConfigs
			}}>
			{children}
		</NotesContext.Provider>

	)
};

export { NotesContext, NotesContextProvider };
