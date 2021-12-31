import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { allWordsAndDefinitions } from "./InitialScreeam";
import { myList } from "./InitialScreeam";
import WordsContainer from "../Components/WordsContainer";
import "../Style/allstyles.css";

const store = () =>
  localStorage.setItem(
    "allWordsAndDefinitions",
    JSON.stringify(allWordsAndDefinitions)
  );

function WordList() {
  const listName = useParams();
  const listIndex = myList.indexOf(listName.id);
  const [words, setWords] = useState("");
  const [word01, setWord01] = useState("");
  const [word02, setWord02] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [termo, setTermo] = useState(false);
  const [definição, setDefinição] = useState(false);
  const [sameWordTextArea, setSameWordTextArea] = useState(false);
  const inputWord01 = useRef();
  const inputWord02 = useRef();

  const addSeveralWords = () => {
    setSameWordTextArea(false);
    const textareaWords = [];
    words.split(/\n/g).map((word) => word !== "" && textareaWords.push(word));
    textareaWords.forEach((el) => {
      const termosUpper = allWordsAndDefinitions[listIndex][listName.id][
        "termos"
      ].map((word) => word.toUpperCase());

      const indexS = el.indexOf(";");
      const ter = el.slice(0, indexS);
      const def = el.slice(indexS + 1);
      const findTerm = termosUpper.indexOf(ter.toUpperCase());
      console.log(findTerm);

      if (findTerm === -1) {
        allWordsAndDefinitions[listIndex][listName.id]["termos"].push(ter);
        allWordsAndDefinitions[listIndex][listName.id]["definições"].push(def);
      } else {
        setSameWordTextArea(true);
      }
    });
    store();
    setWords("");
  };

  const addSingleWord = (e) => {
    e.preventDefault();
    const termosUpper = allWordsAndDefinitions[listIndex][listName.id][
      "termos"
    ].map((word) => word.toUpperCase());

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

        allWordsAndDefinitions[listIndex][listName.id]["termos"].push(word01);
        allWordsAndDefinitions[listIndex][listName.id]["definições"].push(
          word02
        );

        store();
        setWord01("");
        setWord02("");
      }
    }
  };

  const removeLastWord = () => {
    allWordsAndDefinitions[listIndex][listName.id]["termos"].pop();
    allWordsAndDefinitions[listIndex][listName.id]["definições"].pop();
    inputWord01.current.focus();
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
    }, 500);
    store();
  };

  const formsAddWord = useRef();
  const showForms = (e) => {
    e.preventDefault();
    formsAddWord.current.style.display !== "grid"
      ? (formsAddWord.current.style.display = "grid")
      : (formsAddWord.current.style.display = "none");
  };

  return (
    <div className="word-list">
      <header className="word-list-header">
        <div className="menus">
          <Link className="home" to="/">
            Home
          </Link>
          <Link to={`/${listName.id}/configs`}>Configs</Link>
          <button onClick={(e) => showForms(e)}>Adicionar Palavras</button>
        </div>

        <h1>{listName.id}</h1>
      </header>

      <div className="forms-add-word" ref={formsAddWord}>
        <form action="" className="several">
          <h2>
            Adicione uma lista de palavras separando o termo da definição com "
            ; "
          </h2>
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
            <button type="button">Fechar</button>
            {sameWordTextArea && (
              <span>
                Algumas palavras não foram adicionadas pois já existem!{" "}
              </span>
            )}
          </div>
        </form>

        <form className="single" onSubmit={(e) => addSingleWord(e)}>
          {termo && <span>Termo repetido</span>}
          <input
            type="text"
            placeholder="Termo"
            value={word01}
            onChange={(e) => setWord01(e.target.value)}
            ref={inputWord01}
          />

          {definição && <span>Definição repetida</span>}
          <input
            type="text"
            placeholder="Definição"
            value={word02}
            onChange={(e) => setWord02(e.target.value)}
            ref={inputWord02}
          />
          <div className="buttons">
            <button type="submit">Adicionar</button>
            <button type="button" onClick={removeLastWord}>
              Remover Ultima palavra adicionada
            </button>
            <button type="button">Fechar</button>
          </div>
          {deleted && <h1 className="teste">Ultima palavra deletada</h1>}
        </form>
      </div>

      <WordsContainer />
    </div>
  );
}

export default WordList;
