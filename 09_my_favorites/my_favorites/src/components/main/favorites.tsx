import React from "react";
import { FavoritesStyles } from "../../styles/main/favoritesStyle";

export const Favorites = () => {
	return (
		<FavoritesStyles>
			<div className="favorite">
				<img src="https://static.gamevicio.com/imagens_itens/big/7/hollow-knight-cover-006487.webp" alt="game picture" />
				<h2>Hollow Knight</h2>
			</div>

			<div className="favorite">
				<img src="https://1.bp.blogspot.com/-THxFd9PVWHs/YJP2l9P_KOI/AAAAAAAAMMk/odJZfF8G11Au3smkkm9iZrF6Xdd7JsbjQCLcBGAsYHQ/s1920/OUTERWILDSS.jpeg" alt="game picture" />
				<h2>Hollow Knight</h2>
			</div>
		</FavoritesStyles>
	);
};
