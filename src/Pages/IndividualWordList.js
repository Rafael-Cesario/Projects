import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/Planet.png";

const IndividualWordList = () => {
  const tempData = JSON.parse(localStorage.getItem("tempData"));
  const listName = tempData.listName.slice(0, tempData.listName.indexOf("_"));
  const individualWordList = JSON.parse(
    localStorage.getItem("individualWordList")
  );
  const list = individualWordList[tempData.listName][tempData.index];

  const words = useRef();
  const info = useRef();
  const header = useRef();

  const [status, setStatus] = useState(list.status);
  list.status = status;

  const navigate = useNavigate();

  // Animação carregar pagina
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power4.out" });
    tl.from(header.current, { y: -100, opacity: 0 });
    tl.from(info.current, { x: "-100vw", opacity: 0 });
    tl.from(
      words.current,
      {
        x: "120vw",
        opacity: 0,
        position: "fixed",
        width: "fitContent",
        right: 50,
      },
      "<"
    );
    tl.duration(0.5).resume();
  }, []);

  /* Atualizar localStorage */
  useEffect(() => {
    localStorage.setItem(
      "individualWordList",
      JSON.stringify(individualWordList)
    );
  }, [status, individualWordList]);

  /* Mudar status lista */
  const scheduleButton = (e) => {
    e.preventDefault();
    const h2 = info.current.children[0];
    const tl = gsap.timeline();
    tl.to(h2, { scale: 0.95, color: "#ffc82d", duration: 0.2 });
    tl.to(h2, { scale: 1, color: "#e6e6e6", duration: 0.2 });

    switch (status) {
      case "...":
        setStatus("Diariamente");
        console.log(list.status);
        break;

      case "Diariamente":
        setStatus("Semanalmente");
        break;

      case "Semanalmente":
        setStatus("Estudada");
        break;

      default:
        setStatus("...");
    }
  };

  /* Iniciar Estudar Lista */
  const studyList = () => {
    navigate(`/${tempData.listName}/study${list.index}`);
  };

  return (
    <div className="individaul-word-list">
      <header ref={header}>
        <Link to={`/${tempData.listName}`}>Voltar</Link>
        <h1>{listName}</h1>
        <img src={logo} alt="Planeta" width={100} height={65} />
      </header>

      <div className="container">
        <div className="info" ref={info}>
          <h2>
            Estudar Lista: {list.status}
            <button onClick={(e) => scheduleButton(e)}>
              Mudar tempo de estudo
            </button>
          </h2>
          <h2>Total de palavras na lista: {list.words.length}</h2>

          <button onClick={() => studyList()}>Estudar Lista</button>
          <button>OPÇÕES</button>
        </div>

        <div className="words" ref={words}>
          <Words words={list.words} />
        </div>
      </div>
    </div>
  );
};

export default IndividualWordList;

/* Criar uma div para cada array e um p para cada palavra */
const Words = (props) => {
  return props.words.map((tdArray) => (
    <div key={tdArray}>
      {tdArray.map((td) => (
        <p key={td}>{td}</p>
      ))}
    </div>
  ));
};
