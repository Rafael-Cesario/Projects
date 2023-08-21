import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { GlobalStyle } from "./styles/global-style.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
