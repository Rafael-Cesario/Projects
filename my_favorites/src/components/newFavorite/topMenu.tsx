import { useContext, useState } from "react";
import { TopMenuStyle } from "../../styles/newFavorite/topMenuStyle";
import { favoriteContext } from "../../context/favoriteContext";
import { ListContext } from "../../context/listContext";
import { FavoriteType } from "../../utils/types/favorite";
import { Cache_createFavorite, Cache_deleteFavorite, Cache_modifyFavorite } from "../../utils/dataBase/cache/favorites";
import { inputError } from "../../utils/func/inputError";
import { Cache_createTag } from "../../utils/dataBase/cache/tags";
import { Cache_createList } from "../../utils/dataBase/cache/lists";

interface TopMenuProps {
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	isChanging?: boolean;
	fildsValue: FavoriteType;
}

export const TopMenu = (props: TopMenuProps) => {
	const { title, isDisplayActive, changeDisplay, isChanging, fildsValue } = props;
	const [confirmButton, setConfirmButton] = useState(false);
	const { favoritesData, DBcreateFavorite, DBdeleteFavorite, DBmodifyFavorite } = useContext(favoriteContext);
	const { createNewList, listsData, DBcreateTag } = useContext(ListContext);

	const createList = (listName: string) => {
		createNewList({ variables: { name: listName } });
		Cache_createList(fildsValue.list, ["Todos", ...fildsValue.tags], listsData.length);
	};

	const createFavorite = () => {
		Cache_createFavorite(fildsValue);
		DBcreateFavorite({ variables: { favoriteOBJ: fildsValue } });
	};

	const modifyFavorite = () => {
		Cache_modifyFavorite(title, fildsValue);
		DBmodifyFavorite({ variables: { name: title, newFavorite: fildsValue } });
		changeDisplay(!isDisplayActive);
	};

	const deleteFavorite = (name: string) => {
		Cache_deleteFavorite(name);
		DBdeleteFavorite({ variables: { name } });
	};

	const createTags = (listName: string) => {
		fildsValue.tags.forEach((tag) => {
			const listIndex = listsData.findIndex((list) => list.name === listName);
			const hasTag = listsData[listIndex].tags.includes(tag);

			if (!hasTag) {
				Cache_createTag(listName, tag);
				DBcreateTag({ variables: { listName, tagName: tag } });
			}
		});
	};

	const saveNewFavorite = async () => {
		const listName = fildsValue.list[0].toUpperCase() + fildsValue.list.substring(1);
		const listExists = listsData.some((list) => list.name === fildsValue.list);

		if (!listExists) createList(listName);
		if (listExists) createTags(listName);

		if (isChanging) return modifyFavorite();

		createFavorite();
		changeDisplay(!isDisplayActive);
	};

	const verifyFildsValue = async () => {
		const { list, name, imgURL } = fildsValue;
		const singularListName = list.replace(/s$/, "");
		const favoriteExists = favoritesData.some((favorite) => favorite.list === list && favorite.name === name);

		const inputs = {
			list: document.querySelector("input[name='list']") as HTMLInputElement,
			name: document.querySelector("input[name='name']") as HTMLInputElement,
			img: document.querySelector("input[name='imgURL']") as HTMLInputElement,
		};

		if (!list) return inputError(inputs.list, "Uma lista é obrigatoria.");
		if (!name) return inputError(inputs.name, "Um nome é obrigatorio.");
		if (!imgURL) return inputError(inputs.img, "Um Link para uma imagem é obrigatorio.");
		if (favoriteExists && !isChanging)
			return inputError(inputs.name, `Um ${singularListName} com este mesmo nome já existe`);

		saveNewFavorite();
	};

	return (
		<TopMenuStyle>
			<h2>{title}</h2>

			<div className="buttons">
				<button onClick={() => verifyFildsValue()}>Salvar</button>

				{isChanging && <button onClick={() => setConfirmButton(!confirmButton)}>Deletar</button>}

				<button onClick={() => changeDisplay(!isDisplayActive)}>X</button>

				{confirmButton && (
					<button className="confirmButton" type="button" onClick={() => deleteFavorite(title)}>
						Deletar Favorito
					</button>
				)}
			</div>
		</TopMenuStyle>
	);
};
