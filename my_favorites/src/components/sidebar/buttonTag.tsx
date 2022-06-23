import React, { useContext } from "react";

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { displayContext } from "../../context/displayContext";

interface buttonTagProps {
	title: string;
	tag: string;
}

const ButtonTag = ({ tag, title }: buttonTagProps) => {
	const { activeTag, setActiveTag } = useContext(displayContext);

	const className = title === activeTag.listName && tag === activeTag.tagName ? "active" : "";
	const icon =
		title === activeTag.listName && tag === activeTag.tagName ? <FaBookmark /> : <FaRegBookmark />;

	const changeActive = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const listName = button.parentNode.previousSibling.textContent;
		const tagName = button.childNodes[1].textContent;

		setActiveTag({ listName, tagName });
	};

	return (
		<button className={className} key={tag} onClick={(e) => changeActive(e)}>
			<span className="icon">{icon}</span>
			<span className="txt">{tag}</span>
		</button>
	);
};

export { ButtonTag };
