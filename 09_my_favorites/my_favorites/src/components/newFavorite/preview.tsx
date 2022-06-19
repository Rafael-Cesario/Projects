import React from "react";
import { PreviewStyled } from "../../styles/newFavorite/previewStyled";
import { FavoriteType } from "./newFavorite";

import { AiOutlinePicture } from "react-icons/ai";

interface PreviewProps {
	fildsValue: FavoriteType;
}

export const Preview = ({ fildsValue }: PreviewProps) => {
	const { name, note, genre, imgURL } = fildsValue;

	return (
		<PreviewStyled>
			<div className="image">
				<ImgContainer imgURL={imgURL} />
			</div>
			<span>Nome: {name}</span>
			<span>Nota: {note}</span>
			<span>Genero: {genre}</span>
		</PreviewStyled>
	);
};

const ImgContainer = ({ imgURL }: { imgURL: string }) => {
	if (!imgURL.startsWith("Busque") || !imgURL) {
		return <img src={imgURL} alt="unknown image" />;
	}
	return <AiOutlinePicture className="icon" />;
};
