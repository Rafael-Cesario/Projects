import { connection, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

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

UserSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
