import styled from "styled-components";

import { global } from "./globalStyle";

const RecipesStyle = styled.div`
  display: grid;
  width: 70vw;
  margin: 2rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, min(400px));

  .container {
    display: flex;
    background-color: ${global.colors.background01};
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.089);

    max-width: 500px;
    max-height: 150px;
    overflow: hidden;

    :hover {
      transform: scale(1.1);
      border: 1px solid white;
    }

    :active {
      transform: scale(1);
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 0 10px 10px 0;
      box-shadow: 2px 2px 2px #00000030;
      transform: translate(-60px, -30px);
      /* border: 2px solid white; */
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      transform: translate(-40px, 0);

      span {
        display: flex;
        align-content: center;
        margin: 2px 0;
        opacity: 0.6;

        .icon {
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, min(380px));

    .container {
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        transform: translate(0, 0);
        border-radius: 50%;
        border: 2px solid white;
        margin-right: 1rem;
      }
      div {
        transform: translate(0, 0);
      }
    }
  }
`;

export { RecipesStyle };
