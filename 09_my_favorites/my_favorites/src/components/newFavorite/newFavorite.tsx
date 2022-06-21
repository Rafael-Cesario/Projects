import React, { useState } from "react";
import { NewFavoriteStyle } from "../../styles/newFavorite/newFavoriteStyle";
import { TopMenu } from "./topMenu";
import { FormFilds } from "./formFilds";
import { Preview } from "./preview";
import { Tags } from "./tags";

export type NoteType = "Incrivel" | "Bom" | "Normal" | "Ruim" | "Sem Nota";

interface NewFavoriteProps {
	details?: FavoriteType;
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FavoriteType = {
	list: string;
	name: string;
	note: NoteType;
	genre: string[];
	imgURL: string;
	tags: string[];
};

export const NewFavorite = ({
	details,
	title,
	changeDisplay,
	isDisplayActive,
}: NewFavoriteProps) => {
	const fildsInitialValue = details || {
		list: "Jogos, Livros, Animes, Series",
		name: "Nome",
		note: "Sem Nota",
		genre: ["Sem Genero"],
		imgURL: "Busque no google por uma imagem",
		tags: ["Sem Tags"],
	};

	const [fildsValue, setFildsValue] = useState<FavoriteType>(fildsInitialValue);

	return (
		<NewFavoriteStyle>
			<TopMenu
				fildsValue={fildsValue}
				title={title}
				isDisplayActive={isDisplayActive}
				changeDisplay={changeDisplay}
			/>

			<div className="user-inputs">
				<FormFilds setFildsValue={setFildsValue} fildsValue={fildsValue} />

				<Preview fildsValue={fildsValue} />

				<Tags fildsValue={fildsValue} setFildsValue={setFildsValue} />
			</div>
		</NewFavoriteStyle>
	);
};
