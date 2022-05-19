import React, { SyntheticEvent, useState } from "react";
import produce from "immer";

const App = () => {
	const [todos, setTodos] = useState<string[]>([
		"Tarefa 01",
		"Tarefa 02",
		"Tarefa 03",
		"Tarefa 04",
		"Tarefa 05",
		"Tarefa 06",
		"Tarefa 07",
		"Tarefa 08",
		"Tarefa 09",
		"Tarefa 10",
		"Tarefa 11",
		"Tarefa 12",
		"Tarefa 13",
		"Tarefa 14",
		"Tarefa 15",
		"Tarefa 16",
		"Tarefa 17",
		"Tarefa 18",
		"Tarefa 19",
		"Tarefa 20",
		"Tarefa 20",
		"Tarefa 21",
		"Tarefa 22",
		"Tarefa 24",
	]);

	const hoursJSX = [];
	let draggingElem: HTMLParagraphElement;
	let underElem: HTMLParagraphElement;

	const handleDragStart = (e: SyntheticEvent) => {
		const elem = e.target as HTMLParagraphElement;
		draggingElem = elem;
	};

	const handleDragEnter = (e: SyntheticEvent) => {
		const elem = e.target as HTMLParagraphElement;
		if (draggingElem === elem) return;
		underElem = elem;
	};

	const handleDragEnd = () => {
		const draggingIndex = draggingElem.getAttribute("data-index");
		const underElemIndex = underElem.getAttribute("data-index");
		console.log(draggingIndex, underElemIndex);

		setTodos(
			produce(todos, (draft) => {
				const todo = draft[Number(draggingIndex)];
				draft.splice(Number(draggingIndex), 1);
				draft.splice(Number(underElemIndex), 0, todo);
			})
		);
	};

	const TodoElem = ({ todo, index }: { todo: string; index: number }) => (
		<p draggable="true" onDragStart={(e) => handleDragStart(e)} onDragEnter={(e) => handleDragEnter(e)} onDragEnd={handleDragEnd} data-index={index}>
			{todo}
		</p>
	);

	for (let x = 0; x < 24; x++) {
		const hoursElem = (hour: number) => <p key={hour}>{hour}:00</p>;
		hoursJSX.push(hoursElem(x));
	}

	return (
		<div className="planner">
			<div className="time">{hoursJSX}</div>
			<div className="todo">
				{todos.map((todo, index) => (
					<TodoElem key={index} todo={todo} index={index} />
				))}
			</div>
		</div>
	);
};

export { App };
