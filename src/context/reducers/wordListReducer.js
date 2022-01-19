export const wordListReducer = (state, action) => {
  switch (action.type) {
    
    case "CREATE-LIST":
      state[action.name] = {
        id: action.id,
        terms: [],
        definitions: [],
        perdiv: 50,
        description: action.description,
        lang01: "",
        lang02: "",
        individualWordList: {},
      }
      
      state = {...state}
      return state


    case "ADD_WORD":
      state[action.listName].terms.push(action.term)
      state[action.listName].definitions.push(action.definition)

      state = {...state}
      return state


    case "REMOVE_LAST_WORD":
      state[action.listName].terms.pop()
      state[action.listName].definitions.pop()

      state = {...state}
      return state
    

    case "REMOVE_WORD":
      state[action.listName].terms = state[action.listName].terms.filter(word => word !== action.word[0]);
      state[action.listName].definitions = state[action.listName].definitions.filter(word => word !== action.word[1]);
      
      state[action.listName].individualWordList[action.listIndex].words =
         state[action.listName].individualWordList[action.listIndex].words.filter((word, index) => index !== action.indexIndividual);    

      state = {...state}
      return state
      
      
    case 'CHANGE_CONFIGS':
      const listName = action.newName ? action.newName : action.oldName;

      if (action.newName) {
        state[action.newName] = {...state[action.oldName]};      
        state = filterObject(state, action.oldName);
        state[action.newName].id = action.newId;
      }

      if (action.newDescription) state[listName].description = action.newDescription;

      state[listName].perdiv = action.newPerdiv;

      state = {...state}
      return state


    case 'CHANGE_WORD':
      if (action.newWord === "") return state;      
      const termIndexGlobal = state[action.listName].terms.indexOf(action.word);
      const definitionIndexGlobal = state[action.listName].definitions.indexOf(action.word);
      const changeWhoGlobal = termIndexGlobal > -1 ? 'terms' : 'definitions';
      const changeWhoIndividual = termIndexGlobal > -1 ? 0 : 1;
      const indexOfWhoChange = termIndexGlobal > -1 ? termIndexGlobal : definitionIndexGlobal;
      state[action.listName][changeWhoGlobal][indexOfWhoChange] = action.newWord;
      state[action.listName].individualWordList[action.listIndex].words[action.wordIndex][changeWhoIndividual] = action.newWord;       
      state = {...state}
      return state


    case 'DELET_LIST':
      state = filterObject(state, action.listName);
      state = {...state};
      return state
       

    case 'CHANGE_ANSWER_WITH':
      state[action.listName].individualWordList[action.listIndex].answerWith = action.answerWith;
      state = {...state}
      return state


    default:
      return state;
  }
};

const filterObject = (obj, removeThisObj) => {
  const objToArray = Object.entries(obj)
  const filteredArray = objToArray.filter(list => list[0] !== removeThisObj)
  const arrayBackToObject = Object.fromEntries(filteredArray)
  
  return arrayBackToObject
}