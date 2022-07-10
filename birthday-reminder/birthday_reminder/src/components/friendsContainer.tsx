import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { friendsContainer_Style } from "../styles/friendsContainer_style";
import { friendList, addFriend } from "../utils/friendsMethods";
import { searchFriends } from "../utils/searchFriends";

friendList();

@customElement("friends-container")
export class FriendsContainer extends LitElement {
	static styles = friendsContainer_Style;

	render() {
		return html`
			<div class="friends-container">
				<form class="search">
					<h2>Pesquisar</h2>
					<input type="text" placeholder="Pesquisar por nome..." class="input-search-friend" />
					<button @click="${searchFriends}">Pesquisar</button>
				</form>

				<form class="add-friends">
					<h2>Adicionar</h2>
					<input type="text" placeholder="Adicionar amigos..." class="input-add-friends" />
					<button @click="${addFriend}">Adicionar</button>
				</form>

				<h2>Amigos</h2>
				<div class="friends"></div>
			</div>
		`;
	}
}
