import { useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { individualWordListAnimation, typeWriterAnimation } from "../gsap/animations";
import { WordListStore } from "../context/WordListStore";
import logo from "../imgs/Planet.svg";
import Words from "../Components/Words";

const IndividualWordList = () => {
  const { wordListStore, dispatch } = useContext(WordListStore);
  const words = useRef();
  const info = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const listName = params.id.slice(0, params.id.indexOf("_"));
  const listIndex = params.index;
  const list = wordListStore[params.id].individualWordList[listIndex];
  const [status, setStatus] = useState(list.status);
  const [answerWith, setAnswerWith] = useState(list.answerWith);

  useEffect(() => {
    individualWordListAnimation();
  }, []);

  const scheduleButton = (e) => {
    e.preventDefault();
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

    dispatch({
      type: 'CHANGE_LIST_STATUS',
      listName: params.id,
      listIndex: params.index,
      status: status,
    })
    
  };

  const studyList = () => {
    if (!list.words.length) return
    navigate(`/${params.id}/study${listIndex}`);
  };

  const changeAnswerWith = (e) => {
    e.preventDefault();

    answerWith === "Term"
      ? setAnswerWith("Definition")
      : setAnswerWith("Term");

    dispatch({
      type: 'CHANGE_ANSWER_WITH',
      listName: params.id,
      listIndex: params.index,
      answerWith: answerWith,
    })
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

            <button onClick={(e) => scheduleButton(e)}> Mudar tempo de estudo </button> 

            <button onClick={(e) => changeAnswerWith(e)}>
              Responder com: {wordListStore[params.id].individualWordList[params.index].answerWith === "Definition" ? "Definição" : "Termo"}
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
            wordListStore={wordListStore}
            dispatch={dispatch}
            listIndex={listIndex}
            params={params}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualWordList;
