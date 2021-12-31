import "../Style/allstyles.css";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { allWordsAndDefinitions, myList } from "./InitialScreeam";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Configs() {
  const listName = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [di, setDi] = useState(false);
  const [maxPerDiv, setMaxPerDiv] = useState(
    localStorage.getItem("maxPerDiv") || 20
  );

  useEffect(() => {
    localStorage.setItem("maxPerDiv", maxPerDiv);
  }, [maxPerDiv]);

  const showDeleteList = (e) => {
    e.preventDefault();
    document.querySelector(".delete-list").classList.toggle("show-delete");
  };

  const deleteList = (e) => {
    const p = document.querySelector(".delete-list");
    e.preventDefault();
    if (!value) {
      p.style.color = "rgb(165, 49, 49)";
    } else if (value.toUpperCase() === "DELETAR LISTA") {
      const index = myList.indexOf(listName.id);
      myList.splice(index, 1);
      allWordsAndDefinitions.splice(index, 1);
      console.log(index);
      navigate("/");
    } else {
      p.style.color = "#d14b4b";
      setDi(true);
      setValue("");
    }
  };

  const hideForm = (e) => {
    e.preventDefault();
    document.querySelector(".delete-list").classList.toggle("show-delete");
  };

  return (
    <div className="configs-container">
      <div className="configs">
        <h1>{listName.id}</h1>
        <Link className="home" to={`/${listName.id}`}>
          Voltar
        </Link>

        <h2>Palavras por grupo</h2>
        <input
          type="text"
          value={maxPerDiv}
          onChange={(e) => setMaxPerDiv(e.target.value)}
        />

        <button onClick={(e) => showDeleteList(e)}>Deletar Lista</button>
        <form onSubmit={deleteList} className="delete-list">
          <div className="para">
            <p>
              Para ter certeza que você quer mesmo deletar esta lista digite:
            </p>
            <hr />
            <p>" DELETAR LISTA "</p>
            <hr />
            {di && <p>Digito Incorreto</p>}
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="buttons">
            <button type="submit">Deletar</button>
            <button type="button" onClick={(e) => hideForm(e)}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Configs;
