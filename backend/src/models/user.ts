import { Schema, model } from 'mongoose';

interface IUser {
	name: string;
	skill: string;
	level: number;
	xpHave: number;
	xpNeed: number;
	activeDays: string[];
}

const UserSchema = new Schema<IUser>({
	name: String,
	skill: String,
	level: Number,
	xpHave: Number,
	xpNeed: Number,
	activeDays: [String],
});

export const User = model<IUser>('User', UserSchema);
