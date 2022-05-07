import React, { useEffect, useReducer, useState } from "react";

import { ButtonNoteStyle } from "../../styles/NotesPage/buttonsNoteStyle";

import { AiOutlineOrderedList, AiOutlineUnorderedList } from "react-icons/ai";
import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";
import { BsJustifyLeft, BsJustify, BsJustifyRight } from "react-icons/bs";
import { changeText } from "../../shared/shotkeys";
import { colorReducer } from "../../reducer/colorReducer";

const ButtonsNotearea = () => {
	const ColorsInitialValue = ["#e2e2e2", "#d8d8d8", "#307eac", "#dfba16", "#b13838"];
	const [color, colorDispatch] = useReducer(colorReducer, ColorsInitialValue);

	const changeFontColor = (value: string) => {
		colorDispatch({ type: "CHANGECOLOR", colorIndex: 0, newColor: value });
		changeText("foreColor", value);
	};

	//Terminar função para salvar cores favoritas no DB
	const changeFavColor = (e, index) => {
		colorDispatch({ type: "CHANGECOLOR", colorIndex: index, newColor: e.target.value })}
	}

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
					<select name="font-size" className="font-size" onChange={(e) => changeText("fontSize", e.target.value)}>
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
					<input
						type="color"
						className="color"
						value={color[0]}
						onChange={(e) => {
							changeFontColor(e.target.value);
						}}
					/>
				</div>

				<div className="fav-colors">
					<span>Fav Colors</span>
					<div className="colors">
						<div>
							<input type="color" value={color[1]} onChange={(e) =>  />
							<button onClick={(e) => changeText("foreColor", color[1])}></button>
						</div>
						<div>
							<input type="color" value={color[2]} onChange={(e) => colorDispatch({ type: "CHANGECOLOR", colorIndex: 2, newColor: e.target.value })} />
							<button onClick={(e) => changeText("foreColor", color[2])}></button>
						</div>
						<div>
							<input type="color" value={color[3]} onChange={(e) => colorDispatch({ type: "CHANGECOLOR", colorIndex: 3, newColor: e.target.value })} />
							<button onClick={(e) => changeText("foreColor", color[3])}></button>
						</div>
						<div>
							<input type="color" value={color[4]} onChange={(e) => colorDispatch({ type: "CHANGECOLOR", colorIndex: 4, newColor: e.target.value })} />
							<button onClick={(e) => changeText("foreColor", color[4])}></button>
						</div>
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
