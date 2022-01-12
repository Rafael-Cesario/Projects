import { useRef, useState } from "react";
import { wordListStore, save } from "../Pages/InitialScreeam";
import WordList from "../Pages/WordList";

const FormsAddWord = ({
  words,
  listIndex,
  listName,
  setWords,
  word01,
  word02,
  setWord01,
  setWord02,
  objMenus,
  deleted,
  setDeleted,
}) => {
  const [termo, setTermo] = useState(false);
  const [sameWordTextArea, setSameWordTextArea] = useState(false);

  const inputWord01 = useRef();
  const inputWord02 = useRef();

  const addSeveralWords = () => {
    setSameWordTextArea(false);
    const textareaWords = [];
    words.split(/\n/g).map((word) => word !== "" && textareaWords.push(word));
    textareaWords.forEach((el) => {
      const termosUpper = wordListStore[listIndex][listName.id]["termos"].map(
        (word) => word.toUpperCase()
      );

      const indexS = el.indexOf(";");
      const ter = el.slice(0, indexS);
      const def = el.slice(indexS + 1);
      const findTerm = termosUpper.indexOf(ter.toUpperCase());

      if (findTerm === -1) {
        wordListStore[listIndex][listName.id]["termos"].push(ter);
        wordListStore[listIndex][listName.id]["definições"].push(def);
      } else {
        setSameWordTextArea(true);
      }
    });
    save();
    setWords("");
  };

  const addSingleWord = (e) => {
    e.preventDefault();
    const termosUpper = wordListStore[listIndex][listName.id]["termos"].map(
      (word) => word.toUpperCase()
    );

    const findWord01 = termosUpper.indexOf(word01.toUpperCase());

    const red = "rgb(165, 49, 49)";
    const blue = "rgb(31, 72, 99)";

    if (word01 === "") {
      inputWord01.current.focus();
      inputWord01.current.style.borderColor = red;
    } else if (word02 === "") {
      inputWord02.current.focus();
      inputWord02.current.style.borderColor = red;
    } else {
      if (findWord01 > -1) {
        setTermo(true);
      } else {
        inputWord01.current.style.borderColor = blue;
        inputWord02.current.style.borderColor = blue;
        inputWord01.current.focus();

        wordListStore[listIndex][listName.id]["termos"].push(word01);
        wordListStore[listIndex][listName.id]["definições"].push(word02);

        save();
        setWord01("");
        setWord02("");
      }
    }
  };

  const removeLastWord = () => {
    wordListStore[listIndex][listName.id]["termos"].pop();
    wordListStore[listIndex][listName.id]["definições"].pop();
    inputWord01.current.focus();
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
    }, 1000);
    save();
    WordList.forceUpdate();
  };

  return (
    <div className="forms-add-word">
      <h2>Adicionar Palavras</h2>
      <form className="several">
        <h2>Adicione uma lista de palavras</h2>
        <p>Use " ; " (ponto e virgula) para separar termo e definição.</p>
        <textarea
          name="addWords"
          value={words}
          placeholder="TERMO ; DEFINIÇÃO"
          onChange={(e) => setWords(e.target.value)}
        ></textarea>
        <div className="buttons">
          <button type="button" onClick={() => addSeveralWords()}>
            Adicionar
          </button>
          <button type="button" onClick={(e) => objMenus.show(e, "addWords")}>
            Fechar
          </button>
          {sameWordTextArea && (
            <span>Algumas palavras não foram adicionadas pois já existem!</span>
          )}
        </div>
      </form>

      <form className="single" onSubmit={(e) => addSingleWord(e)}>
        <div className="input-group">
          <h2>Termo</h2>
          {termo && <span>Termo repetido</span>}
          <input
            type="text"
            value={word01}
            onChange={(e) => setWord01(e.target.value)}
            ref={inputWord01}
          />
        </div>

        <div className="input-group">
          <h2>Definição</h2>
          <input
            type="text"
            value={word02}
            onChange={(e) => setWord02(e.target.value)}
            ref={inputWord02}
          />
        </div>

        <div className="buttons">
          <button type="submit">Adicionar</button>
          <button type="button" onClick={(e) => objMenus.show(e, "addWords")}>
            Fechar
          </button>
          <button type="button" onClick={removeLastWord}>
            Remover Ultima palavra adicionada
          </button>
        </div>
        {deleted && <h2 className="teste">Ultima palavra deletada</h2>}
      </form>
    </div>
  );
};

export default FormsAddWord;
