import React, { useContext } from "react";

import { FaBookmark } from "react-icons/fa";

import { TagContext } from "../../../context/tagContext";
import { TagStyle } from "../../../styles/main/menuBar/tagStyle";

export const Tag = () => {
	const { active } = useContext(TagContext);

	const tag = active[1];

	const filter = "Todos";

	return (
		<TagStyle className="tag">
			<FaBookmark />
			{filter && <input className="tagName" type="text" placeholder={tag} />}
		</TagStyle>
	);
};
