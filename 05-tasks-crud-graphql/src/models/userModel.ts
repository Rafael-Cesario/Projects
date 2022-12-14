import { getModelForClass, index, prop } from '@typegoose/typegoose';

@index({ email: 1 })
class User {
	@prop({ type: String, required: true, maxlength: [20, 'Max of 20 letters'] })
	public name!: string;

	@prop({ type: String, required: true, lowercase: true, trim: true, unique: true })
	public email!: string;

	@prop({ type: String, required: true })
	public password!: string;
}

export const UserModel = getModelForClass(User);
