import "../shared/shotkeys";

import React, { useContext, useEffect, useState } from "react";
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
import { NotesContext, NotesContextProvider } from "../context/notesContext";

interface NB {
	name: string;
	id: number;
}

const Notes = () => {
	const { id } = useParams();
	const [NB, setNBdata] = useState<NB>({ name: "", id: 0 });
	const { configs } = useContext(NotesContext)

	const attNB = async () => {
		const NB = await fetchOneNB(Number(id));
		setNBdata(NB);
	};

	useEffect(() => {
		attNB();
	}, []);

	return (
		<MessageContextProvider>
			<NotesContextProvider>
				<NotesStyle>
					<button className="open-side-bar" onClick={(e) => openSidebar(false)}>
						<GiHamburgerMenu className="icon" />
					</button>

					<Sidebar NB={NB} />
					{configs && <Configs NB={NB} />}
					<NoteArea />

					<PopUpMessage />
				</NotesStyle>
			</NotesContextProvider>
		</MessageContextProvider>
	);
};

export { Notes };
