import { deleteTermAndDefinitionAnimation } from "../gsap/animations";
import gsap from "gsap";
import { useState } from "react";

const Words = ({
  words,
  dispatch,
  params,
}) => {
  const [newWord, setNewWord] = useState("");

  const focusTextArea = (e, td) => {
    e.target.value = td;
    e.target.classList.add("delete-button");
    e.target.parentNode.querySelector("button").style.transform = "scale(1) translateY(-40px)";
  };


  const blurTextArea = (e, placeholder, index) => {
    changingWord(e, placeholder, index);
    e.target.classList.remove("delete-button");
    e.target.parentNode.querySelector("button").style.transform = "scale(0) translateY(-40px)";
  };


  const changingWord = (word, index) => {    
    dispatch({
      type: 'CHANGE_WORD',
      listName: params.id,
      word: word,
      newWord: newWord,
      listIndex: params.index,
      wordIndex: index,
    })
  };

  const deleteTermAndDefinition = (arrWords, index) => {
    dispatch({
      type: 'REMOVE_WORD',
      listName: params.id,
      listIndex: params.index,
      indexIndividual: index,
      word: arrWords,
    })
  };
    
  return words.map((tdArray, index) => (
    <div key={tdArray} className="words-textArea">
      <button 
        className="button-delete" 
        onClick={(e) => deleteTermAndDefinitionAnimation(e, tdArray, index, deleteTermAndDefinition)}>
        Excluir
      </button>

      {tdArray.map((td, i) => (
        <textarea
          key={td + i}
          type="text"
          placeholder={td}
          onFocus={(e) => focusTextArea(e, td)}
          onChange={(e) => setNewWord(e.target.value)}
          onBlur={(e) => blurTextArea(e, e.target.placeholder, index)}
        />
      ))}
    </div>
  ));
};

export default Words;
