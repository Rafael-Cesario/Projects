import React, { useContext } from "react";
import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";

import { TagContainer } from "./tagContainer";

import { TagContext } from "../../context/tagContext";

import { tagsData } from "../../utils/tagsData";

const Sidebar = () => {
	const { setShowCreateNew, showCreateNew } = useContext(TagContext);

	const tagsTitle = Object.keys(tagsData);
	const tags = Object.values(tagsData);

	const tagsTitleArray = tagsTitle.map((title, index) => (
		<TagContainer key={title} title={title} tags={tags[index]} />
	));

	return (
		<SidebarStyle>
			<button onClick={() => setShowCreateNew(!showCreateNew)}>
				<span className="icon">+</span>
				<span className="txt">Adicionar Novo</span>
			</button>

			{tagsTitleArray}
		</SidebarStyle>
	);
};

export { Sidebar };
