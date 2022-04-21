import { LitElement, html, render } from "lit";
import { customElement } from "lit/decorators.js";

if ("serviceWorker" in navigator) {
	window.addEventListener("load", (event) => {
		navigator.serviceWorker.register("/sw.js");
	});
}

@customElement("index-page")
class IndexPage extends LitElement {
	render() {
		return html`
			<h1>Hello World.</h1>
			<p>Está é a pagina principal</p>
      <a href="/about.html">About Page</a>
		`;
	}
}

render(new IndexPage(), document.body);
