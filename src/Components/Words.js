import { save } from "../Pages/InitialScreeam";

const Words = ({
  words,
  newWord,
  setNewWord,
  wordListStore,
  listIndex,
  params,
}) => {
  const changingWord = (e, word) => {
    e.preventDefault();

    let termo = wordListStore[listIndex[0]][params.id].termos;
    let definição = wordListStore[listIndex[0]][params.id].termos;
    let termoIndividual = findIndex(word, 0);
    let definiçãoIndividual = findIndex(word, 1);

    if (!e.target.value || e.target.value === word) {
      return;
    }

    if (termo.indexOf(word) > -1) {
      termo[termo.indexOf(word)] = newWord;
      words[termoIndividual][0] = newWord;
    } else {
      definição[definição.indexOf(word)] = newWord;
      words[definiçãoIndividual][1] = newWord;
    }

    save();
  };

  const findIndex = (word, index) => {
    for (let x = 0; x < words.length; x++) {
      if (words[x][index] === word) {
        return x;
      }
    }
  };

  return words.map((tdArray, i) => (
    <div key={i + tdArray}>
      {tdArray.map((td, i) => (
        <textarea
          key={td + i}
          type="text"
          placeholder={td}
          onFocus={(e) => (e.target.value = td)}
          onChange={(e) => setNewWord(e.target.value)}
          onBlur={(e) => changingWord(e, e.target.placeholder)}
        />
      ))}
    </div>
  ));
};

export default Words;
