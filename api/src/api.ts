import express from "express";
import { connectDatabase } from "./database";
import cors from "cors";

import { allTodos, addTodo, updateTodo, deleteTodo } from "./utilits/methods";

const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	allTodos(req, res);
});

app.post("/", (req, res) => {
	addTodo(req, res);
});

app.put("/", (req, res) => {
	updateTodo(req, res);
});

app.delete("/", (req, res) => {
	deleteTodo(req, res);
});

export { app };
