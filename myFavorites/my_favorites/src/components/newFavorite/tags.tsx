import React, { useContext } from "react";
import produce from "immer";
import { TagsStyled } from "../../styles/newFavorite/tagsStyled";
import { FavoriteType } from "../../utils/types/favorite";
import { formFildsContext } from "../../context/formFildsContext";

interface TagsProps {
	fildsValue: FavoriteType;
}

export const Tags = ({ fildsValue }: TagsProps) => {
	const { setFildsValue } = useContext(formFildsContext);
	const { tags } = fildsValue;

	const removeTag = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const buttonContent = button.childNodes[0].textContent;
		const inputTags = document.querySelector(".tags-input") as HTMLInputElement;
		const newTags = fildsValue.tags.filter((tag) => tag != buttonContent);

		inputTags.value = newTags.toString();

		setFildsValue(
			produce(fildsValue, (draft) => {
				draft.tags = newTags;
			})
		);
	};

	return (
		<TagsStyled className="tags">
			{tags.map((tag, index) => (
				<button key={tag + index} className="tag" type="button" onClick={(e) => removeTag(e)}>
					<span>{tag}</span>
					<i className="delete">X</i>
				</button>
			))}
		</TagsStyled>
	);
};
