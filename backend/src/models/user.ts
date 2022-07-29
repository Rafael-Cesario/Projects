import { Schema, model } from 'mongoose';

interface IUser {
	name: string;
	skill: string;
	level: number;
	have: number;
	need: number;
	activeDays: string[];
}

const UserSchema = new Schema<IUser>({
	name: String,
	skill: String,
	level: Number,
	have: Number,
	need: Number,
	activeDays: [String],
});

export const User = model<IUser>('User', UserSchema);
