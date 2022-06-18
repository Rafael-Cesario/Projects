import React from "react";
import { FavoritesStyles } from "../../styles/main/favoritesStyle";

import { favoriteData } from "../../utils/favoriteData";
import { FavoriteType } from "../newFavorite/newFavorite";

export const Favorites = () => {
	return (
		<FavoritesStyles>
			{favoriteData.map((data: FavoriteType, index: number) => (
				<div
					key={data.name + index}
					className="favorite"
					data-note={data.note}
					data-genre={data.genre}
					data-tags={data.tags}
				>
					<p>{data.name}</p>
					<img src={data.imgURL} alt="front cover of a favorite" />
				</div>
			))}
		</FavoritesStyles>
	);
};
