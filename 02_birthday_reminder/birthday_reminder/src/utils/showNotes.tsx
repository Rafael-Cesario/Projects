import { querySelectorDeep } from "query-selector-shadow-dom";
import { render } from "lit";

import { notesContent, notesDeleteFriend } from "../components/notes";

type data = [
	{
		friendName: string;
		_id: string;
		birthday: string;
		likes: string;
		personality: string;
		presents: string;
		notes: string;
	}
];

const showNotes = (data: data) => {
	const notesContainer = querySelectorDeep(".notes-container") as HTMLDivElement;
	const { friendName, _id, birthday, likes, personality, presents, notes } = data[0];

	render(notesContent(friendName, _id, birthday, likes, personality, presents, notes), notesContainer);
};

const showDeleteFriend = (friendName: string) => {
	const notesContainer = querySelectorDeep(".notes-container") as HTMLDivElement;
	render(notesDeleteFriend(friendName), notesContainer);
};

export { showNotes, showDeleteFriend };
