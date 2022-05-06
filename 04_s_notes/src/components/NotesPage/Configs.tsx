import React, { useState } from "react";
import { ConfigsStyle } from "../../styles/NotesPage/configsStyle";
import { DeleteNB } from "./deleteNB";

interface NBprops {
	NB: {
		name: string;
		id: number;
	};
}

const Configs: React.FC<NBprops> = ({ NB }) => {
	const [showDeleteDiv, setShowDeleteDiv] = useState(false);

	return (
		<ConfigsStyle className="config-div">
			<h1>Configs</h1>

			<div className="configs">
				<div className="config">
					<p>Largura das anotações:</p>
					<input type="text" placeholder="1280px" />
				</div>
			</div>

			<div className="buttons">
				<button>Salvar</button>
				<button onClick={(e) => setShowDeleteDiv(!showDeleteDiv)}>Deletar Caderno</button>
			</div>

			{showDeleteDiv && <DeleteNB NB={NB} setShowDeleteDiv={setShowDeleteDiv} />}
		</ConfigsStyle>
	);
};

export { Configs };
