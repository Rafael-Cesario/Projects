import { useParams } from "react-router-dom";
import AnswerComponent from "../Components/AnswerComponent";

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

  while (study.studying.length < 10 && study.toStudy.length > 0) {
    study.studying.push({
      termo: study.toStudy[0][0],
      definição: study.toStudy[0][1],
    });
    study.toStudy.shift();
  }

  return <AnswerComponent list={list} study={study} />;
};

export default StudyList;
