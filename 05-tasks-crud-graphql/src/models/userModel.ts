import { getModelForClass, prop } from '@typegoose/typegoose';

class User {
	@prop({ required: true })
	public name: string;

	@prop({ required: true })
	public email: string;

	@prop({ required: true })
	public password: string;
}

export const UserModel = getModelForClass(User);
