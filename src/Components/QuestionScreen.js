import { useState, useRef } from "react";
import {
  animationNext,
  animationNext01,
  next02FindAnimation,
} from "../gsap/animations";

const QuestionScreen = ({ study, setScreen01, c, setC }) => {
  const h2 = useRef();
  const [n, setN] = useState(1);
  const inputAnswer = useRef();
  const [answer, setAnswer] = useState("");
  const remainwWords = useRef();

  const next = (e) => {
    e.preventDefault();

    const find = finding();

    if (n === 1) {
      next01(e, find);
      setN(2);
    } else {
      animationNext(h2.current, inputAnswer.current, next02, e, find);
      setN(1);
    }
  };

  const next01 = (e, find) => {
    e.preventDefault();
    animationNext01(find, h2.current, inputAnswer.current);
    if (find) {
      next02FindAnimation(remainwWords.current);
    }
  };

  const next02 = (e, find) => {
    e.preventDefault();

    if (find) {
      study.studying.splice(c, 1);

      if (study.toStudy.length > 0) {
        study.studying.push({
          termo: study.toStudy[0][0],
          definição: study.toStudy[0][1],
        });

        study.toStudy.shift();
      }
    }

    if (c === study.studying.length - 1 || c === study.studying.length) {
      setC(0);
    } else {
      setC(c + 1);
    }

    if (study.toStudy.length + study.studying.length === 0) {
      setScreen01(false);
    } else {
      setAnswer("");
      inputAnswer.current.focus();
    }
  };

  const finding = () => {
    let word01 = study.studying[c].definição.trim().toUpperCase();
    let word02 = answer.trim().toUpperCase();

    if (word01 === word02 || word01.split(", ").indexOf(word02) > -1) {
      return true;
    }
  };

  return (
    <div className="container">
      <h2 className="word01">{study.studying[c].termo}</h2>

      <h2 className="word02" ref={h2}>
        {study.studying[c].definição}

        <button
          type="button"
          onClick={(e) => {
            const find = true;
            animationNext(h2.current, inputAnswer.current, next02, e, find);
            setN(1);
          }}
        >
          Marcar resposta como correta
        </button>
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
          <button>Não sei</button>
        </div>
      </form>

      <p ref={remainwWords}>
        <span>{study.toStudy.length + study.studying.length}</span> Palavras até
        terminar a lista
      </p>
    </div>
  );
};

export default QuestionScreen;
