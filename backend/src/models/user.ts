import { Schema, model } from 'mongoose';

interface IUser {
	_id: string;
	name: string;
	skill: string;
	level: number;
	xpHave: number;
	xpNeed: number;
	activeDays: string[];
}

const UserSchema = new Schema<IUser>({
	_id: { type: String, required: true },
	name: String,
	skill: String,
	level: Number,
	xpHave: Number,
	xpNeed: Number,
	activeDays: [String],
});

export const User = model<IUser>('User', UserSchema);
