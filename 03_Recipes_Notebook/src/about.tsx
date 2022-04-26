import { LitElement, html, render } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-page")
class AboutPage extends LitElement {
	render() {
		return html`
			<h1>About Page.</h1>
			<p>Está é a segunda pagina sobre o site</p>
      <a href="/">Inicio</a>
		`;
	}
}

render(new AboutPage(), document.body);
