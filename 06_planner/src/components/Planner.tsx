import React, { useEffect, useState } from "react";
import produce from "immer";

import { MdDragIndicator } from "react-icons/md";
import { PlannerStyle } from "../styles/planner";

import { useLocalTasks } from "../utils/useLocalTasks";

const Planner = () => {
	const [tasks, setTasks] = useLocalTasks("tasks", [
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
		"tarefa",
	]);

	const hours = [
		"00:00",
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
	];

	let dragginElem: HTMLDivElement;
	let overElem: HTMLDivElement;

	const dragStart = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLDivElement;
		target.classList.toggle("drag");
		dragginElem = target;
	};

	const dragEnter = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLDivElement;

		if (target.nodeName != "DIV") return;

		overElem = target;
	};

	const dragEnd = (e: React.SyntheticEvent) => {
		const textarea = dragginElem.childNodes[1] as HTMLTextAreaElement;
		textarea.blur();
		dragginElem.classList.toggle("drag");

		if (!overElem) return;

		const dragIndex = dragginElem.getAttribute("data-index");
		const overIndex = overElem.getAttribute("data-index");

		setTasks(
			produce(tasks, (draft: string[]) => {
				const task = draft[dragIndex];

				draft.splice(Number(dragIndex), 1);
				draft.splice(Number(overIndex), 0, task);
			})
		);
	};

	const changeTask = (e: React.SyntheticEvent) => {
		const taskDiv = e.target as HTMLTextAreaElement;
		const taskIndex = taskDiv.getAttribute("data-index");
		const newTask = taskDiv.value;

		setTasks(
			produce(tasks, (draft: string[]) => {
				draft[taskIndex] = newTask;
			})
		);
	};

	return (
		<PlannerStyle>
			{hours.map((hour, index) => (
				<div className="planner" key={index}>
					<p className="hour">{hour}</p>
					<div data-index={index} className="task" draggable="true" onDragStart={(e) => dragStart(e)} onDragEnd={(e) => dragEnd(e)} onDragEnter={(e) => dragEnter(e)}>
						<MdDragIndicator color="#ffffff" className="icon" />
						<input type={"text"} data-index={index} placeholder={tasks[index]} onChange={(e) => changeTask(e)} />
					</div>
				</div>
			))}
		</PlannerStyle>
	);
};

export { Planner };
