import { Schema, model } from "mongoose";

type TagsSchema = {
	name: String;
	tags: String[];
};

const TagsSchema = new Schema<TagsSchema>({
	name: { type: String, required: true },
	tags: [String],
});

const Tags = model<TagsSchema>("Tags", TagsSchema);

export { Tags };
