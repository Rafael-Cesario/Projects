import { querySelectorDeep } from "query-selector-shadow-dom";
import { friendNotes } from "./friendsMethods";

const renderFriendList = (friends: []) => {
	const divFriends = querySelectorDeep(".friends") as HTMLDivElement;

	divFriends.innerHTML = "";

	const focusFriend = (e: Event) => {
		const target = e.target as HTMLDivElement;
		const parentDivFriends = querySelectorDeep(".friends") as HTMLDivElement;
		const divFriends = parentDivFriends.querySelectorAll("div");
		const id = target.getAttribute("data-friend-id")!;

		friendNotes(id);

		divFriends.forEach((friendNode) => (friendNode.style.backgroundColor = "#292929"));
		target.style.backgroundColor = "#163450";
	};

	friends.forEach((friend: { friendName: string; birthday: string; _id: string }) => {
		const div = document.createElement("div");
		div.className += `friend`;
		div.id = `${friend._id}`;
		divFriends.appendChild(div);
		div.setAttribute("data-friend-id", friend._id);
		div.addEventListener("click", (e: Event) => focusFriend(e));

		const name = document.createElement("h2");
		name.textContent = friend.friendName;
		div.appendChild(name);

		const birthday = document.createElement("p");
		birthday.textContent = friend.birthday || "??/??";
		div.appendChild(birthday);
	});
};

export { renderFriendList };
