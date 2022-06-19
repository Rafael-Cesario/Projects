import React from "react";

import produce from "immer";

import { FormFildsStyle } from "../../styles/newFavorite/formFildsStyle";
import type { FavoriteType } from "../newFavorite/newFavorite";

interface FormFildsProps {
	fildsValue: FavoriteType;
	setFildsValue: React.Dispatch<React.SetStateAction<FavoriteType>>;
}

export const FormFilds = ({ fildsValue, setFildsValue }: FormFildsProps) => {
	const { name, note, genre, imgURL, tags } = fildsValue;
	const notes = ["Incrivel", "Bom", "Normal", "Ruim", "Sem Nota"];

	const optionsJSXArray = notes.map((note, index) => (
		<option key={note + index} value={note}>
			{note}
		</option>
	));

	const changeFildValue = (fildName: string, value: string) => {
		const newValue = fildName === "tags" ? value.split(",").map((tag) => tag.trim()) : value;

		setFildsValue(
			produce(fildsValue, (draft) => {
				draft[fildName] = newValue;
			})
		);
	};

	return (
		<FormFildsStyle>
			<div className="fild">
				<span>Nome</span>
				<input
					type="text"
					placeholder={name}
					onChange={(e) => changeFildValue("name", e.target.value)}
				/>
			</div>

			<div className="fild">
				<span>Nota</span>
				<select defaultValue={note} onChange={(e) => changeFildValue("note", e.target.value)}>
					{optionsJSXArray}
				</select>
			</div>

			<div className="fild">
				<span>Genero</span>
				<input
					type="text"
					placeholder={genre.toString()}
					onChange={(e) => changeFildValue("genre", e.target.value)}
				/>
			</div>

			<div className="fild">
				<span>Link para uma Imagem</span>
				<input placeholder={imgURL} onChange={(e) => changeFildValue("imgURL", e.target.value)} />
			</div>

			<div className="fild">
				<span>Tags</span>
				<input
					className="tags-input"
					type="text"
					placeholder={tags.toString()}
					onChange={(e) => changeFildValue("tags", e.target.value)}
				/>
			</div>
		</FormFildsStyle>
	);
};
