import React, { useState } from "react";
import { NewFavoriteStyle } from "../../styles/newFavorite/newFavoriteStyle";
import { TopMenu } from "./topMenu";
import { FormFilds } from "./formFilds";
import { Preview } from "./preview";
import { Tags } from "./tags";

export type NoteType = "Incrivel" | "Bom" | "Normal" | "Ruim" | "Sem Nota";

export type FavoriteType = {
	name: string;
	note: NoteType;
	genre: string[];
	imgURL: string;
	tags: string[];
};

export const NewFavorite = () => {
	const [fildsValue, setFildsValue] = useState<FavoriteType>({
		name: "Nome",
		note: "Sem Nota",
		genre: [],
		imgURL: "",
		tags: [],
	});

	return (
		<NewFavoriteStyle>
			<TopMenu fildsValue={fildsValue} />

			<div className="user-inputs">
				<FormFilds setFildsValue={setFildsValue} fildsValue={fildsValue} />

				<Preview fildsValue={fildsValue} />

				<Tags fildsValue={fildsValue} setFildsValue={setFildsValue} />
			</div>
		</NewFavoriteStyle>
	);
};
