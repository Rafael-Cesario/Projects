import React from "react";

import { SearchBarStyle } from "../styles/SearchBar.style";

const Search = () => {
	return (
		<SearchBarStyle>
			<input type="text" placeholder="Pesquisar" />
		</SearchBarStyle>
	);
};

export { Search };
