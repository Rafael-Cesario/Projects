import React, { useContext, useState } from "react";
import DOMPurify from "dompurify";
import { NoteAreaStyle } from "../../styles/NotesPage/NoteAreaStyle";
import { ButtonsNotearea } from "./ButtonsNoteArea";

import { fetchNotes, fetchOneNB, saveColorsDB, saveNewPageName, saveNotesOnDB } from "../../shared/request";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { addKeyEvents } from "../../shared/shotkeys";
import { MessageContext } from "../../context/messageContext";

const NoteArea = () => {
	const { id } = useParams();
	const paraNotes = useRef<HTMLParagraphElement>(null);
	const { warningMessage } = useContext(MessageContext);
	const [pageName, setPageName] = useState("");

	const saveNotes = async () => {
		const paragraph = paraNotes.current as HTMLParagraphElement;
		const notes = paragraph.innerHTML || "";
		const { name } = await fetchOneNB(Number(id));
		saveNotesOnDB(id!, name, notes);
	};

	const attNotes = async () => {
		const p = paraNotes.current as HTMLParagraphElement;
		const { notes, pages } = await fetchNotes(id!);
		const page = Object.keys(pages)[0];

		const sanitizedNotes = () => {
			return DOMPurify.sanitize(notes);
		};

		p.innerHTML = sanitizedNotes();
		setPageName(page);
	};

	useEffect(() => {
		addKeyEvents(saveNotes, warningMessage);
		attNotes();

		const intervalSaveNotes = setInterval(() => {
			saveNotes();
		}, 60000);

		return () => clearInterval(intervalSaveNotes);
	}, []);

	return (
		<NoteAreaStyle>
			<ButtonsNotearea />
			<input className="page-title" type="text" placeholder={pageName} onChange={(e) => saveNewPageName(e.target.value, id!)} />
			<p ref={paraNotes} className="note-area" contentEditable={true}></p>
		</NoteAreaStyle>
	);
};

export { NoteArea };
