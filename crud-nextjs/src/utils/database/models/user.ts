import { Schema, model } from "mongoose";

interface IUser {
	name: string;
}

const UserSchema = new Schema<IUser>({
	name: { type: String, required: true },
});

const User = model<IUser>("User", UserSchema);

export { User };
