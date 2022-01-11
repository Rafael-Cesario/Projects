import { useParams } from "react-router-dom";
import { wordListStore, save } from "../Pages/InitialScreeam";
import { animatedHover, animetedHoverOut } from "../gsap/animations";
import { useNavigate } from "react-router-dom";

function WordsContainer(props) {
  const listName = useParams();
  const listIndex = listName.id.slice(listName.id.indexOf("_") + 1);

  const terms = wordListStore[listIndex][listName.id]["termos"];
  const definitions = wordListStore[listIndex][listName.id]["definições"];
  const termsAndDefinitions = [];
  const maxperdiv = wordListStore[listIndex][listName.id].perdiv;
  const obj = [];

  const learning = [];
  const onHold = [];
  const learned = [];

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

  termsAndDefinitions.forEach((td, i) => {
    const status = wordListStore[listIndex][listName.id].individualWordList[i]
      ? wordListStore[listIndex][listName.id].individualWordList[i].status
      : "...";

    obj.push({
      status: status,
      words: td,
    });

    switch (status) {
      case "Diariamente":
        learning.push([td, status, i]);
        break;

      case "Semanalmente":
        learning.push([td, status, i]);
        break;

      case "Estudada":
        learned.push([td, status, i]);
        break;

      default:
        onHold.push([td, status, i]);
    }
  });

  wordListStore[listIndex][listName.id].individualWordList = obj;
  save();

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
            onClick={(e) => enterIndividualWords(e, td[2])}
            onMouseEnter={(e) => animatedHover(e)}
            onMouseOut={(e) => animetedHoverOut(e)}
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
