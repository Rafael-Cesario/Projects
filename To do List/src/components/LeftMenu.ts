import "@fortawesome/fontawesome-free/js/all";
import "../styles/LeftMenu.scss";

import { elementFactory } from "../utilits/elementFactory";

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
						attributes: { class: "button-close-side-bar" },
						nodes: {
							icon: elementFactory({
								element: "i",
								attributes: { class: "fa-solid fa-square-xmark" },
							}),
						},
					}),
				},
			}),

			divAllLists: elementFactory({
				element: "div",
				attributes: { class: "div-all-lists" },
				nodes: {
					divList: elementFactory({
						element: "div",
						attributes: { class: "div-list" },
						nodes: {
							listName: elementFactory({
								element: "p",
								text: "Tarefas",
								attributes: { class: "list-name" },
							}),

							todoCount: elementFactory({
								element: "p",
								text: "32",
								attributes: { class: "todo-count" },
							}),
						},
					}),

					lista2teste: elementFactory({
						element: "div",
						attributes: { class: "div-list" },
						nodes: {
							titlelista2teste: elementFactory({
								element: "p",
								text: "front-end",
								attributes: { class: "list-name" },
							}),

							todocountlista2teste: elementFactory({
								element: "p",
								text: "8",
								attributes: { class: "todo-count" },
							}),
						},
					}),
				},
			}),

			buttonAddNewList: elementFactory({
				element: "button",
				text: "+ Criar Lista",
				attributes: { class: "button-new-list" },
			}),
		},
	});
};

export { LeftMenu };
