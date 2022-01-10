import { useState, useEffect, useRef } from "react";
import List from "../Components/List";
import gsap from "gsap";
import Planet from "../imgs/Planet.svg";
import {
  onFocusInput,
  closures,
  newList,
  opening,
  onBlurInput,
} from "../gsap/animations";
import "../Style/allstyles.css";

export const myList = JSON.parse(localStorage.getItem("myList")) || [];
export const allWordsAndDefinitions =
  JSON.parse(localStorage.getItem("allWordsAndDefinitions")) || [];

const InitialScream = () => {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const listComponent = useRef(null);
  const moreThenFive = myList.length < 5 ? true : false;
  const planetLogo = useRef(null);

  const animatedHover = (e) => {
    gsap.to(e.target, { scale: 1.08, duration: 0.5 });
  };

  const animetedHoverOut = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  const show = (e) => {
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

    if (!listName) {
      return;
    }

    const position = myList.length;

    myList.push(listName + "_" + position);
    allWordsAndDefinitions.push({
      [listName + "_" + position]: {
        termos: [],
        definições: [],
        perdiv: 20,
        description: description,
      },
    });
    save();

    setListName("");
    setDescription("");
    show(e);
  };

  useEffect(() => {
    opening();
  }, []);

  const save = () => {
    localStorage.setItem("myList", JSON.stringify(myList));
    localStorage.setItem(
      "allWordsAndDefinitions",
      JSON.stringify(allWordsAndDefinitions)
    );
  };

  const StyleList = (props) => {
    let c = 0;
    const howMany = [];

    while (c < props.howMany) {
      howMany.push(c);
      c++;
    }

    return howMany.map((v) => (
      <div
        key={v + 1}
        className="fake-components"
        onMouseEnter={(e) => animatedHover(e)}
        onMouseOut={(e) => animetedHoverOut(e)}
        onClick={(e) => show(e)}
      ></div>
    ));
  };

  const myListButton = (e) => {
    closures();
  };

  return (
    <div className="body-initial-screen">
      <header className="header">
        <div>
          <button className="new-list" onClick={(e) => show(e)}>
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
          <button type="button" onClick={(e) => show(e)}>
            Cancelar
          </button>
        </div>
      </form>

      <div className="lists-initialscreen" ref={listComponent}>
        <div className="listas">
          <List
            allWordsAndDefinitions={allWordsAndDefinitions}
            animationHover={(e) => animatedHover(e)}
            animetedHoverOut={(e) => animetedHoverOut(e)}
          />

          {moreThenFive && <StyleList howMany={5 - myList.length} />}
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

export default InitialScream;
