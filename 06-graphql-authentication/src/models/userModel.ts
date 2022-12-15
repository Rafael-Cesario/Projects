import { prop, getModelForClass, index } from '@typegoose/typegoose';
import { pre } from '@typegoose/typegoose/lib/hooks';
import { decryptPassword, encryptPassword } from '../utils/encrypt';

@pre<UserSchema>('save', function () {
	const encryptedPassword = encryptPassword(this.password);
	this.password = encryptedPassword;
})
@index({ email: 1 }, { unique: true })
class UserSchema {
	@prop({ type: String, required: [true, 'Name is required'] })
	public name!: string;

	@prop({ type: String, required: [true, 'Email is required'], lowercase: true })
	public email!: string;

	@prop({ type: String, required: [true, 'Password is required'] })
	public password!: string;
}

export const UserModel = getModelForClass(UserSchema);
