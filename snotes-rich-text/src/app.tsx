import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotesContextProvider } from "./context/notesContext";
import { Notebooks } from "./pages/Notebooks";
import { Notes } from "./pages/Notes";

const App = () => {
	return (
		<div>
			<NotesContextProvider>
				<Routes>
					<Route path="*" element={<Notebooks />} />
					<Route path="/notes/:id" element={<Notes />} />
				</Routes>
			</NotesContextProvider>
		</div>
	);
};

export default App;
