import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import { notes_style } from "../styles/notes_styles";
import { friendInfo } from "../utils/friendInfo";
import { deleteFriends, showDeleteButtonDiv } from "./deleteFriend";

@customElement("notes-container")
export class NotesContainer extends LitElement {
	static styles = notes_style;

	render() {
		return html`<div class="notes-container"></div> `;
	}
}

const notesContent = (friendName: string, _id: string, birthday: string, likes: string, personality: string, presents: string, notes: string) => html`
	<div class="title" data-friend-id="${_id}">
		<input class="name" type="text" value="${friendName}" />
		<input class="aniversary" type="text" value="${birthday || "Adicionar Aniversário"}" />
	</div>

	<div class="notes">
		<div class="likes">
			<h2>Gostos</h2>
			<textarea placeholder="Jogos, livros, animes.">${likes}</textarea>
		</div>
		<div class="personality">
			<h2>Personalidade</h2>
			<textarea placeholder="Introvertido, alegre">${personality}</textarea>
		</div>
		<div class="presents">
			<h2>Presentes</h2>
			<textarea placeholder="Livros de mistério ou terror, algum jogo.">${presents}</textarea>
		</div>
		<div class="extra-notes">
			<h2>Notas</h2>
			<textarea>${notes}</textarea>
		</div>

		<div class="utilits">
			<button class="save-button" @click="${friendInfo}">Salvar</button>
			<button class="del-button" @click="${showDeleteButtonDiv}">Excluir Amigo</button>
		</div>
	</div>
	${deleteFriends()}
`;

const notesDeleteFriend = (friendName: string) => {
	return html` <h2 class="deleted-friend">${friendName} foi excluido da sua lista</h2> `;
};

export { notesContent, notesDeleteFriend };
