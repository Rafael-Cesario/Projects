import React from "react";

import { MenuBarStyle } from "../../../styles/main/menuBar/menuBarStyle";
import { Filter } from "./filter";
import { Search } from "./search";
import { Tag } from "./tag";

const MenuBar = () => {
	return (
		<MenuBarStyle className="menubar">
			<Tag />

			<Filter />

			<Search />
		</MenuBarStyle>
	);
};

export { MenuBar };
