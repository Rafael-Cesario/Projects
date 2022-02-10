import { elementFactory } from "../src/utilits/elementFactory";

describe("testing my function for making html elements", () => {
	it("should return a new html element", () => {
		const elementTest = elementFactory({
			element: "div",
			parent: document.body,
			attributes: { class: "teste" },
			nodes: {
				h1: elementFactory({
					element: "h1",
					text: "Hello",
				}),
				p: elementFactory({
					element: "h1",
					text: "World",
				}),
			},
		});

		expect(elementTest).toBeDefined();
	});
});
