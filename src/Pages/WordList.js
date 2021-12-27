import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Style/WordList.css";
const allWordsAndDefinitions =
  JSON.parse(localStorage.getItem("allWordsAndDefinitions")) || [];

const save = () => {
  localStorage.setItem(
    "allWordsAndDefinitions",
    JSON.stringify(allWordsAndDefinitions)
  );
};

function WordList() {
  const listName = useParams();
  const [words, setWords] = useState("");
  const [word01, setWord01] = useState("");
  const [word02, setWord02] = useState("");

  const addSeveralWords = () => {
    words
      .split("\n")
      .map((word) => word !== "" && allWordsAndDefinitions.push(word));
    save();
    setWords("");
  };

  const input02 = useRef(null);
  const addSingleWord = (e) => {
    e.preventDefault();
    if (!word02) {
      input02.current.focus();
    } else {
      let newWord = `${word01};${word02}`;
      allWordsAndDefinitions.push(newWord);
      save();
      setWord01("");
      setWord02("");
    }
  };

  return (
    <div className="word-list">
      <header className="word-list-header">
        <div className="menus">
          <Link className="home" to="/">
            Home
          </Link>
          <Link to={`/${listName.id}/configs`}>Configs</Link>
        </div>

        <h1>{listName.id}</h1>
        <button>Adicionar Palavras</button>
      </header>

      <div className="forms-add-word">
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
          </div>
        </form>

        <form className="single" onSubmit={(e) => addSingleWord(e)}>
          <input
            type="text"
            placeholder="Termo"
            value={word01}
            onChange={(e) => setWord01(e.target.value)}
          />
          <input
            type="text"
            placeholder="Definição"
            ref={input02}
            value={word02}
            onChange={(e) => setWord02(e.target.value)}
          />
          <div className="buttons">
            <button type="submit">Adicionar</button>
            <button type="button">Fechar</button>
          </div>
        </form>
      </div>

      {allWordsAndDefinitions.map((word) => (
        <p className="teste">{word}</p>
      ))}

      <p className="teste">{word01 + "  " + word02}</p>
    </div>
  );
}

export default WordList;
