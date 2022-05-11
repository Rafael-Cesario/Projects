import { colors } from "../styles/Notebook.style";

const changeText = (change: string, value?: string) => {
	switch (change) {
		case "b":
			document.execCommand("bold");
			break;

		case "i":
			document.execCommand("italic");
			break;

		case "u":
			document.execCommand("underline");
			break;

		case "s":
			document.execCommand("strikeThrough");
			break;

		case "sup":
			document.execCommand("superscript");
			break;

		case "sub":
			document.execCommand("subscript");
			break;

		case "l-ordered":
			document.execCommand("insertOrderedList");
			break;

		case "l-unordered":
			document.execCommand("insertUnorderedList");
			break;

		case "z":
			document.execCommand("undo");
			break;

		case "r":
			document.execCommand("redo");
			break;

		case "j-left":
			document.execCommand("justifyLeft");
			break;

		case "justify":
			document.execCommand("justifycenter");
			break;

		case "j-right":
			document.execCommand("justifyright");
			break;

		case "fontName":
			document.execCommand("fontName", false, value);
			break;

		case "fontSize":
			document.execCommand("fontSize", false, value);
			break;

		case "foreColor":
			document.execCommand("foreColor", false, value);
			break;

		case "p":
			//paragrafos
			document.execCommand("fontSize", false, "3");
			break;

		case "n":
			//subtitulos
			document.execCommand("fontSize", false, "4");
			break;

		case "t":
			//titulos
			document.execCommand("fontSize", false, "6");
			break;

		default:
			return;
	}

	const para = document.querySelector(".note-area") as HTMLParagraphElement;
	para.focus();
};

document.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (!e.altKey) return;
	const key = e.key.toLocaleLowerCase();
	changeText(key);
});

const addKeyEvents = (saveNotes: () => void, warningMessage: (message: string, bgColor: string) => void) => {
	document.addEventListener("keydown", (e) => {
		const key = e.key.toLowerCase();
		if (key === "s" && e.ctrlKey) {
			e.preventDefault();
			saveNotes();
			warningMessage("Notas Salvas", colors.BlueOne);
		}
	});
};

export { changeText, addKeyEvents };
