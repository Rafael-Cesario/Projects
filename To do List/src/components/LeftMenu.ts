import "@fortawesome/fontawesome-free/js/all";
import "../styles/LeftMenu.scss";

import { elementFactory } from "../utilits/elementFactory";
import { closeLeftBar } from "../utilits/animations";
import { addNewList } from "../utilits/addNewList";

const LeftMenu = () => {
	elementFactory({
		element: "div",
		parent: document.body,
		attributes: { class: "div-side-bar" },
		nodes: {
			divTitle: elementFactory({
				element: "div",
				attributes: { class: "div-title" },
				nodes: {
					title: elementFactory({
						element: "h2",
						text: "Listas",
						attributes: { class: "title" },
					}),

					closeButton: elementFactory({
						element: "button",
						attributes: { class: "button-close-side-bar", value: true },
						events: [["click", () => closeLeftBar()]],
						nodes: {
							iconX: elementFactory({
								element: "i",
								attributes: { class: "fa-solid fa-square-xmark" },
							}),
							iconBars: elementFactory({
								element: "i",
								attributes: { class: "fa-solid fa-bars" },
							}),
						},
					}),
				},
			}),

			divAllLists: elementFactory({
				element: "div",
				attributes: { class: "div-all-lists" },
			}),

			buttonAddNewList: elementFactory({
				element: "button",
				text: "+ Criar Lista",
				attributes: { class: "button-new-list" },
				events: [["click", addNewList]],
			}),
		},
	});
};

export { LeftMenu };
