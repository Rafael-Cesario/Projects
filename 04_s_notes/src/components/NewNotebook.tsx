import React, { useContext, useState } from "react";

import { MessageContext } from "../context/messageContext";
import { NotebookContext } from "../context/notebooksContext";
import { fetchNotebooks, saveOnDB } from "../shared/request";
import { warningMessage } from "../shared/warningMessage";

const NewNotebook: React.FC = () => {
	const { setNotebooks } = useContext(NotebookContext);
	const { setMessage, setBGcolor } = useContext(MessageContext);
	const [renderDiv, setRenderDiv] = useState<Boolean>(false);
	const [nameNB, setNameNB] = useState<string>("");

	const openCloseNewNB = () => {
		setRenderDiv(!renderDiv);
	};

	const handleSaveNB = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (!nameNB) return warningMessage(setMessage, "O campo nome esta Vazio", setBGcolor, "crimson");

		warningMessage(setMessage, "Novo Caderno Adicionado", setBGcolor, "#2a5da8");

		saveOnDB(nameNB);
		fetchNotebooks(setNotebooks);
		openCloseNewNB();
		setNameNB("");
	};

	return (
		<>
			<button className="note add-nb " onClick={openCloseNewNB}>
				Criar novo Caderno +
			</button>

			{renderDiv && (
				<form className="note" onSubmit={(e) => handleSaveNB(e)}>
					<input type="text" placeholder="Nome" className="input-new-nb" onChange={(e) => setNameNB(e.target.value)} />

					<button type="submit" className="save-button" onClick={handleSaveNB}>
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
