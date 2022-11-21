import React from "react";

//Components
import { Search } from "../components/SearchBar";
import { NotebookContainer } from "../components/NotebookContainer";
import { PopUpMessage } from "../components/PopUpMessage";

//Context
import { MessageContextProvider } from "../context/messageContext";
import { NotebookContextProvider } from "../context/notebooksContext";

const Notebooks = () => {
	return (
		<div>
			<NotebookContextProvider>
				<Search />
				<MessageContextProvider>
					<NotebookContainer />
					<PopUpMessage />
				</MessageContextProvider>
			</NotebookContextProvider>
		</div>
	);
};

export { Notebooks };
