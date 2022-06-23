import { Main } from "../components/main/main";
import React from "react";
import { Header } from "../components/Head";
import { Sidebar } from "../components/sidebar/sidebar";
import { GlobalStyle } from "../styles/globalStyle";
import { TagContextProvider } from "../context/tagContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/dataBase/apolloClient";

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className="app">
				<Header title="MyFavorites" />

				<TagContextProvider>
					<Sidebar />
					<Main />
				</TagContextProvider>

				<GlobalStyle />
			</div>
		</ApolloProvider>
	);
};

export default App;
