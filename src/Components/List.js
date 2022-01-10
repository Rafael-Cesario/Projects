import { useNavigate } from "react-router-dom";
import { myList, allWordsAndDefinitions } from "../Pages/InitialScreeam";

const List = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/" + e.target.id);
  };

  return myList.map((list, i) => {
    const sli = myList.indexOf("_");
    return (
      <div
        className="my-list-component"
        key={list + i}
        id={list}
        onClick={(e) => handleClick(e)}
        onMouseEnter={(e) => props.animationHover(e)}
        onMouseOut={(e) => props.animetedHoverOut(e)}
      >
        <h2>{list.slice(0, sli - 1)}</h2>
        <p>{allWordsAndDefinitions[i][list]["description"]}</p>
      </div>
    );
  });
};

export default List;
