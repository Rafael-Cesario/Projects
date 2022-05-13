import React, { useState } from "react";
import { PlannerStyle } from "./style";
import { MdDragIndicator } from "react-icons/md";

import { useDrag } from "react-dnd";

const App = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "HTMLDivElement",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const hoursElem = (hour: number) => <p key={hour}>{`${hour}:00`}</p>;

  const todoElem = (index: number) => (
    <div className="to-do" key={index}>
      <input type="text" placeholder="Tarefa" />
      <button>
        <MdDragIndicator className="icon" />
      </button>
    </div>
  );

  const makeArrayElements = (element: (index: number) => JSX.Element): JSX.Element[] => {
    const todoElementArray = [];

    while (todoElementArray.length <= 23) {
      todoElementArray.push(element(todoElementArray.length));
    }

    return todoElementArray;
  };

  const [todos, setTodos] = useState(makeArrayElements(todoElem));

  return (
    <PlannerStyle>
      <div className="hours">{makeArrayElements(hoursElem)}</div>

      <div className="todos">{todos}</div>
    </PlannerStyle>
  );
};

export { App };
