import { querySelectorDeep } from "query-selector-shadow-dom";
import { filterFriends } from "./friendsMethods";
import { renderFriendList } from "./renderFriendList";

const searchFriends = async (e: Event) => {
	e.preventDefault();
	const inputSearch = querySelectorDeep(".input-search-friend") as HTMLInputElement;
	const friendName = inputSearch.value;
	const friends = await filterFriends(friendName);

	renderFriendList(friends);

	inputSearch.value = "";
	inputSearch.focus();
};

export { searchFriends };
