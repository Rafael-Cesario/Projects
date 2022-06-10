import React from "react";
import { Header } from "../components/Head";
import { GlobalStyle } from "../styles/globalStyle";

const App = () => {
	return (
		<>
			<Header title="MyFavorites" />
			<h1>Hello World</h1>

			<GlobalStyle />
		</>
	);
};

export default App;
