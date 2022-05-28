import { User } from "../models/user";

export const newUser = async (name: string) => {
	const user = new User({ name: name });
	const response = await user.save();
	return response;
};
