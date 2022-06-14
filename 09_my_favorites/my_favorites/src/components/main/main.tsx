import React from "react";
import { MenuBar } from "./menuBar";

import { MainStyle } from "../../styles/main/mainStyle";
import { Favorites } from "./favorites";

const Main = () => {
	return (
		<MainStyle>
			<MenuBar />
			<Favorites />
		</MainStyle>
	);
};

export { Main };
