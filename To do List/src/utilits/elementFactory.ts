import { addAttributes, addEvents } from "./utils";

type elementPropertiesType = {
	element: string;
	text?: string;
	attributes?: {};
	events?: [string, (e: Event) => void][];
	parent: Element;
};

const elementFactory = (objElement: elementPropertiesType) => {
	const { element, parent, text, attributes, events } = objElement;
	const myElement = document.createElement(element);

	if (attributes) addAttributes(myElement, attributes);
	if (events) addEvents(myElement, events);
	if (text) myElement.textContent = text;

	parent.append(myElement);
	return myElement;
};

export { elementFactory };
