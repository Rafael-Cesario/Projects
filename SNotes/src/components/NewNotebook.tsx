import React, { useContext, useState } from "react";

import { MessageContext } from "../context/messageContext";
import { NotebookContext } from "../context/notebooksContext";
import { fetchNotebooks, saveOnDB } from "../shared/request";

const NewNotebook: React.FC = () => {
	const { setNotebooks } = useContext(NotebookContext);
	const { warningMessage } = useContext(MessageContext);
	const [renderDiv, setRenderDiv] = useState<Boolean>(false);
	const [nameNB, setNameNB] = useState<string>("");

	const openCloseNewNB = () => {
		setRenderDiv(!renderDiv);
	};

	const handleSaveNB = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (!nameNB) return warningMessage("O campo nome esta Vazio", "crimson");

		warningMessage("Novo Caderno Adicionado", "#2a5da8");

		await saveOnDB(nameNB);
		await fetchNotebooks(setNotebooks);
		openCloseNewNB();
		setNameNB("");
	};

	return (
		<>
			<button className="note add-nb " onClick={openCloseNewNB}>
				Criar novo Caderno +
			</button>

			{renderDiv && (
				<form className="note" onSubmit={handleSaveNB}>
					<input type="text" placeholder="Nome" className="input-new-nb" onChange={(e) => setNameNB(e.target.value)} />

					<button type="submit" className="save-button">
						Salvar
					</button>

					<button type="button" className="save-button" onClick={openCloseNewNB}>
						Cancelar
					</button>
				</form>
			)}
		</>
	);
};

export { NewNotebook };
