export const wordListReducer = (state, action) => {
  switch (action.type) {
    
    case "CREATE-LIST":
      return {
        ...state,
        [action.name]: {
          id: action.id,
          terms: [],
          definitions: [],
          perdiv: 50,
          description: action.description,
          lang01: "",
          lang02: "",
          individualWordList: [],
        },
      };

    case "ADD_WORD":
      return {
        ...state,
          [action.listName]: {
          ...state[action.listName],
            terms: [...state[action.listName].terms, action.term],
            definitions: [...state[action.listName].definitions, action.definition],
        },
      };

    case "REMOVE_WORD":
      return {
        ...state,
        [action.listName]: {
          ...state[action.listName],          

          terms: state[action.listName].terms.filter(word => 
            word !== state[action.listName].terms[state[action.listName].terms.length - 1]),
            
          definitions: state[action.listName].definitions.filter(word =>
            word !== state[action.listName].definitions[state[action.listName].definitions.length - 1])
        }
      }      

    default:
      return state;
  }
};
