import React, { useContext } from "react";
import { MenuBar } from "./menuBar";

import { MainStyle } from "../../styles/main/mainStyle";
import { Favorites } from "./favorites";
import { TagContext } from "../../context/tagContext";
import { NewFavorite } from "../newFavorite/newFavorite";

const Main = () => {
	const { showCreateNew } = useContext(TagContext);

	return (
		<MainStyle>
			<MenuBar />
			<Favorites />
			{showCreateNew && <NewFavorite />}
		</MainStyle>
	);
};

export { Main };
