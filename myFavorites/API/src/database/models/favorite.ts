import { Schema, model } from "mongoose";
import { FavoriteType } from "../../types/favorites";

const FavoriteSchema = new Schema<FavoriteType>({
	list: { type: String, required: [true, "which list does your favorite belong to?"] },
	name: { type: String, required: [true, "Your favorite has no name?"] },
	note: String,
	imgURL: String,
	genre: [String],
	tags: [String],
});

const FavoriteModel = model<FavoriteType>("Favorite", FavoriteSchema);

export { FavoriteModel };
