import { useContext, useState } from "react";
import { TopMenuStyle } from "../../styles/newFavorite/topMenuStyle";

import { favoriteContext } from "../../context/favoriteContext";
import { TagContext } from "../../context/tagContext";
import { FavoriteType } from "../../utils/types/favorite";

interface TopMenuProps {
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	deleteButton?: boolean;
	fildsValue: FavoriteType;
}

export const TopMenu = (props: TopMenuProps) => {
	const { title, isDisplayActive, changeDisplay, deleteButton, fildsValue } = props;
	const [confirmButton, setConfirmButton] = useState(false);
	const { deleteFavoriteOnDB, createNewFavoriteOnDB: createNewFavorite } =
		useContext(favoriteContext);
	const { createNewList } = useContext(TagContext);

	const saveNewFavorite = async () => {
		const inputsAreValid = await verifyInputs();

		if (!inputsAreValid) return;

		const listName = fildsValue.list[0].toUpperCase() + fildsValue.list.substring(1);

		createNewFavorite({
			variables: {
				favoriteData: fildsValue,
			},
		});

		createNewList({
			variables: {
				name: listName,
				tags: fildsValue.tags,
			},
		});

		changeDisplay(!isDisplayActive);
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

		return true;
	};

	const sendErrorMessage = (fildName: string) => {
		const errorMessages = {
			Nome: {
				default: "Nome",
				error: "Nome: Um nome é obrigatorio!",
			},

			Link: {
				default: "Link para uma imagem",
				error: "Não estou conseguindo encontrar uma imagem seguindo este link 😥",
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
				spanNode.textContent = errorMessages[fildName]["error"];
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
		deleteFavoriteOnDB({
			variables: { name },
		});

		changeDisplay(!isDisplayActive);
	};

	return (
		<TopMenuStyle>
			<h2>{title}</h2>
			<div className="buttons">
				<button onClick={() => saveNewFavorite()}>Salvar</button>

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
