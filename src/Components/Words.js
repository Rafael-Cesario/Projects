import { deleteTermAndDefinitionAnimation } from "../gsap/animations";

const Words = ({
  words,
  newWord,
  setNewWord,
  wordListStore,
  listIndex,
  params,
}) => {
  const globalTerm = wordListStore[params.id].terms;
  const globalDefinition = wordListStore[params.id].definições;


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

    globalTerm.indexOf(word) > -1
      ? change(globalTerm, individualTerm, word, 0)
      : change(globalDefinition, individualDefinition, word, 1);

  };


  const change = (arrGlobal, arrIndividual, word, index) => {
    arrGlobal[arrGlobal.indexOf(word)] = newWord;
    words[arrIndividual][index] = newWord;
  };


  const findIndex = (word, index) => {
    for (let x = 0; x < words.length; x++) {
      if (words[x][index] === word) return x;
    }
  };


  const deleteTermAndDefinition = (e, arrWords, index) => {
    const termIndex = globalTerm.indexOf(arrWords[0]);
    const definitionIndex = globalDefinition.indexOf(arrWords[1]);

    globalTerm.splice(termIndex, 1);
    globalDefinition.splice(definitionIndex, 1);
    words.splice(index, 1);
    deleteTermAndDefinitionAnimation(e, index)
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
