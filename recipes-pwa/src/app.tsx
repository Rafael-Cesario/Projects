import React from "react";

import GlobalStyle from "./styles/globalStyle";
import { AppStyle } from "./styles/appStyle";
import { SearchBar } from "./Components/SearchBar";
import { FavRecipes } from "./Components/FavRecipes";
import { Recipes } from "./Components/Recipes";

const App = () => {
  return (
    <AppStyle className="App">
      <GlobalStyle />
      <SearchBar />
      <FavRecipes />
      <Recipes />
    </AppStyle>
  );
};

export default App;
