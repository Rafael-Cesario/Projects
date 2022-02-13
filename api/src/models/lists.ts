import { Schema, model } from "mongoose";

const ListsSchema = new Schema({
	listName: { type: String, required: true },
	todoCount: { type: Number, default: 0 },
});

const Lists = model("Lists", ListsSchema);

export { Lists };
