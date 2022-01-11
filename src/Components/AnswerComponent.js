import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuestionScreen from "./QuestionScreen";
import FinalScreen from "./FinalScreen";

const AnswerComponent = ({ list, study }) => {
  const [screen01, setScreen01] = useState(true);
  const [c, setC] = useState(0);
  const params = useParams();

  return (
    <div className="study-list">
      <header>
        <Link to={`/${params.id}/${params.index}`}>Voltar</Link>
      </header>

      {screen01 ? (
        <QuestionScreen
          study={study}
          setScreen01={setScreen01}
          setC={setC}
          c={c}
        />
      ) : (
        <FinalScreen list={list} params={params} />
      )}
    </div>
  );
};

export default AnswerComponent;
