import { useContext, useEffect } from "react";
import produce from "immer";
import { FormFildsStyle } from "../../styles/newFavorite/formFildsStyle";
import { FavoriteType } from "../../utils/types/favorite";
import { formFildsContext } from "../../context/formFildsContext";

interface FormFildsProps {
	fildsValue: FavoriteType;
	isChanging: boolean;
}

export const FormFilds = ({ fildsValue, isChanging }: FormFildsProps) => {
	const { setFildsValue } = useContext(formFildsContext);
	const { note } = fildsValue;
	const notes = ["Incrivel", "Bom", "Normal", "Ruim", "Sem Nota"];

	const optionsJSXArray = notes.map((note, index) => (
		<option key={note + index} value={note}>
			{note}
		</option>
	));

	const changeFildValue = (fildName: string, value: string) => {
		const newValue = fildName === "tags" ? value.split(",").map((tag) => tag.trim()) : value;

		setFildsValue(
			produce(fildsValue, (draft) => {
				draft[fildName] = newValue;
			})
		);
	};

	useEffect(() => {
		const inputs = document.querySelectorAll(".fild input") as NodeListOf<HTMLInputElement>;
		if (isChanging) inputs.forEach((input) => (input.value = fildsValue[input.name]));
	}, []);

	return (
		<FormFildsStyle>
			<div className="fild">
				<span>Lista</span>
				<input
					type="text"
					placeholder={"Jogos, Livros..."}
					onChange={(e) => changeFildValue("list", e.target.value)}
					name="list"
				/>
			</div>

			<div className="fild">
				<span>Nome</span>
				<input
					type="text"
					placeholder={"As aventuras do..."}
					onChange={(e) => changeFildValue("name", e.target.value)}
					name="name"
				/>
			</div>

			<div className="fild">
				<span>Nota</span>
				<select defaultValue={isChanging ? note : "Sem Nota"} onChange={(e) => changeFildValue("note", e.target.value)}>
					{optionsJSXArray}
				</select>
			</div>

			<div className="fild">
				<span>Genero</span>
				<input
					type="text"
					placeholder={"Aventura, Romance, Comédia..."}
					onChange={(e) => changeFildValue("genre", e.target.value)}
					name="genre"
				/>
			</div>

			<div className="fild">
				<span>Link para uma Imagem</span>
				<input
					type="text"
					placeholder={fildsValue.imgURL || "Cole aqui o endereço de uma imagem"}
					onChange={(e) => changeFildValue("imgURL", e.target.value)}
					name="imgURL"
				/>
			</div>

			<div className="fild">
				<span>Tags</span>
				<input
					className="tags-input"
					type="text"
					placeholder={"Favoritos, Zerados, WishList..."}
					onChange={(e) => changeFildValue("tags", e.target.value)}
					name="tags"
				/>
			</div>
		</FormFildsStyle>
	);
};
