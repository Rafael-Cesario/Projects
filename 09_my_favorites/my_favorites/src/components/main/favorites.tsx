import React from "react";
import { FavoritesStyles } from "../../styles/main/favoritesStyle";

type favoriteData = {
	name: string;
	imgURL: string;
};

export const Favorites = () => {
	// will come from a DB
	const favoriteData = [
		{
			name: "hollow knight",
			imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxRAzRufM9qtIQ2qOSdfdxOuUxHVNd9pf6VjGvX0Pe0vDXTwPzYN2zMFrmkaBvHOz9X4&usqp=CAU",
		},
		{
			name: "Outer Wilds",
			imgURL: "https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304",
		},
		{
			name: "Elden ring",
			imgURL: "https://cdn.cdkeys.com/700x700/media/catalog/product/e/l/elden_ring_xbox_one_xbox_series_x_s_uk_1__1.jpg",
		},
	];

	const favoritesArray = favoriteData.map((data: favoriteData) => (
		<div key={data.name} className="favorite">
			<p>{data.name}</p>
			<img src={data.imgURL} alt="front cover of a favorite" />
		</div>
	));

	return <FavoritesStyles>{favoritesArray}</FavoritesStyles>;
};
