import { getModelForClass, index, prop } from '@typegoose/typegoose';

@index({ email: 1 })
class User {
	@prop({ required: true, maxlength: [30, 'Max of 30 letters'] })
	public name!: string;

	@prop({ required: true, lowercase: true, trim: true, unique: true })
	public email!: string;

	@prop({ required: true })
	public password!: string;
}

export const UserModel = getModelForClass(User);
