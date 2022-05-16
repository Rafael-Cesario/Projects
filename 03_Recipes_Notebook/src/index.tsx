import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const body = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(body);

const Index = () => {
  return (
    <div className="Index">
      <App />
    </div>
  );
};

root.render(Index());
