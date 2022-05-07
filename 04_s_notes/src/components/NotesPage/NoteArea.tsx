import React from "react";
import DOMPurify from "dompurify";
import { NoteAreaStyle } from "../../styles/NotesPage/NoteAreaStyle";
import { ButtonsNotearea } from "./ButtonsNoteArea";

import { fetchNotes, saveNotesOnDB } from "../../shared/request";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

interface NBprops {
	NB: { name: string; id: number };
}

const NoteArea: React.FC<NBprops> = ({ NB }) => {
	const { id } = useParams();
	const paraNotes = useRef<HTMLParagraphElement>(null);

	const saveNotes = (e: React.SyntheticEvent) => {
		const paragraph = e.target as HTMLParagraphElement;
		const notes = paragraph.innerHTML || "";
		saveNotesOnDB(id!, NB.name, notes);
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
	}, []);

	return (
		<NoteAreaStyle>
			<ButtonsNotearea />
			<p
				ref={paraNotes}
				className="note-area"
				contentEditable={true}
				onKeyUp={(e) => saveNotes(e)}
				onBlur={(e) => {
					saveNotes(e);
					e.target.focus();
				}}
			></p>
		</NoteAreaStyle>
	);
};

export { NoteArea };
