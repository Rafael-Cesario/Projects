import { useState } from "react";
import { Link } from "react-router-dom";
import QuestionScreen from "./QuestionScreen";
import FinalScreen from "./FinalScreen";

const AnswerComponent = ({ list, study }) => {
  const [screen01, setScreen01] = useState(true);
  const [c, setC] = useState(0);

  return (
    <div className="study-list">
      <header>
        <Link to={`/${list.name}/${list.index}`}>Voltar</Link>
      </header>

      {screen01 ? (
        <QuestionScreen
          study={study}
          setScreen01={setScreen01}
          setC={setC}
          c={c}
        />
      ) : (
        <FinalScreen list={list} setC={setC} setScreen01={setScreen01} />
      )}
    </div>
  );
};

export default AnswerComponent;
