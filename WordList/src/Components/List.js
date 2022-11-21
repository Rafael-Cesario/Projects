import { useNavigate } from "react-router-dom";
import { WordListStore } from "../context/WordListStore";
import { useContext } from "react";

const List = (props) => {
  const { wordListStore } = useContext(WordListStore);
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/" + e.target.id);
  };

  return Object.keys(wordListStore).map((list, i) => {
    const listName = list.slice(0, list.indexOf("_"));
    return (
      <div
        className="my-list-component"
        key={list + i}
        id={list}
        onClick={(e) => handleClick(e)}
        onMouseEnter={(e) => props.animationHover(e)}
        onMouseOut={(e) => props.animetedHoverOut(e)}
      >
        <h2>{listName}</h2>
        <p>{wordListStore[list].description}</p>
      </div>
    );
  });
};

export default List;
