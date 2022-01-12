import { useNavigate } from "react-router-dom";
import { wordListStore } from "../Pages/InitialScreeam";

const List = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/" + e.target.id);
  };

  return wordListStore.map((obj, i) => {
    const index = i;
    return Object.keys(obj).map((list, i) => {
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
          <p>{wordListStore[index][list].description}</p>
        </div>
      );
    });
  });
};

export default List;
