import React, { useContext } from "react";
import { NotebookContext } from "../context/notebooksContext";
import { SearchBarStyle } from "../styles/SearchBar.style";
import { filterNotebooks } from "../shared/request";

const Search: React.FC = () => {
	const { setNotebooks } = useContext(NotebookContext);

	return (
		<SearchBarStyle>
			<input type="text" placeholder="Pesquisar" onChange={(e) => filterNotebooks(e.target.value, setNotebooks)} />
		</SearchBarStyle>
	);
};

export { Search };
