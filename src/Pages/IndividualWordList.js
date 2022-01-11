import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../imgs/Planet.svg";
import { individualWordListAnimation } from "../gsap/animations";
import { save, wordListStore } from "./InitialScreeam";

const IndividualWordList = () => {
  const params = useParams();
  const listName = params.id.slice(0, params.id.indexOf("_"));
  const listIndex = [params.id.slice(params.id.indexOf("_") + 1), params.index];
  const list =
    wordListStore[listIndex[0]][params.id].individualWordList[listIndex[1]];

  const words = useRef();
  const info = useRef();

  const [status, setStatus] = useState(list.status);
  list.status = status;

  const navigate = useNavigate();

  // Animação carregar pagina
  useEffect(() => {
    individualWordListAnimation();
  }, []);

  /* Atualizar localStorage */
  useEffect(() => {
    save();
  }, [status]);

  /* Mudar status lista */
  const scheduleButton = (e) => {
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(".study-time", { scale: 0.95, color: "#ffc82d", duration: 0.2 });
    tl.to(".study-time", { scale: 1, color: "#e6e6e6", duration: 0.2 });

    switch (status) {
      case "...":
        setStatus("Diariamente");
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
    navigate(`/${params.id}/study${listIndex[1]}`);
  };

  return (
    <div className="individaul-word-list">
      <header>
        <Link to={`/${params.id}`}>Voltar</Link>
        <h1>{listName}</h1>
        <img src={logo} alt="Planeta" width={100} height={65} />
      </header>

      <div className="container">
        <div className="info" ref={info}>
          <button className="start-study-button" onClick={() => studyList()}>
            Estudar Lista
          </button>
          <h2 className="study-time">Estudar Lista: {list.status}</h2>
          <button onClick={(e) => scheduleButton(e)}>
            Mudar tempo de estudo
          </button>
          <h2>Total de palavras na lista: {list.words.length}</h2>

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
  return props.words.map((tdArray, i) => (
    <div key={tdArray + i}>
      {tdArray.map((td, i) => (
        <p key={td + i}>{td}</p>
      ))}
    </div>
  ));
};
