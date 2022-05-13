import React from "react";
import { createRoot } from "react-dom/client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { App } from "./app";

const body = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(body);

const Index = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  );
};

root.render(Index());
