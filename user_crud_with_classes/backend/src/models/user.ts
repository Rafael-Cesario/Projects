import { model, Schema } from 'mongoose';

export interface IUser {
	email: string;
	name: string;
	password: string;
}

const userSchema = new Schema<IUser>({
	email: { type: String, required: [true, 'A email is required.'] },
	name: { type: String, required: [true, 'A name is required'] },
	password: { type: String, required: [true, 'A password is required'] },
});

export const User = model<IUser>('User', userSchema);
