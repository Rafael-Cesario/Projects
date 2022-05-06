import React from "react";

import { AiOutlineUnderline } from "react-icons/ai";
import { CgFormatItalic } from "react-icons/cg";
import { FaBold } from "react-icons/fa";
import { ButtonNoteStyle } from "../../styles/NotesPage/buttonsNoteStyle";

const ButtonsNotearea = () => {
	return (
		<ButtonNoteStyle className="buttons">
			<button>
				<FaBold />
			</button>

			<button>
				<CgFormatItalic />
			</button>

			<button>
				<AiOutlineUnderline />
			</button>

			<select name="select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select>

			<input type="color" />
		</ButtonNoteStyle>
	);
};

export { ButtonsNotearea };
