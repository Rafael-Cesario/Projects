import express from "express";
import { allTodos, addTodo, updateTodo, deleteTodo } from "../methods/todos";

const router = express.Router();

router.get("/", (req, res) => {
	allTodos(req, res);
});

router.post("/", (req, res) => {
	addTodo(req, res);
});

router.put("/", (req, res) => {
	updateTodo(req, res);
});

router.delete("/", (req, res) => {
	deleteTodo(req, res);
});

export default router;
