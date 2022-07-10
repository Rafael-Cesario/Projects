import { showNotes } from "./showNotes";
import { renderFriendList } from "./renderFriendList";
import { querySelectorDeep, querySelectorAllDeep } from "query-selector-shadow-dom";
import { showDeleteFriend } from "./showNotes";

const friendList = async () => {
	const response = await fetch("http://localhost:3000/all");
	const friends = await response.json();
	renderFriendList(friends);
};

const addFriend = async (e: Event) => {
	e.preventDefault();

	const inputWithFriendName = querySelectorDeep(".input-add-friends") as HTMLInputElement;
	const friendName = inputWithFriendName.value;

	const content = {
		headers: { "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ friendName }),
	};

	await fetch("http://localhost:3000/add", content);

	inputWithFriendName.value = "";
	friendList();
};

const friendNotes = async (id: string) => {
	const content = {
		headers: { "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ id }),
	};
	const response = await fetch("http://localhost:3000/find", content);
	const notes = await response.json();

	showNotes(notes);
};

const filterFriends = async (friendName: string) => {
	const response = await fetch("http://localhost:3000/filter", {
		headers: { "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ friendName }),
	});
	return await response.json();
};

const deleteFriendFromDB = async () => {
	const findFriend = (list: HTMLElement[], id: string) => {
		return list.filter((friend) => friend.id === id)[0];
	};

	const id = querySelectorDeep(".notes-container")!.querySelector(".title")?.getAttribute("data-friend-id") as string;
	const friendList = querySelectorAllDeep(".friend");
	const friendRemove = findFriend(friendList, id) as HTMLDivElement;

	const friendName = friendRemove.querySelector("h2")!.textContent as string;

	friendRemove.parentNode!.removeChild(friendRemove);
	showDeleteFriend(friendName);

	await fetch("http://localhost:3000/del", {
		headers: { "content-type": "application/json" },
		method: "DELETE",
		body: JSON.stringify({ id: id }),
	});
};

const uppdateFriend = async (info: {}) => {
	await fetch("http://localhost:3000/update", {
		headers: { "content-type": "application/json" },
		method: "PUT",
		body: JSON.stringify(info),
	});

	location.reload();
};

export { friendList, addFriend, friendNotes, filterFriends, deleteFriendFromDB, uppdateFriend };
