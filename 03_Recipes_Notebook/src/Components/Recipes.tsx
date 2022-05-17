import React, { useState, useEffect } from "react";
import { fetchRepices } from "../shared/request";

import { RecipesType } from "../shared/types";
import { RecipesStyle } from "../styles/RecipesStyle";

import { AiOutlineClockCircle } from "react-icons/ai";
import { BiDish } from "react-icons/bi";

const Recipes = () => {
  const [recipes, setRecipes] = useState<RecipesType>([]);

  const attRecipes = async () => {
    const recipes = await fetchRepices();
    setRecipes(recipes);
  };

  useEffect(() => {
    attRecipes();
  }, []);

  return (
    <RecipesStyle>
      {recipes.map((recipe, index) => {
        return (
          <div className="container" key={index}>
            <img src={recipe.imgURL} alt="foto de comida" />
            <div>
              <h1>{recipe.name}</h1>
              <span>
                <AiOutlineClockCircle className="icon" />
                {recipe.time}
              </span>
              <span>
                <BiDish className="icon" />
                {recipe.plates}
              </span>
            </div>
          </div>
        );
      })}
    </RecipesStyle>
  );
};

export { Recipes };
