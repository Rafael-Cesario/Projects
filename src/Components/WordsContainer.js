import { useParams } from "react-router-dom";
import { animatedHover, animatedHoverOut } from "../gsap/animations";
import { useNavigate } from "react-router-dom";
import { WordListStore } from "../context/WordListStore";
import { useContext } from "react";

function WordsContainer(props) {
  const { wordListStore } = useContext(WordListStore);
  const listName = useParams();
  const terms = wordListStore[listName.id]["terms"];
  const definitions = wordListStore[listName.id]["definitions"];
  const termsAndDefinitions = [];
  const maxperdiv = wordListStore[listName.id].perdiv;
  const learning = [];
  const onHold = [];
  const learned = [];
  let obj = {}
  
  let x = 0;
  while (x < terms.length) {
    let tempArray = [];
    let c = 0;
    while (c < maxperdiv) {
      if (terms[x] !== undefined) {
        tempArray.push([terms[x], definitions[x]]);
      }
      x++;
      c++;
    }
    termsAndDefinitions.push(tempArray.reverse());
  }

  termsAndDefinitions.forEach((td, index) => {
    const status = wordListStore[listName.id].individualWordList[index]
      ? wordListStore[listName.id].individualWordList[index].status
      : "...";

    const answerWith =
      wordListStore[listName.id]?.individualWordList[index]?.answerWith ||
      "Definition";

      obj = {...obj, [index]: {
        status: status,
        answerWith: answerWith,
        words: td,
      }}

    switch (status) {
      case "Diariamente":
        learning.push([td, status, index]);
        break;

      case "Semanalmente":
        learning.push([td, status, index]);
        break;

      case "Estudada":
        learned.push([td, status, index]);
        break;

      default:
        onHold.push([td, status, index]);
    }
  });

  wordListStore[listName.id].individualWordList = obj

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
            onClick={(e) => enterIndividualWords(e, index)}
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

export default WordsContainer;
