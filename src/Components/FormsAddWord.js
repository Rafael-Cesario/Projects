import { useRef, useState, useContext } from "react";
import { WordListStore } from "../context/WordListStore";

const FormsAddWord = ({ listName, objMenus }) => {
  const { wordListStore, dispatch } = useContext(WordListStore);
  const [hasTerm, setHasTerm] = useState(false);
  const [hasError, setHasError] = useState("")
  const [severalWords, setSeveralWords] = useState("");
  const [singleTerm, setSingleTerm] = useState("");
  const [singleDefinition, setSingleDefinition] = useState("");
  const inputWord01 = useRef(null);
  const inputWord02 = useRef(null);

  const addSeveralWords = () => {
    setHasError('')

    const textareaWords = severalWords.split(/\n/g).filter(word => word !== "");
    
    textareaWords.forEach((word) => {      
      const spacerIndex = word.indexOf(";") > -1 ? word.indexOf(";") : false;
      const term = word.slice(0, spacerIndex);
      const definition = word.slice(spacerIndex + 1);
      const termosUpper = wordListStore[listName.id]["terms"].map((word) => word.toUpperCase());
      const findTerm = termosUpper.indexOf(term.toUpperCase()) > -1 ? true : false ;

      if (!spacerIndex) {
        setHasError("Verifique se todas as palvras estão separadas por ;")
        return;
      }

      if (!definition){
        setHasError("Algumas Palavras estão sem sua definição")
        return;
      }

      if (findTerm) {
        setHasError("Algumas palavras já existem então não foram adicionadas")
        return
      }
      
      dispatch({
        type: "ADD_WORD",
        listName: listName.id,
        term: term,
        definition: definition,
      });

      setSeveralWords("");
    });
  };

  const addSingleWord = (e) => {
    e.preventDefault();

    if (WordAlreadExist()) return;

    dispatch({
      type: "ADD_WORD",
      listName: listName.id,
      term: singleTerm,
      definition: singleDefinition,
    });

    setSingleTerm("");
    setSingleDefinition("");
    setHasTerm(false);
  };

  const removeLastWord = () => {
    dispatch({
      type: "REMOVE_WORD",
      listName: listName.id,
    });
  };

  const WordAlreadExist = () => {
    const termosUpper = wordListStore[listName.id]["terms"].map((word) => word.toUpperCase() );
    const duplicatedTerm = termosUpper.indexOf(singleTerm.toUpperCase()) > -1 ? true : false;

    if (singleTerm === "") {
      focusAndColorInput(inputWord01, "rgb(165, 49, 49)");
      return true;
    }

    if (singleDefinition === "") {
      focusAndColorInput(inputWord02, "rgb(165, 49, 49)");
      return true;
    }

    if (duplicatedTerm) {
      setHasTerm(true);
      focusAndColorInput(inputWord01, "rgb(165, 49, 49)");
      return true;
    }

    focusAndColorInput(inputWord02, "rgb(31, 72, 99)");
    focusAndColorInput(inputWord01, "rgb(31, 72, 99)");

    return false;
  };

  const focusAndColorInput = (input, color) => {
    input.current.focus();
    input.current.style.backgroundColor = color;
  };

  return (
    <div className="forms-add-word">
      <h2>Adicionar Palavras</h2>

      <form className="several">      
        <h2>Adicione uma lista de palavras</h2>        
        <p>Use " ; " (ponto e virgula) para separar termo e definição.</p>
        {hasError.length > 0 && <p className="error">{hasError}</p> }
        <textarea name="addWords" value={severalWords} placeholder="TERMO ; DEFINIÇÃO" onChange={(e) => setSeveralWords(e.target.value)} />
        <div className="buttons">
          <button type="button" onClick={() => addSeveralWords()}>Adicionar</button>
          <button type="button" onClick={(e) => objMenus.show(e, "addWords")}>Fechar</button>
        </div>
      </form>

      <form className="single" onSubmit={(e) => addSingleWord(e)}>
        <div className="input-group">
          <h2>Termo</h2>
          {hasTerm && <span>Termo repetido</span>}
          <input type="text" value={singleTerm} onChange={(e) => setSingleTerm(e.target.value)} ref={inputWord01} />
        </div>

        <div className="input-group">
          <h2>Definição</h2>
          <input type="text" value={singleDefinition} onChange={(e) => setSingleDefinition(e.target.value)} ref={inputWord02} />
        </div>

        <div className="buttons">
          <button type="submit">Adicionar</button>
          <button type="button" onClick={(e) => objMenus.show(e, "addWords")}> Fechar </button> 
          <button type="button" onClick={removeLastWord}> Remover Ultima palavra adicionada </button>
        </div>
      </form>

    </div>
  );
};

export default FormsAddWord;
