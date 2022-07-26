import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const body = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(body);

const titulo = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};

root.render(titulo());
