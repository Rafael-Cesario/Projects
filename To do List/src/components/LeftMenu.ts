import "../styles/LeftMenu.scss";
import { elementFactory } from "../utilits/elementFactory";

const LeftMenu = () => {
	const divSideBar = elementFactory({
		element: "div",
		parent: document.body,
		attributes: { class: "div-side-bar" },
	});

	const divTitle = elementFactory({
		element: "div",
		parent: divSideBar,
		attributes: { class: "div-title" },
	});

	const title = elementFactory({
		element: "h2",
		parent: divTitle,
		text: "Listas",
		attributes: { class: "title" },
	});

	const xClose = elementFactory({
		element: "h2",
		parent: divTitle,
		text: "X",
		attributes: { class: "title" },
	});
};

export { LeftMenu };
