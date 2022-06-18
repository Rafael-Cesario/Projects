import React from "react";
import { PreviewStyled } from "../../styles/newFavorite/previewStyled";
import { FavoriteType } from "./newFavorite";

import { AiOutlinePicture } from "react-icons/ai";

interface PreviewProps {
	fildsValue: FavoriteType;
}

export const Preview = ({ fildsValue }: PreviewProps) => {
	const { name, note, genre, imgURL } = fildsValue;

	const imgContainer = imgURL ? <img src={imgURL} alt="unknown image" /> : <AiOutlinePicture className="icon" />;

	return (
		<PreviewStyled>
			<div className="image">{imgContainer}</div>
			<span>Nome: {name}</span>
			<span>Nota: {note}</span>
			<span>Genero: {genre}</span>
		</PreviewStyled>
	);
};
