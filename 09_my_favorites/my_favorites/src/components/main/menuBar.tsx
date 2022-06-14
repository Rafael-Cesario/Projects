import React, { useContext } from "react";

// FaRegBookmark, AiFillFilter
import { FaBookmark } from "react-icons/fa";
import { AiFillFilter } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { TagContext } from "../../context/tagContext";

import { MenuBarStyle } from "../../styles/main/menuBarStyle";

const MenuBar = () => {
	const { active } = useContext(TagContext);

	const tag = active[1];

	const filter = "Todos";

	return (
		<MenuBarStyle className="menubar">
			<div className="tag">
				<FaBookmark />
				{filter && <input className="tagName" type="text" placeholder={tag} />}
			</div>

			<div className="filter">
				<button>
					<span className="icon">
						<AiFillFilter />
					</span>
					<span className="txt">Filtro</span>
				</button>
			</div>

			<div className="search">
				<BsSearch className="icon" />
				<input type="text" />
			</div>
		</MenuBarStyle>
	);
};

export { MenuBar };
