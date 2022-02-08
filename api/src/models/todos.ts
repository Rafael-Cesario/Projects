import { Schema, model } from "mongoose";

const TodosSchema = new Schema({
	todo: { type: String, required: [true, "Insira uma todo"] },
	belongTo: { type: String, required: [true, "Insira a qual lista esta todo pertence"] },
	completed: { type: Boolean, default: false },
	details: { type: String, default: "" },
});

const Todos = model("Todos", TodosSchema);

export { Todos };
