import React from "react";
import { Link } from "react-router-dom";

const Notebooks = () => {
	return (
		<div>
			<h1>Notebooks page</h1>
			<Link to="/notes">Notes page</Link>
		</div>
	);
};

export { Notebooks };
