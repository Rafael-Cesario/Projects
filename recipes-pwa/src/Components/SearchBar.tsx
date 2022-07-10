import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { SearchBarStyle } from "../styles/SearchBarStyle";

const SearchBar = () => {
  const searchRepice = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    console.log(input.value);
    
    // ir na api e retornar a receita
  };

  return (
    <SearchBarStyle>
      <AiOutlineSearch className="icon" />
      <input type="text" placeholder="Pesquisar Receitas..." onChange={(e) => searchRepice(e)} />
    </SearchBarStyle>
  );
};

export { SearchBar };
