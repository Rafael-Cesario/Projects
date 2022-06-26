import { useContext, useState } from "react";
import { TopMenuStyle } from "../../styles/newFavorite/topMenuStyle";

import { favoriteContext } from "../../context/favoriteContext";
import { ListContext } from "../../context/listContext";
import { FavoriteType } from "../../utils/types/favorite";

interface TopMenuProps {
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	isChanging?: boolean;
	fildsValue: FavoriteType;
}

export const TopMenu = (props: TopMenuProps) => {
	const { title, isDisplayActive, changeDisplay, isChanging: deleteButton, fildsValue } = props;
	const [confirmButton, setConfirmButton] = useState(false);
	const { favoritesData, DBcreateFavorite, DBdeleteFavorite, DBmodifyFavorite } =
		useContext(favoriteContext);
	const { createNewList, listsData } = useContext(ListContext);

	const saveNewFavorite = async () => {
		const listName = fildsValue.list[0].toUpperCase() + fildsValue.list.substring(1);
		const listExists = listsData.some((list) => list.name === fildsValue.list);
		const favoriteExists = favoritesData.some((favorite) => favorite.name === fildsValue.name);
		const singularListName = fildsValue.list.replace(/s$/, "");

		changeDisplay(!isDisplayActive);

		if (deleteButton) {
			DBmodifyFavorite({
				variables: {
					name: title,
					newFavorite: fildsValue,
				},
			});
			return;
		}

		if (favoriteExists) {
			return sendErrorMessage("Nome", `Um ${singularListName} com este mesmo nome já existe`);
		}

		DBcreateFavorite({
			variables: {
				favoriteOBJ: fildsValue,
			},
		});

		!listExists &&
			createNewList({
				variables: {
					name: listName,
				},
			});
	};

	const verifyInputs = async () => {
		const { list, name, imgURL } = fildsValue;

		if (!list) {
			sendErrorMessage("Lista");
			return false;
		}
		if (!name) {
			sendErrorMessage("Nome");
			return false;
		}
		if (!imgURL) {
			sendErrorMessage("Link");
			return false;
		}

		saveNewFavorite();
	};

	const sendErrorMessage = (fildName: string, message?: string) => {
		const errorMessages = {
			Nome: {
				default: "Nome",
				error: "Nome: Um nome é obrigatorio!",
			},

			Link: {
				default: "Link para uma imagem",
				error: "🚨 Por favor insira um link, você pode usar o google para procurar por uma capa.",
			},

			Lista: {
				default: "Lista",
				error: "Um nome de uma lista é obrigatorio!",
			},
		};

		const filds = document.querySelectorAll(".fild");

		filds.forEach((fild) => {
			const spanNode = fild.childNodes[0] as HTMLSpanElement;
			const fildText = spanNode.textContent.split(" ")[0];
			const time = 10000;

			if (fildText === fildName) {
				spanNode.textContent = message || errorMessages[fildName]["error"];
				fild.classList.toggle("error");

				setTimeout(() => {
					spanNode.textContent = errorMessages[fildName]["default"];
					fild.classList.toggle("error");
				}, time);
			}
		});
	};

	const deleteFavorite = (name: string) => {
		console.log(name);
		DBdeleteFavorite({
			variables: { name },
		});

		changeDisplay(!isDisplayActive);
	};

	return (
		<TopMenuStyle>
			<h2>{title}</h2>

			<div className="buttons">
				<button onClick={() => verifyInputs()}>Salvar</button>

				{deleteButton && <button onClick={() => setConfirmButton(!confirmButton)}>Deletar</button>}

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
