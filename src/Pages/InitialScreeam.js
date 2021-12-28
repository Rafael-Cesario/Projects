import { useState, useEffect } from "react";
import List from "../Components/List";
import "../Style/InitialScreen.css";

export const myList = JSON.parse(localStorage.getItem("myList")) || [];
export const allWordsAndDefinitions =
  JSON.parse(localStorage.getItem("allWordsAndDefinitions")) || [];

const InitialScream = () => {
  const show = (e) => {
    e.preventDefault();
    const form = document.querySelector(".form-new-list");
    form.classList.toggle("show");
    form.querySelector("input").focus();
  };

  const [listName, setListName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!listName) {
      return;
    }
    myList.push(listName);
    allWordsAndDefinitions.push({ [listName]: { termos: [], definições: [] } });

    setListName("");
    show(e);
  };

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
    localStorage.setItem(
      "allWordsAndDefinitions",
      JSON.stringify(allWordsAndDefinitions)
    );
  });

  return (
    <div>
      <div className="div-new-list">
        <button className="new-list" onClick={(e) => show(e)}>
          Nova Lista
        </button>
        <form className="form-new-list" onSubmit={(e) => onSubmit(e)}>
          <span>Nome</span>
          <input
            required
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
          <button type="submit">Criar Lista</button>
        </form>
      </div>

      <List />
    </div>
  );
};

export default InitialScream;
