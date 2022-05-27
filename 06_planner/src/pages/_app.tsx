import React from "react";

import { GlobalStyle } from "../styles/globalStyle";
import { PlannerStyle } from "../styles/planner";

import { Header } from "../components/Head";
import { Planner } from "../components/Planner";

const App = () => {
	return (
		<>
			<Header title={"Planner"} />

			<PlannerStyle className="planner">
				<Planner />
			</PlannerStyle>

			<GlobalStyle />
		</>
	);
};

export default App;
