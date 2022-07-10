import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../context/messageContext";

import { deleteNB } from "../../shared/request";
import { verifyInput } from "../../shared/verifyInput";
import { DeleteStyle } from "../../styles/NotesPage/deleteStyle";

interface NBprops {
	NB: {
		name: string;
		id: number;
	};
	setShowDeleteDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteNB: React.FC<NBprops> = ({ NB, setShowDeleteDiv }) => {
	const [deleteInput, setDeleteInput] = useState("");
	const { warningMessage } = useContext(MessageContext);
	const navigate = useNavigate();

	const handleDeleteNB = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const hasError = verifyInput(deleteInput, warningMessage, NB);
		if (hasError) return;

		await deleteNB(NB.id);

		navigate("/");
	};

	return (
		<DeleteStyle>
			<form>
				<p>Para ter Certeza de que você quer deletar este caderno digite o nome dele no campo abaixo.</p>
				<input type="text" placeholder="Nome do Caderno..." onChange={(e) => setDeleteInput(e.target.value)} />

				<div className="delete-buttons">
					<button onClick={handleDeleteNB}>Deletar Caderno</button>

					<button type="button" onClick={(e) => setShowDeleteDiv(false)}>
						Cancelar
					</button>
				</div>
			</form>
		</DeleteStyle>
	);
};

export { DeleteNB };
