import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "../App";

test("test", () => {
  const app = render(<App />);
  const buttonWithValueOf1 = app.getByText("1");
  const buttonWithValueOf2 = app.getByText("2");
  const buttonWithValueOfplus = app.getByText("+");    
});
