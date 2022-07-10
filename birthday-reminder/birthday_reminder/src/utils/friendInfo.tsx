import { querySelectorAllDeep, querySelectorDeep } from "query-selector-shadow-dom";
import { uppdateFriend } from "./friendsMethods";

const valuesAsArray = (inputs: HTMLInputElement[], textareas: HTMLTextAreaElement[]) => {
	const values: string[] = [];

	inputs.forEach((input) => values.push(input.value || input.placeholder));
	textareas.forEach((textarea) => values.push(textarea.value));

	return values;
};

const friendInfo = () => {
	const id = querySelectorDeep(".title")?.getAttribute("data-friend-id");
	const inputs = querySelectorAllDeep(".title input") as HTMLInputElement[];
	const textarea = querySelectorAllDeep(".notes textarea") as HTMLTextAreaElement[];
	const [friendName, birthday, likes, personality, presents, notes] = valuesAsArray(inputs, textarea);

	const info = {
		friendName,
		birthday,
		likes,
		personality,
		presents,
		notes,
		id,
	};

	uppdateFriend(info);
};

export { friendInfo };
