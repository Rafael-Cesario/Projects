import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { wordListStore } from "./InitialScreeam";
import WordsContainer from "../Components/WordsContainer";
import logo from "../imgs/Planet.svg";
import "../Style/allstyles.css";
import { showFormsAnimation, showConfigsAnimation } from "../gsap/animations";
import Configs from "../Components/Configs";
import FormsAddWord from "../Components/FormsAddWord";
import { useState } from "react";

function WordList() {
  const listName = useParams();
  const listIndex = wordListStore
    .map((list) => Object.keys(list)[0].indexOf(listName.id))
    .indexOf(0);

  const removeid = listName.id.indexOf("_");
  const nameNew = listName.id.slice(0, removeid);
  const [words, setWords] = useState("");
  const [word01, setWord01] = useState("");
  const [word02, setWord02] = useState("");
  const [deleted, setDeleted] = useState(false);

  const objMenus = {
    menuOpen: false,

    show: (e, menu) => {
      e.preventDefault();
      const func = objMenus[menu];
      func(e, objMenus);
    },

    configs: (e, objMenus) => {
      e.preventDefault();
      showConfigsAnimation(e, objMenus);
    },

    addWords: (e, objMenus) => {
      e.preventDefault();
      showFormsAnimation(e, objMenus);
    },
  };

  return (
    <div className="word-list">
      <header className="word-list-header">
        <div className="menus">
          <Link className="home" to="/">
            Voltar
          </Link>

          <button onClick={(e) => objMenus.show(e, "configs")}>Configs</button>
          <button onClick={(e) => objMenus.show(e, "addWords")}>
            Adicionar Palavras
          </button>
        </div>

        <div className="wordlist-title-words">
          <h1>{nameNew}</h1>
          <h2>
            {wordListStore[listIndex][listName.id].termos.length} Palavras
          </h2>
        </div>

        <img src={logo} alt="PNG PLANETA" width={100} height={70} />
      </header>

      <div className="buttonsFixed">
        <a href="#learning">Estudando</a>
        <a href="#onHold">Próximas</a>
        <a href="#learned">Finalizadas</a>
      </div>

      <FormsAddWord
        words={words}
        listIndex={listIndex}
        listName={listName}
        setWords={setWords}
        word01={word01}
        word02={word02}
        setWord01={setWord01}
        setWord02={setWord02}
        objMenus={objMenus}
        deleted={deleted}
        setDeleted={setDeleted}
      />

      <Configs />

      <WordsContainer />
    </div>
  );
}

export default WordList;
