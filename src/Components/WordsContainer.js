import { useParams } from "react-router-dom";
import { allWordsAndDefinitions, myList } from "../Pages/InitialScreeam";
import { animatedHover, animetedHoverOut } from "../gsap/animations";

function WordsContainer() {
  const listName = useParams();
  const listIndex = myList.indexOf(listName.id);
  const terms = allWordsAndDefinitions[listIndex][listName.id]["termos"];
  const definitions =
    allWordsAndDefinitions[listIndex][listName.id]["definições"];
  const termsAndDefinitions = [];
  const maxperdiv = localStorage.getItem("maxPerDiv") || 20;

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
    termsAndDefinitions.push(tempArray);
  }
  const fakeWordDivsQuanti = 10 - termsAndDefinitions.length;
  let fakeDivs = fakeWordDivsQuanti >= 1 ? true : false;

  const Container = () =>
    termsAndDefinitions.map((td, i) => {
      return (
        <div key={td + i} className="individual-words">
          <div
            className="container-words"
            onMouseEnter={(e) => animatedHover(e)}
            onMouseOut={(e) => animetedHoverOut(e)}
          >
            <div className="header-container-words">
              <span>Total: {td.length}</span>
              <span>Diariamente</span>
              <span>
                <button>OK</button>
              </span>
            </div>
            <ContainerWords td={td} index={i} />
          </div>
        </div>
      );
    });

  const ContainerWords = (props) => {
    const container = props.td;
    return props.td.map((words, i) => (
      <div key={container + words + i} className="words-map-div">
        <WordsMapPara word={words} i={i} container={container} />
      </div>
    ));
  };

  const WordsMapPara = (props) => {
    const word = props.word;
    return word.map((word, i) => (
      <p key={word + "p"} className="words-map-para">
        {word}
      </p>
    ));
  };

  return termsAndDefinitions.length > 0 ? (
    <div className="words-body">
      {fakeDivs && <FakeWordDiv quanti={fakeWordDivsQuanti} />}
      <Container />
    </div>
  ) : (
    ""
  );
}

const FakeWordDiv = (props) => {
  const quanti = props.quanti;
  let c = 0;
  const divs = [];
  while (c < quanti) {
    divs.push(c);
    c++;
  }
  return divs.map((div) => (
    <div
      className="container-words"
      key={div}
      onMouseEnter={(e) => animatedHover(e)}
      onMouseOut={(e) => animetedHoverOut(e)}
    ></div>
  ));
};

export default WordsContainer;
