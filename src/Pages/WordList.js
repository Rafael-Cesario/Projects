import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Style/WordList.css";

function WordList() {
  const listName = useParams();


  return (
    <div className="word-list">
      <header className="word-list-header">
        <div className="menus">
          <Link className="home" to="/">
            Home
          </Link>
          <Link to={`/${listName.id}/configs`}>Configs</Link>
        </div>

        <h1>{listName.id}</h1>
      </header>


    </div>
  );
}

export default WordList;
