import React, { useContext } from "react";
import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";

import { TagContainer } from "./tagContainer";
import { NewFavorite } from "./newFavorite";
import { TagContext } from "../../context/tagContext";

const Sidebar = () => {
	// will come from a dB.
	const data = {
		Jogos: ["Todos", "wishlist", "Instalados", "favoritos", "Zerados"],
		Livros: ["Todos", "wishlist", "lidos", "favoritos"],
	};

	const { setShowCreateNew, showCreateNew } = useContext(TagContext);

	const tagsTitle = Object.keys(data);
	const tags = Object.values(data);

	const tagsTitleArray = tagsTitle.map((title, index) => <TagContainer key={title} title={title} tags={tags[index]} />);

	return (
		<SidebarStyle>
			<button onClick={() => setShowCreateNew(!showCreateNew)}>
				<span className="icon">+</span>
				<span className="txt">Adicionar Novo</span>
			</button>

			{tagsTitleArray}

			{showCreateNew && <NewFavorite />}
		</SidebarStyle>
	);
};

export { Sidebar };
