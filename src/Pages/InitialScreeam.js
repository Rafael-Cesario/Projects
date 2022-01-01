import { useState, useEffect, useRef } from "react";
import backgroundimg from "../imgs/backgroundimg.jpg";
import logo from "../imgs/Planet.png";
import List from "../Components/List";
import gsap from "gsap";
import "../Style/allstyles.css";

export const myList = JSON.parse(localStorage.getItem("myList")) || [];
export const allWordsAndDefinitions =
  JSON.parse(localStorage.getItem("allWordsAndDefinitions")) || [];

const InitialScream = () => {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const formNewList = useRef(null);
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

    const tl = gsap.timeline();
    tl.to(listComponent.current, {
      scale: 0.95,
      opacity: 0,
      ease: "power4.out",
    });
    formNewList.current.style.display !== "flex"
      ? tl.to(formNewList.current, { display: "flex" })
      : tl.to(formNewList.current, { display: "none" });
    tl.to(listComponent.current, { scale: 1, opacity: 1, ease: "power4.out" });
    tl.duration(0.3).resume();
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

    setListName("");
    setDescription("");
    inputBlur(e);
    show(e);
  };

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
    localStorage.setItem(
      "allWordsAndDefinitions",
      JSON.stringify(allWordsAndDefinitions)
    );

    const tl = gsap.timeline({ repeat: Infinity, yoyo: true });
    tl.to(planetLogo.current, { rotate: 10, ease: "back.out(2)" });
    tl.duration(2).resume();
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
    if (!e.target.value) {
      if (e.target.type === "textarea") {
        gsap.to(span, { y: -30, x: 15 });
      } else {
        gsap.to(span, { scale: 1, x: 0, y: 0 });
      }
    } else {
      if (e.target.type === "textarea") {
        gsap.to(span, { y: -70, x: 15 });
      } else {
        gsap.to(span, { scale: 0.5, y: -35, x: 0 });
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
      <div
        key={v + 1}
        className="fake-components"
        onMouseEnter={(e) => animatedHover(e)}
        onMouseOut={(e) => animetedHoverOut(e)}
        onClick={(e) => show(e)}
      ></div>
    ));
  };

  return (
    <div className="body-initial-screem">
      <img
        className="img-background-wordlist"
        src={backgroundimg}
        alt="Backgroundimage"
        width={1920}
        height={1080}
      />
      <div className="div-new-list">
        <div>
          <button className="new-list" onClick={(e) => show(e)}>
            NOVA LISTA
          </button>
          <div className="divborder50"></div>
          <button className="new-list">SOBRE</button>
        </div>
        <img
          className="img"
          src={logo}
          alt="PNG planeta"
          width={100}
          height={"65"}
          ref={planetLogo}
        />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>

        <List
          allWordsAndDefinitions={allWordsAndDefinitions}
          animationHover={(e) => animatedHover(e)}
          animetedHoverOut={(e) => animetedHoverOut(e)}
        />
        {moreThenFive && <StyleList howMany={5 - myList.length} />}
      </div>
    </div>
  );
};

export default InitialScream;
