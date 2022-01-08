import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";

const individualWordList = JSON.parse(
  localStorage.getItem("individualWordList")
);

const StudyList = () => {
  const list = individualWordList[useParams().id][useParams().index];
  const study = {
    toStudy: list.words.slice(0),
    studying: [],
    complete: [],
  };

  while (study.studying.length < 10) {
    study.studying.push({
      termo: study.toStudy[0][0],
      definição: study.toStudy[0][1],
    });
    study.toStudy.shift();
  }

  return <AnswerComponent list={list} study={study} />;
};

const AnswerComponent = ({ list, study }) => {
  const [screen01, setScreen01] = useState(true);
  const [c, setC] = useState(0);

  return (
    <div className="study-list">
      <header>
        <Link to={`/${list.name}/${list.index}`}>Voltar</Link>
      </header>

      {screen01 ? (
        <Screen01 study={study} setScreen01={setScreen01} setC={setC} c={c} />
      ) : (
        <Sreean02 list={list} setC={setC} setScreen01={setScreen01} />
      )}
    </div>
  );
};

const Screen01 = ({ study, setScreen01, c, setC }) => {
  const h2 = useRef();
  const [n, setN] = useState(1);
  const inputAnswer = useRef();
  const [answer, setAnswer] = useState("");

  const next = (e) => {
    e.preventDefault();
    const find =
      study.studying[c].definição.trim().toUpperCase() ===
      answer.trim().toUpperCase();
    if (n === 1) {
      next01(e, find);
      setN(2);
    } else {
      const tl = gsap.timeline();
      tl.to(h2.current, { opacity: 0, duration: 0.1 });
      tl.to(
        inputAnswer.current,
        { borderBottom: "2px solid white", duration: 0.3 },
        "<"
      );
      tl.eventCallback("onComplete", next02, [e, find]);
      setN(1);
    }
  };

  const next01 = (e, find) => {
    e.preventDefault();
    const tl = gsap.timeline();
    const color = find ? "forestgreen" : "crimson";

    tl.to(h2.current, {
      color: color,
      duration: 0.1,
    });
    tl.to(h2.current, { opacity: 1, duration: 0.1 });
    tl.to(
      inputAnswer.current,
      {
        borderBottom: `2px solid ${color}`,
        duration: 0.1,
      },
      "<"
    );
  };

  const next02 = (e, find) => {
    e.preventDefault();
    if (c === study.studying.length - 1) {
      setC(0);
    } else {
      if (find) {
        study.studying.splice(c, 1);
        if (study.toStudy.length > 0) {
          study.studying.push({
            termo: study.toStudy[0][0],
            definição: study.toStudy[0][1],
          });
          study.toStudy.shift();
        }
        setAnswer("");
        inputAnswer.current.focus();
        if (study.toStudy.length + study.studying.length === 0) {
          setScreen01(false);
        }
      } else {
        setAnswer("");
        inputAnswer.current.focus();
        setC(c + 1);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="word01">{study.studying[c].termo}</h2>
      <h2 className="word02" ref={h2}>
        {study.studying[c].definição}
      </h2>

      <form onSubmit={(e) => next(e)} className="form-answer">
        <input
          type="text"
          placeholder="Resposta"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          ref={inputAnswer}
        />
        <div className="buttons">
          <button>Confirmar</button>
          <button type="button">Não sei</button>
        </div>
      </form>

      <p>
        <span>{study.toStudy.length + study.studying.length}</span> Palavras até
        terminar a lista
      </p>
    </div>
  );
};

const Sreean02 = ({ list, setC, setScreen01 }) => {
  const navigate = useNavigate();
  return (
    <div className="container-screen02">
      <h2>Lista Finalizada</h2>

      <div className="buttons">
        <button
          onClick={() => {
            setScreen01(true);
            setC(0);
            document.location.reload();
          }}
        >
          Estudar Novamente
        </button>

        <button onClick={() => navigate(`/${list.name}/${list.index}`)}>
          Voltar para a lista
        </button>
      </div>

      <div className="container-words">
        {list.words.map((arr) => (
          <div key={arr} className="arr-words">
            {arr.map((word) => (
              <p key={word}>{word}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;
