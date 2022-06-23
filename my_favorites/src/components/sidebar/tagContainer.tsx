import { TagContainerStyle } from "../../styles/sidebar/tagContainerStyle";
import { ButtonTag } from "./buttonTag";
import type { Tag } from "../../utils/types/tag";

const TagContainer = ({ name, tags }: Tag) => {
	const buttonTagArray = tags.map((tag) => <ButtonTag key={tag} tag={tag} title={name} />);

	return (
		<TagContainerStyle>
			<h1 className="title">{name}</h1>
			<div className="tags">{buttonTagArray}</div>
		</TagContainerStyle>
	);
};

export { TagContainer };
