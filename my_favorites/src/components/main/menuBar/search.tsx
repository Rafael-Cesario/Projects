import React, { useContext } from "react";

import { BsSearch } from "react-icons/bs";
import { displayContext } from "../../../context/displayContext";
import { SearchStyle } from "../../../styles/main/menuBar/searchStyle";

export const Search = () => {
	const { activeTag } = useContext(displayContext);

	const searchFavorite = (name: string) => {
		const favorites = document.querySelectorAll(".favorite") as NodeListOf<HTMLDivElement>;

		favorites.forEach((favorite) => {
			if (favorite.getAttribute("data-list") != activeTag.listName) return;

			const favoriteName = favorite.childNodes[0].textContent;
			const searchREG = new RegExp(name, "ig");
			const hasString = favoriteName.search(searchREG);
			const display = hasString > -1 ? "flex" : "none";

			favorite.style.display = display;
		});
	};

	return (
		<SearchStyle className="search">
			<BsSearch className="icon" />
			<input type="text" onChange={(e) => searchFavorite(e.target.value)} />
		</SearchStyle>
	);
};
