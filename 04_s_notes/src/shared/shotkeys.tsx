document.addEventListener("keyup", (e) => {
	if (!e.altKey || !e.ctrlKey) return;

	const key = e.key;

	switch (key) {
		case "b":
			document.execCommand("bold");
			break;

		case "i":
			document.execCommand("italic");
			break;

		case "p":
			//paragrafos
			document.execCommand("fontSize", false, "3");
			break;

		case "s":
			//subtitulos
			document.execCommand("bold");
			document.execCommand("fontSize", false, "4");
			break;

		case "t":
			//titulos
			document.execCommand("bold");
			document.execCommand("fontSize", false, "6");
			break;

		default:
			return;
	}
});
