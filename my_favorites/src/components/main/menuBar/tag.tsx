import { useContext, useEffect } from "react";

import { FaBookmark } from "react-icons/fa";
import { displayContext } from "../../../context/displayContext";

import { TagStyle } from "../../../styles/main/menuBar/tagStyle";

export const Tag = () => {
	const { activeTag } = useContext(displayContext);
	const listName = activeTag.listName;
	const tag = activeTag.tagName;

	useEffect(() => {
		const favorites = document.querySelectorAll(
			".favorite"
		) as NodeListOf<HTMLDivElement>;

		favorites.forEach((favorite) => {
			const belongsTolistName = favorite
				.getAttribute("data-list")
				.toUpperCase();
			const display =
				belongsTolistName != listName.toUpperCase() ? "none" : "flex";

			favorite.style.display = display;
		});
	}, [activeTag]);

	return (
		<TagStyle className="tag">
			<FaBookmark />
			{listName && <input className="tagName" type="text" placeholder={tag} />}
		</TagStyle>
	);
};
