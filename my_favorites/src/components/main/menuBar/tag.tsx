import { useContext, useEffect } from "react";

import { FaBookmark } from "react-icons/fa";

import { TagContext } from "../../../context/tagContext";
import { TagStyle } from "../../../styles/main/menuBar/tagStyle";

export const Tag = () => {
	const { activeTag: active } = useContext(TagContext);
	const tag = active[1];
	const filter = active[0];

	useEffect(() => {
		const favorites = document.querySelectorAll(".favorite") as NodeListOf<HTMLDivElement>;

		favorites.forEach((favorite) => {
			const belongsTolistName = favorite.getAttribute("data-list");
			const display = belongsTolistName != filter ? "none" : "flex";

			favorite.style.display = display;
		});
	}, [active]);

	return (
		<TagStyle className="tag">
			<FaBookmark />
			{filter && <input className="tagName" type="text" placeholder={tag} />}
		</TagStyle>
	);
};
