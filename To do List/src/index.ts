import { elementFactory } from "./utilits/elementFactory";
import './styles/index.scss'

const showconsole = (e: Event) => {
	console.log(e.target);
};

const titulo = elementFactory({
	element: "h1",
	text: "Titulo",
	attributes: { class: "title" },
	events: [["click", (event) => showconsole(event)]],
	parent: document.body,
});
