import { model, Schema } from 'mongoose';

export interface IUser {
	_id?: string;
	name: string;
	email: string;
	password: string;
}

const UserSchema = new Schema<IUser>({
	email: { type: String, required: [true, 'Email is required'] },
	name: { type: String, required: [true, 'Name is required'] },
	password: { type: String, required: [true, 'Password is required'] },
});

const UserModel = model<IUser>('User', UserSchema);

export { UserModel };
