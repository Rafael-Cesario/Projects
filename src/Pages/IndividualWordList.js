import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { individualWordListAnimation } from "../gsap/animations";
import { save, wordListStore } from "./InitialScreeam";
import logo from "../imgs/Planet.svg";
import Words from "../Components/Words";

const IndividualWordList = () => {
  const words = useRef();
  const info = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const listName = params.id.slice(0, params.id.indexOf("_"));
  const listIndex = [
    wordListStore
      .map((list) => Object.keys(list)[0].indexOf(params.id))
      .indexOf(0),
    params.index,
  ];
  const list =
    wordListStore[listIndex[0]][params.id].individualWordList[listIndex[1]];
  const [status, setStatus] = useState(list.status);
  const [answerWith, setAnswerWith] = useState(list.answerWith);
  const [newWord, setNewWord] = useState("");

  list.answerWith = answerWith;
  list.status = status;

  // Animação carregar pagina
  useEffect(() => {
    individualWordListAnimation();
  }, []);

  /* Atualizar localStorage */
  useEffect(() => {
    save();
  }, [status, answerWith, newWord]);

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

  const changeAnswerWith = (e) => {
    e.preventDefault();

    answerWith === "Termo"
      ? setAnswerWith("Definição")
      : setAnswerWith("Termo");
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
          <div className="options">
            <button onClick={() => studyList()}>Estudar Lista</button>

            <button onClick={(e) => scheduleButton(e)}>
              Mudar tempo de estudo
            </button>

            <button onClick={(e) => changeAnswerWith(e)}>
              Responder com: {list.answerWith}
            </button>
          </div>

          <p>Dica: Aperte [ CTRL + F ] para procurar por uma palavra</p>
        </div>

        <div className="words" ref={words}>
          <div className="words-info">
            <p>Total de palavras: {list.words.length}</p>
            <p className="study-time">Estudar lista: {list.status}</p>
          </div>
          
          <Words
            words={list.words}
            newWord={newWord}
            setNewWord={setNewWord}
            wordListStore={wordListStore}
            listIndex={listIndex}
            params={params}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualWordList;
