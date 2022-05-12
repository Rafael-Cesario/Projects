import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { ButtonNoteStyle } from "../../styles/NotesPage/buttonsNoteStyle";

import { AiOutlineOrderedList, AiOutlineUnorderedList } from "react-icons/ai";
import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";
import { BsJustifyLeft, BsJustify, BsJustifyRight } from "react-icons/bs";

import { changeText } from "../../shared/shotkeys";
import { fetchNotes } from "../../shared/request";

const ButtonsNotearea = () => {
	const { id } = useParams();
	const divButtonsColor = useRef<HTMLDivElement>(null);
	const [fontColor, setFontColor] = useState("#dbdbdb");
	const [arrayFavColors, setFavColors] = useState(["#d8d8d8", "#307eac", "#dfba16", "#b13838"]);

	const changeButtonsColor = () => {
		const div = divButtonsColor.current as HTMLDivElement;
		const buttons = div.childNodes;

		buttons.forEach((button, index) => {
			const b = button as HTMLButtonElement;
			b.style.backgroundColor = arrayFavColors[index];
		});
	};

	const changeFontColor = (value: string) => {
		setFontColor(value);
		changeText("foreColor", value);
	};

	const attColors = async () => {
		const { favColors } = await fetchNotes(id!);
		if (favColors?.length > 0) setFavColors(favColors);
	};

	useEffect(() => {
		attColors();
	}, []);

	useEffect(() => {
		changeButtonsColor();
	}, [arrayFavColors]);

	return (
		<ButtonNoteStyle className="buttons">
			<div className="compon">
				<div className="family">
					<span>Font Family</span>
					<select name="font-family" className="font-family" onChange={(e) => changeText("fontName", e.target.value)}>
						<option value="Courier New">Courier New</option>
						<option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
						<option value="Gill Sans">Gill Sans</option>
						<option value="Times New Roman">Times New Roman</option>
						<option value="Segoe UI">Segoe UI</option>
						<option value="Arial">Arial</option>
						<option value="sans-serif">sans-serif</option>
						<option value="Oswald">Oswald</option>
					</select>
				</div>

				<div className="size">
					<span>Font Size</span>
					<select name="font-size" className="font-size" onChange={(e: any) => changeText("fontSize", e.target.value)} onFocus={(e: any) => changeText("fontSize", e.target.value)}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
					</select>
				</div>

				<div className="color-div">
					<span>Font-Color</span>
					<input type="color" className="color" value={fontColor} onChange={(e) => changeFontColor(e.target.value)} />
				</div>

				<div className="fav-colors">
					<span>Fav Colors</span>
					<div className="colors" ref={divButtonsColor}>
						<button onClick={(e) => changeText("foreColor", arrayFavColors[0])}></button>
						<button onClick={(e) => changeText("foreColor", arrayFavColors[1])}></button>
						<button onClick={(e) => changeText("foreColor", arrayFavColors[2])}></button>
						<button onClick={(e) => changeText("foreColor", arrayFavColors[3])}></button>
					</div>
				</div>
			</div>
			<div className="simple">
				<button className="bold" onClick={(e) => changeText("b")}>
					<strong>B</strong>
				</button>
				<button className="italic" onClick={(e) => changeText("i")}>
					<i>I</i>
				</button>
				<button className="underline" onClick={(e) => changeText("u")}>
					<u>U</u>
				</button>
				<button className="s" onClick={(e) => changeText("s")}>
					<s>S</s>
				</button>
				<button className="sup" onClick={(e) => changeText("sup")}>
					<div>
						x<sup>1</sup>
					</div>
				</button>
				<button className="sub" onClick={(e) => changeText("sub")}>
					<div>
						x<sub>1</sub>
					</div>
				</button>
				<button className="l-ordered" onClick={(e) => changeText("l-ordered")}>
					<AiOutlineOrderedList />
				</button>
				<button className="l-unordered" onClick={(e) => changeText("l-unordered")}>
					<AiOutlineUnorderedList />
				</button>
				<button className="undo" onClick={(e) => changeText("z")}>
					<FaUndoAlt />
				</button>
				<button className="redo" onClick={(e) => changeText("r")}>
					<FaRedoAlt />
				</button>
				<button className="j-left" onClick={(e) => changeText("j-left")}>
					<BsJustifyLeft />
				</button>
				<button className="justify" onClick={(e) => changeText("justify")}>
					<BsJustify />
				</button>
				<button className="j-right" onClick={(e) => changeText("j-right")}>
					<BsJustifyRight />
				</button>
			</div>
		</ButtonNoteStyle>
	);
};

export { ButtonsNotearea };
