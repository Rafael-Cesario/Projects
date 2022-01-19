import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { WordListStore } from "../context/WordListStore";

function Configs() {
  const navigate = useNavigate();
  const listName = useParams();

  const {wordListStore, dispatch} = useContext(WordListStore)
  const [valueInputDeleteList, setValueInputDeleteList] = useState("");
  const [incorrectInput, setIncorrectInput] = useState(false);

  const [inputMaxPerDiv, setInputMaxPerDiv] = useState( wordListStore[listName.id].perdiv );
  const [inputListName, setInputListName] = useState("")
  const [inputListDescription, setInputListDescription] = useState("")


  const saveConfigs = (e) => {
    const id = `${Math.floor(Math.random() * 999)}`;
    const name = inputListName !== "" ? `${inputListName}_${id}` : false;
    console.log(name)

    dispatch({
      type: 'CHANGE_CONFIGS',
      oldName: listName.id,
      newName: name,
      newDescription: inputListDescription,
      newId: id,
      newPerdiv: inputMaxPerDiv,            
    })

    navigate(`/`);
  };

  const showDeleteList = (e) => {
    e.preventDefault();
    document.querySelector(".delete-list").classList.toggle("show-delete");
  };

  const deleteList = (e) => {
    e.preventDefault();
    const p = document.querySelector(".delete-list");

    if (!valueInputDeleteList) {
      p.style.color = "rgb(165, 49, 49)";
      return
    }

    if (valueInputDeleteList.toUpperCase() !== "DELETAR LISTA") {
      p.style.color = "#d14b4b";
      setIncorrectInput(true);
      setValueInputDeleteList("");
      return
    }

    dispatch({
      type: 'DELET_LIST',
      listName: listName.id,
    })
    navigate("/");
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
          <p>Muita hora nessa calma, tem certeza que quer deletar a lista? <br />Digite Deletar lista:</p>
          <h2>" DELETAR LISTA "</h2>
          {incorrectInput && <p>Digito Incorreto</p>}
        </div>
        <input type="text" value={valueInputDeleteList} onChange={(e) => setValueInputDeleteList(e.target.value)} />
        <div className="buttons">
          <button type="submit">Deletar</button>
          <button type="button" onClick={(e) => hideForm(e)}> Cancelar </button>
        </div>
      </form>

      <div className="configs">
        <div className="config-single">
          <h2>Nome</h2>
          <input type="text" value={inputListName} onChange={e => setInputListName(e.target.value)}/>
        </div>

        <div className="config-single">
          <h2>Palavras por grupo</h2>
          <input type="text" value={inputMaxPerDiv} onChange={(e) => setInputMaxPerDiv(e.target.value)} />
          <p> ! Alterar este valor fará com que todas as suas listas que não estiverem marcadas como estudadas, voltem ao valor inicial. </p>
        </div>

        <div className="config-single">
          <h2>Descrição</h2>
          <textarea type="text" value={inputListDescription} onChange={e => setInputListDescription(e.target.value)} />
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
