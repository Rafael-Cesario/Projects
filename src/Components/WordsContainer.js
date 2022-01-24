import { useParams } from "react-router-dom";
import { animatedHover, animatedHoverOut } from "../gsap/animations";
import { useNavigate } from "react-router-dom";
import { WordListStore } from "../context/WordListStore";
import { useContext } from "react";

function WordsContainer(props) {
  const { wordListStore } = useContext(WordListStore);
  const listName = useParams();
  const lists = Object.entries(wordListStore[listName.id].individualWordList);
  const learning = [];
  const onHold = [];
  const learned = [];

  lists.forEach((list, index) => {
    const status = list[1].status;
    const words = list[1].words;

    switch (status) {
      case "Diariamente":
        learning.push([words, status, index]);
        break;

      case "Semanalmente":
        learning.push([words, status, index]);
        break;

      case "Estudada":
        learned.push([words, status, index]);
        break;

      default:
        onHold.push([words, status, index]);
    }
  });

  return (
    <div className="words-body" ref={props.varRef}>
      {learning.length > 0 && (
        <Container
          array={learning}
          listName={listName.id}
          nameDiv="learning"
          title="Estudando"
        />
      )}

      {onHold.length > 0 && (
        <Container
          array={onHold}
          listName={listName.id}
          nameDiv="onHold"
          title="Próximas"
        />
      )}

      {learned.length > 0 && (
        <Container
          array={learned}
          listName={listName.id}
          nameDiv="learned"
          title="Finalizadas"
        />
      )}
    </div>
  );
}

export default WordsContainer;

const Container = ({ array, listName, nameDiv, title }) => {
  const navigate = useNavigate();

  const enterIndividualWords = (e, index) => {
    e.preventDefault();
    navigate(`/${listName}/${index}`);
  };

  return (
    <>
      <div id={nameDiv}></div>

      <div className={nameDiv}>
        <h2>{title}</h2>
        {array.map((td, index) => (
          <div
            key={index}
            className="container-words"
            onClick={(e) => enterIndividualWords(e, td[2])}
            onMouseEnter={(e) => animatedHover(e)}
            onMouseOut={(e) => animatedHoverOut(e)}
          >
            <div className="header-container-words">
              <span>Total: {td[0].length}</span>
              <span>{td[1]}</span>
            </div>

            <ContainerWords td={td[0]} />
            
          </div>
        ))}
      </div>
    </>
  );
};

const ContainerWords = ({ td }) => {
  return td.map((words, i) => (
    <div key={td + words + i} className="words-map-div">
      <WordsMapPara word={words} />
    </div>
  ));
};

const WordsMapPara = ({ word }) => {
  return word.map((word, i) => (
    <p key={word + i} className="words-map-para">
      {word}
    </p>
  ));
};
