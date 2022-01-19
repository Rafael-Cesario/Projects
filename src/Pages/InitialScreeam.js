import { useState, useEffect, useRef } from "react";
import List from "../Components/List";
import Planet from "../imgs/Planet.svg";
import { useContext } from "react";
import {
  onFocusInput,
  closures,
  newList,
  opening,
  onBlurInput,
  animatedHover,
  animatedHoverOut,
} from "../gsap/animations";
import "../Style/allstyles.css";
import { WordListStore } from "../context/WordListStore";

const InitialScream = () => {
  const { wordListStore, dispatch } = useContext(WordListStore);
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const listComponent = useRef(null);
  const moreThenFive = Object.keys(wordListStore).length < 5 ? true : false;
  const planetLogo = useRef(null);

  const newListOpen = (e) => {
    e.preventDefault();

    if (!open) {
      newList(open);
      setOpen(true);
    } else {
      setOpen(false);
      newList(open);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = `${Math.floor(Math.random() * 999)}`;
    const name = `${listName}_${id}`;

    if (!listName) {
      return;
    }

    for (let list of Object.keys(wordListStore)) {
      if (list === name) return;
    }

    dispatch({
      type: "CREATE-LIST",
      name: name,
      id: id,
      description: description,
    });

    setListName("");
    setDescription("");
    newListOpen(e);
  };

  useEffect(() => {
    opening();
  }, []);



  const myListButton = (e) => {
    closures();
  };

  return (
    <div className="body-initial-screen">
      <header className="header">
        <div>
          <button className="new-list" onClick={(e) => newListOpen(e)}>
            Nova Lista
          </button>
          <button className="new-list">Sobre</button>
        </div>
      </header>

      <form className="form-new-list" onSubmit={(e) => onSubmit(e)}>
        <div className="div-span-input">
          <span className="span-input">Nome</span>
          <input
            required
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            onFocus={(e) => onFocusInput(e)}
            onBlur={(e) => onBlurInput(e)}
          />
        </div>

        <div className="div-span-input">
          <span className="span-textarea">Descrição</span>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={(e) => onFocusInput(e)}
            onBlur={(e) => onBlurInput(e)}
          />
        </div>

        <div className="buttons">
          <button type="submit">Salvar</button>
          <button type="button" onClick={(e) => newListOpen(e)}>
            Cancelar
          </button>
        </div>
      </form>

      <div className="lists-initialscreen" ref={listComponent}>
        <div className="listas">
          <List
            animationHover={(e) => animatedHover(e)}
            animetedHoverOut={(e) => animatedHoverOut(e)}
          />

          {moreThenFive && (
            <FakeLists newListOpen={newListOpen} howMany={5 - Object.keys(wordListStore).length}  />
          )}
        </div>

        <div className="opening">
          <h1 className="title">
            Um site para te ajudar a memorizar <br /> algumas palavras.
            <br />
            <button className="new-list" onClick={(e) => myListButton(e)}>
              Minhas Listas
            </button>
          </h1>

          <img
            className="img"
            src={Planet}
            alt="PNG planeta"
            width={100}
            height={"65"}
            ref={planetLogo}
          />
        </div>
      </div>
    </div>
  );
};

const FakeLists = ({howMany, newListOpen}) => {
  const arrHowMany = [];
  let c = 0;

  while (c < howMany) {
    arrHowMany.push(c);
    c++;
  }

  return arrHowMany.map((v) => (
    <div
      key={v + 1}
      className="fake-components"
      onMouseEnter={(e) => animatedHover(e)}
      onMouseOut={(e) => animatedHoverOut(e)}
      onClick={(e) => newListOpen(e)}
    ></div>
  ));
};

export default InitialScream;


