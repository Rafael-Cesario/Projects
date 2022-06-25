import { TagContainerStyle } from "../../styles/sidebar/tagContainerStyle";
import { ButtonTag } from "./buttonTag";

interface TagContainerProps {
	name: string;
	tags: string[];
}

const TagContainer = ({ name, tags }: TagContainerProps) => {
	const buttonTagArray = tags.map((tag) => <ButtonTag key={tag} tag={tag} title={name} />);

	return (
		<TagContainerStyle>
			<h1 className="title">{name}</h1>
			<div className="tags">{buttonTagArray}</div>
		</TagContainerStyle>
	);
};

export { TagContainer };
