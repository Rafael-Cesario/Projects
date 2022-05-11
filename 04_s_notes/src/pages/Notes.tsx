import "../shared/shotkeys";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Configs } from "../components/NotesPage/Configs";
import { NoteArea } from "../components/NotesPage/NoteArea";
import { Sidebar } from "../components/NotesPage/Sidebar";
import { PopUpMessage } from "../components/PopUpMessage";
import { MessageContextProvider } from "../context/messageContext";
import { fetchOneNB, saveColorsDB, saveNotesOnDB } from "../shared/request";
import { NotesStyle } from "../styles/NotesPage/NotesStyle";
import { NotebookContextProvider } from "../context/notebooksContext";

import { openSidebar } from "../shared/animations";

import { GiHamburgerMenu } from "react-icons/gi";
import { NotesContextProvider } from "../context/notesContext";

interface NB {
	name: string;
	id: number;
}

const Notes = () => {
	const { id } = useParams();
	const [configs, setConfigs] = useState(false);
	const [NB, setNBdata] = useState<NB>({ name: "", id: 0 });

	const attNB = async () => {
		const NB = await fetchOneNB(Number(id));
		setNBdata(NB);
	};

	useEffect(() => {
		attNB();
	}, []);

	return (
		<MessageContextProvider>
			<NotesStyle>
				<button className="open-side-bar" onClick={(e) => openSidebar(false)}>
					<GiHamburgerMenu className="icon" />
				</button>

				<NotesContextProvider>
					<Sidebar NB={NB} configs={configs} setConfigs={setConfigs} />
					{configs && <Configs NB={NB} setConfigs={setConfigs} />}
					<NoteArea />
				</NotesContextProvider>

				<PopUpMessage />
			</NotesStyle>
		</MessageContextProvider>
	);
};

export { Notes };
