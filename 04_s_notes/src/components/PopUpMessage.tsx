import React, { useRef, useLayoutEffect, useContext } from "react";
import { MessageContext } from "../context/messageContext";
import { PopUpMessageStyle } from "../styles/PopUpMessageStyle";

const PopUpMessage: React.FC = () => {
	const { message, BGcolor } = useContext(MessageContext);
	const popupDiv = useRef<HTMLDivElement>(null);
	const display = message ? "flex" : "none";

	useLayoutEffect(() => {
		popupDiv.current!.style.display = display;
		popupDiv.current!.style.backgroundColor = BGcolor;
	});

	return <PopUpMessageStyle ref={popupDiv}>{message}</PopUpMessageStyle>;
};

export { PopUpMessage };
