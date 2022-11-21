import React, { useContext } from "react";
import { NotebookContext } from "../context/notebooksContext";

import { NotebookStyle } from "../styles/Notebook.style";
import { NewNotebook } from "./NewNotebook";
import { Notebooks } from "./Notebooks";

const NotebookContainer: React.FC = () => {
	const { notebooks } = useContext(NotebookContext);

	return (
		<NotebookStyle>
			<NewNotebook />
			{notebooks.length > 0 && <Notebooks />}
		</NotebookStyle>
	);
};

export { NotebookContainer };
