import React from "react";

import produce from "immer";

import type { FavoriteType } from "../newFavorite/newFavorite";
import { FormFildsStyle } from "../../styles/newFavorite/formFildsStyle";

interface FormFildsProps {
	fildsValue: FavoriteType;
	setFildsValue: React.Dispatch<React.SetStateAction<FavoriteType>>;
}

export const FormFilds = ({ fildsValue, setFildsValue }: FormFildsProps) => {
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
				<input type="text" placeholder="Nome..." onChange={(e) => changeFildValue("name", e.target.value)} />
			</div>

			<div className="fild">
				<span>Nota</span>
				<input type="text" placeholder="O quão bom esta obra é?" onChange={(e) => changeFildValue("note", e.target.value)} />
			</div>

			<div className="fild">
				<span>Genero</span>
				<input type="text" placeholder="Mistério, Romance..." onChange={(e) => changeFildValue("genre", e.target.value)} />
			</div>

			<div className="fild">
				<span>Link para uma Imagem</span>
				<input placeholder="Busque no google pelo nome da sua obra..." onChange={(e) => changeFildValue("imgURL", e.target.value)} />
			</div>

			<div className="fild">
				<span>Tags</span>
				<input className="tags-input" type="text" placeholder={"Favoritos, Terminados, WishList..."} onChange={(e) => changeFildValue("tags", e.target.value)} />
			</div>
		</FormFildsStyle>
	);
};
