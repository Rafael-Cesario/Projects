import styled from "styled-components";

import { global } from "./globalStyle";

const FavRecipesStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.089);

  background-color: ${global.colors.background01};
  border-radius: 10px;

  .arrows {
    margin: 0 10px;
    cursor: pointer;
    color: ${global.colors.yellow};
    font-size: 1.5rem;
  }

  .carrousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 59vw;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const RecipeStyle = styled.div`
  margin: 5px;
  user-select: none;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    transform: scale(1.1);

    img {
      border: 2px solid ${global.colors.yellow};
    }
  }

  :active {
    transform: scale(1);
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .icon {
    font-size: 1.2rem;
    color: ${global.colors.yellow};
    transform: translateX(-15px);
    margin-right: -20px;
  }
`;

export { FavRecipesStyle, RecipeStyle };
