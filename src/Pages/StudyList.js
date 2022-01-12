import { useParams } from "react-router-dom";
import AnswerComponent from "../Components/AnswerComponent";
import { wordListStore } from "./InitialScreeam";

const StudyList = () => {
  const params = useParams();
  const listIndex = [wordListStore.map((list) => Object.keys(list).indexOf(params.id))[0] , params.index];

  const list =
    wordListStore[listIndex[0]][params.id].individualWordList[listIndex[1]];
    
  const study = {
    toStudy: list.words.slice(0),
    studying: [],
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
