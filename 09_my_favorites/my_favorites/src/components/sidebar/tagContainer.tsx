import React from "react";
import { TagContainerStyle } from "../../styles/sidebar/tagContainerStyle";

import { ButtonTag } from "./buttonTag";

interface Tags {
	title: string;
	tags: string[];
}

const TagContainer = ({ title, tags }: Tags) => {
	const buttonTagArray = tags.map((tag) => <ButtonTag key={tag} tag={tag} title={title} />);

	return (
		<TagContainerStyle>
			<h1 className="title">{title}</h1>
			<div className="tags">{buttonTagArray}</div>
		</TagContainerStyle>
	);
};

export { TagContainer };
