import { elementFactory } from "./elementFactory";
import { saveListOnDatabase } from "./databaseMethods";

const addNewList = () => {
	const newInput = elementFactory({
		element: "input",
		attributes: { class: "div-list new-input" },
		parent: document.querySelector(".div-all-lists") as HTMLDivElement,
		events: [["blur", (e) => saveNewList(e)]],
	});
	newInput.focus();
};

const saveNewList = (e: Event) => {
	const input = e.target as HTMLInputElement;

	if (input.value === "") return input.parentNode?.removeChild(input);

	elementFactory({
		element: "div",
		attributes: { class: "div-list" },
		parent: document.querySelector(".div-all-lists") as HTMLDivElement,
		nodes: {
			title: elementFactory({
				element: "p",
				text: input.value,
				attributes: { class: "list-name" },
			}),

			count: elementFactory({
				element: "p",
				text: 0,
				attributes: { class: "todo-count" },
			}),
		},
	});

	saveListOnDatabase(input.value);
	input.parentNode?.removeChild(input);
};

export { addNewList };
