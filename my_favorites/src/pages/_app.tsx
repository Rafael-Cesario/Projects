import { Main } from "../components/main/main";
import React from "react";
import { Header } from "../components/Head";
import { Sidebar } from "../components/sidebar/sidebar";
import { GlobalStyle } from "../styles/globalStyle";
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/dataBase/apolloClient";
import { DisplayContextProvider } from "../context/displayContext";
import { TagContextProvider } from "../context/tagContext";

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className="app">
				<Header title="MyFavorites" />

				<DisplayContextProvider>
					<TagContextProvider>
						<Sidebar />
						<Main />
					</TagContextProvider>
				</DisplayContextProvider>

				<GlobalStyle />
			</div>
		</ApolloProvider>
	);
};

export default App;
