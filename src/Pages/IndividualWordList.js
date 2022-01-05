import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/Planet.png";

const IndividualWordList = (props) => {
  const tempData = JSON.parse(localStorage.getItem("tempData"));
  const ListName = tempData.listName.slice(0, tempData.listName.indexOf("_"));
  const [statusSingleList, setStatusSingleList] = useState(
    JSON.parse(localStorage.getItem("statusSingleList")) || []
    );
  const words = useRef();
  const info = useRef();
  const header = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(header.current, { y: -300 }, { y: 0, ease: "power4.out" });
    tl.fromTo(
      words.current,
      { y: "120vh" },
      { y: 0, ease: "back.out(1.2)", duration: 1 }
    );

    tl.fromTo(
      info.current,
      { x: "-100vw" },
      { x: 0, ease: "power4.out", duration: 1 },
      "<"
    );
  }, []);

  useEffect(() => {
  }, [statusSingleList]);

/*   const scheduleButton = (e) => {
    e.preventDefault();
    const h2 = info.current.children[0];
    const tl = gsap.timeline();
    tl.to(h2, { scale: 0.95, color: "#ffc82d", duration: 0.2 });
    tl.to(h2, { scale: 1, color: "#e6e6e6", duration: 0.2 });
    switch (cronograma) {
      case "...":
        setCronograma("Diariamente");
        break;

      case "Diariamente":
        setCronograma("Semanalmente");
        break;

      case "Semanalmente":
        setCronograma("Estudada");
        break;

      default:
        setCronograma("...");
    }
  }; */

  return (
    <div className="individaul-word-list">
      <header ref={header}>
        <Link to={`/${tempData.listName}`}>Voltar</Link>
        <h1>{ListName}</h1>
        <img src={logo} alt="Planeta" width={100} height={65} />
      </header>

      <div className="container">
        <div className="info" ref={info}>
          <h2>Estudar Lista: {}</h2>
          <h2>Total de palavras na lista: {tempData.words.length}</h2>
          <button>ESTUDAR LISTA</button>
{/*           <button onClick={(e) => scheduleButton(e)}>CRONOGRAMA</button> */}
          <button>OPÇÕES</button>
        </div>

        <div className="words" ref={words}>
          <Words words={tempData.words} />
        </div>
      </div>
    </div>
  );
};

export default IndividualWordList;

const Words = (props) => {
  return props.words.map((tdArray) => (
    <div key={tdArray}>
      {tdArray.map((td) => (
        <p key={td}>{td}</p>
      ))}
    </div>
  ));
};
