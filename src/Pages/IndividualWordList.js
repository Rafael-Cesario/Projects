import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const IndividualWordList = (props) => {
  const listName = useParams();
  const backTo = listName.id.slice(0, listName.id.indexOf("list"));
  const listIndex = listName.id.slice(listName.id.indexOf("list") + 4);

  return (
    <div className="individaul-word-list">
      <Link to={`/${backTo}`}>Voltar</Link>
      <h1>Lista numero: {listIndex}</h1>
      <h2>Diariamente</h2>
    </div>
  );
};

export default IndividualWordList;
