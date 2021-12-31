import { useState, useEffect, useRef } from "react";
import logo from "../imgs/Planet.png";
import List from "../Components/List";
import gsap from "gsap";
import "../Style/InitialScreen.css";

export const myList = JSON.parse(localStorage.getItem("myList")) || [];
export const allWordsAndDefinitions =
  JSON.parse(localStorage.getItem("allWordsAndDefinitions")) || [];

const InitialScream = () => {
  const formNewList = useRef();
  const listComponent = useRef();
  let moreThenFive = false;
  if (myList.length < 5) {
    moreThenFive = true;
  }

  const show = (e) => {
    e.preventDefault();
    const tl = gsap.timeline();

    if (formNewList.current.style.display !== "flex") {
      tl.to(listComponent.current, { scale: 0.95, opacity: 0, duration: 0.1 });
      tl.to(formNewList.current, { display: "flex", duration: 0.1 });
      tl.to(listComponent.current, { scale: 1, opacity: 1, duration: 0.1 });
      tl.to(formNewList.current, { scale: 1, opacity: 1, duration: 0.1 }, "<");
    } else {
      tl.to(listComponent.current, { scale: 0.95, opacity: 0, duration: 0.1 });
      tl.to(formNewList.current, { display: "none", duration: 0.1 });
      tl.to(listComponent.current, { scale: 1, opacity: 1, duration: 0.1 });
    }
  };

  const [listName, setListName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!listName) {
      return;
    }
    myList.push(listName);
    allWordsAndDefinitions.push({ [listName]: { termos: [], definições: [] } });

    setListName("");
    show(e);
  };

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
    localStorage.setItem(
      "allWordsAndDefinitions",
      JSON.stringify(allWordsAndDefinitions)
    );
  });

  const inputFocus = (e) => {
    const span = e.target.parentNode.querySelector("span");
    if (e.target.type === "textarea") {
      gsap.to(span, { y: -70, x: 15 });
    } else {
      gsap.to(span, { scale: 0.5, y: -35, x: 0 });
    }
  };

  const inputBlur = (e) => {
    const span = e.target.parentNode.querySelector("span");
    if (e.target.value) {
      if (e.target.type === "textarea") {
        gsap.to(span, { y: -70, x: 15 });
      } else {
        gsap.to(span, { scale: 0.5, y: -35, x: 0 });
      }
    } else {
      if (e.target.type === "textarea") {
        gsap.to(span, { y: -30, x: 15 });
      } else {
        gsap.to(span, { scale: 1, x: 0, y: 10 });
      }
    }
  };

  const StyleList = (props) => {
    let c = 0;
    const howMany = [];
    while (c < props.howMany) {
      howMany.push(c);
      c++;
    }

    return howMany.map((v) => (
      <div key={v + 1} className="fake-components"></div>
    ));
  };

  return (
    <div>
      <div className="div-new-list">
        <div>
          <button className="new-list" onClick={(e) => show(e)}>
            Nova Lista
          </button>
          <button className="new-list">Sobre</button>
        </div>
        <img src={logo} alt="PNG planeta" width={100} height={"auto"} />
      </div>

      <div className="lists-initialscreen" ref={listComponent}>
        <form
          className="form-new-list"
          ref={formNewList}
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="buttons">
            <button type="submit">Salvar</button>
            <button type="button" onClick={(e) => show(e)}>
              Cancelar
            </button>
          </div>
          <div className="div-span-input">
            <span className="span-input">Nome</span>
            <input
              required
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              onFocus={(e) => inputFocus(e)}
              onBlur={(e) => inputBlur(e)}
            />
          </div>

          <div className="div-span-input">
            <span className="span-textarea">Descrição</span>
            <textarea
              type="text"
              onFocus={(e) => inputFocus(e)}
              onBlur={(e) => inputBlur(e)}
            />
          </div>
        </form>

        <List />
        {moreThenFive && <StyleList howMany={5 - myList.length} />}
      </div>
    </div>
  );
};

export default InitialScream;
