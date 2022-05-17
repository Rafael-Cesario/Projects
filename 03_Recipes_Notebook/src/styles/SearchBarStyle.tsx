import styled from "styled-components";

import { global } from "./globalStyle";

const SearchBarStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem;
  padding: 1rem;
  background-color: ${global.colors.background01};
  border-radius: 10px;
  max-width: 70vw;
  min-width: 50vw;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.089);

  .icon {
    margin: 0 0.5rem;
    font-size: 1.1rem;
  }

  input {
    width: 90%;
    font-size: 1rem;
    font-family: ${global.fontfamily};

    color: ${global.colors.font};
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

export { SearchBarStyle };
