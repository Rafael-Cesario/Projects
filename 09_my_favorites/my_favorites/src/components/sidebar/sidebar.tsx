import React from "react";
import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";

import { TagContainer } from "./tagContainer";

const Sidebar = () => {
	// will come from a dB.
	const data = {
		Jogos: ["Todos", "wishlist", "Instalados", "favoritos", "Zerados"],
		Livros: ["Todos", "wishlist", "lidos", "favoritos"],
	};

	const tagsTitle = Object.keys(data);
	const tags = Object.values(data);

	const tagsTitleArray = tagsTitle.map((title, index) => <TagContainer key={title} title={title} tags={tags[index]} />);

	return (
		<SidebarStyle>
			<button>
				<span className="icon">+</span>
				<span className="txt">Adicionar Novo</span>
			</button>

			{tagsTitleArray}
		</SidebarStyle>
	);
};

export { Sidebar };
