import React from "react";
import { Routes, Route } from "react-router-dom";
import { Notebooks } from "./pages/Notebooks";
import { Notes } from "./pages/Notes";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Notebooks />} />
				<Route path="/notes" element={<Notes />} />
			</Routes>
		</div>
	);
};

export default App;
