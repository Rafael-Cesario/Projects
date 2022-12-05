import { model, Schema } from 'mongoose';
import { IUser } from '../interface/userSchemaInterface';

const userSchema = new Schema<IUser>({
	email: { type: String, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	age: { type: String, required: true },
});

export const UserModel = model<IUser>('User', userSchema);
