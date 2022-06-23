import type { Tag } from "../../utils/types/tag";

import { useContext, useEffect, useState } from "react";
import { TagContext } from "../../context/tagContext";
import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";
import { NewFavorite } from "../newFavorite/newFavorite";
import { TagContainer } from "./tagContainer";
import { FormFildsContextProvider } from "../../context/formFildsContext";
import { displayContext } from "../../context/displayContext";

const Sidebar = () => {
	const [showCreateNew, setShowCreateNew] = useState(false);
	const { setActiveTag } = useContext(displayContext);
	const { allTagsData } = useContext(TagContext);

	const firstListName = allTagsData[0]?.name;

	const tagsName = allTagsData.map((tag: Tag) => tag.name);
	const tags = allTagsData.map((tag: Tag) => tag.tags);

	const tagsJSXArray = tagsName?.map((name, index) => (
		<TagContainer key={name} name={name} tags={[...tags[index], "Todos"]} />
	));

	useEffect(() => setActiveTag({ listName: firstListName, tagName: "Todos" }), [allTagsData]);

	return (
		<SidebarStyle>
			<button onClick={() => setShowCreateNew(!showCreateNew)}>
				<span className="icon">+</span>
				<span className="txt">Novo</span>
			</button>

			{tagsJSXArray}

			<FormFildsContextProvider>
				{showCreateNew && (
					<NewFavorite
						title="Novo Favorito"
						changeDisplay={setShowCreateNew}
						isDisplayActive={showCreateNew}
					/>
				)}
			</FormFildsContextProvider>
		</SidebarStyle>
	);
};

export { Sidebar };
