import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Style/Configs.css";
import { myList } from "./InitialScreeam";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Configs() {
  const listName = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const showDeleteList = (e) => {
    e.preventDefault();
    document.querySelector(".delete-list").classList.toggle("show-delete");
  };

  const deleteList = (e) => {
    const p = document.querySelector(".delete-list");
    e.preventDefault();
    if (!value) {
      p.style.color = "crimson";
      p.textContent = 'Digite: " Deletar Lista "';
    } else if (value.toUpperCase() === "DELETAR LISTA") {
      const index = myList.indexOf(listName.id);
      myList.splice(index, 1);
      console.log(index);
      navigate("/");
    } else {
      p.style.color = "crimson";
      p.textContent = 'Digito incorreto digite: " Deletar Lista "';
      setValue("");
    }
  };

  return (
    <div className="configs">
      <div className="header-configs">
        <h1>{listName.id}</h1>
        <Link className="home" to={`/${listName.id}`}>
          Voltar
        </Link>
      </div>

      <button onClick={(e) => showDeleteList(e)}>Deletar Lista</button>

      <form onSubmit={deleteList} className="delete-list">
        <p>Digite: " Deletar Lista "</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Deletar</button>
      </form>
    </div>
  );
}

export default Configs;
