import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/notes";
import "./components/friendsContainer";

@customElement("root-root")
export class root extends LitElement {
	static styles = css`
		.root {
			display: flex;
		}

		notes-container {
			margin: 20px;
			flex-grow: 2;
		}
	`;

	render() {
		return html`
			<div class="root">
				<friends-container></friends-container>
				<notes-container></notes-container>
			</div>
		`;
	}
}
