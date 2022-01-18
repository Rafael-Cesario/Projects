import { deleteTermAndDefinitionAnimation } from "../gsap/animations";

const Words = ({
  words,
  setNewWord,
  wordListStore,
  dispatch,
  params,
}) => {
  const focusTextArea = (e, td) => {
    e.target.value = td;
    e.target.classList.add("delete-button");
    e.target.parentNode.querySelector("button").style.transform = "scale(1) translateY(-40px)";
  };


  const blurTextArea = (e, placeholder) => {
    changingWord(e, placeholder);
    e.target.classList.remove("delete-button");
    e.target.parentNode.querySelector("button").style.transform = "scale(0) translateY(-40px)";
  };


  const changingWord = (e, word) => {
    const individualTerm = findIndex(word, 0);
    const individualDefinition = findIndex(word, 1);
    if (!e.target.value || e.target.value === word) return;
  };


  const findIndex = (word, index) => {
    for (let x = 0; x < words.length; x++) {
      if (words[x][index] === word) return x;
    }
  };


  const deleteTermAndDefinition = (e, arrWords, index) => {
    deleteTermAndDefinitionAnimation(e, index)    

    dispatch({
      type: 'REMOVE_WORD',
      listName: params.id,
      indexGlobal: wordListStore[params.id].terms.indexOf(arrWords[0]),
      listIndex: params.index,
      indexIndividual: index,
    })

  };
    
  return words.map((tdArray, index) => (
    <div key={tdArray} className="words-textArea">
      <button 
        className="button-delete" 
        onClick={(e) => deleteTermAndDefinition(e, tdArray, index)} >
        Excluir
      </button>

      {tdArray.map((td, i) => (
        <textarea
          key={td + i}
          type="text"
          placeholder={td}
          onFocus={(e) => focusTextArea(e, td)}
          onChange={(e) => setNewWord(e.target.value)}
          onBlur={(e) => blurTextArea(e, e.target.placeholder)}
        />
      ))}
    </div>
  ));
};

export default Words;
