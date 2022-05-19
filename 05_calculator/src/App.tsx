import React, { SyntheticEvent, useState } from "react";
import { Calculator } from "./style";

const App = () => {
  const [typing, setTyping] = useState<string>("");
  const [previous, setPrevious] = useState<string>("");

  const addNumber = (e: SyntheticEvent) => {
    if (String(typing).length === 14) return console.log("Limite maximo de numeros");

    const button = e.target as HTMLButtonElement;
    const value = button.textContent;
    setTyping(`${typing}${value}`);
  };

  const addOperator = (e: SyntheticEvent) => {
    const button = e.target as HTMLButtonElement;
    const value = button.textContent!;

    if (previous) {
      return makeOperation(value);
    }

    setPrevious(`${typing} ${value}`);
    setTyping("");
  };

  const makeOperation = (newOperator?: string) => {
    const operator = previous[previous.search(/ /) + 1];
    const value01 = Number(previous.slice(0, previous.search(/ /)));
    const value02 = Number(typing);
    const result = handleSum(operator, value01, value02);

    if (newOperator) {
      setPrevious(`${result} ${newOperator}`);
      setTyping("");
      return;
    }

    setPrevious("");
    setTyping(String(result));
  };

  const handleSum = (operator: string, value01: number, value02: number) => {
    switch (operator) {
      case "+": {
        return value01 + value02;
      }

      case "-": {
        return value01 - value02;
      }

      case "/": {
        return value01 / value02;
      }

      case "X": {
        return value01 * value02;
      }

      case "%": {
        return value01 % value02;
      }

      default:
        return 0;
    }
  };

  const clearLast = () => {
    setTyping(typing.slice(0, -1));
  };

  const clearAll = () => {
    setTyping("");
    setPrevious("");
  };

  return (
    <Calculator className="calculator-container">
      <div className="screen">
        <span className="previous">{previous}</span>
        <h1 className="typing">{typing}</h1>
      </div>
      <div className="keyboard">
        <button onClick={(e) => clearAll()} className="func c">
          AC
        </button>
        <button onClick={(e) => clearLast()} className="func c">
          C
        </button>
        <button onClick={(e) => addOperator(e)} className="func">
          %
        </button>
        <button onClick={(e) => addOperator(e)} className="func">
          /
        </button>
        <button onClick={(e) => addNumber(e)}>7</button>
        <button onClick={(e) => addNumber(e)}>8</button>
        <button onClick={(e) => addNumber(e)}>9</button>
        <button onClick={(e) => addOperator(e)} className="func">
          X
        </button>
        <button onClick={(e) => addNumber(e)}>4</button>
        <button onClick={(e) => addNumber(e)}>5</button>
        <button onClick={(e) => addNumber(e)}>6</button>
        <button onClick={(e) => addOperator(e)} className="func">
          -
        </button>
        <button onClick={(e) => addNumber(e)}>1</button>
        <button onClick={(e) => addNumber(e)}>2</button>
        <button onClick={(e) => addNumber(e)}>3</button>
        <button onClick={(e) => addOperator(e)} className="func">
          +
        </button>
        <button onClick={(e) => addNumber(e)} className="zero">
          0
        </button>
        <button onClick={(e) => addNumber(e)}>.</button>
        <button onClick={(e) => makeOperation()} className="func">
          =
        </button>
      </div>
    </Calculator>
  );
};

export { App };
