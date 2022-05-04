import React, { useContext } from "react";
import { NotebookContext } from "../context/notebooksContext";
import { useNavigate } from "react-router-dom";

interface Notebook {
	elem: {
		name: string;
		id: number;
	};
}

const Notebooks: React.FC = (): any => {
	const { notebooks } = useContext(NotebookContext);

	return notebooks.map((elem) => {
		return <Notebook elem={elem} key={elem.id} />;
	});
};

const Notebook: React.FC<Notebook> = ({ elem }): any => {
	const { name, id } = elem;
	const navigate = useNavigate();

	const toNotebook = (e: React.SyntheticEvent) => {
		navigate(`/notes/${id}`);
	};

	return (
		<div className="note" data-notebook-id={id} onClick={(e) => toNotebook(e)}>
			<h1>{name}</h1>
		</div>
	);
};

export { Notebooks };
