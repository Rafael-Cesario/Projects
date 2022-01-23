import { showFormsAnimation, showConfigsAnimation } from "../gsap/animations";
import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { WordListStore } from "../context/WordListStore";
import WordsContainer from "../Components/WordsContainer";
import Configs from "../Components/Configs";
import FormsAddWord from "../Components/FormsAddWord";
import logo from "../imgs/Planet.svg";
import "../Style/allstyles.css";

function WordList() {
  const { wordListStore } = useContext(WordListStore);
  const listName = useParams();
  const removeid = listName.id.indexOf("_");
  const nameNew = listName.id.slice(0, removeid);
  const [singleTerm, setSingleTerm] = useState("");
  const [singleDefinition, setSingleDefinition] = useState("");

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
          <h2>{wordListStore[listName.id].terms.length} Palavras</h2>
        </div>

        <img src={logo} alt="PNG PLANETA" width={100} height={70} />
      </header>

      <div className="buttonsFixed">
        <a href="#learning">Estudando</a>
        <a href="#onHold">Próximas</a>
        <a href="#learned">Finalizadas</a>
      </div>

      <FormsAddWord
        listName={listName}
        objMenus={objMenus}
        singleTerm={singleTerm}
        singleDefinition={singleDefinition}
        setSingleDefinition={setSingleDefinition}
        setSingleTerm={setSingleTerm}
      />

      <Configs nameNew={nameNew} />

      <WordsContainer />
    </div>
  );
}

export default WordList;
