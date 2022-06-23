import type { Tag } from "../../utils/types/tag";

import { useContext, useEffect, useState } from "react";
import { TagContext } from "../../context/tagContext";
import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";
import { NewFavorite } from "../newFavorite/newFavorite";
import { TagContainer } from "./tagContainer";

const Sidebar = () => {
	const [showCreateNew, setShowCreateNew] = useState(false);
	const { setActiveTag: setActive, loading, data, error } = useContext(TagContext);

	const tagsName = data?.tags.map((tag: Tag) => tag.name);
	const tags = data?.tags.map((tag: Tag) => tag.tags);

	const tagsJSXArray = tagsName?.map((name, index) => (
		<TagContainer key={name} name={name} tags={[...tags[index], "Todos"]} />
	));

	const changeActiveTag = () => {
		const firstListName = data?.tags[0]?.name;

		if (!loading && firstListName) {
			setActive([firstListName, "Todos"]);
		}
	};

	useEffect(() => changeActiveTag(), [loading]);

	if (loading) return <TagContainer key={"Loading"} name={"Loading..."} tags={[]} />;
	if (error) return <p>Erro tentando carregar suas tags </p>;

	return (
		<SidebarStyle>
			<button onClick={() => setShowCreateNew(!showCreateNew)}>
				<span className="icon">+</span>
				<span className="txt">Novo</span>
			</button>

			{tagsJSXArray}

			{showCreateNew && (
				<NewFavorite
					title="Novo Favorito"
					changeDisplay={setShowCreateNew}
					isDisplayActive={showCreateNew}
				/>
			)}
		</SidebarStyle>
	);
};

export { Sidebar };
