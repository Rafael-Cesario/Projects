import React from "react";
// import { Link } from "react-router-dom";

//Components
import { Search } from "../components/searchbar";
import { Notebook } from "../components/Notebook";

const Notebooks = () => {
	return (
		<div>
			<Search />
			<Notebook />
		</div>
	);
};

export { Notebooks };
