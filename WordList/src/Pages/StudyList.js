import { useParams } from "react-router-dom";
import AnswerComponent from "../Components/AnswerComponent";
import { WordListStore } from "../context/WordListStore";
import { useContext } from "react";

const StudyList = () => {
  const { wordListStore } = useContext(WordListStore);
  const params = useParams();
  const listIndex = params.index;

  const list = wordListStore[params.id].individualWordList[listIndex];

  const study = {
    toStudy: [...list.words],
    studying: [],
  };

  while (study.studying.length < 10 && study.toStudy.length > 0) {
    study.studying.push({
      Term: study.toStudy[0][0],
      Definition: study.toStudy[0][1],
    });
    study.toStudy.shift();
  }

  return <AnswerComponent list={list} study={study} />;
};

export default StudyList;
