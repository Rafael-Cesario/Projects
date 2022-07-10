import { html } from "lit";
import { querySelectorDeep } from "query-selector-shadow-dom";
import { deleteFriendFromDB } from "../utils/friendsMethods";

const showDeleteButtonDiv = () => {
	const confirmDiv = querySelectorDeep(".confirm") as HTMLDivElement;
	const newDisplay = confirmDiv.style.display === "flex" ? "none" : "flex";

	confirmDiv.style.display = newDisplay;
};

const deleteFriends = () => html`
	<div class="confirm">
		<h2>Confirmação de Exclusão</h2>
		<p>Esta ação não podera ser desfeita,tem certeza que deseja excluir seu amigo da lista?</p>
		<div class="buttons">
			<button @click="${deleteFriendFromDB}">SIM</button>
			<button @click="${showDeleteButtonDiv}">NÃO</button>
		</div>
	</div>
`;

export { deleteFriends, showDeleteButtonDiv };
