import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";

import { TagContainer } from "./tagContainer";

import { TagContext } from "../../context/tagContext";

import { ALLTAGS } from "../../utils/tagsData";

type Tag = {
	name: string;
	tags: string[];
};

const Sidebar = () => {
	const { setShowCreateNew, showCreateNew } = useContext(TagContext);
	const { loading, error, data } = useQuery(ALLTAGS);

	if (loading) return <TagContainer key={"Loading"} title={"Loading..."} tags={[]} />;
	if (error) return <p>Erro tentando carregar suas tags </p>;

	const tagsTitle = data.tags.map((tag: Tag) => tag.name);
	const tags = data.tags.map((tag: Tag) => tag.tags);

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
