export const wordListReducer = (state, action) => {
  switch (action.type) {
    case "CREATE-LIST": {
      state[action.name] = {
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
      state[action.listName].terms.push(action.term);
      state[action.listName].definitions.push(action.definition);
      state[action.listName].individualWordList = createLists(state, action.listName);
      return;
    }

    case "REMOVE_LAST_WORD": {
      state[action.listName].terms.pop();
      state[action.listName].definitions.pop();
      state[action.listName].individualWordList = createLists(state, action.listName);
      return;
    }

    case "REMOVE_WORD": {
      state[action.listName].terms = state[action.listName].terms.filter((word) => word !== action.word[0]);
      state[action.listName].definitions = state[action.listName].definitions.filter((word) => word !== action.word[1]);
      state[action.listName].individualWordList[action.listIndex].words =
       state[action.listName].individualWordList[action.listIndex].words.filter((word, index) => index !== action.indexIndividual);
      return;
    }

    case "CHANGE_CONFIGS": {
      const newName = removeid(action.newName);
      const oldName = removeid(action.oldName);
      const listName = newName !== oldName ? action.newName : action.oldName;

      if (newName !== oldName) {
        state[action.newName] = { ...state[action.oldName] };
        state = filterObject(state, action.oldName);
        state[action.newName].id = action.newId;
      }

      state[listName].description = action.newDescription;
      state[listName].perdiv = action.newPerdiv;
      state = { ...state };
      return;
    }

    case "CHANGE_WORD": {
      if (action.newWord === "") return state;
      const termIndexGlobal = state[action.listName].terms.indexOf(action.word);
      const definitionIndexGlobal = state[action.listName].definitions.indexOf(action.word);
      const changeWhoGlobal = termIndexGlobal > -1 ? "terms" : "definitions";
      const changeWhoIndividual = termIndexGlobal > -1 ? 0 : 1;
      const indexOfWhoChange =termIndexGlobal > -1 ? termIndexGlobal : definitionIndexGlobal;
      state[action.listName][changeWhoGlobal][indexOfWhoChange] = action.newWord;
      state[action.listName].individualWordList[action.listIndex].words[action.wordIndex][changeWhoIndividual] = action.newWord;
      return;
    }

    case "DELET_LIST": {
      state = filterObject(state, action.listName);
      state = { ...state };
      return;
    }

    case "CHANGE_ANSWER_WITH": {
      state[action.listName].individualWordList[action.listIndex].answerWith =
        action.answerWith;
      return;
    }

    case "CHANGE_LIST_STATUS": {
      state[action.listName].individualWordList[action.listIndex].status =
        action.status;
      return;
    }

    default: return;
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

const createLists = (state, listName) => {
  const terms = state[listName]["terms"];
  const definitions = state[listName]["definitions"];
  const maxperdiv = state[listName].perdiv;
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
    const status = state[listName].individualWordList[index]
      ? state[listName].individualWordList[index].status
      : "...";

    const answerWith =
      state[listName]?.individualWordList[index]?.answerWith || "Definition";

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