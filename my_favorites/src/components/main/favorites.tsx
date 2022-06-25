import { useContext, useState } from "react";
import { displayContext } from "../../context/displayContext";
import { favoriteContext } from "../../context/favoriteContext";
import { formFildsContext } from "../../context/formFildsContext";
import { FavoritesStyles } from "../../styles/main/favoritesStyle";
import { FavoriteType, NoteType } from "../../utils/types/favorite";
import { NewFavorite } from "../newFavorite/newFavorite";

export const Favorites = () => {
	const [showFavoriteDetails, setShowFavoriteDetails] = useState(false);
	const { fildsValue, setFildsValue } = useContext(formFildsContext);
	const { favoritesData } = useContext(favoriteContext);
	const { activeTag } = useContext(displayContext);

	if (!favoritesData) return;

	const favoritesFiltred = favoritesData.filter((favorite) => {
		if (favorite.list === activeTag.listName && activeTag.tagName === "Todos") return favorite;

		if (favorite.list === activeTag.listName && favorite.tags.includes(activeTag.tagName)) {
			return favorite;
		}
	});

	console.log(favoritesFiltred);

	const pickDetails = (e: React.SyntheticEvent) => {
		const div = e.target as HTMLDivElement;

		const name = div.children[0].textContent;
		const imgURL = div.children[1].getAttribute("src");
		const genre = div.getAttribute("data-genre").split(",");
		const note = div.getAttribute("data-note") as NoteType;
		const tags = div.getAttribute("data-tags").split(",");
		const list = div.getAttribute("data-list");

		const objDetails: FavoriteType = { list, name, imgURL, genre, note, tags };

		setFildsValue(objDetails);
		setShowFavoriteDetails(!showFavoriteDetails);
	};

	return (
		<FavoritesStyles>
			{favoritesFiltred.map((data: FavoriteType, index: number) => (
				<div
					onClick={(e) => pickDetails(e)}
					key={data.name + index}
					className="favorite"
					data-note={data.note}
					data-genre={data.genre}
					data-tags={data.tags}
					data-list={data.list}
				>
					<p>{data.name}</p>
					<img src={data.imgURL} alt="front cover of a favorite" />
				</div>
			))}

			{showFavoriteDetails && (
				<NewFavorite
					title={fildsValue.name}
					isDisplayActive={showFavoriteDetails}
					changeDisplay={setShowFavoriteDetails}
					deleteButton={true}
				/>
			)}
		</FavoritesStyles>
	);
};
