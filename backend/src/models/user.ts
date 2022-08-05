import { model, Schema } from 'mongoose';

export interface IUser {
	_id?: string;
	name: string;
	email: string;
	password: string;
}

const UserSchema = new Schema<IUser>({
	email: String,
	name: String,
	password: String,
});

const UserModel = model<IUser>('User', UserSchema);

export { UserModel };
