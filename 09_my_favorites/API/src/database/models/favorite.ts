import { Schema, model } from "mongoose";

type FavoriteModel = {
	name: String;
	category: String[];
	rate: Number;
	imgURL: String;
};

const FavoriteSchema = new Schema<FavoriteModel>({
	name: { type: String, required: true },
	category: [String],
	rate: Number,
	imgURL: String,
});

const Favorite = model<FavoriteModel>("Favorite", FavoriteSchema);

export { Favorite };
