import { myList } from "../Pages/InitialScreeam";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/" + e.target.id);
  };

  return (
    <div className="myList">
      {myList.map((list) => {
        return (
          <div
            key={list}
            id={list}
            className="list"
            onClick={(e) => handleClick(e)}
          >
            <h2>{list}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default List;
