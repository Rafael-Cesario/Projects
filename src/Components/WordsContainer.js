import { useParams } from "react-router-dom";
import { allWordsAndDefinitions, myList } from "../Pages/InitialScreeam";
import { animatedHover, animetedHoverOut } from "../gsap/animations";
import { useNavigate } from "react-router-dom";

function WordsContainer(props) {
  const listName = useParams();
  const listIndex = myList.indexOf(listName.id);

  const terms = allWordsAndDefinitions[listIndex][listName.id]["termos"];
  const definitions =
    allWordsAndDefinitions[listIndex][listName.id]["definições"];
  const termsAndDefinitions = [];
  const maxperdiv = localStorage.getItem("maxPerDiv") || 20;

  const individualWordList = JSON.parse(
    localStorage.getItem("individualWordList")
  ) || { [listName.id]: {} };

  const learning = [];
  const onHold = [];
  const learned = [];

  const save = () => {
    localStorage.setItem(
      "individualWordList",
      JSON.stringify(individualWordList)
    );
  };

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

  /*   const fakeWordDivsQuanti = 10 - termsAndDefinitions.length;
  let fakeDivs = fakeWordDivsQuanti >= 1 ? true : false; */

  termsAndDefinitions.forEach((td, i) => {
    const index = i;
    const status = individualWordList[listName.id][i]
      ? individualWordList[listName.id][i].status
      : "...";

    individualWordList[listName.id][i] = {
      name: listName.id,
      status: status,
      index: index,
      words: td,
    };

    save();

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
    localStorage.setItem(
      "tempData",
      JSON.stringify({
        index: index,
        listName: listName,
      })
    );
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
  return word.map((word) => (
    <p key={word + "p"} className="words-map-para">
      {word}
    </p>
  ));
};

export default WordsContainer;
