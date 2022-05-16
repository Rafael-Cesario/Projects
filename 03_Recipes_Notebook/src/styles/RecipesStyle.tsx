import styled from "styled-components";

import { global } from "./globalStyle";

const RecipesStyle = styled.div`
  display: grid;
  width: 70vw;
  margin: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

  .container {
    display: flex;
    background-color: ${global.colors.background01};
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export { RecipesStyle };
