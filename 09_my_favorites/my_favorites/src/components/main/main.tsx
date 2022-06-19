import React, { useContext } from "react";
import { MenuBar } from "./menuBar/menuBar";

import { MainStyle } from "../../styles/main/mainStyle";
import { Favorites } from "./favorites";
import { TagContext } from "../../context/tagContext";
import { NewFavorite } from "../newFavorite/newFavorite";

const Main = () => {
	const { showCreateNew, setShowCreateNew } = useContext(TagContext);

	return (
		<MainStyle>
			<MenuBar />
			<Favorites />
			{showCreateNew && (
				<NewFavorite
					title="Criando um novo Favorito"
					changeDisplay={setShowCreateNew}
					isDisplayActive={showCreateNew}
				/>
			)}
		</MainStyle>
	);
};

export { Main };
