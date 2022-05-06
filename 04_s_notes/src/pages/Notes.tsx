import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Configs } from "../components/NotesPage/Configs";
import { Sidebar } from "../components/NotesPage/Sidebar";
import { PopUpMessage } from "../components/PopUpMessage";
import { MessageContextProvider } from "../context/messageContext";
import { fetchOneNB } from "../shared/request";
import { NotesStyled } from "../styles/NotesPage/notesStyle";

interface NB {
	name: string;
	id: number;
}

const Notes = () => {
	const params = useParams();

	const [configs, setConfigs] = useState(false);

	const [NB, setNBdata] = useState<NB>({ name: "", id: 0 });

	useEffect(() => {
		fetchOneNB(Number(params.id), setNBdata);
	}, []);

	return (
		<MessageContextProvider>
			<NotesStyled>
				<Sidebar NB={NB} configs={configs} setConfigs={setConfigs} />
				{configs && <Configs NB={NB} />}

				<PopUpMessage />
			</NotesStyled>
		</MessageContextProvider>
	);
};

export { Notes };
