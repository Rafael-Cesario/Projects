import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new Schema({
	name: String,
});

const User = mongoose.model("User", UserSchema);

export { User };
