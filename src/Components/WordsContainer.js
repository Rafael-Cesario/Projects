import { useParams } from "react-router-dom";
import { allWordsAndDefinitions, myList } from "../Pages/InitialScreeam";
import { useRef } from "react";

function WordsContainer() {
  const listName = useParams();
  const listIndex = myList.indexOf(listName.id);
  const terms = allWordsAndDefinitions[listIndex][listName.id]["termos"];
  const definitions =
    allWordsAndDefinitions[listIndex][listName.id]["definições"];
  const termsAndDefinitions = [];
  const maxperdiv = localStorage.getItem("maxPerDiv") || 20;
  let x = 0;
  const wordcopy = useRef();

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

  const Container = () =>
    termsAndDefinitions.map((td, i) => {
      return (
        <div key={td + i} className="individual-words">
          <div className="menu-container-individual-words">
            <span>Total : {td.length}</span>
            <div className="words-container-buttons">
              <button>Editar</button>
            </div>
          </div>

          <div className="container-words">
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
        ;{word}
      </p>
    ));
  };

  return termsAndDefinitions.length > 0 ? (
    <div className="words-body">
      <Container />
    </div>
  ) : (
    ""
  );
}

export default WordsContainer;
