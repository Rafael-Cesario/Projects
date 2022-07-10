import { Schema, model } from "mongoose";

const FriendsSchema = new Schema({
	friendName: { type: String, required: true },
	birthday: { type: String },
	likes: { type: String },
	personality: { type: String },
	presents: { type: String },
	notes: { type: String },
});

const Friends = model("Friends", FriendsSchema);

export { Friends };
