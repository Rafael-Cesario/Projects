import { prop, index, getModelForClass, pre } from '@typegoose/typegoose';
import { encryptPassword } from '../utils/encrypt';

@pre<User>('save', function () {
	const hashPassword = encryptPassword(this.password);
	this.password = hashPassword;
})
@index({ email: 1 }, { unique: true })
class User {
	@prop({ type: String, required: [true, 'Email is required'], lowercase: true })
	public email!: string;

	@prop({ type: String, required: [true, 'Name is required'] })
	public name!: string;

	@prop({ type: String, required: [true, 'Password is required'] })
	public password!: string;
}

export const UserModel = getModelForClass(User);
