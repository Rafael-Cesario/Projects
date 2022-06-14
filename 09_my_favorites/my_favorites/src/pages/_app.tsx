import { Main } from "../components/main/main";
import React from "react";
import { Header } from "../components/Head";
import { Sidebar } from "../components/sidebar/sidebar";
import { GlobalStyle } from "../styles/globalStyle";

import { TagContextProvider } from "../context/tagContext";

const App = () => {
	return (
		<div className="app">
			<Header title="MyFavorites" />

			<TagContextProvider>
				<Sidebar />
				<Main />
			</TagContextProvider>

			<GlobalStyle />
		</div>
	);
};

export default App;
