import React, { useContext, useState } from "react";
import DOMPurify from "dompurify";
import { NoteAreaStyle } from "../../styles/NotesPage/NoteAreaStyle";
import { ButtonsNotearea } from "./ButtonsNoteArea";

import { fetchNotes, saveNotesOnDB } from "../../shared/request";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { addKeyEvents } from "../../shared/shotkeys";
import { MessageContext } from "../../context/messageContext";
import { NotesContext } from "../../context/notesContext";

const NoteArea = () => {
	const { id } = useParams();
	const paraNotes = useRef<HTMLParagraphElement>(null);
	const { warningMessage } = useContext(MessageContext);
	const { currentPage, pageName, setPageName, setConfigs, configs } = useContext(NotesContext);
	const [pages, setPages] = useState({});

	const fetchPageData = async () => {
		const { pages } = await fetchNotes(id!);
		setPages(pages);
	};

	const saveNotes = async () => {
		const paragraph = paraNotes.current as HTMLParagraphElement;
		const notes = paragraph.innerHTML || "";
		saveNotesOnDB(id!, pages, pageName, notes);
	};

	const attNotes = () => {
		const p = paraNotes.current as HTMLParagraphElement;
		const page = Object.keys(pages)[currentPage];
		const note = Object.values(pages);

		p.innerHTML = DOMPurify.sanitize(String(note[currentPage]));
		setPageName(page);
	};

	const showConfigs = () => {
		setConfigs(!configs)
	}

	useEffect(() => {
		attNotes();
	}, [currentPage, pages, pageName]);

	useEffect(() => {
		fetchPageData();
		addKeyEvents(saveNotes, warningMessage);
	}, [currentPage, pageName]);

	useEffect(() => {
		const saveInterval = setInterval(() => { saveNotes() }, 60000)
		return clearInterval(saveInterval)
	}, [])

	return (
		<NoteAreaStyle>
			<ButtonsNotearea />
			<button className="page-title" onClick={e => showConfigs()}>{pageName}</button>
			<p ref={paraNotes} className="note-area" contentEditable={true} spellCheck={false} onBlur={e => saveNotes()}></p>
		</NoteAreaStyle>
	);
};

export { NoteArea };
