import { User } from "../models/user";

export const updateUser = async (id: string, name: string) => {
	const update = await User.updateOne({ _id: id }, { name: name });
	const newUser = await User.findOne({ _id: id });
	return { update, newUser };
};
