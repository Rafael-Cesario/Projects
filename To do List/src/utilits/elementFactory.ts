import { addAttributes, addEvents, addNodes } from "./utils";

type elementPropertiesType = {
	element: string;
	text?: string;
	attributes?: {};
	events?: [string, (e: Event) => void][];
	parent?: Element;
	nodes?: {};
};

const elementFactory = (objElement: elementPropertiesType) => {
	const { element, parent, text, attributes, events, nodes } = objElement;
	const myElement = document.createElement(element);

	if (attributes) addAttributes(myElement, attributes);
	if (events) addEvents(myElement, events);
	if (text) myElement.textContent = text;
	if (parent) parent.append(myElement);
	if (nodes) addNodes(myElement, nodes);

	return myElement;
};

export { elementFactory };
