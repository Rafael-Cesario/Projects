import { useNavigate } from "react-router-dom";
import { myList } from "../Pages/InitialScreeam";

const List = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/" + e.target.id);
  };

  return (
    <div className="lists-components">
      {myList.map((list) => {
        return (
          <div
            className="my-list-component"
            key={list}
            id={list}
            onClick={(e) => handleClick(e)}
          >
            <h2>{list}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              facere eveniet fuga illo, perferendis similique, aliquam corrupti
              quis doloribus quos commodi dolorem voluptates illum. Eaque ipsa
              molestiae maiores. Fugit, recusandae.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
