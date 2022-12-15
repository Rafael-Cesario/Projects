import { prop, getModelForClass, index } from '@typegoose/typegoose';
import { pre } from '@typegoose/typegoose/lib/hooks';

@pre<UserSchema>('save', function () {
	this.email = this.email.toUpperCase();
	this.password = 'SECRET';
})
@index({ email: 1 }, { unique: true })
class UserSchema {
	@prop({ type: String, required: [true, 'Name is required'] })
	public name!: string;

	@prop({ type: String, required: [true, 'Email is required'] })
	public email!: string;

	@prop({ type: String, required: [true, 'Password is required'] })
	public password!: string;
}

export const UserModel = getModelForClass(UserSchema);
