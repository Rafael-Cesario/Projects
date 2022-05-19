import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "../App";

describe("testing the functions in the calculator component", () => {
  test("Change the value in the screen", () => {
    const { getByText } = render(<App />);
    const buttonValueOf1 = getByText("1");
    const typingElem = document.querySelector(".typing") as HTMLHeadingElement;

    fireEvent.click(buttonValueOf1);

    expect(typingElem.textContent).toBe("1");
  });

  test("when click in a operator button the typing should return to empty", () => {
    const { getByText } = render(<App />);
    const typingElem = document.querySelector(".typing") as HTMLHeadingElement;
    const operatorButton = getByText("+");
    const buttonValueOf1 = getByText("1");

    fireEvent.click(buttonValueOf1);
    fireEvent.click(operatorButton);

    expect(typingElem.textContent).toBe("");
  });

  test("when click in a operator button the 'previousElem' should receive the value of the typing", () => {
    const { getByText } = render(<App />);
    const previousElem = document.querySelector(".previous") as HTMLSpanElement;
    const buttonValueOf1 = getByText("1");
    const operatorButton = getByText("+");

    fireEvent.click(buttonValueOf1);
    fireEvent.click(operatorButton);

    expect(previousElem.textContent).toBe("1 +");
  });

  test("show the result when two values are add and the user click on the result button", () => {
    const { getByText } = render(<App />);
    const typingElem = document.querySelector(".typing") as HTMLHeadingElement;
    const previousElem = document.querySelector(".previous") as HTMLSpanElement;
    const buttonValueOf1 = getByText("1");
    const operatorButton = getByText("+");
    const resultButton = getByText("=");

    fireEvent.click(buttonValueOf1);
    fireEvent.click(operatorButton);
    fireEvent.click(buttonValueOf1);
    fireEvent.click(resultButton);

    expect(previousElem.textContent).toBe("");
    expect(typingElem.textContent).toBe("2");
  });

  test("remove the last number when click on the clear button", () => {
    const { getByText } = render(<App />);
    const typingElem = document.querySelector(".typing") as HTMLHeadingElement;
    const clear = getByText("C") as HTMLButtonElement;
    const value1 = getByText("1") as HTMLButtonElement;
    const value2 = getByText("2") as HTMLButtonElement;
    const value3 = getByText("3") as HTMLButtonElement;

    fireEvent.click(value1);
    fireEvent.click(value2);
    fireEvent.click(value3);

    fireEvent.click(clear);

    expect(typingElem.textContent).toBe("12");
  });

  test("remove all the digits when click on the clearAll button", () => {
    const { getByText } = render(<App />);
    const typingElem = document.querySelector(".typing") as HTMLHeadingElement;
    const previousElem = document.querySelector(".previous") as HTMLSpanElement;

    const buttonValueOf1 = getByText("1");
    const operatorButton = getByText("+");
    const clearAll = getByText("AC") as HTMLButtonElement;

    fireEvent.click(buttonValueOf1);
    fireEvent.click(operatorButton);
    fireEvent.click(buttonValueOf1);
    fireEvent.click(clearAll);

    expect(typingElem.textContent).toBe("");
    expect(previousElem.textContent).toBe("");
  });

  test("if you click in a operator and the 'previouElem' alredy have a value should do the operation firts", () => {
    const { getByText } = render(<App />);
    const typingElem = document.querySelector(".typing") as HTMLHeadingElement;
    const previousElem = document.querySelector(".previous") as HTMLSpanElement;
    
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("+"))

    expect(typingElem.textContent).toBe("")
    expect(previousElem.textContent).toBe("2 +")
  });
});
