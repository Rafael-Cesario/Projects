import React, { useContext, useState } from "react";
import { NewFavoriteStyle } from "../../styles/sidebar/newFavoriteStyle";
import { AiOutlinePicture } from "react-icons/ai";
import produce from "immer";
import { TagContext } from "../../context/tagContext";

export const NewFavorite = () => {
	const [fildsValue, setFildsValue] = useState({
		name: "Nome",
		note: "nota",
		genre: "Genero",
		imgURL: "",
		tags: [],
	});

	const { showCreateNew, setShowCreateNew } = useContext(TagContext);

	const imgContainer = fildsValue.imgURL ? <img src={fildsValue.imgURL} alt="unknown image" /> : <AiOutlinePicture className="icon" />;

	const changeFildValue = (fildName: string, value: string) => {
		setFildsValue(
			produce(fildsValue, (draft) => {
				draft[fildName] = value;
			})
		);
	};

	const addNewTag = (value: string) => {
		const tags = value.split(",").map((tag) => tag.trim());

		setFildsValue(
			produce(fildsValue, (draft) => {
				draft["tags"] = [...tags];
			})
		);
	};

	const TagsArray = fildsValue.tags.map((tag) => {
		return (
			<div key={tag} className="tag">
				<span>{tag}</span>
				<i className="delete">X</i>
			</div>
		);
	});

	return (
		<NewFavoriteStyle>
			<div className="topmenu">
				<h2>Criando um novo favorito</h2>
				<div className="buttons">
					<button>Salvar</button>
					<button onClick={() => setShowCreateNew(!showCreateNew)}>X</button>
				</div>
			</div>

			<form>
				<div className="preview">
					<div className="image">{imgContainer}</div>
					<span>Nome: {fildsValue.name}</span>
					<span>Nota: {fildsValue.note}</span>
					<span>Genero: {fildsValue.genre}</span>
					<div className="tags">{TagsArray}</div>
				</div>

				<div className="fild">
					<span>Nome</span>
					<input type="text" placeholder="Nome..." onChange={(e) => changeFildValue("name", e.target.value)} />
				</div>

				<div className="fild">
					<span>Nota</span>
					<input type="text" placeholder="O quão bom esta obra é?" onChange={(e) => changeFildValue("note", e.target.value)} />
				</div>

				<div className="fild">
					<span>Genero</span>
					<input type="text" placeholder="Mistério, Romance..." onChange={(e) => changeFildValue("genre", e.target.value)} />
				</div>

				<div className="fild">
					<span>Link para uma Imagem</span>
					<input placeholder="Busque no google pelo nome da sua obra..." onChange={(e) => changeFildValue("imgURL", e.target.value)} />
				</div>

				<div className="fild">
					<span>Tags</span>
					<input type="text" placeholder={"Favoritos, Terminados, WishList..."} onChange={(e) => addNewTag(e.target.value)} />
				</div>
			</form>
		</NewFavoriteStyle>
	);
};
