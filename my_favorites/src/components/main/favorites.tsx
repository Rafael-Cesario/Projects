import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FormFildsContextProvider } from "../../context/formFildsContext";
import { FavoritesStyles } from "../../styles/main/favoritesStyle";
import { ALL_FAVORITES } from "../../utils/dataBase/querys/favorites";
import { FavoriteType, NoteType } from "../../utils/types/favorite";
import { NewFavorite } from "../newFavorite/newFavorite";

export const Favorites = () => {
	const [details, setDetails] = useState<FavoriteType>();
	const [showFavoriteDetails, setShowFavoriteDetails] = useState(false);
	const { loading, error, data } = useQuery(ALL_FAVORITES);

	const pickDetails = (e: React.SyntheticEvent) => {
		const div = e.target as HTMLDivElement;

		const name = div.children[0].textContent;
		const imgURL = div.children[1].getAttribute("src");
		const genre = div.getAttribute("data-genre").split(",");
		const note = div.getAttribute("data-note") as NoteType;
		const tags = div.getAttribute("data-tags").split(",");
		const list = div.getAttribute("data-list");

		const objDetails: FavoriteType = { list, name, imgURL, genre, note, tags };

		setDetails(objDetails);
		setShowFavoriteDetails(!showFavoriteDetails);
	};

	if (loading) return <p>Loading</p>;
	if (error) return <p>Error</p>;

	return (
		<FavoritesStyles>
			{data.favorites.map((data: FavoriteType, index: number) => (
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

			<FormFildsContextProvider>
				{showFavoriteDetails && (
					<NewFavorite
						title={details.name}
						details={details}
						isDisplayActive={showFavoriteDetails}
						changeDisplay={setShowFavoriteDetails}
						deleteButton={true}
					/>
				)}
			</FormFildsContextProvider>
		</FavoritesStyles>
	);
};
