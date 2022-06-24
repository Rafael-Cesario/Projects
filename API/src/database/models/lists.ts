import { Schema, model } from "mongoose";
import { List } from "../../types/lists";

const ListsSchema = new Schema<List>({
	name: { type: String, required: true },
	tags: [String],
	index: Number,
});

const Lists = model<List>("List", ListsSchema);

export { Lists };
