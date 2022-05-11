import React, { useContext, useState } from "react";
import DOMPurify from "dompurify";
import { NoteAreaStyle } from "../../styles/NotesPage/NoteAreaStyle";
import { ButtonsNotearea } from "./ButtonsNoteArea";

import { fetchNotes, saveNewPageNameDB, saveNotesOnDB } from "../../shared/request";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { addKeyEvents } from "../../shared/shotkeys";
import { MessageContext } from "../../context/messageContext";
import { NotesContext } from "../../context/notesContext";
import { colors } from "../../styles/Notebook.style";

const NoteArea = () => {
	const { id } = useParams();
	const paraNotes = useRef<HTMLParagraphElement>(null);
	const { warningMessage } = useContext(MessageContext);
	const { currentPage, pageName, setPageName, setCurrentPage, setConfigs, configs } = useContext(NotesContext);
	const [pages, setPages] = useState({});
	const [oldName, setOldName] = useState(pageName);

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

	const saveNewPageName = (input: HTMLInputElement) => {
		const { value } = input;
		if (!value) return;
		saveNewPageNameDB(id!, pages, oldName, value);
		warningMessage("Nome da página alterado, vou precisar recarregar ela", colors.Green)
		setTimeout(() => location.reload(), 1000)
	};

	useEffect(() => {
		attNotes();
	}, [currentPage, pages, pageName]);

	useEffect(() => {
		fetchPageData();
		addKeyEvents(saveNotes, warningMessage);
	}, [currentPage, pageName]);

	return (
		<NoteAreaStyle>
			<ButtonsNotearea />
			<button className="page-title" onClick={e => setConfigs(!configs)}>{pageName}</button>
			<p ref={paraNotes} className="note-area" contentEditable={true} onKeyUp={(e) => saveNotes()} onBlur={e => saveNotes()}></p>
		</NoteAreaStyle>
	);
};

export { NoteArea };
