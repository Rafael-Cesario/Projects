import { Todos } from "../models/todos";
import express from "express";

type request = express.Request;
type response = express.Response;

const allTodos = async (req: request, res: response): Promise<void> => {
	const todos = await Todos.find({});
	res.json(todos);
};

const addTodo = async (req: request, res: response): Promise<void> => {
	try {
		const todos = await Todos.create(req.body);
		res.json(todos);
	} catch (error: any) {
		res.json(error.message);
	}
};

const updateTodo = async (req: request, res: response): Promise<void> => {
	try {
		const [findPropertie, findValue] = req.body.find;
		const [updatePropertie, updateValue] = req.body.update;
		await Todos.updateOne({ [findPropertie]: findValue }, { [updatePropertie]: updateValue });
		allTodos(req, res);
	} catch (error: any) {
		res.json(error.message);
	}
};

const deleteTodo = async (req: request, res: response): Promise<void> => {
	try {
		await Todos.deleteOne({ todo: req.body.todo });
		allTodos(req, res);
	} catch (error: any) {
		res.json(error.message);
	}
};

export { allTodos, addTodo, updateTodo, deleteTodo };
