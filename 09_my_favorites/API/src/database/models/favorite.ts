import { Schema, model } from "mongoose";
import { FavoriteType } from "../../types/favorites";

const FavoriteSchema = new Schema<FavoriteType>({
	list: { type: String, required: true },
	name: { type: String, required: true },
	note: String,
	imgURL: String,
	genre: [String],
	tags: [String],
});

const Favorite = model<FavoriteType>("Favorite", FavoriteSchema);

export { Favorite };
