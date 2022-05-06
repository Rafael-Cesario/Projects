import React from "react";
import { NoteAreaStyle } from "../../styles/NotesPage/NoteAreaStyle";
import { ButtonsNotearea } from "./ButtonsNoteArea";

const NoteArea: React.FC = () => {
	const handleclick = () => {
		document.execCommand("bold");
	};

	return (
		<NoteAreaStyle>
			<ButtonsNotearea />
			
			<p contentEditable={true} className="note-area"></p>
		</NoteAreaStyle>
	);
};

export { NoteArea };
