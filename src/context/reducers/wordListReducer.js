export const wordListReducer = (draft, action) => {
	switch (action.type) {
		case "CREATE-LIST": {
			draft[action.name] = {
				id: action.id,
				terms: [],
				definitions: [],
				perdiv: 50,
				description: action.description,
				lang01: "",
				lang02: "",
				individualWordList: {},
			};
			return;
		}

		case "ADD_WORD": {
			draft[action.listName].terms.push(action.term);
			draft[action.listName].definitions.push(action.definition);
			draft[action.listName].individualWordList = createLists(draft, action.listName);
			return;
		}

		case "REMOVE_LAST_WORD": {
			draft[action.listName].terms.pop();
			draft[action.listName].definitions.pop();
			draft[action.listName].individualWordList = createLists(draft, action.listName);
			return;
		}

		case "REMOVE_WORD": {
			draft[action.listName].terms = draft[action.listName].terms.filter((word) => word !== action.word[0]);
			draft[action.listName].definitions = draft[action.listName].definitions.filter((word) => word !== action.word[1]);
			draft[action.listName].individualWordList[action.listIndex].words = draft[action.listName].individualWordList[action.listIndex].words.filter((word, index) => index !== action.indexIndividual);
			return;
		}

		case "CHANGE_CONFIGS": {
			const newName = removeid(action.newName);
			const oldName = removeid(action.oldName);
			const listName = newName !== oldName ? action.newName : action.oldName;

			if (newName !== oldName) {
				draft[action.newName] = { ...draft[action.oldName] };
				draft = filterObject(draft, action.oldName);
				draft[action.newName].id = action.newId;
			}

			draft[listName].description = action.newDescription;
			draft[listName].perdiv = action.newPerdiv;
			draft[listName].individualWordList = createLists(draft, listName);

			return;
		}

		case "CHANGE_WORD": {
			if (action.newWord === "") return draft;
			const termIndexGlobal = draft[action.listName].terms.indexOf(action.word);
			const definitionIndexGlobal = draft[action.listName].definitions.indexOf(action.word);
			const changeWhoGlobal = termIndexGlobal > -1 ? "terms" : "definitions";
			const changeWhoIndividual = termIndexGlobal > -1 ? 0 : 1;
			const indexOfWhoChange = termIndexGlobal > -1 ? termIndexGlobal : definitionIndexGlobal;
			draft[action.listName][changeWhoGlobal][indexOfWhoChange] = action.newWord;
			draft[action.listName].individualWordList[action.listIndex].words[action.wordIndex][changeWhoIndividual] = action.newWord;
			return;
		}

		case "DELETE_LIST": {
			draft = filterObject(draft, action.listName);
			return draft;
		}

		case "CHANGE_ANSWER_WITH": {
			draft[action.listName].individualWordList[action.listIndex].answerWith = action.answerWith;
			return;
		}

		case "CHANGE_LIST_STATUS": {
			draft[action.listName].individualWordList[action.listIndex].status = action.status;
			return;
		}

		default:
			return;
	}
};

const filterObject = (obj, removeThisObj) => {
	const objToArray = Object.entries(obj);
	const filteredArray = objToArray.filter((list) => list[0] !== removeThisObj);
	const arrayBackToObject = Object.fromEntries(filteredArray);

	return arrayBackToObject;
};

const removeid = (name) => {
	const removeid = name.indexOf("_");
	const nameNew = name.slice(0, removeid);
	return nameNew;
};

const createLists = (draft, listName) => {
	const terms = draft[listName]["terms"];
	const definitions = draft[listName]["definitions"];
	const maxperdiv = draft[listName].perdiv;
	const termsAndDefinitions = [];
	let obj = {};

	let x = 0;
	while (x < terms.length) {
		let tempArray = [];
		let c = 0;
		while (c < maxperdiv) {
			if (terms[x] !== undefined) {
				tempArray.push([terms[x], definitions[x]]);
			}
			x++;
			c++;
		}
		termsAndDefinitions.push(tempArray.reverse());
	}

	termsAndDefinitions.forEach((td, index) => {
		const status = draft[listName].individualWordList[index] ? draft[listName].individualWordList[index].status : "...";

		const answerWith = draft[listName]?.individualWordList[index]?.answerWith || "Definition";

		obj = {
			...obj,
			[index]: {
				status: status,
				answerWith: answerWith,
				words: td,
			},
		};
	});

	return obj;
};
