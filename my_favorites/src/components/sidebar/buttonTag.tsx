import React, { useContext } from "react";

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { TagContext } from "../../context/tagContext";

interface buttonTagProps {
	title: string;
	tag: string;
}

const ButtonTag = ({ tag, title }: buttonTagProps) => {
	const { activeTag, setActiveTag } = useContext(TagContext);

	const className = title === activeTag[0] && tag === activeTag[1] ? "active" : "";
	const icon = title === activeTag[0] && tag === activeTag[1] ? <FaBookmark /> : <FaRegBookmark />;

	const changeActive = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const tag = button.childNodes[1].textContent;
		const title = button.parentNode.previousSibling.textContent;

		setActiveTag([title, tag]);
	};

	return (
		<button className={className} key={tag} onClick={(e) => changeActive(e)}>
			<span className="icon">{icon}</span>
			<span className="txt">{tag}</span>
		</button>
	);
};

export { ButtonTag };
