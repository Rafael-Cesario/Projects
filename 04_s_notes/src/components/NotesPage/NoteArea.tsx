import React, { useState } from "react";
import DOMPurify from "dompurify";
import { NoteAreaStyle } from "../../styles/NotesPage/NoteAreaStyle";
import { ButtonsNotearea } from "./ButtonsNoteArea";

import { fetchNotes, fetchOneNB, saveNotesOnDB } from "../../shared/request";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

interface NBprops {
	NB: { name: string; id: number };
}

const NoteArea: React.FC<NBprops> = () => {
	const { id } = useParams();
	const paraNotes = useRef<HTMLParagraphElement>(null);

	const saveNotes = async () => {
		const paragraph = paraNotes.current as HTMLParagraphElement;
		const notes = paragraph.innerHTML || "";
		const { name } = await fetchOneNB(Number(id));

		saveNotesOnDB(id!, name, notes);
	};

	const attNotes = async () => {
		const p = paraNotes.current as HTMLParagraphElement;
		const { notes } = await fetchNotes(id!);

		const sanitizedNotes = () => {
			return DOMPurify.sanitize(notes);
		};

		p.innerHTML = sanitizedNotes();
	};

	useEffect(() => {
		attNotes();

		setInterval(() => {
			saveNotes();
		}, 100000);
	}, []);

	return (
		<NoteAreaStyle>
			<ButtonsNotearea />
			<p ref={paraNotes} className="note-area" contentEditable={true} onBlur={(e) => e.target.focus()}></p>
		</NoteAreaStyle>
	);
};

export { NoteArea };
