const addAttributes = (element: HTMLElement, attributes: {}): void => {
	const attributesAsArray = Object.entries(attributes);

	attributesAsArray.forEach(([attribute, value]) => element.setAttribute(attribute, value as string));
};

const addEvents = (element: HTMLElement, events: [string, (e: Event) => void][]) => {
	events.forEach(([event, func]) => element.addEventListener(event, func));
};

const addNodes = (parent: Element, nodes: {}) => {
	const nodesToArray = Object.entries(nodes);
	nodesToArray.forEach(([name, element]) => parent.append(element as Element));
};

export { addAttributes, addEvents, addNodes };
