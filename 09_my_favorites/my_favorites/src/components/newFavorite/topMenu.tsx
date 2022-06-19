import React from "react";

import { TopMenuStyle } from "../../styles/newFavorite/topMenuStyle";
import { FavoriteType } from "./newFavorite";

interface TopMenuProps {
	fildsValue: FavoriteType;
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TopMenu = ({ fildsValue, title, changeDisplay, isDisplayActive }: TopMenuProps) => {
	const saveNewFavorite = async () => {
		const inputsAreValid = await verifyInputs();
		if (!inputsAreValid) return;

		console.log("todos os inputs estão certos");
	};

	const verifyInputs = async () => {
		const { name, imgURL } = fildsValue;

		if (name === "Nome" || !name) {
			sendErrorMessage("Nome");
			return false;
		}

		if (imgURL != "" && !imgURL.startsWith("Busque")) {
			try {
				const response = await fetch(imgURL);

				if (response.status < 200 || response.status > 299) {
					sendErrorMessage("Link");
					return false;
				}
			} catch (error) {
				sendErrorMessage("Link");
				return false;
			}
		}

		return true;
	};

	const sendErrorMessage = (fildName: string) => {
		const errorMessages = {
			Nome: { default: "Nome", error: "Nome: Um nome é obrigatorio!" },
			Link: {
				default: "Link para uma imagem",
				error: "Não estou conseguindo encontrar uma imagem seguindo este link 😥",
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

	return (
		<TopMenuStyle>
			<h2>{title}</h2>
			<div className="buttons">
				<button onClick={() => saveNewFavorite()}>Salvar</button>
				<button onClick={() => changeDisplay(!isDisplayActive)}>X</button>
			</div>
		</TopMenuStyle>
	);
};
