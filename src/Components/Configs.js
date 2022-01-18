import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { WordListStore } from "../context/WordListStore";

function Configs() {
  const {wordListStore} = useContext(WordListStore)
  const listName = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [incorretInput, setDi] = useState(false);
  const [maxPerDiv, setMaxPerDiv] = useState(
    wordListStore[listName.id].perdiv
  );

  const saveConfigs = (e) => {
    wordListStore[listName.id].perdiv = maxPerDiv;
    document.location.reload();
  };

  const showDeleteList = (e) => {
    e.preventDefault();
    document.querySelector(".delete-list").classList.toggle("show-delete");
  };

  const deleteList = (e) => {
    e.preventDefault();
    const p = document.querySelector(".delete-list");
    
    if (!value) {
      p.style.color = "rgb(165, 49, 49)";
    } else if (value.toUpperCase() === "DELETAR LISTA") {
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
      <h2 className="title">Configs</h2>
      <form onSubmit={deleteList} className="delete-list">
        <div className="para">
          <p>
            Muita hora nessa calma, tem certeza que quer deletar a lista? <br />
            Digite Deletar lista:
          </p>
          <h2>" DELETAR LISTA "</h2>
          {incorretInput && <p>Digito Incorreto</p>}
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

      <div className="configs">
        <div className="config-single">
          <h2>Nome</h2>
          <input type="text" />
        </div>

        <div className="config-single">
          <h2>Palavras por grupo</h2>
          <input
            type="text"
            value={maxPerDiv}
            onChange={(e) => setMaxPerDiv(e.target.value)}
          />
          <p>
            ! Alterar este valor fará com que todas as suas listas que não
            estiverem marcadas como estudadas, voltem ao valor inicial.
          </p>
        </div>

        <div className="config-single">
          <h2>Descrição</h2>
          <textarea type="text" />
        </div>
      </div>

      <div className="buttons">
        <button onClick={(e) => saveConfigs(e)}>Salvar</button>
        <button onClick={(e) => showDeleteList(e)}>Deletar Lista</button>
      </div>
    </div>
  );
}

export default Configs;
