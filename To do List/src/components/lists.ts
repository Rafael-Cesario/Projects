import { allLists } from "../utilits/databaseMethods";
import { elementFactory } from "../utilits/elementFactory";
import { openList } from "../utilits/utils";

const lists = async () => {
	const arrayLists = await allLists();

	arrayLists.forEach((list: { listName: string; todoCount: Number }) =>
		elementFactory({
			element: "div",
			attributes: { class: "div-list" },
			parent: document.querySelector(".div-all-lists") as HTMLDivElement,
			events: [["click", (e) => openList(e)]],
			nodes: {
				title: elementFactory({
					element: "p",
					text: list.listName,
					attributes: { class: "list-name" },
				}),

				count: elementFactory({
					element: "p",
					text: list.todoCount,
					attributes: { class: "todo-count" },
				}),
			},
		})
	);
};

export { lists };
