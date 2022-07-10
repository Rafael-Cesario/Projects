import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { GlobalStyle } from "./style";

const body = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(body);

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

root.render(Index());
