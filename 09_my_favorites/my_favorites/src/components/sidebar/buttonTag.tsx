import React, { useContext } from "react";

import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { TagContext } from "../../context/tagContext";

interface BtnTag {
	tag: string;
	title: string;
}

const ButtonTag = ({ tag, title }: BtnTag) => {
	const { active, setActive } = useContext(TagContext);

	const className = title === active[0] && tag === active[1] ? "active" : "";
	const icon = title === active[0] && tag === active[1] ? <FaBookmark /> : <FaRegBookmark />;

	const changeActive = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const tag = button.childNodes[1].textContent;
		const title = button.parentNode.previousSibling.textContent;

		setActive([title, tag]);
	};

	return (
		<button className={className} key={tag} onClick={(e) => changeActive(e)}>
			<span className="icon">{icon}</span>
			<span className="txt">{tag}</span>
		</button>
	);
};

export { ButtonTag };
