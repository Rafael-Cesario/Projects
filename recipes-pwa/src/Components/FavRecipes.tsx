import React, { useEffect, useState, useRef } from "react";

import { AiOutlineLeft, AiOutlineRight, AiFillStar } from "react-icons/ai";
import { fetchRepices } from "../shared/request";

import { FavRecipesStyle, RecipeStyle } from "../styles/FavRecipesStyle";

import { RecipesType } from "../shared/types";

const FavRecipes = () => {
  const [recipes, setRecipes] = useState<RecipesType>([]);
  const arrayRecipesComponent = recipes.map((recipe, index) => <Recipes recipe={recipe} key={index} />);
  const carousel = useRef<HTMLDivElement>(null);

  const moveCarrousel = (e: React.SyntheticEvent, direction: string) => {
    e.preventDefault();

    const carouselDiv = carousel.current as HTMLDivElement;

    if (direction === "right") return (carouselDiv.scrollLeft += carouselDiv.offsetWidth);
    if (direction === "left") return (carouselDiv.scrollLeft -= carouselDiv.offsetWidth);
  };

  const attRecipes = async () => {
    const recipes = await fetchRepices();
    setRecipes(recipes);
  };

  useEffect(() => {
    attRecipes();
  }, []);

  return (
    <FavRecipesStyle>
      <AiOutlineLeft className="arrows" onClick={(e) => moveCarrousel(e, "left")} />

      <div className="carrousel" ref={carousel}>
        {arrayRecipesComponent}
      </div>

      <AiOutlineRight className="arrows" onClick={(e) => moveCarrousel(e, "right")} />
    </FavRecipesStyle>
  );
};

interface RecipesProps {
  recipe: {
    id: number;
    imgURL: string;
    name: string;
    time: string;
    plates: string;
  };
}

const Recipes: React.FC<RecipesProps> = ({ recipe }) => {
  return (
    <RecipeStyle>
      <img src={recipe.imgURL} alt="Foto de uma Receita" />
      <AiFillStar className="icon" />
    </RecipeStyle>
  );
};

export { FavRecipes };
